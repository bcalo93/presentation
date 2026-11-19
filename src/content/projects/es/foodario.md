---
locale: es
path: foodario
order: 3
title: Foodario
summary: 'Una app en Kotlin Multiplatform + Compose Multiplatform que responde la pregunta que aparece antes de comprar: "¿ya tengo esto en casa?". Inventario de heladera y despensa, lista de compras, escaneo de facturas con OCR y avisos de vencimiento — todo offline, sin cuentas ni backend.'
status: Completado
problem: Parado en el supermercado, con el teléfono en una mano y el carrito en la otra, saber qué queda en casa depende de la memoria o de notas sueltas. El resultado es comprar duplicados o dejar de comprar lo que hacía falta. Las apps disponibles pedían una cuenta y sincronización en la nube para algo tan local como una lista de la cocina, o estaban pensadas para almacenes, no para una heladera. Foodario nació de querer una respuesta honesta a "¿ya tengo esto en casa?" con la menor fricción posible.
repositoryLabel: Repositorio público en GitHub disponible
repositoryHref: https://github.com/bcalo93/foodario
stack:
  - Kotlin Multiplatform
  - Compose Multiplatform
  - SQLDelight
  - Koin
  - Clean Architecture
  - Sistema de diseño
highlights:
  - Un flujo de tres acciones —tengo, consumí, necesito comprar— que mantiene inventario y lista de compras conectados sin menús ni pasos intermedios.
  - "Escaneo de facturas con OCR on-device (ML Kit en Android, Vision en iOS) y una pantalla de revisión donde editar, destildar y fusionar líneas duplicadas antes de confirmar."
  - "Un emparejador de nombres de producto que normaliza y puntúa similitud, para que re-escanear la misma factura o repetir un alimento sume cantidades en vez de duplicar filas."
  - "Avisos locales de vencimiento —N días y hora configurables— orquestados desde lógica compartida, con WorkManager en Android y notificaciones por intervalo en iOS."
  - 'Un sistema de diseño "cuaderno de heladera" —tipografía manuscrita, paleta de papel, luz y modo oscuro verificados WCAG AA— pensado para leerse de un vistazo en el supermercado.'
constraints:
  - "La velocidad manda: agregar un alimento no podía llevar más que escribir un nombre y tocar un botón; cada paso extra en la UI era una decisión de diseño a discutir."
  - "Todo debía vivir en el dispositivo: sin cuentas, sin backend, sin sincronización, para que la app funcione con la señal del supermercado o sin ella."
  - "El producto tenía que sentirse como un cuaderno de cocina, no como un sistema de gestión de stock: si la interfaz intimidaba, no se usaba."
architecture:
  - "Arquitectura limpia por features (inventory, shoppinglist, scanning, alerts), cada una con capas data → domain → presentation dentro del módulo compartido."
  - "Dominio compartido con casos de uso de una sola operación (UseCase / ObserveUseCase) y repositorios por interfaz; los ViewModels exponen UiState inmutables con Kotlin Flow."
  - "Persistencia 100% local con SQLDelight: queries tipadas, migraciones y drivers nativos por plataforma, con la base de datos como única fuente de verdad."
  - "Escaneo de facturas detrás de una abstracción ReceiptTextRecognizer por plataforma (ML Kit / Vision) y un parser común que convierte líneas de texto en productos categorizables."
  - "Inyección de dependencias con Koin (módulos por feature, use cases nombrados, ViewModel DSL) y navegación type-safe con Compose Navigation compartida entre Android e iOS."
tradeoffs:
  - "OCR on-device en lugar de un servicio en la nube: privacidad y funcionamiento offline a costa de precisión variable según la factura, compensada con la pantalla de revisión editable."
  - "El emparejado difuso de nombres (normalización + similitud) evita filas duplicadas, pero implica aceptar falsos positivos; los badges de duplicado hacen el merge explícito y reversible en la revisión."
  - "Compose Multiplatform compartido en vez de SwiftUI nativo: una sola UI para ambas plataformas, renunciando a las convenciones nativas de iOS."
  - "Las notificaciones de vencimiento usan una estrategia reconcile —cancelar y reprogramar todo ante cada cambio— que es correcta por construcción, a costa de más trabajo de scheduler al guardar."
statusNote: "Foodario funciona como caso de estudio completo: inventario, lista de compras, escaneo de facturas y avisos de vencimiento conviven en una app offline que corre en Android e iOS, con tests sobre la lógica compartida y un pipeline de release que firma y publica el APK."
nextStep: Las próximas iteraciones se enfocan en distribución y en profundidad de producto alrededor de los datos que la app ya tiene.
nextStepsTitle: Iteraciones futuras
roadmap:
  - "Publicar en Google Play y App Store usando el pipeline de release actual como base."
  - "Guardar la foto de la factura junto a los productos escaneados para poder revisar la fuente de cada carga."
  - "Sugerir la compra de lo que se consume seguido, aprovechando el historial de altas y consumos."
  - "Widgets de pantalla de inicio con la lista de compras para consultarla sin abrir la app."
screenshots:
  - src: /images/projects/foodario/inventory.png
    alt: Inventario de Foodario agrupado por categorías con cantidades y chips de tipo de alimento
  - src: /images/projects/foodario/detail.png
    alt: Detalle de un alimento de Foodario con control de cantidad, congelado y fecha de vencimiento
  - src: /images/projects/foodario/shopping.png
    alt: Lista de compras de Foodario con checkboxes dibujados a mano y sección de tachados
---

Foodario nació de una pregunta que aparece siempre en el mismo momento: parado en el supermercado, con el teléfono en una mano, ¿ya tengo esto en casa? La respuesta dependía de la memoria o de notas sueltas en el celu, y el resultado era predecible: comprar dos veces lo mismo o llegar a casa sin lo que hacía falta. El proyecto empezó con la idea de que esa pregunta merece una respuesta inmediata, no una planilla ni una app de gestión de inventario.

Eso también definió la decisión de producto: una app offline-first, sin cuentas ni servidor. Para este caso de uso, la nube agregaba fricción y dependencia de señal en el lugar donde menos hay. Todo vive en el teléfono con SQLDelight, y el flujo se reduce a tres acciones —tengo, consumí, necesito comprar— que mantienen la heladera y la lista de compras conectadas solas.

Alrededor de ese núcleo hay dos piezas que elevan el proyecto. La primera es el escaneo de facturas: la cámara captura el ticket, un OCR nativo por plataforma extrae el texto (ML Kit en Android, Vision en iOS), un parser común lo convierte en productos y una pantalla de revisión deja editar, destildar y fusionar duplicados antes de confirmar — con un emparejador de nombres que hace que re-escanear la misma factura sume cantidades en vez de crear filas nuevas. La segunda es el sistema de diseño "cuaderno de heladera": tipografía manuscrita, paleta de papel y un modo oscuro pensado para la cocina a las once de la noche, todo verificado WCAG AA y diseñado para leerse de un vistazo con una mano.

El resultado es un caso de estudio de producto mobile completo: dominio compartido entre Android e iOS, persistencia local, OCR on-device, notificaciones de vencimiento programadas desde lógica compartida y una interfaz que prioriza la velocidad sobre la decoración. Foodario responde la pregunta del principio —¿ya tengo esto en casa?— en dos toques.
