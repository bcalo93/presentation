---
locale: en
path: splitit
order: 2
title: Splitit
summary: A Kotlin Multiplatform expense-sharing project focused on payment-settlement logic, shared domain modeling, and a pragmatic WIP roadmap.
status: WIP
problem: After a get-together with friends, splitting expenses turned into an awkward Excel exercise because using Splitwise meant asking everyone to create an account for a one-time need. Splitit came from wanting something simpler, clearer, and easier to use in real life.
repositoryLabel: Public GitHub repository available
repositoryHref: https://github.com/bcalo93/splitit
stack:
  - Kotlin Multiplatform
  - Shared logic
  - Product modeling
highlights:
  - "Started from a real personal need: splitting group expenses fairly without asking everyone to create an account for a one-time use."
  - The most important part of the project is the logic behind balances, settlements, and fair expense distribution.
  - It was intentionally shaped as a native app idea, avoiding the overhead of deploying and maintaining a web product for a simple use case.
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
statusNote: "Splitit is still evolving, but its core idea is already clear: divide shared expenses fairly and accurately, without turning the process into another headache."
nextStep: The next step is to keep strengthening the expense and settlement logic so the app can handle real scenarios clearly and reliably.
nextStepsTitle: Next steps
roadmap:
  - Expand the documented domain model with concrete examples of shared-expense, balance, and settlement scenarios.
  - Document the payment-optimization rules and the reasoning behind the chosen settlement approach.
  - Add representative test cases or scenario tables that show how the logic behaves under different participant setups.
  - Continue refining the multiplatform architecture around the product rules that are hardest to change later.
---

Splitit started from a real situation: after a get-together with friends, splitting expenses ended up in a confusing Excel sheet because the available alternative required everyone to create an account for something that only needed to be solved once. The project came from wanting a simpler way to handle that moment without adding friction.

That is also why the project made more sense as a native app than as a web product. For this kind of use case, deploying and maintaining a web application felt like overengineering. Installing an APK manually on my phone was enough, and it kept the project aligned with the level of simplicity I wanted.

The part I have enjoyed the most is the logic. That is where the project really starts to matter: who paid, who owes, how balances evolve, and how settlements can be simplified fairly. The current phase is still centered on making that logic dependable before expanding the product further.
