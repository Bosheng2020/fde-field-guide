# Production Launch Checklist

**Language:** English · [简体中文](launch-checklist.zh-CN.md)  
**Use:** Treat this as an evidence gate, not a ceremonial sign-off. Mark an item complete only when its evidence is linked.

## 1. Launch frame

| Field | Entry |
|---|---|
| System / release | |
| Launch owner | |
| User cohort / geography | |
| Planned start and ramp | |
| Change window | |
| Support / incident channel | |
| Go / no-go meeting | |

- **Outcome and baseline:** 
- **Scope and explicit exclusions:** 
- **Autonomy level:** L0 / L1 / L2 / L3 / L4 / L5
- **Expected maturity after launch:** Demonstrable / Useful / Repeatable / Operable / Adopted / Compounding

## 2. Evidence index

| Required artifact | Link / version | Owner | Reviewed by |
|---|---|---|---|
| Discovery and outcome canvas | | | |
| Evaluation report | | | |
| Architecture and risk review | | | |
| Security / privacy approval | | | |
| Runbook and escalation tree | | | |
| Rollback / disable procedure | | | |
| User training and communications | | | |
| Dashboard and alert set | | | |

## 3. Go / no-go gates

### Outcome and product

- [ ] Named users completed representative tasks in the real workflow.
- [ ] Success metrics, baseline, target, and measurement owner are agreed.
- [ ] Unsupported uses and product limitations are visible to users.
- [ ] User feedback, correction, and escalation paths work end to end.
- [ ] Accessibility and critical user journeys have been checked.

### Evaluation and safety

- [ ] The pinned release passed the evaluation plan and regression suite.
- [ ] Unacceptable failures have zero occurrences or an explicitly approved exception.
- [ ] Tool calls, permissions, evidence use, and approval boundaries were evaluated.
- [ ] Red-team and misuse cases reflect this deployment's actual threat model.
- [ ] Production sampling will detect drift and convert failures into eval cases.

### Security, privacy, and governance

- [ ] Identity, role, tenant, and least-privilege controls were tested.
- [ ] Data classification, consent, residency, retention, deletion, and vendor terms are approved.
- [ ] Secrets and sensitive content are excluded or redacted from unsafe logs and prompts.
- [ ] Audit records identify the user, versions, evidence, approvals, and side effects.
- [ ] Required legal, security, privacy, risk, and compliance owners approved the stated scope.

### Reliability and cost

- [ ] Load, timeout, retry, idempotency, partial-failure, and dependency-outage behavior were tested.
- [ ] SLOs, error budgets, rate limits, and cost budgets are configured.
- [ ] Fallbacks and graceful degradation communicate a safe state to users.
- [ ] Rollback and emergency disable were rehearsed by the people who will use them.
- [ ] Capacity and vendor quotas support the ramp plan with headroom.

### Operations and support

- [ ] Dashboards and alerts cover quality, safety, reliability, latency, cost, and adoption.
- [ ] Every alert has an owner, severity, runbook, and tested notification path.
- [ ] On-call, customer communication, incident command, and escalation responsibilities are named.
- [ ] Model, prompt, policy, retrieval index, tool, and application versions are traceable.
- [ ] The post-launch review and decision cadence are on calendars.

### Adoption and change

- [ ] Users know when to trust, verify, correct, override, and escalate.
- [ ] Managers understand how the workflow and responsibilities change.
- [ ] Champions and resistant or high-risk user groups are represented in the rollout.
- [ ] Training uses real cases and includes limitations—not only a happy-path demo.
- [ ] Operational ownership continues after the FDE team steps back.

## 4. Thresholds and response

| Signal | Green | Pause ramp | Roll back / disable | Decision owner |
|---|---:|---:|---:|---|
| Unacceptable safety events | | | | |
| Task success / quality | | | | |
| Human override / correction | | | | |
| Error / recovery rate | | | | |
| p95 latency | | | | |
| Cost per completed task | | | | |
| Active use / completion | | | | |

## 5. Launch-day plan

| Time / ramp stage | Cohort or traffic | Checks | Owner | Proceed condition |
|---|---:|---|---|---|
| Pre-launch | 0% | Config, versions, permissions, dashboards, disable path | | |
| First users | | Quality, support load, incidents, latency | | |
| Controlled ramp | | Slice metrics and dependency capacity | | |
| Planned steady state | | Outcome and adoption trend | | |

- **Launch commander:** 
- **Technical / incident lead:** 
- **Customer / user communication lead:** 
- **Security / risk contact:** 
- **Decision log location:** 

## 6. Final decision

- [ ] Go as planned.
- [ ] Go with a narrower cohort, capability, or autonomy level.
- [ ] Delay until named blockers close.
- [ ] Do not launch; redesign or stop.

| Blocker or accepted exception | Impact | Control / deadline | Owner | Approver |
|---|---|---|---|---|
| | | | | |

**Decision, rationale, approvers, and timestamp:** 

## 7. Required follow-up

- **First-hour check:** owner and time  
- **24-hour review:** owner and time  
- **First-week outcome review:** owner and time  
- **Pilot / ramp decision:** owner and time  
- **Deployment review date:** 

