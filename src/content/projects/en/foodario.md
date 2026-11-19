---
locale: en
path: foodario
order: 3
title: Foodario
summary: 'A Kotlin Multiplatform + Compose Multiplatform app that answers the question that comes up before you shop: "do I already have this at home?". Fridge and pantry inventory, shopping list, receipt scanning with OCR, and expiration alerts — all offline, no accounts or backend.'
status: Completed
problem: Standing at the supermarket, phone in one hand and cart in the other, knowing what is left at home depends on memory or scattered notes. The result is buying duplicates or forgetting what you actually needed. Available apps asked for an account and cloud sync for something as local as a kitchen list, or they were built for warehouses, not for a fridge. Foodario came from wanting an honest answer to "do I already have this at home?" with as little friction as possible.
repositoryLabel: Public GitHub repository available
repositoryHref: https://github.com/bcalo93/foodario
stack:
  - Kotlin Multiplatform
  - Compose Multiplatform
  - SQLDelight
  - Koin
  - Clean Architecture
  - Design system
highlights:
  - A three-action flow —have, used, need to buy— that keeps the inventory and the shopping list connected with no menus or intermediate steps.
  - "Receipt scanning with on-device OCR (ML Kit on Android, Vision on iOS) and a review screen to edit, uncheck, and merge duplicate lines before confirming."
  - "A product-name matcher that normalizes and scores similarity, so re-scanning the same receipt or repeating an item adds quantities instead of duplicating rows."
  - "Local expiration alerts —configurable days ahead and time of day— orchestrated from shared logic, with WorkManager on Android and interval notifications on iOS."
  - 'A "fridge notebook" design system —handwritten typography, paper palette, WCAG AA verified light and dark modes— built to be read at a glance in the supermarket.'
constraints:
  - "Speed comes first: adding an item could take no more than typing a name and tapping a button; every extra UI step was a design decision up for debate."
  - "Everything had to live on the device: no accounts, no backend, no sync, so the app works with supermarket signal or without it."
  - "The product had to feel like a kitchen notebook, not a stock-management system: if the interface felt intimidating, it would not be used."
architecture:
  - "Clean architecture per feature (inventory, shoppinglist, scanning, alerts), each with data → domain → presentation layers inside the shared module."
  - "Shared domain with single-operation use cases (UseCase / ObserveUseCase) and interface-based repositories; ViewModels expose immutable UiState with Kotlin Flow."
  - "100% local SQLDelight persistence: typed queries, migrations, and native per-platform drivers, with the database as the single source of truth."
  - "Receipt scanning behind a per-platform ReceiptTextRecognizer abstraction (ML Kit / Vision) and a shared parser that turns raw text lines into categorizable products."
  - "Dependency injection with Koin (per-feature modules, named use cases, ViewModel DSL) and type-safe Compose Navigation shared between Android and iOS."
tradeoffs:
  - "On-device OCR instead of a cloud service: privacy and offline operation at the cost of receipt-dependent accuracy, compensated by the editable review screen."
  - "Fuzzy name matching (normalization + similarity) avoids duplicate rows, but means accepting false positives; duplicate badges make the merge explicit and reversible during review."
  - "Shared Compose Multiplatform instead of native SwiftUI: one UI for both platforms, giving up iOS-native conventions."
  - "Expiration notifications use a reconcile strategy —cancel and reschedule everything on every change— that is correct by construction, at the cost of more scheduler work on save."
statusNote: "Foodario works as a complete case study: inventory, shopping list, receipt scanning, and expiration alerts coexist in an offline app running on Android and iOS, with tests over the shared logic and a release pipeline that signs and ships the APK."
nextStep: Future iterations focus on distribution and on product depth around the data the app already has.
nextStepsTitle: Future iterations
roadmap:
  - Publish on Google Play and the App Store using the current release pipeline as the base.
  - Store the receipt photo alongside the scanned products so the source of every load can be reviewed.
  - Suggest buying what gets consumed often, using the history of additions and usages.
  - Home-screen widgets with the shopping list so it can be checked without opening the app.
screenshots:
  - src: /images/projects/foodario/inventory.png
    alt: Foodario inventory grouped by categories with quantities and food-type chips
  - src: /images/projects/foodario/detail.png
    alt: Foodario item detail with quantity controls, frozen toggle, and expiration date
  - src: /images/projects/foodario/shopping.png
    alt: Foodario shopping list with hand-drawn checkboxes and a crossed-off section
---

Foodario started from a question that always shows up at the same moment: standing at the supermarket, phone in hand, do I already have this at home? The answer depended on memory or scattered notes on the phone, and the outcome was predictable: buying the same thing twice or getting home without what was needed. The project began with the idea that this question deserves an immediate answer — not a spreadsheet or an inventory-management app.

That also shaped the product decision: an offline-first app, with no accounts and no server. For this use case, the cloud added friction and a dependence on signal where there is least of it. Everything lives on the phone with SQLDelight, and the flow reduces to three actions —have, used, need to buy— that keep the fridge and the shopping list connected on their own.

Around that core sit two pieces that lift the project. The first is receipt scanning: the camera captures the ticket, platform-native OCR extracts the text (ML Kit on Android, Vision on iOS), a shared parser turns it into products, and a review screen lets you edit, uncheck, and merge duplicates before confirming — with a name matcher that makes re-scanning the same receipt add quantities instead of creating new rows. The second is the "fridge notebook" design system: handwritten typography, a paper palette, and a dark mode built for the kitchen at eleven at night, all WCAG AA verified and designed to be read at a glance with one hand.

The result is a complete mobile product case study: shared domain across Android and iOS, local persistence, on-device OCR, expiration notifications scheduled from shared logic, and an interface that puts speed ahead of decoration. Foodario answers the opening question —do I already have this at home?— in two taps.
