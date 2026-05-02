---
locale: es
path: portfolio
order: 1
title: Portfolio
summary: Un portfolio rápido en Astro diseñado como una superficie de producto para procesos de hiring, contenido estructurado y futura expansión bilingüe.
status: Activo
problem: Presentar un perfil profesional a través de un sitio rápido y orientado al contenido que comunique profundidad técnica y credibilidad.
repositoryLabel: Este repositorio
stack:
  - Astro
  - TypeScript
  - Sass
  - SEO
highlights:
  - Arquitectura single-page optimizada para procesos de hiring.
  - Secciones responsive con jerarquía de información clara.
  - Preparado para contenido bilingüe futuro sin sobreconstruir el MVP.
constraints:
  - El sitio debía mantenerse rápido y fácil de escanear durante flujos de recruiters y hiring managers.
  - El MVP tenía que lanzarse en inglés dejando la estructura lista para una versión posterior en español.
  - La mayor parte del contenido es estático, por lo que sumar JavaScript client-side aumentaría el costo sin mejorar la experiencia central.
architecture:
  - Astro impulsa el sitio como una aplicación estática content-first con navegación por secciones en la home.
  - Content Collections separa experiencia, proyectos y educación de la presentación para que las actualizaciones no requieran reescribir componentes.
  - El layout compartido y los componentes de sección mantienen consistente el sistema visual mientras permiten páginas de detalle por proyecto.
tradeoffs:
  - Se eligió una home single-page por velocidad y claridad, aunque eso limita cuánto detalle puede vivir above the fold.
  - Se evitaron deliberadamente islands de React en el MVP para preservar performance y reducir overhead de mantenimiento.
  - El modelo de contenido quedó listo para i18n sin construir un language switcher completo antes de que existiera contenido en español.
statusNote: El portfolio ya funciona como una home profesional y ahora se expande hacia casos de estudio para que el trabajo muestre razonamiento, restricciones y decisiones técnicas.
nextStep: La iteración más probable es profundizar el portfolio como artefacto profesional de largo plazo sin agregar ruido al flujo de hiring.
nextStepsTitle: Iteraciones futuras
roadmap:
  - Agregar contenido en español y routing localizado una vez que la arquitectura de información en inglés esté estable.
  - Incorporar writing o notas de ingeniería más profundas solo si fortalecen la credibilidad técnica sin frenar la navegación.
  - Seguir evolucionando los casos de estudio para que el portfolio muestre razonamiento y resultados en lugar de convertirse en una página estática de perfil.
---

Este portfolio está tratado deliberadamente como un producto y no solo como una landing personal. El objetivo es ayudar a un recruiter a calificar el perfil rápido, sin perder suficiente contexto para que una evaluación técnica pueda inspeccionar criterio de ingeniería.

La fase 1 se enfocó en convertir el sitio en un MVP profesional creíble. La fase 2 lo movió hacia una arquitectura de contenido que pudiera escalar con más experiencia, más casos de estudio y una versión bilingüe futura. Esta fase agrega detalle de proyectos para que el portfolio mismo demuestre cómo se balancearon objetivos de producto, modelado de contenido y performance.

La decisión central de diseño fue mantener la home concisa y escaneable, y usar páginas dedicadas tipo case study para la profundidad técnica. Eso preserva el flujo de hiring en `/` y crea espacio para arquitectura, trade-offs y roadmap donde realmente corresponde.
