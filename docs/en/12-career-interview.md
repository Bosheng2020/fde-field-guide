# FDE Career and Interview Guide

**Language:** English · [简体中文](../zh-CN/12-career-interview.md)  
**Content type:** Candidate and hiring playbook  
**Last reviewed:** 2026-10-22

FDE interviews often test a combination that ordinary software interviews separate: engineering depth, product judgment, customer discovery, ambiguous execution, and the ability to connect technical decisions with operating outcomes. The title varies, so prepare for the actual ownership model rather than the acronym.

## First: qualify the role

Ask what “forward-deployed” means in this organization:

- Does the team own discovery, implementation, production operation, adoption, or all of them?
- How much is built in the core product versus the customer environment?
- Who owns security review, support, and incidents?
- How are field signals converted into product roadmap decisions?
- What proportion of time is customer-facing, coding, traveling, and coordinating internally?
- What does success look like after three, six, and twelve months?

These questions reveal whether the job is outcome-oriented FDE work, implementation, solutions architecture, sales engineering, or unbounded custom development. See the [role map](02-role-map.md).

## Build an evidence portfolio

Do not claim “I am technical and customer-facing” without evidence. Prepare two or three cases showing the complete path from ambiguity to outcome.

For each case, document:

1. **Context:** user, workflow, constraint, and why the problem mattered.
2. **Baseline:** how work was done and what was measured before intervention.
3. **Your decisions:** scope, architecture, trade-offs, and what you rejected.
4. **Execution:** code, integrations, evaluations, safety controls, rollout, and collaboration.
5. **Failure:** what broke, how you localized it, and what changed.
6. **Outcome:** quality, adoption, operational impact, and remaining uncertainty.
7. **Leverage:** reusable component, evaluation asset, playbook, or product change.

Public work can use synthetic or permissioned data. Never expose customer secrets to make a portfolio look realistic.

### A strong portfolio packet

- one-page workflow and outcome map;
- architecture diagram and threat/risk notes;
- running application or reproducible repository;
- task-specific evaluation set and results;
- traces or an error taxonomy;
- launch/runbook excerpt;
- short deployment review explaining what you would do next.

Use the [discovery canvas](../../templates/discovery-canvas.md), [evaluation plan](../../templates/evaluation-plan.md), [architecture and risk review](../../templates/architecture-risk-review.md), and [deployment review](../../templates/deployment-review.md).

## Resume: write evidence, not identity claims

A useful bullet often follows this structure:

> **Owned** [workflow or outcome] for [users/context]; **built** [technical system and integrations]; **improved** [measured result] while meeting [risk, cost, latency, or reliability constraint]; **distilled** [reusable asset or product insight].

Prefer:

- “Mapped the review workflow, built a permission-aware retrieval and tool-use service, introduced task-level evals and staged rollout, and reduced verified handling time by X%.”

Over:

- “Leveraged cutting-edge AI to transform enterprise operations.”

Use numbers only when they are accurate, attributable, and meaningful. If outcomes cannot be disclosed, describe scale and evidence without inventing precision: “used weekly by the target operations team,” “passed the customer’s production-readiness review,” or “converted repeated failure cases into regression tests.”

## Common interview components

| Component | What it is testing | Strong evidence |
|---|---|---|
| Coding / debugging | Can you implement and reason under time pressure? | Clear decomposition, tests, edge cases, communication |
| System design | Can you design a complete, operable system? | Requirements, interfaces, failure modes, security, observability, trade-offs |
| AI / LLM design | Can you build beyond a demo? | Eval-driven choices, grounding, tool controls, cost/latency, human boundaries |
| Product or deployment case | Can you find the real problem? | Workflow discovery, baseline, scope, staged evidence, stop criteria |
| Customer role-play | Can you build trust without overpromising? | Listening, clarification, plain language, expectation and conflict management |
| Behavioral deep dive | Have you owned difficult outcomes? | Specific decisions, failures, accountability, learning and measurable result |
| Executive communication | Can you connect detail with business consequence? | Concise recommendation, options, risk, evidence, next decision |

## Use FIELD to structure a case interview

The [FIELD Framework](10-field-framework.md)—an original synthesis by **Bosheng Ding**—provides a practical answer structure. Name it as an author framework rather than an industry standard.

### Frame

Clarify user, workflow, baseline, desired outcome, sponsor, constraints, failure cost, and non-goals. Challenge whether AI is necessary.

### Instrument

Define representative cases, quality and safety criteria, traces, product metrics, business metrics, and rollback signals.

### Engineer

Propose the smallest complete vertical slice. Cover data, identity, model, retrieval, tools, interface, validation, human control, and the riskiest assumptions.

### Launch

Choose pilot users, rollout gates, support ownership, user training, monitoring, and conditions for increasing autonomy or scope.

### Distill

Explain how field failures become evals, product changes, reusable components, and a scale, redesign, or stop decision.

This structure keeps the answer centered on outcomes rather than producing an architecture diagram before understanding the problem.

## Question bank and answer signals

### “A customer asks for an AI agent. What do you do first?”

A strong answer investigates the current workflow, examples, owner, baseline, constraints, and failure cost before selecting an architecture. It offers a bounded discovery plan and may conclude that automation is not justified.

### “How do you move from prototype to production?”

Cover representative evaluations, real integrations, permissions, observability, failure handling, security, canary rollout, runbook, user training, adoption, and rollback. Distinguish demonstration quality from operational evidence.

### “How would you evaluate an agent?”

Define the task unit, datasets and slices, deterministic checks, rubric- or model-based graders with calibration, tool-call correctness, trace inspection, safety failures, latency, cost, and online outcome metrics. Explain how failures become regression cases.

### “When would you fine-tune or post-train?”

Localize the failure first. Compare prompting, retrieval, tools, workflow design, and model selection. Train only when the desired behavior is stable and measurable, suitable data exists, simpler approaches miss the target, and the lifecycle benefit justifies complexity. See the [post-training guide](11-post-training.md).

### “The executive wants a launch next week, but security is blocking it.”

Avoid both reflexive refusal and unsafe compliance. Identify the concrete risk, propose a narrower read-only or synthetic-data pilot, preserve required controls, document residual risk and decision authority, and provide staged options with consequences.

### “A technically good pilot has low adoption. What now?”

Observe the workflow. Check whether the product adds steps, threatens incentives, arrives at the wrong moment, lacks trust or explanation, or solves a low-priority problem. Segment usage, interview users with real cases, adjust workflow and training, and maintain a stop condition.

### “Customer requests are fragmenting the product. How do you respond?”

Classify requests into reusable primitives, configurable policy, integration adapters, and one-off behavior. Quantify frequency and value, identify the underlying job, propose a product boundary, and communicate trade-offs transparently.

### “Tell me about a failure.”

Choose a consequential example. State what you owned, the assumption that failed, the evidence that exposed it, your immediate response, the systemic change, and the later result. Do not disguise a harmless success as a failure.

### “How do you prioritize when everything is urgent?”

Rank work by outcome impact, risk reduction, learning value, dependency, and reversibility. Make the decision visible, align owners, and state which work will not happen.

## A 45-minute case plan

| Time | Candidate move |
|---|---|
| 0–8 min | Clarify users, workflow, outcome, baseline, constraints, and failure boundary |
| 8–13 min | State assumptions, success metrics, and non-goals |
| 13–25 min | Design the smallest complete system and alternatives |
| 25–32 min | Define evaluation, security, observability, and human control |
| 32–38 min | Plan pilot, adoption, ownership, and rollback |
| 38–43 min | Discuss scale, cost, reusable product learning, and stop criteria |
| 43–45 min | Summarize recommendation, top risks, and next decision |

Treat the timing as a guardrail, not a script. Follow the interviewer’s signals.

## Behavioral story inventory

Prepare one specific story for each theme:

- ambiguous problem discovery;
- difficult technical trade-off;
- production incident or serious failure;
- disagreement with a customer or executive;
- low adoption despite good technology;
- cross-functional delivery without formal authority;
- security, privacy, or safety constraint;
- reusable product insight from a customer-specific request;
- decision to narrow, redesign, or stop a project;
- learning a new domain quickly.

For each story, write the baseline, your decision, alternatives, evidence, result, and what changed afterward. Expect follow-ups that test whether you personally owned the work.

## Questions to ask the team

- What customer outcome does the FDE team own after the contract is signed?
- At what deployment maturity level are most current engagements?
- What is a recent example of field learning changing the core product?
- Which responsibilities remain with product engineering, solutions, success, and the customer?
- How are reusable work and customer-specific work reviewed?
- What evidence determines whether an engagement scales or stops?
- What are the on-call, travel, and production-support expectations?
- Which failure has been hardest for the team to solve: technology, integration, adoption, or organization?

## Lightweight scoring rubric for interviewers

Score evidence, not charisma, from 1 (limited) to 4 (strong):

| Dimension | Strong signal |
|---|---|
| Discovery | Finds the workflow and constraint before proposing features |
| Engineering | Can implement and debug across the complete path |
| AI evaluation | Uses representative evidence and understands probabilistic failure |
| Production judgment | Designs controls, observability, reliability, and rollback |
| Product judgment | Narrows scope and makes explicit trade-offs |
| Customer trust | Listens, explains, disagrees constructively, and manages expectations |
| Outcome orientation | Connects system behavior to adoption and operating impact |
| Learning leverage | Converts field evidence into reusable product improvement |

Avoid a single compensating average: a serious gap in integrity, production safety, or hands-on engineering may be role-critical.

## Continue reading

- [Role map](02-role-map.md)
- [Skills matrix](04-skills-matrix.md)
- [Challenges and anti-patterns](09-challenges-antipatterns.md)
- [30/60/90 learning path](13-learning-path.md)

