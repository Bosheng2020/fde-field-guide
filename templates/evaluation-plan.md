# Evaluation Plan

**Language:** English · [简体中文](evaluation-plan.zh-CN.md)  
**Use:** Define release evidence before optimizing prompts, models, tools, or workflows. Evaluate the complete task, not only the final text.

## 1. Evaluation contract

| Field | Entry |
|---|---|
| System / workflow | |
| Release candidate | |
| Evaluation owner | |
| Business / domain reviewer | |
| Safety reviewer | |
| Evaluation window | |
| Decision date | |

- **Intended users and tasks:** 
- **Operating conditions:** 
- **Excluded or unsupported uses:** 
- **Most costly acceptable failure:** 
- **Unacceptable failures:** 
- **Baseline being compared:** current workflow / previous release / human expert / other: 

## 2. Success measures

Define the unit of analysis and denominator for every metric.

| Layer | Metric | Baseline | Target / gate | Data source | Owner |
|---|---|---:|---:|---|---|
| Task outcome | | | | | |
| Output quality | | | | | |
| Process / tool use | | | | | |
| Safety / policy | | | | | |
| Reliability | | | | | |
| Latency | | | | | |
| Cost | | | | | |
| User adoption | | | | | |
| Business outcome | | | | | |

Use hard gates for unacceptable failures; do not hide them inside an average score.

## 3. Evaluation set design

| Slice | Purpose | Source | Count / share | Refresh rule | Sensitive data handling |
|---|---|---|---:|---|---|
| Representative common tasks | Estimate normal performance | | | | |
| High-value / high-frequency tasks | Measure material value | | | | |
| Edge and exception cases | Test workflow boundaries | | | | |
| Safety / policy challenges | Test unacceptable behavior | | | | |
| Historical production failures | Prevent regressions | | | | |
| New / temporal cases | Test drift and freshness | | | | |

### Dataset controls

- [ ] Cases are separated into development, validation, and held-out release sets where appropriate.
- [ ] The set reflects real user and task distribution, with deliberate coverage of rare high-impact cases.
- [ ] Duplicates, label leakage, and benchmark contamination have been checked.
- [ ] Permissions, retention, de-identification, and reviewer access are documented.
- [ ] Each case has provenance, expected behavior, and a version identifier.

## 4. Rubric and graders

| Dimension | Definition | Scale | Passing rule | Grader | Calibration evidence |
|---|---|---|---|---|---|
| Correctness | | Binary / ordinal / continuous | | Code / model / human | |
| Groundedness | | | | | |
| Completeness | | | | | |
| Policy compliance | | | | | |
| Appropriate uncertainty | | | | | |
| Action / tool quality | | | | | |

### Human review protocol

- **Reviewer qualifications:** 
- **Blind or paired comparison method:** 
- **Disagreement resolution:** 
- **Inter-rater agreement check:** 
- **Maximum review load and sampling method:** 

### Model-graded evaluation controls

- [ ] The grader prompt, model, and version are pinned.
- [ ] The model grader is calibrated against expert human judgments.
- [ ] Position, verbosity, and self-preference bias have been tested where relevant.
- [ ] Critical safety or compliance decisions are not delegated solely to a model grader.

## 5. Trace and agent evaluation

For multi-step systems, score the path as well as the answer.

| Trace property | Expected behavior | Failure example | Detection / grader |
|---|---|---|---|
| Tool selection | | | |
| Tool arguments / schema | | | |
| Retrieval and evidence use | | | |
| Permission boundary | | | |
| Planning / step count | | | |
| Retry and recovery | | | |
| Human-approval boundary | | | |
| Final state / side effect | | | |

## 6. Experiment design

- **Hypothesis:** 
- **Treatment and control:** 
- **Variables held constant:** 
- **Sample-size rationale:** 
- **Randomization or pairing:** 
- **Statistical / practical significance rule:** 
- **Known confounders:** 
- **Reproducibility command, config, or run ID:** 

Report confidence intervals or uncertainty where possible. Do not interpret a small benchmark win as a production win without workflow evidence.

## 7. Release gates

| Gate | Required threshold | Actual result | Evidence link | Pass / fail | Approver |
|---|---|---|---|---|---|
| Task quality | | | | | |
| Unacceptable failures | Zero or explicitly approved exception | | | | |
| Safety / policy | | | | | |
| Reliability / recovery | | | | | |
| Latency / cost | | | | | |
| User acceptance | | | | | |

**Regression budget:** State which metric may decline, by how much, and why the trade-off is acceptable.  
**Automatic blocker:** State the single result that prevents release regardless of aggregate performance.

## 8. Production monitoring and feedback

| Signal | Collection method | Alert / review threshold | Cadence | Owner | Action |
|---|---|---|---|---|---|
| Task failures | | | | | |
| Human corrections / overrides | | | | | |
| Policy or permission violations | | | | | |
| Drift by user / task slice | | | | | |
| Latency, cost, and availability | | | | | |
| Adoption and abandonment | | | | | |

- **Sampling plan for live review:** 
- **User feedback path:** 
- **Method for turning production failures into regression cases:** 
- **Privacy-safe trace retention:** 

## 9. Decision record

- [ ] Release.
- [ ] Release to a bounded pilot or smaller cohort.
- [ ] Revise and re-evaluate.
- [ ] Do not release.

**Decision, rationale, residual risks, approver, and date:** 

