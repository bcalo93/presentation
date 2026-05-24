---
locale: es
path: portfolio
order: 1
title: Portfolio
summary: Un portfolio rápido en Astro construido como un punto de contacto técnico, con contenido estructurado, navegación clara y espacio para crecer con el tiempo.
status: Activo
problem: Crear un portfolio que funcione como una introducción clara, una presentación técnica y un lugar para conectar con pares, sin convertirlo en un sitio personal sobreconstruido.
repositoryLabel: Este repositorio
stack:
  - Astro
  - TypeScript
  - Sass
  - SEO
highlights:
  - Diseñado como un punto de contacto enfocado, en lugar de una landing personal genérica.
  - Estructurado para presentar experiencia, proyectos y forma de pensar técnicamente con claridad.
  - Pensado para crecer con el tiempo, incluyendo contenido bilingüe futuro, sin sobreingenierizar la primera versión.
constraints:
  - El sitio tenía que mantenerse rápido y fácil de recorrer sin perder profundidad técnica.
  - El MVP tenía que lanzarse en inglés dejando la estructura lista para una versión posterior en español.
  - La mayor parte del contenido es estático, por lo que sumar JavaScript del lado del cliente aumentaría el costo sin mejorar la experiencia central.
architecture:
  - Astro impulsa el sitio como una aplicación estática content-first con navegación por secciones en la home.
  - Content Collections separa experiencia, proyectos y educación de la presentación para que las actualizaciones no requieran reescribir componentes.
  - El layout compartido y los componentes de sección mantienen consistente el sistema visual mientras permiten páginas de detalle por proyecto.
tradeoffs:
  - Se eligió una home single-page por velocidad y claridad, aunque eso limita cuánto detalle puede vivir above the fold.
  - Se evitaron deliberadamente islands de React en el MVP para preservar performance y reducir overhead de mantenimiento.
  - El modelo de contenido quedó listo para i18n sin construir un language switcher completo antes de que existiera contenido en español.
statusNote: El portfolio ya funciona como una capa sólida de presentación y sigue evolucionando como un artefacto técnico de más largo plazo.
nextStep: El siguiente paso es seguir mejorando la profundidad del contenido y los casos de estudio, manteniendo la claridad de la experiencia principal.
nextStepsTitle: Iteraciones futuras
roadmap:
  - Agregar contenido en español y routing localizado una vez que la arquitectura de información en inglés esté estable.
  - Incorporar writing o notas de ingeniería más profundas solo si fortalecen la credibilidad técnica sin frenar la navegación.
  - Seguir evolucionando los casos de estudio para que el portfolio muestre razonamiento y resultados en lugar de convertirse en una página estática de perfil.
---

Este portfolio fue construido como un punto claro de contacto y presentación, especialmente para gente de tecnología. La idea no era crear un sitio personal decorativo, sino algo simple, intencional y útil para mostrar cómo trabajo y qué cosas me importan desde lo técnico.

Astro fue una buena elección porque la mayor parte del sitio está orientada al contenido y no necesita complejidad innecesaria del lado del cliente. Eso hizo más fácil mantener la experiencia rápida, ordenada y lista para crecer sin sumar ruido.

La home se mantiene concisa, mientras que las páginas de proyecto abren espacio para más detalle sobre arquitectura, trade-offs técnicos y decisiones de implementación. Ese equilibrio me importa porque quiero que el portfolio se sienta claro a primera vista, pero que también valga la pena si alguien quiere mirar más en profundidad.
