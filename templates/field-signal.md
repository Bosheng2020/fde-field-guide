# Field Signal

**Language:** English · [简体中文](field-signal.zh-CN.md)  
**Use:** Convert a field observation into reproducible evidence that Product, Engineering, or Research can act on. Create one record per distinct signal; remove customer-identifying data unless access is explicitly approved.

## 1. Signal card

| Field | Entry |
|---|---|
| Signal ID | |
| Short title | |
| Reporter / date | |
| Workflow and user segment | |
| Environment / release | |
| Frequency | One-off / Occasional / Repeated / Systematic |
| Severity | Low / Medium / High / Critical |
| Confidence | Hypothesis / Reproduced / Measured / Production-confirmed |
| Confidentiality | Public / Internal / Restricted |

### Observed fact

Describe only what was observed: input conditions, system behavior, user response, and outcome. Do not include a diagnosis here.

### Interpretation

State the current hypothesis and competing explanations. Make uncertainty explicit.

## 2. Reproduction and evidence

| Item | Detail |
|---|---|
| Minimal reproduction steps | |
| Expected behavior | |
| Actual behavior | |
| Reproduction rate | |
| First / most recent occurrence | |
| Affected versions / cohorts | |
| Sanitized trace or run IDs | |
| Supporting screenshot, query, or metric | |

- [ ] Evidence has been sanitized and sharing permissions confirmed.
- [ ] The behavior reproduces outside a single user's session, or the limitation is stated.
- [ ] The comparison baseline is identified.

## 3. Impact

| Dimension | Evidence |
|---|---|
| User impact | |
| Workflow / operational impact | |
| Business or risk impact | |
| Scope: users, tasks, volume, or revenue affected | |
| Workaround and its cost | |

## 4. Failure location

Check all supported by evidence; do not default to “the model.”

- [ ] Problem framing / product behavior
- [ ] Input or source data
- [ ] Retrieval / context construction
- [ ] Prompt / instruction hierarchy
- [ ] Base-model capability or behavior
- [ ] Tool contract, arguments, or execution
- [ ] Orchestration, state, or memory
- [ ] Deterministic validation / business rule
- [ ] Permissions, policy, or human approval
- [ ] User experience / adoption
- [ ] Infrastructure, latency, or cost
- [ ] Unknown; further isolation required

**Isolation evidence:** 

## 5. Turn the signal into an eval

| Eval element | Definition |
|---|---|
| Sanitized input / initial state | |
| Expected output or behavior | |
| Unacceptable behavior | |
| Scoring rule / grader | |
| Relevant slice / tags | |
| Regression-set location | |

## 6. Recommended action

| Option | Expected effect | Cost / risk | Evidence needed | Owner |
|---|---|---|---|---|
| Prompt / context change | | | | |
| Retrieval / data change | | | | |
| Tool / workflow change | | | | |
| Deterministic control | | | | |
| Product / UX change | | | | |
| Model change or post-training | | | | |
| Document limitation / no change | | | | |

### Reuse and routing

- **Customer-specific edge, configurable layer, or reusable core:** 
- **Other deployments likely affected:** 
- **Destination:** Customer team / Product / Engineering / Safety / Research / Post-training
- **Priority rationale:** 

## 7. Resolution

- [ ] Accepted into backlog.
- [ ] Scheduled for experiment or fix.
- [ ] Resolved and regression-tested.
- [ ] Not reproducible; monitoring continues.
- [ ] Closed with documented limitation or workaround.

**Decision, owner, target date, shipped version, and evidence of improvement:** 

