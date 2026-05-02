---
locale: en
path: splitit
order: 2
title: Splitit
summary: A Kotlin Multiplatform expense-sharing project focused on payment-settlement logic, shared domain modeling, and a pragmatic WIP roadmap.
status: WIP
problem: Design reliable shared-expense and payment-optimization logic before investing in a visual product layer.
repositoryLabel: Public GitHub repository available
stack:
  - Kotlin Multiplatform
  - Shared logic
  - Product modeling
highlights:
  - Focused on multiplatform architecture and reusable domain logic.
  - Explores expense-sharing workflows, settlement optimization, and product-level tradeoffs.
  - Useful as a case study in how a product can start from domain correctness instead of UI breadth.
constraints:
  - Expense sharing becomes messy quickly when the domain model is weak, so correctness matters early.
  - The project needs to prove shared business logic is worth the extra upfront modeling cost.
  - As a WIP, scope has to stay disciplined so the architecture can evolve with real product decisions even without a finished interface.
architecture:
  - Kotlin Multiplatform is used to centralize domain behavior and keep the product model consistent across platforms.
  - Shared logic is treated as a product asset, especially for balances, participant relationships, settlement rules, and payment optimization.
  - The implementation emphasizes clear modeling of groups, expenses, and settlement flows before polishing peripheral features or visual layers.
tradeoffs:
  - Investing in shared logic early slows visible UI progress but reduces the risk of platform-specific divergence later.
  - The roadmap favors core expense-sharing and optimization flows over broad feature coverage to keep the product model coherent.
  - Some implementation details are still intentionally fluid because the project is being shaped as a learning and architecture case study, not just a shipping checklist.
statusNote: "Splitit is still in progress, but the current value is already clear: it demonstrates how multiplatform architecture and domain modeling decisions shape the product before the feature set is complete."
nextStep: The next milestone is to make the payment-optimization logic more explicit through documented scenarios, stronger rule definitions, and broader automated verification.
nextStepsTitle: Next steps
roadmap:
  - Expand the documented domain model with concrete examples of shared-expense, balance, and settlement scenarios.
  - Document the payment-optimization rules and the reasoning behind the chosen settlement approach.
  - Add representative test cases or scenario tables that show how the logic behaves under different participant setups.
  - Continue refining the multiplatform architecture around the product rules that are hardest to change later.
---

Splitit is positioned as more than a clone exercise. The interesting part is the modeling work behind shared expenses: who paid, who owes, how balances evolve, and how payment obligations can be simplified between participants.

That makes Kotlin Multiplatform a good fit for the project. The case for shared logic becomes much stronger when the hard part of the product lives in rules, optimization, and state transitions rather than in platform-specific rendering. The project is still a work in progress, but it already serves as a useful example of how architecture can support product clarity.

The current phase of the project prioritizes the foundation. Instead of maximizing feature count, the emphasis is on making the expense-sharing and settlement model dependable enough to support future UI decisions, more scenarios, and a cleaner roadmap. Because the present scope is centered on logic, this case study should be evaluated through domain design, technical decisions, and scenario coverage rather than through screenshots or a polished demo.
