# Security, Governance, and Production Safety

**Language:** English · [简体中文](../zh-CN/07-security-governance.md)  
**Content type:** Risk-oriented engineering guide  
**Last reviewed:** 2026-10-22

Security is not a checklist added after the prototype. It shapes which data the system can see, which actions it can take, how evidence is retained, and what level of autonomy is justified.

## Start from consequence

Classify every supported action by:

- **impact:** what could go wrong and who would be affected;
- **reversibility:** whether the effect can be undone;
- **detectability:** how quickly a bad action would be noticed;
- **scope:** one record, one tenant, or many systems/users;
- **authority:** which identity and permission make the action possible;
- **evidence:** how well the behavior has been tested in realistic conditions.

Higher consequence should mean narrower permissions, stronger validation, explicit approval, better monitoring, and slower expansion of autonomy.

## Threat model the complete system

Consider threats from:

- malicious or accidental user input;
- indirect prompt injection in documents, web pages, email, or tool output;
- compromised or over-privileged integrations;
- cross-tenant or cross-user data leakage;
- secret exposure in prompts, logs, traces, or generated code;
- unsafe code execution and network access;
- unauthorized tool calls or manipulated arguments;
- model or dependency changes;
- poisoned retrieval sources and stale data;
- insider misuse and excessive support access;
- denial of wallet through uncontrolled tokens, tools, or loops;
- misleading output that passes technical checks but changes a decision.

## Control layers

### Identity and authorization

- Authenticate the human or service initiating work.
- Authorize each data access and tool action—not only entry to the application.
- Propagate tenant and user identity through retrieval and execution.
- Use least privilege, short-lived credentials, and separate read from write tools.
- Do not allow a model to grant itself additional permissions.

### Input and context

- Classify trusted instructions separately from untrusted content.
- Limit and sanitize external content; preserve provenance.
- Treat retrieved text and tool output as data, not executable policy.
- Use allowlists and deterministic enforcement for hard constraints.

### Output and action

- Validate structured output against schemas and business rules.
- Preview consequential actions and require the right approver.
- Use idempotency keys, transaction boundaries, and limits.
- Sandbox code or file operations; restrict network destinations.
- Make safe refusal and human escalation first-class outcomes.

### Data and privacy

- Document purpose, source, classification, residency, retention, and deletion.
- Minimize data sent to models and observability systems.
- Redact or tokenize sensitive values where full text is unnecessary.
- Test deletion, access revocation, and tenant isolation.

### Operations

- Version models, prompts, tools, policies, and evaluation sets.
- Maintain audit trails understandable to investigators.
- Monitor permission errors, unusual action patterns, cost spikes, loops, and policy violations.
- Prepare rollback, kill switch, degraded mode, and incident contacts.

## Risk-based autonomy gate

Before raising autonomy, answer:

1. Can the action be reversed?
2. Is bad behavior reliably detected before harm?
3. Is authority restricted to the smallest necessary scope?
4. Does the evaluation set include realistic abuse and edge cases?
5. Is there a named risk owner who accepts the residual risk?
6. Can operations stop the system immediately?

If any answer is “no,” keep or add human approval.

## Governance artifacts

A pragmatic deployment usually needs:

- system and data-flow diagram;
- data inventory and retention plan;
- tool/permission inventory;
- threat model and abuse cases;
- evaluation and red-team results;
- model/system card or deployment fact sheet;
- production-readiness decision with named approvers;
- incident, rollback, and communication runbook;
- change log and periodic access review.

Governance should accelerate decisions by making evidence visible—not create paperwork with no operational owner.

## Incident response for AI behavior

1. Contain: disable the action, tool, model route, or affected tenant.
2. Preserve: retain sanitized traces, versions, approvals, and affected records.
3. Assess: severity, scope, ongoing exposure, and notification obligations.
4. Correct: system, data, tool, policy, or model change.
5. Regress: add the failure to held-out tests and red-team cases.
6. Learn: update runbooks, permissions, training, and product design.

## Useful primary references

- [NIST AI RMF Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
- [OWASP Top 10 for LLM and GenAI Applications](https://genai.owasp.org/initiatives/top-10-for-llm-and-genai/)
- [MCP Security Best Practices](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/docs/2026-07-28/tutorials/security/security_best_practices.mdx)

Frameworks are inputs, not proof that a deployment is safe. Apply controls to the actual workflow, data, tools, and consequences.

