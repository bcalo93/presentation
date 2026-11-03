# Trazo: documento de diseño y plan de migración

## Estado y propósito

**Estado:** propuesta lista para implementación.

Este documento es la fuente de verdad para migrar el portfolio al design system **Trazo**. Está dirigido al agente o desarrollador que ejecute el rediseño y define la dirección visual, los fundamentos, los componentes, la accesibilidad, las fases de migración y los criterios de aceptación.

La migración debe conservar Astro, Sass, las rutas, las colecciones, el contenido bilingüe y el funcionamiento estático actuales. No requiere React, frameworks de UI ni librerías de animación.

## 1. Dirección de diseño: Trazo

**Concepto:** ingeniería hecha visible.

Trazo es un sistema visual editorial y técnico inspirado en planos, documentación de arquitectura y procesos de decisión. La interfaz debe comunicar que Brahian no solamente domina tecnologías, sino que:

- diseña sistemas;
- lidera decisiones técnicas;
- sigue cerca de la implementación;
- valora la calidad y los trade-offs;
- adopta IA con criterio práctico.

La identidad debe alejarse del portfolio tecnológico genérico basado en tarjetas azules, pills y gradientes. El elemento memorable será una **línea de decisión**: un recorrido vertical con nodos e índices que conecta experiencia, arquitectura y casos de estudio.

### Personalidad

- **Rigurosa**, pero no fría.
- **Técnica**, sin recurrir a estética de terminal o “hacker”.
- **Editorial**, con jerarquía tipográfica y espacio para leer.
- **Cálida**, mediante fondos marfil y un acento cobre que dialoga con la fotografía actual.
- **Precisa**, con líneas, coordenadas, numeración y metadatos.

### Principios

1. **Las decisiones tienen más protagonismo que la decoración.**
2. **Los proyectos demuestran; las habilidades resumen.**
3. **La home permite escanear; los casos de estudio permiten profundizar.**
4. **Dark mode y light mode son dos composiciones deliberadas, no una inversión automática.**
5. **El diseño no necesita React, animaciones de scroll ni JavaScript adicional para funcionar.**

## 2. Diagnóstico del diseño actual

### Elementos que deben conservarse

- Contenido estructurado y completamente bilingüe.
- Casos de estudio con problema, restricciones, arquitectura y trade-offs.
- Fotografía personal, que aporta cercanía.
- Astro estático, colecciones y separación entre contenido y presentación.
- Preferencia de tema persistente y soporte inicial para `prefers-color-scheme`.
- Navegación por anclas y rutas localizadas.

### Problemas que debe resolver la migración

- Inter, azul y teal producen una identidad cercana a una plantilla tecnológica genérica.
- El uso repetido de `.card`, `.pill-list` y `.chip` hace que proyectos, experiencia, educación y habilidades tengan la misma jerarquía.
- Los proyectos más valiosos no destacan suficientemente sobre el resto del contenido.
- Los casos de estudio presentan cada bloque como otra tarjeta, diluyendo su estructura narrativa.
- Los tokens cubren principalmente color, espacio y radios; faltan decisiones sistemáticas de tipografía, movimiento y elevación.
- Existen colores hardcodeados en el hero, fuera de la paleta.
- Los tags estáticos tienen estilos hover aunque no sean interactivos.
- La navegación móvil se limita a envolver elementos, sin una composición específica.
- Faltan skip link, estado accesible del selector de tema y una estrategia uniforme para foco bajo el header sticky.

## 3. Arquitectura de la experiencia

### Orden de la home

1. **Hero**
2. **Resumen profesional**
3. **Proyectos**
4. **Experiencia**
5. **Habilidades**
6. **Educación**
7. **Contacto**

Los proyectos deben aparecer antes de la experiencia porque son la evidencia más concreta del razonamiento técnico. El orden de navegación en los archivos `home.md` debe reflejar ese cambio. No será necesario modificar los esquemas de contenido.

### Hero

Composición asimétrica de 7/5 columnas:

- Rol como metadato técnico.
- Nombre como elemento tipográfico dominante.
- Descripción actual, sin reescribir su mensaje.
- CTA principal a contacto y enlace secundario a proyectos.
- Fotografía a la derecha, sin apariencia de tarjeta flotante.
- Marco geométrico, pequeñas marcas de registro y una cuadrícula localizada detrás del retrato.

La fotografía debe conservar su proporción 4:5. El fondo cálido de la imagen se integra con el acento cobre del sistema.

### Resumen profesional

Los siete highlights se presentan como una **ficha de especificaciones**, en dos columnas y con índices discretos. Se eliminan las pills.

No se deben extraer cifras mediante parsing ni modificar el contenido para fabricar métricas nuevas.

### Proyectos

Dos composiciones editoriales de gran formato, una por proyecto:

- Número de proyecto.
- Estado.
- Título y resumen.
- Stack como lista técnica compacta.
- Tres highlights.
- Enlace dominante al caso de estudio y enlace secundario al repositorio.
- Captura de SplitIt cuando exista; composición tipográfica de fallback para Portfolio.

No se debe introducir contenido especial hardcodeado para SplitIt. El componente utilizará el primer screenshot disponible y un fallback para proyectos sin imágenes.

### Experiencia

Una línea temporal vertical real:

- Periodo y empresa como metadatos.
- Rol y resumen con mayor jerarquía.
- Logros como lista legible.
- Stack al final, visualmente subordinado.

La línea de decisión se convierte aquí en el principal recurso gráfico.

### Habilidades

Una matriz de capacidades, no una colección de siete tarjetas:

- Nombre del grupo a la izquierda.
- Elementos a la derecha como listas inline.
- Separación mediante reglas horizontales.
- Sin barras de dominio, porcentajes ni puntuaciones no sustentadas por el contenido.

### Educación y contacto

- Educación se reduce a un bloque compacto y tipográfico.
- Contacto se convierte en el cierre visual de la página: gran titular, descripción, CTA de email y enlaces directos.
- Footer mínimo, sin competir con el CTA final.

## 4. Casos de estudio

Cada página debe parecer un **documento de arquitectura bien editado**, no una sucesión de tarjetas.

### Estructura

1. Enlace de regreso.
2. Header con título, resumen y metadatos.
3. Navegación local por secciones en desktop.
4. Problema como columna editorial de aproximadamente `68ch`.
5. Restricciones, arquitectura y trade-offs como listas numeradas conectadas por la línea de decisión.
6. Galería de capturas en retícula 2×2.
7. Estado y próximos pasos como paneles complementarios.
8. Enlaces finales.

Las secciones deben conservar sus headings semánticos y recibir IDs estables para navegación local. No se debe añadir lightbox ni comportamiento de scroll dependiente de JavaScript.

## 5. Fundamentos del design system

### 5.1 Color

| Token semántico          | Light     | Dark      |
| ------------------------ | --------- | --------- |
| `--color-canvas`         | `#F4F1EA` | `#0E1419` |
| `--color-surface`        | `#FBF9F4` | `#151D24` |
| `--color-surface-subtle` | `#E8E3D8` | `#1D2831` |
| `--color-text`           | `#18232D` | `#F3F0E8` |
| `--color-text-muted`     | `#56616B` | `#AAB6C0` |
| `--color-border`         | `#C8C2B6` | `#33424E` |
| `--color-border-strong`  | `#8B857A` | `#60717F` |
| `--color-accent`         | `#9C3B22` | `#FFA07A` |
| `--color-accent-hover`   | `#7C2C17` | `#FFB99D` |
| `--color-on-accent`      | `#FFFFFF` | `#28140D` |

El header debe derivar su fondo translúcido de `--color-canvas`; no requiere una segunda paleta propia.

#### Contraste de las combinaciones principales

| Combinación                     | Ratio   |
| ------------------------------- | ------- |
| Light: texto/canvas             | 14.13:1 |
| Light: texto secundario/canvas  | 5.61:1  |
| Light: acento/canvas            | 6.08:1  |
| Light: texto sobre botón acento | 6.86:1  |
| Dark: texto/canvas              | 16.28:1 |
| Dark: texto secundario/canvas   | 8.97:1  |
| Dark: acento/canvas             | 9.32:1  |
| Dark: texto sobre botón acento  | 8.83:1  |

Todos superan WCAG AA para texto normal. El foco utiliza `--color-accent` con outline y offset, sin depender solamente de cambios de fondo.

### 5.2 Tipografía

- **Display y headings:** Bricolage Grotesque, pesos 600–700.
- **Texto e interfaz:** IBM Plex Sans, pesos 400–600.
- **Metadatos e índices:** `ui-monospace`, sin descargar una tercera familia.

Las fuentes se autoalojan en WOFF2, con subconjunto latin, `font-display: swap` y sus licencias correspondientes.

#### Escala principal

| Uso              | Valor                       |
| ---------------- | --------------------------- |
| Metadata         | `0.75rem`                   |
| Texto secundario | `0.875rem`                  |
| Body             | `1rem`                      |
| Lede             | `1.125–1.25rem`             |
| H3               | `1.375rem`                  |
| H2               | `clamp(2rem, 4vw, 3.25rem)` |
| H1 de proyecto   | `clamp(2.75rem, 6vw, 5rem)` |
| Nombre en hero   | `clamp(3.5rem, 8vw, 7rem)`  |

Body con interlineado `1.65`; headings entre `1.02` y `1.12`; tracking negativo únicamente en display.

### 5.3 Espacio y composición

- Escala base de 4 px: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- Contenedor máximo: `76rem`.
- Columna de lectura: `68ch`.
- Gutter fluido: `clamp(1rem, 3vw, 2rem)`.
- Separación de secciones: `clamp(4.5rem, 9vw, 8rem)`.
- Desktop: retícula de 12 columnas.
- Tablet: 6 columnas.
- Mobile: 4 columnas.
- Breakpoints: `40rem`, `48rem` y `64rem`.

### 5.4 Forma y elevación

- Radios: `4px`, `8px`, `16px` y `pill`.
- Botones: radio pequeño.
- Fotografía y screenshots: radio medio/grande.
- Tags de stack: rectangulares, no pills.
- Status: pill con texto e indicador, no solamente color.
- Jerarquía mediante espacio, bordes y contraste de superficie.
- Sin glassmorphism, gradientes decorativos ni sombras en cada bloque.

### 5.5 Componentes básicos

#### Button

- Primario: fondo acento y `--color-on-accent`.
- Secundario: transparente con borde fuerte.
- Text link: para acciones terciarias.
- Altura mínima de 44 px.
- Sin transformaciones de escala.

#### TagList

- Exclusivamente informativo.
- Sin hover ni apariencia de botón.
- Reutilizado en proyectos, experiencia y casos de estudio.

#### SectionHeading

- Eyebrow, título y descripción opcional.
- Índice de sección como elemento decorativo.
- Componente Astro compartido para eliminar markup repetido.

#### Panel

- Reservado para metadatos, capturas y estados que realmente necesitan agrupación visual.
- No será el contenedor predeterminado de toda sección.

## 6. Temas, movimiento y accesibilidad

### Dark y light mode

- Mantener `data-theme` y la clave `localStorage` existente: `theme`.
- Conservar la inicialización inline para evitar FOUC.
- Actualizar `color-scheme` y `meta[name="theme-color"]`.
- Reflejar el estado del botón mediante `aria-pressed`.
- Mantener iconos decorativos con `aria-hidden="true"`.
- No animar colores durante la carga inicial.

### Movimiento

- Entrada breve y escalonada del hero.
- Aparición de la línea de decisión mediante CSS.
- Desplazamiento máximo de 4 px en flechas o indicadores de enlace.
- Duraciones: `120ms`, `200ms` y `480ms`.
- Sin parallax, scroll-jacking, cursor personalizado ni animación permanente.
- `prefers-reduced-motion: reduce` elimina reveals, transiciones no esenciales y smooth scroll.

### Accesibilidad

Objetivo: **WCAG 2.2 AA**.

- Skip link a `main`.
- `scroll-margin-top` para anclas y foco bajo el header.
- Navegación completa por teclado.
- Focus visible consistente.
- Orden DOM igual al orden visual.
- Objetivos interactivos preferentemente de 44×44 px.
- Zoom al 200% sin navegación horizontal de contenido.
- Capturas con sus alt text localizados actuales.
- Prueba de español e inglés para evitar truncamientos.

## 7. Restricciones de implementación

El agente ejecutor debe respetar las siguientes restricciones:

1. No cambiar las rutas ni la estrategia de internacionalización.
2. No modificar `src/content.config.ts`: la migración no necesita cambios de esquema.
3. No reescribir el contenido editorial. Los únicos cambios permitidos en `home.md` son los necesarios para ordenar la navegación según la nueva home.
4. No añadir React, un framework UI, una librería de animación ni JavaScript de cliente para tareas que CSS y HTML puedan resolver.
5. Mantener el sitio estático y el uso actual de Astro y Sass.
6. Usar tokens semánticos; no introducir colores hexadecimales en componentes.
7. Hacer cambios acotados y seguir las convenciones existentes del proyecto.
8. Ejecutar las validaciones indicadas después de cada fase.
9. No publicar una combinación incompleta de sistemas visuales: la migración puede avanzar por fases, pero home y casos de estudio deben compartir el sistema completo antes del release.

## 8. Plan de migración

La migración debe realizarse en una rama visual, con entregas pequeñas y verificables, pero publicarse únicamente cuando home y casos de estudio compartan el sistema completo.

### Fase 0 — Documentación y baseline

**Alcance**

- Conservar este documento como referencia de implementación.
- Capturar la versión actual en mobile/desktop y ambos temas.
- Ejecutar `pnpm quality`.
- Registrar las seis rutas localizadas como matriz de validación.

**Resultado:** diseño aprobado y baseline conocido.

### Fase 1 — Foundations

**Archivos principales**

- `src/assets/styles/_tokens.scss`
- `src/assets/styles/palette.scss`
- `src/assets/styles/_mixins.scss`
- `src/assets/styles/_patterns.scss`
- `src/assets/styles/commons.scss`
- `src/assets/styles/reset.scss`
- Nuevo `src/assets/styles/fonts.scss`
- Nuevos assets bajo `public/fonts/`

**Trabajo**

1. Incorporar fuentes y escala tipográfica.
2. Sustituir la paleta por tokens semánticos.
3. Mantener temporalmente aliases de los nombres antiguos para evitar una migración big-bang.
4. Eliminar gradientes y colores hardcodeados del hero durante su migración.
5. Crear estilos globales de foco, selección, skip link y reduced motion.
6. Añadir `src/components/SectionHeading.astro` y `src/components/TagList.astro`.

**Validación:** `pnpm quality`, contraste y ausencia de FOUC.

### Fase 2 — Shell y navegación

**Archivos**

- `src/layouts/Layout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`

**Trabajo**

- Nuevo header compacto y grid global.
- Navegación móvil en dos filas con scroll horizontal accesible, sin menú JavaScript.
- Skip link.
- Theme toggle accesible.
- `theme-color` por modo.
- Offsets para anchors y foco.
- Footer simplificado.

**Validación:** teclado, persistencia del tema y cambio de idioma desde home y proyectos.

### Fase 3 — Home

**Archivos**

- `src/components/Home.astro`
- Todos los componentes de `src/components/sections/`
- `src/components/SocialLinks.astro`
- `src/content/home/en/home.md`
- `src/content/home/es/home.md`

**Orden de implementación**

1. Hero.
2. Snapshot.
3. Projects.
4. Experience.
5. Skills.
6. Education y Contact.

Cada sección debe abandonar el patrón genérico de tarjetas y adoptar su composición específica. No se deben alterar textos, datos ni interfaces de las colecciones. En los archivos `home.md` solo se reordenan los elementos de navegación para reflejar la home.

**Validación:** 320, 375, 768, 1024 y 1440 px; ambos idiomas y temas.

### Fase 4 — Casos de estudio

**Archivo principal**

- `src/components/ProjectCaseStudy.astro`

**Trabajo**

- Header editorial.
- Metadatos semánticos.
- Navegación local.
- Listas de decisiones.
- Nueva galería.
- Paneles de estado y próximos pasos.
- Eliminación del uso repetido de `.card`.

**Validación:** las cuatro rutas de proyecto, contenido largo en español, capturas, anchors y cambio de idioma.

### Fase 5 — Limpieza y release

1. Eliminar aliases Sass que ya no tengan consumidores.
2. Eliminar `secondary`, `header-bg` y tokens obsoletos.
3. Confirmar que ningún componente contiene hexadecimales propios.
4. Retirar `SummaryCard.astro` e `IconLink.astro`, actualmente sin imports, como limpieza separada del rediseño.
5. Actualizar `docs/quality-checklist.md` con la matriz de temas, idiomas y viewports.
6. Ejecutar revisión visual completa antes de publicar.

No se debe añadir un feature flag permanente. El rollback se realiza desde la rama o preview, sin mantener dos sistemas visuales en producción.

## 9. Matriz de validación

### Rutas

- `/`
- `/es`
- `/projects/portfolio`
- `/projects/splitit`
- `/es/proyectos/portfolio`
- `/es/proyectos/splitit`

### Viewports

- 320 px
- 375 px
- 768 px
- 1024 px
- 1440 px

### Variantes obligatorias

- Light mode.
- Dark mode.
- Español.
- Inglés.
- Reduced motion.
- Zoom al 200%.
- Navegación por teclado.

### Comprobaciones funcionales

- Cambio de tema y persistencia después de recargar.
- Ausencia de FOUC al cargar con cualquier tema.
- Cambio de idioma desde home y desde proyectos.
- Navegación por anchors sin contenido tapado por el header.
- Skip link operativo.
- Enlaces de repositorio y contacto.
- Capturas y textos alternativos.
- Ausencia de overflow horizontal del contenido.

## 10. Criterios de aceptación

- [ ] Home y casos de estudio comparten tipografía, tokens, controles y lenguaje visual.
- [ ] Proyectos aparecen antes que experiencia en ambos idiomas.
- [ ] Light y dark mode mantienen la misma identidad y contraste AA.
- [ ] No quedan colores hardcodeados en componentes.
- [ ] Los tags estáticos ya no parecen interactivos.
- [ ] No hay regresiones en rutas, anchors, hreflang, canonicals ni sitemap.
- [ ] La preferencia de tema persiste sin flash inicial.
- [ ] Teclado, foco, skip link, reduced motion y zoom al 200% funcionan correctamente.
- [ ] No se añaden React, frameworks UI ni dependencias de animación.
- [ ] `pnpm quality` pasa completamente.
- [ ] Lighthouse en producción tiene como objetivo al menos 95 en Performance, Accessibility, Best Practices y SEO.

## 11. Resultado esperado

El portfolio debe presentar a Brahian como un ingeniero y líder técnico que razona sobre sistemas y toma decisiones pragmáticas. La home debe comunicar seniority y evidencia rápidamente; los casos de estudio deben premiar la lectura profunda. Trazo debe lograr esa diferenciación mediante tipografía, composición y jerarquía, sin sacrificar rendimiento, accesibilidad ni la simplicidad arquitectónica existente.
