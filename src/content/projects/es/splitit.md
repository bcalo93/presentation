---
locale: es
path: splitit
order: 2
title: Splitit
summary: Una app en Kotlin Multiplatform creada para dividir gastos compartidos de forma más simple, sin la fricción de pedirle a cada persona que se cree una cuenta para un uso puntual.
status: WIP
problem: Después de una juntada con amigos, dividir gastos terminó siendo un ejercicio incómodo en Excel porque usar Splitwise implicaba pedirle a cada uno que se creara una cuenta para una necesidad de una sola vez. Splitit nació de querer algo más simple, más claro y más fácil de usar en la vida real.
repositoryLabel: Repositorio público en GitHub disponible
repositoryHref: https://github.com/bcalo93/splitit
stack:
  - Kotlin Multiplatform
  - Lógica compartida
  - Modelado de producto
highlights:
  - "Nació de una necesidad personal real: dividir gastos en grupo de forma justa sin agregar fricción innecesaria."
  - La parte más importante del proyecto es la lógica detrás de balances, liquidaciones y distribución justa de gastos.
  - Fue pensado intencionalmente como una app nativa, evitando el overhead de desplegar y mantener un producto web para un caso de uso simple.
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
statusNote: "Splitit sigue evolucionando, pero su idea central ya es clara: dividir gastos compartidos de forma justa y exacta, sin convertir el proceso en otro dolor de cabeza."
nextStep: El siguiente paso es seguir fortaleciendo la lógica de gastos y liquidaciones para que la app pueda manejar escenarios reales de forma clara y confiable.
nextStepsTitle: Próximos pasos
roadmap:
  - Ampliar el modelo de dominio documentado con ejemplos concretos de gastos compartidos, balances y escenarios de settlement.
  - Documentar las reglas de optimización de pagos y el razonamiento detrás del enfoque elegido.
  - Agregar casos de prueba representativos o tablas de escenarios que muestren cómo se comporta la lógica con distintas configuraciones de participantes.
  - Seguir refinando la arquitectura multiplataforma alrededor de las reglas de producto que son más difíciles de cambiar después.
---

Splitit nació de una situación real: después de una juntada con amigos, dividir gastos terminó en una planilla confusa de Excel porque la alternativa disponible exigía que todos se crearan una cuenta para resolver algo que solo había que resolver una vez. El proyecto apareció a partir de querer una forma más simple de manejar ese momento sin sumar fricción.

También por eso el proyecto tenía más sentido como una app nativa que como un producto web. Para este caso de uso, desplegar y mantener una aplicación web me parecía sobreingeniería. Tener un APK funcionando e instalarlo manualmente en mi celular era suficiente y mantenía el proyecto alineado con el nivel de simplicidad que quería.

La parte que más disfruté fue la lógica. Ahí es donde el proyecto realmente toma valor: quién pagó, quién debe, cómo evolucionan los balances y cómo se pueden simplificar las liquidaciones de forma justa. La etapa actual sigue centrada en hacer esa lógica lo suficientemente confiable antes de expandir más el producto.
