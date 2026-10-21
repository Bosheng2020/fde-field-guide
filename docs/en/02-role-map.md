# Forward Deployed Engineer vs. Solutions Engineer, Solutions Architect, and Consultant

**Language:** English · [简体中文](../zh-CN/02-role-map.md)  
**Content type:** Author synthesis informed by first-party role descriptions  
**Last reviewed:** 2026-10-22

Job titles are unreliable; ownership boundaries are more useful. The table describes typical centers of gravity, not universal rules.

| Role | Primary question | Typical output | Common handoff |
|---|---|---|---|
| Software Engineer | How do we build and maintain the product? | Product capability and code | Capability ships |
| ML / Research Engineer | How do we improve model or ML-system behavior? | Models, data, experiments, infrastructure | Capability meets research/production bar |
| Sales Engineer | Can the product solve the prospect’s problem? | Demo, proof of value, technical validation | Commercial commitment advances |
| Solutions Architect | What architecture makes the solution viable? | Target architecture and plan | Design is accepted |
| Implementation Engineer | How do we configure and integrate defined scope? | Working configured integration | Agreed scope is delivered |
| Consultant | What should the organization change? | Analysis, recommendation, transformation plan | Recommendation is handed over |
| Product Manager | What should the product solve at scale? | Priorities, requirements, product decisions | Team executes roadmap |
| Customer Success | How does the customer sustain value? | Adoption plan, health, renewal/expansion signal | Ongoing relationship continues |
| **Forward-Deployed Engineer** | How do we turn ambiguity into an adopted production outcome? | End-to-end system, evidence, reusable learning | Outcome operates and learning returns to product |

## Company operating models differ

The same title may represent different mixes:

- **Product-led deployment:** adapt a mature platform to a complex environment.
- **Mission-led build:** embed deeply and create software around a critical operation.
- **Frontier-model deployment:** build systems and evaluations around fast-changing AI capability.
- **Domain deployment:** combine engineering with healthcare, finance, legal, government, or other specialist knowledge.
- **Developer-workflow deployment:** change how engineering teams build software and transfer repeatable habits.

Official descriptions illustrate this variation:

- **OpenAI:** end-to-end frontier-model deployments, production adoption, workflow impact, and feedback that changes product and model roadmaps.
- **Palantir:** a broad family including Forward Deployed Software, Infrastructure, Reliability, and Security Engineers, often paired with Deployment Strategists.
- **Scale AI:** field delivery spanning customer environment, AI application, data integration, production operation, and reusable platform feedback.
- **Cursor:** embedded work with customer engineering teams, production-grade workflows, adoption, and practices that continue after the engagement.

## A RACI-style boundary test

For each engagement, explicitly assign who is **accountable** for:

| Decision / artifact | FDE default | Must have a named partner |
|---|---|---|
| Problem framing and success criteria | Accountable or co-accountable | Customer workflow owner |
| Architecture and thin-slice build | Accountable | Customer engineering/security |
| Core product changes | Contributor | Product/core engineering owner |
| Evaluation acceptance criteria | Co-accountable | Domain expert and risk owner |
| Production access approval | Contributor | Customer security/platform owner |
| User adoption and training | Co-accountable | Business owner/champion |
| Incident ownership after handoff | Explicitly agreed | Operating team |
| Commercial terms | Informed/contributor | Account or commercial lead |

If every row silently defaults to the FDE, the engagement is likely under-governed. If none do, the FDE is probably advisory rather than outcome-owning.

## Healthy boundaries

An FDE should say no or renegotiate when:

- the customer cannot identify a workflow owner;
- success cannot be observed or measured;
- production risk has no accountable approver;
- the project is indefinite staff augmentation;
- a one-off request damages the core product without strategic learning;
- urgency is being used to conceal unacceptable security or reliability risk.

## Team topology

A common pod combines:

- **FDE:** technical delivery and end-to-end integration;
- **Deployment / business lead:** executive alignment, domain value, and program motion;
- **Product / research partner:** reusable product and model improvements;
- **Customer owner:** access, decisions, adoption, and operations;
- **Security / GRC:** risk acceptance and control design.

One person may cover several roles in a small company. The responsibilities still need explicit owners.

## Continue reading

- [Understand FDE fundamentals](01-fundamentals.md)
- [Assess FDE skills](04-skills-matrix.md)
- [Review the FDE FAQ and glossary](14-faq-glossary.md)
- [Return to the field-guide index](../../README.md)

