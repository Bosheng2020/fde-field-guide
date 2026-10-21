# Discovery and Outcome Canvas

**Language:** English · [简体中文](discovery-canvas.zh-CN.md)  
**Use:** Complete this with the sponsor, operators, and technical owners before committing to a pilot. Replace blank cells with evidence; do not treat assumptions as facts.

## 1. Engagement frame

| Field | Entry |
|---|---|
| Engagement / workflow | |
| FDE owner | |
| Executive sponsor | |
| Operational owner | |
| Technical / security owners | |
| Primary users | |
| Discovery window | |
| Next decision date | |

### Outcome in one sentence

> For **[user]**, improve **[workflow or decision]** from **[baseline]** to **[target]** by **[date]**, while preserving **[critical constraint]**.

### Non-goals

- 
- 

## 2. Workflow reality

Document what people do today, not the process diagram people wish they followed.

| Question | Evidence-based answer |
|---|---|
| What event triggers the workflow? | |
| Who performs each step and makes each decision? | |
| Which systems, files, channels, and handoffs are used? | |
| Where are queues, rework, manual checks, or delays? | |
| Which exceptions occur most often? | |
| What is the cost of a wrong, late, or missing result? | |
| What must remain under human control? | |

### Evidence reviewed

- [ ] Observed the workflow or shadowed users.
- [ ] Walked through at least three recent, representative cases.
- [ ] Reviewed failures, escalations, and unusual cases—not only successes.
- [ ] Confirmed the workflow with both users and the accountable owner.

| Artifact / case | What it showed | Source / owner | Date |
|---|---|---|---|
| | | | |

## 3. Baseline and value

| Measure | Current baseline | How measured | Desired change | Decision owner |
|---|---:|---|---:|---|
| Task quality / accuracy | | | | |
| Cycle time | | | | |
| Human effort | | | | |
| Cost per completed task | | | | |
| Failure / escalation rate | | | | |
| Adoption / completion | | | | |

**Value mechanism:** Explain how a better task result becomes revenue, cost reduction, risk reduction, speed, or learning. Avoid double-counting benefits.

## 4. Stakeholders and incentives

| Stakeholder | Decision / job to be done | Incentive or concern | Required involvement |
|---|---|---|---|
| Sponsor | | | |
| End user | | | |
| Workflow owner | | | |
| Security / legal / compliance | | | |
| Data / platform owner | | | |
| Support / operations | | | |

## 5. Data, systems, and access

| Dependency | Needed for | Access status | Data classification | Owner | Lead time / blocker |
|---|---|---|---|---|---|
| | | Unknown / Requested / Available | Public / Internal / Confidential / Restricted | | |

- **System of record:** 
- **Identity and permission model:** 
- **Data residency / retention constraints:** 
- **Required write actions or external side effects:** 

## 6. Failure and control boundary

| Failure | Impact | Detectability | Reversibility | Required control |
|---|---|---|---|---|
| | Low / Medium / High / Critical | Easy / Partial / Hard | Reversible / Costly / Irreversible | Prevent / Validate / Approve / Monitor / Escalate |

### Proposed autonomy level

- [ ] **L0 — Observe:** collect evidence; no user-facing output.
- [ ] **L1 — Retrieve / explain:** read-only assistance.
- [ ] **L2 — Draft / recommend:** a human owns the decision.
- [ ] **L3 — Act after approval:** explicit approval before each consequential action.
- [ ] **L4 — Bounded action:** may act within defined policy, budget, and permissions.
- [ ] **L5 — Exception oversight:** acts independently; humans review exceptions.

**Why this level is justified by evidence:** 

## 7. Assumptions to retire

| Assumption | Consequence if false | Fastest test | Evidence required | Owner | Date |
|---|---|---|---|---|---|
| | | | | | |

Rank first the assumptions that combine high uncertainty with high consequence.

## 8. Smallest complete pilot

| Element | Pilot decision |
|---|---|
| User cohort and volume | |
| Included tasks / cases | |
| Explicit exclusions | |
| Real data and integrations | |
| Human review and escalation | |
| Evaluation set and acceptance gate | |
| Telemetry and feedback capture | |
| Pilot duration | |
| Support and incident owner | |

### Pilot exit rules

- **Scale when:** 
- **Redesign when:** 
- **Stop when:** 

## 9. Discovery decision

- [ ] Proceed to instrument and build a thin vertical slice.
- [ ] Continue discovery; the named evidence gaps are decision-critical.
- [ ] Redesign the workflow before adding AI.
- [ ] Stop; expected value does not justify cost or risk.

**Decision, rationale, owner, and date:** 

**Evidence links:** 

