---
locale: en
path: splitit
order: 2
title: SplitIt
summary: A Kotlin Multiplatform + Compose Multiplatform app for splitting shared expenses, with shared UI and domain logic, SQLDelight persistence, and a settlement engine that turns balances into minimal transfers.
status: Completed
problem: After a get-together with friends, splitting expenses became an awkward Excel exercise because the available alternative required everyone to create an account for a one-time need. SplitIt came from wanting something simpler and fairer, without the friction of a web product for a use case that only needs to live on a phone.
repositoryLabel: Public GitHub repository available
repositoryHref: https://github.com/bcalo93/splitit
stack:
  - Kotlin Multiplatform
  - Compose Multiplatform
  - SQLDelight
  - Koin
  - Clean Architecture
  - Design system
highlights:
  - One shared codebase for UI, domain, and persistence across Android and iOS, with minimal platform-specific entry points.
  - A settlement engine that computes net balances and minimizes the number of transfers by resolving cycles and transitive chains.
  - Stale-settlement detection built on a deterministic fingerprint of participants and expenses, not just timestamps.
  - A warm, human design system ("Cuentas claras") using semantic color, tabular numerals, and avatar-first layouts.
  - "A full test pyramid: pure domain tests plus real SQLite integration tests, with a UseCase abstraction that keeps ViewModels testable."
constraints:
  - "Correctness matters early: a weak domain model turns expense sharing into a mess, so balances and settlements had to be dependable before the interface."
  - The project had to prove that sharing UI and domain logic across platforms is worth the upfront modeling cost.
  - "Scope had to stay disciplined: no backend, no accounts, just a native app that solves the problem and opens fast."
architecture:
  - A layered, clean architecture (UI → presentation → domain → data) with dependency injection through Koin.
  - "Domain first: a pure domain layer with entities, value objects like Money, typed IDs, and use cases that expose one operation each."
  - SQLDelight persistence with explicit typed queries, migrations, and per-platform drivers, behind repository interfaces.
  - "Type-safe Compose Navigation across seven screens: groups, group detail, group form, participants, expenses, settlement, and settings."
  - Reusable UI components and semantic design tokens shared across platforms from a single design system.
tradeoffs:
  - Investing in shared domain modeling slows early visible progress but removes the risk of Android and iOS diverging later.
  - SQLDelight was chosen over an ORM for first-class KMP support and an explicit schema, accepting more hand-written SQL.
  - Amount-based expense splitting replaced weight-based splitting to make "equal parts" and "custom amounts" exact, at the cost of storing per-participant amounts.
  - Settlement transfers are recorded as special expenses so future changes stay consistent — a simple rule that trades a little UI complexity for correctness.
statusNote: "SplitIt works as a complete, documented case study: the settlement logic is dependable, the app runs on both platforms, and the design system reflects the product's warm, social intent."
nextStep: Future iterations focus on distribution and product depth rather than core logic.
nextStepsTitle: Future iterations
roadmap:
  - Publish a signed build and explore store distribution for Android and iOS.
  - Add receipts or photo capture for expenses, and support for more currencies.
  - Consider multi-device sync or shared groups across devices once the local model is proven.
  - Keep the architecture documentation and test suite in step as the product evolves.
screenshots:
  - src: /images/projects/splitit/groups.png
    alt: SplitIt groups list with avatars and settlement status
  - src: /images/projects/splitit/detail.png
    alt: SplitIt group detail showing totals and actions
  - src: /images/projects/splitit/expenses.png
    alt: SplitIt expenses grouped by date
  - src: /images/projects/splitit/settlement.png
    alt: SplitIt settlement with balances and transfers
---

SplitIt started from a real situation: after a get-together with friends, splitting expenses ended in a confusing spreadsheet because the alternative required everyone to create an account for something that only needed to be solved once. The project came from wanting a simpler way to handle that moment without adding friction.

That also shaped the product decision: a native app instead of a web product. For this use case, deploying and maintaining a backend felt like overengineering. An app installed on a phone was enough, and it kept the project honest about its scope — no accounts, no server, just clear shared expenses.

The heart of the app is the settlement logic. Balances are computed from who paid and how each expense was split, then reduced to the smallest set of transfers needed to settle up. Around that core sits a shared Kotlin Multiplatform architecture — UI, domain, and persistence in one codebase for Android and iOS — and a design system built around people: avatars, semantic color for money in and out, and amounts you can read at a glance. The result is a complete case study of building a native multiplatform product from domain rules first.
