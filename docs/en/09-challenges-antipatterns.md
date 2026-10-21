# Challenges and Anti-Patterns

**Language:** English · [简体中文](../zh-CN/09-challenges-antipatterns.md)  
**Content type:** Diagnostic guide  
**Last reviewed:** 2026-10-22

The most expensive FDE failures often look like progress for several weeks. Use these patterns to diagnose early.

## 1. Building the requested solution instead of finding the problem

**Signal:** the project begins with “build us an agent” and has no baseline, user decision, or failure boundary.  
**Why it fails:** the proposed technology may not address the binding constraint.  
**Response:** observe recent real cases, map the workflow, and write an outcome contract before expanding scope.

## 2. Demo theater

**Signal:** success depends on hand-picked prompts, hidden manual steps, broad admin credentials, or the FDE driving every session.  
**Why it fails:** possibility is confused with repeatability and operation.  
**Response:** test representative cases, real identities, degraded dependencies, and normal users; expose intervention.

## 3. The universal agent

**Signal:** one agent has many broad tools, unclear state, large prompts, and authority across unrelated workflows.  
**Why it fails:** evaluation, permissions, recovery, and ownership become unmanageable.  
**Response:** narrow the workflow, separate deterministic and model decisions, use typed tools, and split authority.

## 4. Fine-tuning as the first answer

**Signal:** systematic failures have not been separated from missing context, poor retrieval, ambiguous tools, weak orchestration, or impossible requirements.  
**Why it fails:** training encodes noise and leaves system defects untouched.  
**Response:** fix task definition and system layers first; post-train only with stable patterns, quality data, and held-out evidence.

## 5. Customer fork as product strategy

**Signal:** each deployment copies the codebase and adds permanent conditionals.  
**Why it fails:** fixes, security controls, and product improvements cannot propagate safely.  
**Response:** maintain a reusable core, supported configuration layer, and explicit customer edge. Give every one-off an upstream, local-owner, or sunset decision.

## 6. Premature platform abstraction

**Signal:** the team designs a generic framework before solving one workflow end to end.  
**Why it fails:** abstractions encode imagined commonality rather than observed recurrence.  
**Response:** solve a concrete problem, compare multiple instances, then extract the stable primitive.

## 7. Speed by hiding risk

**Signal:** security, evaluation, rollback, or ownership is deferred without an explicit decision.  
**Why it fails:** launch becomes the first realistic test.  
**Response:** move fast by narrowing scope and autonomy; record accepted risk, owner, expiry, and mitigation.

## 8. Metrics without decisions

**Signal:** dashboards grow, but nobody knows what threshold changes rollout, model, or scope.  
**Why it fails:** observability becomes decorative.  
**Response:** pair every key metric with an owner, decision, threshold, and review cadence.

## 9. Adoption as a training problem only

**Signal:** low usage leads only to more documentation or workshops.  
**Why it fails:** the workflow may add friction, threaten incentives, arrive at the wrong moment, or lack manager support.  
**Response:** observe drop-off, redesign workflow and incentives, and make benefit visible in the user’s unit of work.

## 10. The heroic FDE

**Signal:** one person holds architecture, customer trust, credentials, runbooks, and incident knowledge.  
**Why it fails:** the deployment cannot survive absence or handoff.  
**Response:** pair, document decisions, rotate support, test handoff, and assign long-term owners before launch.

## 11. Strategic-account exceptionalism

**Signal:** a large customer bypasses product, safety, or evidence standards indefinitely.  
**Why it fails:** revenue pressure creates unbounded maintenance and reputational risk.  
**Response:** make exceptions time-bound with named approvers, cost, learning objective, and exit condition.

## 12. Field feedback as anecdote

**Signal:** roadmap requests say “the customer wants” without frequency, trace, impact, or recurrence.  
**Why it fails:** product and research cannot compare or reproduce the issue.  
**Response:** turn the observation into a sanitized trace, eval case, severity/frequency estimate, and tested intervention.

## Deployment readiness matrix

Score each dimension from **0 unknown**, **1 hypothesized**, **2 pilot-evidenced**, to **3 production-proven**.

| Dimension | 0–3 score | Evidence |
|---|---:|---|
| Business value |  | Baseline, outcome metric, economic owner |
| Workflow clarity |  | Observed cases, exceptions, scope |
| Data and integration access |  | Real access, permissions, quality |
| Reliability and evaluation |  | Representative evals, trace, regression |
| Security and governance |  | Threat model, controls, approvers |
| Adoption and operations |  | Users, owner, support, rollout evidence |

Suggested—not universal—gates:

- **Explore:** unknowns are explicit and there is a safe way to learn.
- **Pilot:** no dimension is completely unknown.
- **Production:** reliability/evaluation and security/governance are at least pilot-evidenced.
- **Scale:** adoption/operations is production-proven and regression evidence exists.

The score should trigger a decision and work plan, not become a vanity total.

