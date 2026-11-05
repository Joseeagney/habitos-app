# Base de evidencia — Hábitos App

Documento vivo. Antes de cambiar cualquier función de salud de la app, se lee esto.
Se actualiza cada semana con el loop de investigación (ver "Registro de cambios" al final).

**Última revisión completa:** 5 de noviembre de 2026

## Cómo leer la calidad de la evidencia

| Grado | Qué significa | Ejemplo |
|---|---|---|
| **A** | Metaanálisis de ensayos o ensayos controlados aleatorizados | "Proteína + fuerza = más músculo" |
| **B** | Grandes cohortes (decenas o cientos de miles de personas) o metaanálisis de cohortes | "Más pasos = menos mortalidad" |
| **C** | Estudios chicos, cortos o solo de asociación | "Respiración 5 min mejora el ánimo" |
| **D** | Consenso de expertos o recomendación práctica sin estudios directos | "Último mate 8 h antes de dormir" |

Regla de la app: solo se agregan funciones con evidencia **A o B**, o **C** si es gratis, sin riesgo y tarda menos de 5 minutos.
Los grados B y C muestran **relación**, no prueban que una cosa cause la otra.

---

## 1. Sueño

### 1.1 Horario parejo (regularidad) — Grado B
- **Qué dice:** levantarse siempre a la misma hora predijo la mortalidad mejor que la cantidad de horas dormidas.
- **Meta en la app:** variación de la hora de levantarse de ±30 min o menos.
- **Cómo lo usa la app:** "Horario de levantarte" en Salud y en el Experimento; parte del cálculo de la Batería.
- **Fuente:** [Sleep regularity is a stronger predictor of mortality risk than sleep duration](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10782501/)

### 1.2 Dormir más horas — Grado A/C
- **Qué dice:** en jóvenes, extender el sueño mejoró la alerta, los reflejos y el ánimo.
- **Meta en la app:** 8 h (configurable de 7 a 9 h).
- **Fuente:** [The impact of extended sleep on daytime alertness, vigilance, and mood](https://pubmed.ncbi.nlm.nih.gov/15341888/)

### 1.3 Siesta corta — Grado C
- **Qué dice:** la siesta de 10 min fue la más eficaz para recuperar la alerta sin quedar pesado; la de 30 min deja "resaca" de sueño.
- **Meta en la app:** 10–20 min antes de las 16 h, solo los días de batería baja.
- **Fuente:** [Brooks & Lack 2006 (resumen)](https://sleeptower.pages.dev/sleep/napping-research)

### 1.4 Cafeína (mate y café) — Grado A
- **Qué dice:** la cafeína reduce ~45 min de sueño; con un café, conviene cortarla ~8,8 h antes de dormir.
- **Meta en la app:** "Último mate" = hora de dormir − 8 h.
- **Fuente:** [Metaanálisis cafeína y sueño 2023](https://www.ajmc.com/view/caffeine-and-sleep-review-suggests-consumption-guidelines)

### 1.5 Luz de día — Grado B
- **Qué dice:** más tiempo afuera con luz natural se asoció a despertarse más fácil, menos insomnio y mejor ánimo.
- **Cómo lo usa la app:** rutina "Arranque: agua y luz" y consejo de la mañana.
- **Fuente:** [Burns et al., UK Biobank 2021](https://www.ukbiobank.ac.uk/publications/time-spent-in-outdoor-light-is-associated-with-mood-sleep-and-circadian-rhythm-related-outcomes-a-cross-sectional-and-longitudinal-study-in-over-400000-uk-biobank-participants/)

### 1.6 Apnea del sueño (ronquidos + dolor de cabeza al despertar) — Grado A (como prueba de detección)
- **Qué dice:** el cuestionario STOP-Bang con 3 o más puntos detecta el 94% de las apneas moderadas a graves, pero da muchos falsos positivos (por eso es un filtro y no un diagnóstico).
- **Cómo lo usa la app:** Chequeo de apnea en Salud; aviso si hay 3 o más días con dolor de cabeza en la semana.
- **Fuentes:** [STOP-Bang (Nagappa 2015, resumen)](https://metricgate.com/docs/stop-bang-osa-screening/) · [Morning headache in habitual snorers](https://pubmed.ncbi.nlm.nih.gov/21602422/) · [Apnea en roncadores (Shao 2015)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4357371)

---

## 2. Movimiento

### 2.1 Pasos diarios — Grado B
- **Qué dice:** 15 cohortes, ~50.000 personas: 40–53% menos mortalidad frente a ~3.500 pasos/día. En menores de 60, el beneficio se estabiliza en 8.000–10.000.
- **Meta en la app:** 8.000 pasos/día.
- **Fuente:** [Paluch et al., Lancet Public Health 2022](https://www.eurekalert.org/news-releases/945267)

### 2.2 Fuerza (gimnasio) — Grado B
- **Qué dice:** 30–60 min/semana de fuerza: 10–20% menos mortalidad; combinada con aeróbico, 40% menos.
- **Meta en la app:** 3 sesiones por semana (gimnasio o pádel).
- **Fuente:** [Momma et al., BJSM 2022](https://www.news-medical.net/news/20220301/30-60-minutesweek-of-muscle-strengthening-activities-may-lower-mortality-risk.aspx)

### 2.3 Estado físico cardiovascular — Grado B
- **Qué dice:** en 122.000 personas, los de mejor estado físico tuvieron 80% menos mortalidad que los de peor estado; no hay techo.
- **Cómo lo usa la app:** pulso en reposo en el Test del mes (si baja con los meses, mejora el estado físico).
- **Fuente:** [Mandsager et al., Cleveland Clinic 2018](https://newsroom.clevelandclinic.org/2018/10/19/cleveland-clinic-research-shows-better-cardiorespiratory-fitness-correlates-to-a-longer-life/)

### 2.4 Bici para ir al trabajo — Grado B
- **Qué dice:** 264.000 personas: ir en bici al trabajo se asoció a 41% menos mortalidad, 46% menos enfermedad cardiovascular y 45% menos cáncer, frente a ir en auto o colectivo.
- **Cómo lo usa la app:** no se registra aparte (es diaria); explica por qué los pasos pueden parecer bajos.
- **Fuente:** [Celis-Morales et al., BMJ 2017](https://www.gla.ac.uk/news/headline_522765_en.html)

### 2.5 Pulseras y relojes — Grado A
- **Qué dice:** casi 400 estudios, ~164.000 personas: usar una pulsera de actividad sumó ~1.800 pasos/día (unos 40 min de caminata).
- **Fuente:** [Revisión 2022](https://www.news-medical.net/news/20220720/Wearable-activity-trackers-are-effective-in-increasing-physical-activity-and-improving-health.aspx)

---

## 3. Alimentación e hidratación

### 3.1 Ultraprocesados — Grado A
- **Qué dice:** en un ensayo controlado, la dieta ultraprocesada hizo comer ~500 kcal más por día y subir ~0,9 kg en 2 semanas.
- **Cómo lo usa la app:** todavía no se mide directo (pendiente: ver sección 7).
- **Fuente:** [Hall et al., NIH 2019](https://www.nih.gov/news-events/news-releases/nih-study-finds-heavily-processed-foods-cause-overeating-weight-gain)

### 3.2 Frutas y verduras — Grado B
- **Qué dice:** cada 200 g/día: ~11% menos riesgo, hasta 800 g/día.
- **Meta en la app:** 5 porciones/día (3 = mínimo).
- **Fuente:** [Aune et al., 2017](https://www.sciencedaily.com/releases/2017/02/170223114807.htm)

### 3.3 Proteína después de entrenar — Grado A
- **Qué dice:** con entrenamiento de fuerza suma músculo y fuerza, hasta ~1,6 g por kg de peso por día.
- **Cómo lo usa la app:** consejo después del gimnasio.
- **Fuente:** [Morton et al., BJSM 2018](https://bjsm.bmj.com/content/52/6/376.abstract)

### 3.4 Agua — Grado D (recomendación oficial)
- **Qué dice:** EFSA recomienda ~2,5 L/día en hombres; 70–80% sale de las bebidas.
- **Meta en la app:** 2 L de bebidas (el mate cuenta); 2,5–3 L con calor o ejercicio.
- **Fuente:** [EFSA (resumen)](https://www.caw.ac.uk/eandd/health-and-fitness-tip-of-the-week-water/)

---

## 4. Mente y vínculos

### 4.1 Respiración (suspiro cíclico) — Grado C
- **Qué dice:** 5 min/día durante 28 días mejoró el ánimo más que la meditación (estudio chico, 108 personas).
- **Cómo lo usa la app:** Respiración 5 min guiada (opcional, a la noche).
- **Fuente:** [Balban et al., Cell Reports Medicine 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9873947)

### 4.2 Ejercicio y salud mental — Grado A
- **Qué dice:** el ejercicio mejora la depresión y la ansiedad en 12 semanas o menos.
- **Fuente:** [Singh et al., BJSM 2023 (resumen)](https://www.sciencedaily.com/releases/2023/02/230223193417.htm)

### 4.3 Vínculos sociales — Grado B
- **Qué dice:** 148 estudios, 308.000 personas: 50% más probabilidad de sobrevivir con vínculos fuertes.
- **Cómo lo usa la app:** pregunta en el Repaso semanal.
- **Fuente:** [Holt-Lunstad et al., PLoS Medicine 2010](https://journals.plos.org/plosmedicine/article/info:doi/10.1371/journal.pmed.1000316)

---

## 5. Cambio de hábitos (cómo está diseñada la app)

| Principio | Evidencia | Dónde está en la app |
|---|---|---|
| Fijar metas + registrar | Grado A: lo que más aumenta la efectividad de una app | Metas de salud, registro diario |
| Un hábito tarda ~66 días en automatizarse; fallar un día no lo arruina | Grado B | Fuerza de hábitos, "Mínimo", días libres |
| "Después de X, hago Y" (intenciones de implementación) | Grado A | Rutinas en cadena |
| La carga manual es la causa n.º 1 de abandono (3–4% de retención a 30 días) | Datos de la industria | Registro de menos de 30 s, botón de agua, pegar pasos |

**Fuentes:** [Metarregresión de apps de actividad física](https://pmc.ncbi.nlm.nih.gov/articles/PMC6256104) · [66 días (UCL)](https://www.ucl.ac.uk/news/2009/aug/how-long-does-it-take-form-habit) · [Intenciones de implementación](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.565202/full) · [Retención de apps de salud](https://sahha.ai/blog/health-app-churn-retention/)

---

## 6. Lo mejor de otras apps (qué tomamos y qué no)

| App | Fortaleza | En la app |
|---|---|---|
| Oura / Whoop | Estado del día resumido | Batería (Alta/Media/Baja) |
| Whoop Journal | Relacionar conductas con resultados | Qué te funciona + Experimento de 14 días |
| Apple Fitness | 3 anillos simples | Descansar / Moverte / Avanzar |
| Gentler Streak | Descansar sin culpa | Mínimo y días libres |
| Rise | Deuda de sueño, cafeína, hora de dormir | Deuda de sueño, Último mate, A dormir |
| Loop | Fuerza del hábito | Fuerza 0–100 |
| Things / Notion | Diseño limpio | Estilo general |
| Noom | Psicología del cambio | **Pendiente:** micro-lecciones |

---

## 7. Herramientas con presupuesto mínimo (ordenadas por impacto por peso)

### Gratis (hacelo ya)
1. **Turno médico** (hospital público o centro de salud): la consulta por ronquidos y dolor de cabeza es lo de mayor impacto posible. Gratis en el sistema público.
2. **iPhone + app Salud**: pasos automáticos (activar Movimiento y forma física).
3. **Esta app + Atajos**: registro, recordatorios, pasos.
4. **Luz del día y caminar**: gratis y con evidencia B.
5. **Bici al trabajo**: ya lo hacés; mantenelo.
6. **Despertador fuera del celular**: ya lo tenés.

### Muy barato (menos de $15.000)
7. **Cinta métrica** para la cintura del test del mes.
8. **Botella de 1 L** (o una que ya tengas): con 2 botellas por día llegás a la meta de agua sin contar vasos.
9. **Frutas y verduras de estación** en verdulería o feria: suelen salir más baratas que los ultraprocesados.

### Solo si después de 30 días seguís usando la app
10. **Pulsera de actividad** (~$80.000–100.000): +1.800 pasos/día de promedio en los estudios, más sueño y pulso automáticos. Verificar que sincronice con Apple Salud.

### No vale la pena (por ahora)
- Suplementos "de moda", relojes o anillos caros, apps pagas de salud: la evidencia de beneficio extra sobre lo anterior es baja frente al costo.

---

## 8. Pendientes de investigar (para el loop semanal)
- Cena tardía (después de las canchas) y calidad de sueño.
- Cómo medir ultraprocesados en menos de 5 segundos por día.
- Siestas y su relación con el horario parejo en personas que trabajan de noche.
- Calor y sueño: temperatura del cuarto, ventilador.
- Micro-lecciones semanales: qué formato tiene evidencia de cambio de conducta.

---

## Registro de cambios
- **2026-11-05:** versión inicial con 22 temas, herramientas de bajo costo y pendientes.
