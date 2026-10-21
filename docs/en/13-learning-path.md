# A 30/60/90-Day FDE Learning Path

**Language:** English · [简体中文](../zh-CN/13-learning-path.md)  
**Content type:** Practice-based curriculum  
**Last reviewed:** 2026-10-22

This path is for engineers, researchers, product builders, solutions practitioners, and consultants moving toward FDE work. Adapt the starting point to your background: a strong software engineer may need more discovery and adoption practice; a consultant may need deeper implementation and production operations.

The goal is not to “learn all of FDE” in 90 days. The goal is to produce evidence that you can move one bounded workflow from ambiguity toward a safe, operable deployment.

## Choose one capstone

Select a workflow with a real or realistically simulated user, observable outcome, accessible data, and meaningful failure modes. Examples:

- evidence-grounded operations review;
- support-case triage with human approval;
- contract or policy comparison using public documents;
- research synthesis with source verification;
- sales or partnership preparation using synthetic account data.

Use only public, synthetic, or permissioned data. Avoid a generic chat interface with no workflow, users, or success measure.

## Target evidence by Day 90

Aim for **L3 — Operable** in the [FDE Delivery Maturity Model](10-field-framework.md):

- reproducible end-to-end application;
- representative evaluation set and error taxonomy;
- production-like identity, permissions, logging, and rollback;
- documented latency and cost;
- staged user test and adoption evidence where possible;
- runbook, architecture review, and deployment review;
- at least one reusable component or product insight.

Reaching **L4 — Adopted** requires sustained real-user behavior and outcome improvement; it cannot be simulated by polishing the demo.

## Days 1–30: foundations and a traceable vertical slice

### Week 1 — Observe and frame

- Study [FDE fundamentals](01-fundamentals.md), the [role map](02-role-map.md), and the [deployment lifecycle](03-deployment-lifecycle.md).
- Interview or shadow at least two representative users if available.
- Inspect recent real cases rather than discussing only idealized process.
- Map trigger, actors, systems, decisions, exceptions, approvals, and failure costs.
- Complete the [discovery and outcome canvas](../../templates/discovery-canvas.md).

**Output:** one-page workflow map, baseline, accountable outcome, non-goals, and stop condition.

### Week 2 — Build the deterministic spine

- Implement the basic interface, API, data model, identity boundary, and audit events.
- Add deterministic validation and tests before introducing probabilistic components.
- Use version control, repeatable setup, and automated checks.
- Create a small set of representative fixtures.

**Output:** a runnable skeleton that completes the workflow with mocked intelligence but real control flow.

### Week 3 — Add the AI capability

- Select the simplest suitable model and interaction pattern.
- Add structured outputs, retrieval, or tools only where required by the task.
- Trace model inputs, outputs, tool calls, latency, cost, and user corrections.
- Define human approval and refusal behavior.

**Output:** a traceable end-to-end vertical slice using representative data.

### Week 4 — Establish evaluation

- Create an [evaluation plan](../../templates/evaluation-plan.md).
- Include normal cases, high-value cases, edge cases, and unacceptable failures.
- Separate model, retrieval, tool, data, permission, interface, and workflow errors.
- Run the baseline and record limitations honestly.

**Output:** versioned eval set, baseline results, error taxonomy, and top three risks.

### Day-30 review

Demonstrate one complete case and one controlled failure. Explain why the task matters, how you know whether it works, what remains mocked, and what evidence would invalidate the project.

## Days 31–60: deliver under real constraints

### Week 5 — Replace the riskiest assumptions

- Integrate the real or closest permissioned data and tool boundary.
- Test stale, missing, contradictory, malformed, and unauthorized inputs.
- Add retries, timeouts, idempotency, and safe failure behavior where needed.

**Output:** updated risk register and evidence from the highest-risk integration.

### Week 6 — Security and production design

- Complete the [architecture and risk review](../../templates/architecture-risk-review.md).
- Apply least privilege, secrets handling, data minimization, retention decisions, and auditability.
- Define threat scenarios and misuse cases relevant to the workflow.
- Establish a known-good fallback and rollback method.

**Output:** architecture diagram, security boundaries, rollback test, and accepted residual risks.

### Week 7 — Pilot with representative users

- Recruit a small cohort that reflects the workflow, not only enthusiasts.
- Explain when to trust, verify, override, or escalate.
- Observe use rather than relying only on satisfaction scores.
- Capture corrections, abandonment, workarounds, and unexpected value.

**Output:** pilot notes, usage traces, user feedback, and revised failure priorities.

### Week 8 — Improve the limiting constraint

- Identify whether the main limit is model behavior, context, retrieval, tool contract, integration, UX, trust, or process.
- Compare alternatives using the same evaluation set.
- Use the [post-training decision guide](11-post-training.md) before proposing weight updates.
- Record cost, latency, quality, safety, and maintenance trade-offs.

**Output:** decision memo showing the baseline, experiments, selected change, and rejected alternatives.

### Day-60 review

Run a production-readiness review. The project should complete representative tasks, expose important failures, preserve human control, and have an explicit path to launch or stop.

## Days 61–90: operate, drive adoption, and distill

### Week 9 — Prepare launch

- Complete the [production launch checklist](../../templates/launch-checklist.md).
- Define cohort, traffic, acceptance gates, monitoring, support, escalation, and rollback.
- Write a user guide and operator runbook.
- Join system, quality, adoption, and outcome signals in one review view.

**Output:** launch plan, runbook, dashboard, and named owners.

### Week 10 — Operate the workflow

- Run a bounded launch or realistic production simulation.
- Review incidents, overrides, false confidence, latency, cost, and user drop-off.
- Practice one failure and rollback drill.
- Compare results with the original baseline.

**Output:** operating log, incident or drill review, and updated outcome evidence.

### Week 11 — Improve adoption and value

- Observe where the new system adds friction or conflicts with incentives.
- Improve workflow placement, defaults, explanations, and training—not only model quality.
- Decide whether autonomy or scope has earned an increase.
- Define a scale, redesign, remain-bounded, or stop recommendation.

**Output:** adoption analysis and evidence-based recommendation.

### Week 12 — Distill and teach

- Complete the [deployment review](../../templates/deployment-review.md).
- Convert observed failures into regression cases.
- Write at least one [field signal](../../templates/field-signal.md).
- Extract one reusable integration, component, evaluation asset, or playbook.
- Publish a sanitized case study that distinguishes evidence from inference.

**Output:** portfolio-ready case study, reusable asset, product feedback, and next-cycle plan.

### Day-90 review

Present the project in 15 minutes:

1. workflow and baseline;
2. architecture and critical trade-offs;
3. evaluation and failure evidence;
4. production and human-control design;
5. usage and outcome evidence;
6. what you would scale, redesign, or stop;
7. what became reusable.

Then spend 15 minutes defending the decisions under skeptical questioning.

## Parallel skill tracks

Maintain these strands throughout the 90 days:

| Track | Practice |
|---|---|
| Engineering | Build, test, deploy, debug, and operate the complete path |
| AI systems | Prompt/context, retrieval, tools, evaluations, routing, and post-training judgment |
| Product | Workflow observation, scoping, prioritization, UX, and adoption |
| Customer | Discovery, expectation setting, conflict, training, and executive summaries |
| Production | Security, reliability, observability, cost, incident response, and rollback |
| Commercial | Baseline, value hypothesis, stakeholder incentives, expansion and stop decisions |
| Learning | Turn traces into evals and one-off work into reusable product leverage |

Use the [skills matrix](04-skills-matrix.md) at Days 1, 30, 60, and 90. Attach evidence to each rating rather than self-scoring from confidence.

## Weekly operating cadence

- **Monday:** choose the single uncertainty that most threatens the outcome.
- **Tuesday–Wednesday:** build or investigate the smallest test that can reduce it.
- **Thursday:** run evaluations and a user or stakeholder review.
- **Friday:** write the decision, update artifacts, and select the next constraint.

This cadence mirrors **FIELD**, Bosheng Ding’s original synthesis: Frame, Instrument, Engineer, Launch, and Distill.

## Graduation checklist

You are ready to present the capstone when you can answer “yes” with linked evidence:

- Can a new engineer reproduce and run the system?
- Does the eval set represent the actual workflow and serious failures?
- Can you trace a bad outcome across data, model, tools, and interface?
- Are permissions, human approval, escalation, and rollback explicit?
- Have representative users or realistic operators tested it?
- Can you compare quality, latency, cost, adoption, and outcome with a baseline?
- Did you document a justified scale, redesign, or stop decision?
- Did the project create something reusable beyond the demo?

## Continue reading

- [The FIELD Framework](10-field-framework.md)
- [FDE career and interview guide](12-career-interview.md)
- [Official sources](../../resources/official-sources.md)
- [Open-source stack](../../resources/open-source-stack.md)
