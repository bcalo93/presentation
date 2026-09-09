---
locale: es
path: splitit
order: 2
title: SplitIt
summary: Una app en Kotlin Multiplatform + Compose Multiplatform para dividir gastos compartidos, con UI y lógica compartidas, persistencia con SQLDelight y un motor de liquidaciones que convierte balances en la mínima cantidad de transferencias.
status: Completado
problem: Después de una juntada con amigos, dividir gastos terminó siendo un ejercicio incómodo en Excel porque la alternativa disponible exigía que todos se crearan una cuenta para una necesidad de una sola vez. SplitIt nació de querer algo más simple y justo, sin la fricción de un producto web para un caso de uso que solo necesita vivir en el teléfono.
repositoryLabel: Repositorio público en GitHub disponible
repositoryHref: https://github.com/bcalo93/splitit
stack:
  - Kotlin Multiplatform
  - Compose Multiplatform
  - SQLDelight
  - Koin
  - Clean Architecture
  - Sistema de diseño
highlights:
  - Una única base de código compartida para UI, dominio y persistencia entre Android e iOS, con puntos de entrada mínimos por plataforma.
  - Un motor de liquidaciones que calcula balances netos y minimiza la cantidad de transferencias resolviendo ciclos y cadenas transitivas.
  - Detección de liquidación desactualizada basada en un fingerprint determinista de participantes y gastos, no solo en timestamps.
  - Un sistema de diseño cálido y humano ("Cuentas claras") con color semántico, cifras tabulares y layouts centrados en avatares.
  - "Una pirámide de tests completa: tests de dominio puros más integración real con SQLite, con una abstracción UseCase que mantiene testeables los ViewModels."
constraints:
  - "La corrección importa temprano: un modelo de dominio débil convierte el reparto de gastos en un desorden, así que balances y liquidaciones debían ser confiables antes que la interfaz."
  - El proyecto tenía que demostrar que compartir UI y lógica de dominio entre plataformas justifica el costo inicial de modelado.
  - "El alcance debía mantenerse disciplinado: sin backend, sin cuentas, solo una app nativa que resuelve el problema y abre rápido."
architecture:
  - Arquitectura limpia por capas (UI → presentación → dominio → datos) con inyección de dependencias mediante Koin.
  - "Dominio primero: una capa de dominio pura con entidades, value objects como Money, IDs tipadas y casos de uso que exponen una sola operación cada uno."
  - "Persistencia con SQLDelight: queries tipadas explícitas, migraciones y drivers por plataforma, detrás de interfaces de repositorio."
  - "Navegación type-safe con Compose Navigation a lo largo de siete pantallas: grupos, detalle, formulario, participantes, gastos, liquidación y ajustes."
  - Componentes de UI reutilizables y tokens de diseño semánticos compartidos entre plataformas desde un único sistema de diseño.
tradeoffs:
  - Invertir temprano en modelado de dominio compartido ralentiza el progreso visible, pero elimina el riesgo de que Android e iOS diverjan después.
  - Se eligió SQLDelight sobre un ORM por su soporte KMP de primera clase y un esquema explícito, aceptando más SQL escrito a mano.
  - El reparto por monto reemplazó al reparto por peso para que "partes iguales" y "montos personalizados" sean exactos, a costa de guardar montos por participante.
  - "Las transferencias de liquidación se registran como gastos especiales para que los cambios futuros sigan siendo consistentes: una regla simple que cambia un poco de complejidad de UI por corrección."
statusNote: "SplitIt funciona como un caso de estudio completo y documentado: la lógica de liquidación es confiable, la app corre en ambas plataformas y el sistema de diseño refleja la intención cálida y social del producto."
nextStep: Las próximas iteraciones se enfocan en distribución y profundidad de producto más que en la lógica central.
nextStepsTitle: Iteraciones futuras
roadmap:
  - Publicar un build firmado y explorar distribución por stores para Android e iOS.
  - Agregar recibos o captura de fotos para gastos, y soporte de más monedas.
  - Considerar sincronización multi-dispositivo o grupos compartidos una vez probado el modelo local.
  - Mantener la documentación de arquitectura y la suite de tests al día a medida que evoluciona el producto.
screenshots:
  - src: /images/projects/splitit/groups.png
    alt: Lista de grupos de SplitIt con avatares y estado de liquidación
  - src: /images/projects/splitit/detail.png
    alt: Detalle de grupo de SplitIt con totales y acciones
  - src: /images/projects/splitit/expenses.png
    alt: Gastos de SplitIt agrupados por fecha
  - src: /images/projects/splitit/settlement.png
    alt: Liquidación de SplitIt con balances y transferencias
---

SplitIt nació de una situación real: después de una juntada con amigos, dividir gastos terminó en una planilla confusa porque la alternativa disponible exigía que todos se crearan una cuenta para resolver algo que solo había que resolver una vez. El proyecto apareció a partir de querer una forma más simple de manejar ese momento sin sumar fricción.

Eso también definió la decisión de producto: una app nativa en lugar de un producto web. Para este caso de uso, desplegar y mantener un backend me parecía sobreingeniería. Una app instalada en el teléfono era suficiente y mantenía el proyecto honesto en su alcance: sin cuentas, sin servidor, solo gastos compartidos claros.

El corazón de la app es la lógica de liquidación. Los balances se calculan a partir de quién pagó y cómo se repartió cada gasto, y luego se reducen al menor conjunto de transferencias necesarias para saldar. Alrededor de ese núcleo hay una arquitectura Kotlin Multiplatform compartida —UI, dominio y persistencia en una sola base de código para Android e iOS— y un sistema de diseño centrado en las personas: avatares, color semántico para el dinero que entra y sale, e importes legibles de un vistazo. El resultado es un caso de estudio completo de construir un producto nativo multiplataforma a partir de las reglas de dominio.
