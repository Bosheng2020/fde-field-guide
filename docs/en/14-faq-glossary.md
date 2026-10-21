# Forward Deployed Engineer FAQ and Glossary

**Language:** English · [简体中文](../zh-CN/14-faq-glossary.md)  
**Content type:** Author synthesis with links to sourced chapters  
**Last reviewed:** 2026-10-22

## In brief

A Forward Deployed Engineer (FDE) owns the path from an ambiguous customer problem to an adopted, measurable production system. Titles vary across companies, so the reliable way to compare FDE, FDSE, Applied AI, solutions, and deployment roles is to examine their actual ownership across discovery, implementation, production operation, adoption, and field-to-product learning.

This page provides concise answers and stable terminology. For the evidence behind the role definition, use [FDE fundamentals](01-fundamentals.md), the [role map](02-role-map.md), and the dated [official-source catalogue](../../resources/official-sources.md).

## Frequently asked questions

### What is a Forward Deployed Engineer?

A Forward Deployed Engineer turns an ambiguous, high-value customer problem into an adopted, measurable production system. The role usually combines problem framing, hands-on engineering, evaluation, production rollout, user adoption, and converting field evidence into reusable product learning. This is a working definition, not a universal job specification.

### Is FDE the same as FDSE?

Not necessarily. Forward Deployed Engineer (FDE), Forward Deployed Software Engineer (FDSE), Deployment Lead, Applied AI, and related titles overlap, but they are not interchangeable. An FDSE role is often more code- and architecture-centered, while an FDE role may explicitly include more discovery, workflow, adoption, and outcome ownership. Company-specific responsibilities matter more than the title.

### How is an FDE different from a software engineer, solutions architect, or consultant?

The distinguishing feature is end-to-end outcome ownership. A software engineer commonly centers on product capability, a solutions architect on target design, and a consultant on analysis or transformation recommendations. An FDE typically remains accountable across discovery, implementation, deployment, adoption, and reusable learning, although company boundaries vary. See the [role comparison](02-role-map.md).

### What does an AI-focused FDE actually build?

Typical work can include data and identity integrations, retrieval systems, LLM and agent workflows, tool contracts, user interfaces, evaluation suites, observability, approval controls, security boundaries, deployment infrastructure, and operator runbooks. The correct system may be a narrow decision-support workflow rather than a fully autonomous agent.

### What skills does an AI-focused FDE need?

The role combines end-to-end software engineering; LLM and AI system design; evaluation; production reliability and security; data and integration work; product judgment; customer discovery; technical and executive communication; adoption; and business-value reasoning. Strength should be demonstrated through shipped evidence, not a broad identity claim. Use the [skills matrix](04-skills-matrix.md) for a detailed rubric.

### Does an FDE need to build autonomous agents?

No. The appropriate autonomy depends on consequence, reversibility, detectability, permissions, and evaluation coverage. Retrieval, drafting, decision support, or action after explicit approval may create more value with less risk than full autonomy. Increase authority only when evidence and controls justify it.

### When should an FDE use RAG, tools, fine-tuning, or post-training?

Choose the smallest intervention that addresses the localized failure. Use retrieval when the system lacks changing or proprietary knowledge; tools when it must observe or change external state; workflow or interface changes when the failure is operational; and post-training when the desired behavior is stable and measurable, suitable data exists, simpler interventions miss the target, and lifecycle benefit justifies the added complexity. See the [post-training decision guide](11-post-training.md).

### How do teams avoid permanent customer-specific forks?

Separate a reusable core, a supported configuration layer, and a customer edge. Every bespoke component should have an explicit decision: upstream it, support it as configuration, assign a local owner, or sunset it. Repeated exceptions are product evidence, not a reason to accumulate an unbounded fork.

### How should someone prepare for an FDE interview?

Prepare evidence of complete delivery loops: how you framed an ambiguous workflow, built a working vertical slice, evaluated it, handled reliability and security, earned adoption, measured the result, and generalized the learning. Expect coding and systems work alongside customer, product, trade-off, and deployment-case questions. Use the [career and interview guide](12-career-interview.md) and [30/60/90 learning path](13-learning-path.md).

### How much travel does an FDE role require?

There is no industry-wide number. Current official postings in the [source catalogue](../../resources/official-sources.md) range from no stated percentage to material travel, and requirements vary by company, geography, seniority, customer, and quarter. Treat every figure as posting-specific and verify the live role before making a decision.

### Who is this guide for?

It is designed for FDEs, FDSEs, applied AI engineers, AI product builders, solutions engineers, deployment leads, technical consultants, candidates, hiring managers, product leaders, and GTM teams working on production AI.

## Glossary

| Term | Definition in this guide |
|---|---|
| **Forward Deployed Engineer (FDE)** | Owns the path from an ambiguous customer problem to an adopted, measurable production system. |
| **Forward Deployment Engineer** | A search and title variant sometimes used for closely related work; responsibilities must be checked rather than inferred from the wording. |
| **Forward Deployed Software Engineer (FDSE)** | A commonly more code- and architecture-centered forward-deployment role; the exact boundary varies by company. |
| **Deployment Lead** | A role often centered on workflow mapping, program execution, readiness, organizational change, and adoption within a multidisciplinary deployment team. |
| **Applied AI Engineer** | Builds product or customer workflows around AI capabilities; it overlaps with FDE when it includes direct outcome and deployment ownership. |
| **Solutions Engineer** | Helps customers evaluate, integrate, or adopt a product; the role may overlap with FDE but does not always own the full production and learning loop. |
| **Solutions Architect** | Designs a target solution and integration architecture; implementation and adoption ownership vary by organization. |
| **Customer Engineer** | A customer-facing technical role whose scope can range from pre-sales enablement to hands-on implementation and production support. |
| **Forward deployment** | Working close to users and their environment to build, launch, measure, and improve a real operating outcome. |
| **Outcome contract** | A shared statement of user, workflow, baseline, target, constraints, failure boundaries, owner, and exit conditions. |
| **Thin vertical slice** | The smallest end-to-end system that uses real critical-path data, integrations, permissions, and controls. |
| **Evaluation set** | Representative cases and acceptance rules used to compare behavior and detect regressions. |
| **Trace** | A record of model, context, retrieval, tool, policy, and workflow events used for debugging and audit. |
| **Observability** | The ability to understand system, model, user, and business behavior from evidence. |
| **Autonomy ladder** | A0–A5 levels that increase system authority only when risk controls and evidence justify it. |
| **Adaptation boundary** | The separation among reusable core, supported configuration, and customer-specific edge. |
| **Post-training** | Weight updates after pretraining, including supervised fine-tuning, preference optimization, and reinforcement learning. |
| **Field-to-product learning** | Converting deployment evidence into reusable product, model, platform, evaluation, and documentation improvements. |
| **Adoption** | Repeated use of the system as part of a real workflow, not initial enthusiasm or sign-off. |
| **Runbook** | Documented procedures for normal operation, escalation, incidents, ownership, and recovery. |
| **Rollback** | A tested path to return to a known safer version or workflow after failure. |
| **FIELD Framework** | Bosheng Ding’s original loop: Frame, Instrument, Engineer, Launch, and Distill. |
| **FDE Delivery Maturity Model** | Bosheng Ding’s original L0–L5 model for distinguishing demos, useful systems, operable deployments, adoption, and compounding learning. |

## Attribution and scope

The **FIELD Framework** and **FDE Delivery Maturity Model** are original syntheses by Bosheng Ding, not industry standards. Company role descriptions are dated observations from first-party sources. The glossary normalizes terminology for this guide; it does not claim that the industry has one fixed taxonomy. Cite the original frameworks using [CITATION.cff](../../CITATION.cff).

## Continue reading

- [What is a Forward Deployed Engineer?](01-fundamentals.md)
- [Forward Deployed Engineer role map](02-role-map.md)
- [Deployment lifecycle](03-deployment-lifecycle.md)
- [Official FDE sources](../../resources/official-sources.md)
- [Return to the field-guide index](../../README.md)
