---
locale: es
path: splitit
order: 2
title: Splitit
summary: Un proyecto de expense sharing en Kotlin Multiplatform enfocado en lógica de settlement de pagos, modelado de dominio compartido y un roadmap WIP pragmático.
status: WIP
problem: Diseñar lógica confiable de gastos compartidos y optimización de pagos antes de invertir en una capa visual de producto.
repositoryLabel: Repositorio público en GitHub disponible
stack:
  - Kotlin Multiplatform
  - Shared logic
  - Product modeling
highlights:
  - Enfoque en arquitectura multiplataforma y lógica de dominio reutilizable.
  - Explora workflows de expense sharing, optimización de settlements y trade-offs de producto.
  - Sirve como caso de estudio de cómo un producto puede empezar por corrección de dominio antes que por amplitud de UI.
constraints:
  - Compartir gastos se vuelve desordenado rápido cuando el modelo de dominio es débil, por lo que la corrección importa temprano.
  - El proyecto necesita demostrar que la lógica de negocio compartida justifica el costo adicional de modelado inicial.
  - Al ser un WIP, el alcance debe mantenerse disciplinado para que la arquitectura evolucione con decisiones reales de producto incluso sin una interfaz terminada.
architecture:
  - Kotlin Multiplatform se usa para centralizar comportamiento de dominio y mantener consistente el modelo de producto entre plataformas.
  - La lógica compartida se trata como un activo del producto, especialmente para balances, relaciones entre participantes, reglas de settlement y optimización de pagos.
  - La implementación prioriza un modelado claro de grupos, gastos y flujos de settlement antes de pulir features periféricas o capas visuales.
tradeoffs:
  - Invertir temprano en lógica compartida ralentiza el progreso visible de UI, pero reduce el riesgo de divergencia entre plataformas más adelante.
  - El roadmap prioriza flujos centrales de expense sharing y optimización sobre cobertura amplia de features para mantener coherencia en el modelo de producto.
  - Algunos detalles de implementación siguen siendo deliberadamente flexibles porque el proyecto se está moldeando como caso de estudio de aprendizaje y arquitectura, no solo como checklist de shipping.
statusNote: "Splitit sigue en progreso, pero el valor actual ya es claro: demuestra cómo las decisiones de arquitectura multiplataforma y modelado de dominio condicionan el producto antes de que el set de features esté completo."
nextStep: El próximo hito es volver más explícita la lógica de optimización de pagos con escenarios documentados, reglas más sólidas y una verificación automatizada más amplia.
nextStepsTitle: Próximos pasos
roadmap:
  - Ampliar el modelo de dominio documentado con ejemplos concretos de gastos compartidos, balances y escenarios de settlement.
  - Documentar las reglas de optimización de pagos y el razonamiento detrás del enfoque elegido.
  - Agregar casos de prueba representativos o tablas de escenarios que muestren cómo se comporta la lógica con distintas configuraciones de participantes.
  - Seguir refinando la arquitectura multiplataforma alrededor de las reglas de producto que son más difíciles de cambiar después.
---

Splitit está pensado como algo más que un ejercicio de clon. La parte interesante es el trabajo de modelado detrás de los gastos compartidos: quién pagó, quién debe, cómo evolucionan los balances y cómo se pueden simplificar las obligaciones de pago entre participantes.

Eso hace que Kotlin Multiplatform encaje bien en el proyecto. El caso a favor de lógica compartida se vuelve mucho más fuerte cuando la parte difícil del producto vive en reglas, optimización y transiciones de estado, y no en rendering específico de cada plataforma. El proyecto sigue en progreso, pero ya funciona como ejemplo útil de cómo la arquitectura puede sostener claridad de producto.

La fase actual prioriza la base. En lugar de maximizar cantidad de features, el énfasis está en hacer el modelo de expense sharing y settlement lo suficientemente confiable como para soportar futuras decisiones de UI, más escenarios y un roadmap más limpio. Como el alcance actual está centrado en lógica, este caso de estudio debería evaluarse por diseño de dominio, decisiones técnicas y cobertura de escenarios más que por screenshots o una demo pulida.
