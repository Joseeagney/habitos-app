// Hábitos App: funciona sin internet. Cambiá VERSION cuando actualices la app.
const VERSION = 'habitos-app-v62';
const AV_CACHE = 'habitos-avisos'; // horarios de los avisos (agua y hora de dormir): no se borra al actualizar
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== AV_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Página: primero internet (para recibir actualizaciones). Solo se guarda una respuesta correcta;
  // si el servidor responde con error o no hay internet, se abre la copia guardada.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => {
      if (r.ok) { const cp = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', cp)); return r; }
      return caches.match('./index.html').then(hit => hit || r);
    }).catch(() => caches.match('./index.html')));
    return;
  }
  // Fuentes y archivos: la copia guardada primero; de lo nuevo solo se guardan respuestas correctas.
  if (url.origin === location.origin || url.host.includes('fonts.g')) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || (r.type === 'opaque' && url.origin !== location.origin)) { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); }
      return r;
    })));
  }
});

/* ---------- avisos de agua ----------
   Llegan por web push desde ntfy.sh. Siempre hay como mucho un aviso programado:
   cuando llega uno, acá se programa el siguiente. Si ya cumpliste la meta (dato que guarda la app
   en este celular), el siguiente queda para mañana. */
const AR = -3 * 3600;
const avDay = ts => new Date((ts + AR) * 1000).toISOString().slice(0, 10);
const avTs = (day, hm) => { const [y, m, d] = day.split('-').map(Number), [h, mi] = hm.split(':').map(Number); return Date.UTC(y, m - 1, d, h, mi) / 1000 - AR; };
function avNext(times, now, metDay) { const T = [...times].sort(); for (let k = 0; k < 3; k++) { const day = avDay(now + k * 86400); if (k === 0 && metDay === day) continue; for (const t of T) { const ts = avTs(day, t); if (ts > now + 60) return { at: ts, hm: t, day }; } } return null; }
async function avGet() { try { const c = await caches.open(AV_CACHE), r = await c.match('./avisos-cfg'); return r ? await r.json() : {}; } catch (e) { return {}; } }
async function avPut(o) { const c = await caches.open(AV_CACHE); await c.put('./avisos-cfg', new Response(JSON.stringify(o), { headers: { 'Content-Type': 'application/json' } })); }
const NOTI = { icon: 'icon-192.png', badge: 'icon-192.png' };
self.addEventListener('push', e => {
  e.waitUntil((async () => {
    let p = {}; try { p = e.data ? e.data.json() : {}; } catch (_) {}
    if (p.event === 'subscription_expiring')
      return self.registration.showNotification('Avisos', { ...NOTI, body: 'Abrí la app para que los avisos sigan llegando.', tag: 'agua-exp', data: { kind: 'info' } });
    const m = p.message || {}, tags = m.tags || [];
    // hora de dormir: se muestra y se programa el de mañana (si este era el pendiente)
    if (tags.includes('noche')) {
      const cfg = await avGet(), now = Math.floor(Date.now() / 1000), b = cfg.bed || {};
      const shown = self.registration.showNotification('Cierre del día', { ...NOTI, body: m.message || 'Celular afuera y a preparar la cama.', tag: 'noche', data: { kind: 'info' } });
      if (b.on && b.hm && cfg.topic && (!b.nextAt || b.nextAt <= now + 60)) {
        const n = avNext([b.hm], now, '');
        if (n) { try { const r = await fetch('https://ntfy.sh/' + cfg.topic + '?title=' + encodeURIComponent('Cierre del día'), { method: 'POST', headers: { 'X-At': String(n.at), 'X-Tags': 'noche' }, body: 'Celular afuera y a preparar la cama.' }); if (r.ok) { const cur = await avGet(); cur.bed = Object.assign({}, cur.bed || {}); cur.bed.nextAt = Math.max(cur.bed.nextAt || 0, n.at); await avPut(cur); } } catch (_) {} }
      }
      return shown;
    }
    if (!tags.includes('agua'))
      return self.registration.showNotification(m.title || 'Hábitos', { ...NOTI, body: m.message || '', tag: tags.includes('prueba') ? 'prueba' : 'hab', data: { kind: 'info' } });
    const cfg = await avGet(), now = Math.floor(Date.now() / 1000), met = cfg.metDay === avDay(now);
    const shown = self.registration.showNotification(met ? 'Meta de agua cumplida' : (m.title || 'Hora del agua'),
      { ...NOTI, body: met ? 'Ya llegaste a tu meta de hoy. Mañana seguimos.' : (m.message || 'Tocá para sumar un vaso (250 ml).'), tag: 'agua', renotify: true, data: { kind: met ? 'info' : 'agua' } });
    // programar el siguiente solo si este era el aviso pendiente (así nunca quedan dos cadenas)
    if (cfg.on && cfg.topic && (!cfg.nextAt || cfg.nextAt <= now + 60)) {
      const n = avNext(cfg.times || [], now, cfg.metDay);
      if (n) { try { const r = await fetch('https://ntfy.sh/' + cfg.topic, { method: 'POST', headers: { 'X-At': String(n.at), 'X-Title': 'Hora del agua', 'X-Tags': 'agua' }, body: 'Tocá para sumar un vaso (250 ml).' }); if (r.ok) { const cur = await avGet(); cur.nextAt = Math.max(cur.nextAt || 0, n.at); await avPut(cur); } } catch (_) {} }
    }
    return shown;
  })());
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const kind = (e.notification.data || {}).kind || 'info';
  e.waitUntil((async () => {
    if (kind === 'agua') { const c = await caches.open(AV_CACHE); await c.put('./agua-click', new Response(JSON.stringify({ ts: Date.now(), kind }))); }
    const L = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (L.length) { try { await L[0].focus(); } catch (_) {} L[0].postMessage({ t: 'agua-click' }); return; }
    return self.clients.openWindow('./');
  })());
});
