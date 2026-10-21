# Open-Source FDE Stack / FDE 开源工具栈

**Last verified: 2026-10-22 / 最后核验：2026-10-22**

This is a source-backed map of useful building blocks for forward-deployed AI systems. It is deliberately **not** a shopping list: choose the smallest stack that satisfies the customer's runtime, security, observability, evaluation, and handoff requirements.

本页是一份有一手来源支持的开源组件地图，服务于一线部署 AI 系统。它刻意**不是**“全都要”的采购清单：应选择能够满足客户运行环境、安全、可观测、评测和交接要求的最小工具组合。

## Status legend / 状态说明

- **Active / 活跃** — suitable for evaluation in new work, subject to normal due diligence. / 可纳入新项目评估，但仍需正常尽调。
- **Development / 开发中** — useful, but interfaces or semantics may change. / 可以使用，但接口或语义可能变化。
- **Incubator / 孵化期** — early-stage; use as a test aid, not as assurance or certification. / 尚处早期；适合作为测试辅助，不能视作安全保证或认证。
- **Maintenance / 维护模式** — existing users may continue, but new projects should prefer the named successor. / 既有项目可继续维护，新项目优先选择明确的后继方案。
- **Scheduled shutdown / 已计划下线** — do not create a new dependency; migrate before the stated date. / 不应新增依赖，并须在指定日期前迁移。

Repository popularity, star counts, and release cadence change quickly and are intentionally omitted. Confirm the current license, release notes, security posture, and support model before production adoption.

仓库热度、Star 数量和发布节奏变化很快，因此本页不记录这些数字。投入生产前，应再次核对许可证、发行说明、安全状况与支持模式。

## 1. Agent runtimes and orchestration / Agent 运行时与编排

| Project / 项目 | Status / 状态 | Good fit / 适用场景 | FDE caution / FDE 注意事项 |
|---|---|---|---|
| [OpenAI Agents SDK — Python](https://github.com/openai/openai-agents-python) and [JavaScript/TypeScript](https://github.com/openai/openai-agents-js) | Active / 活跃 | Lightweight agents with tools, handoffs, guardrails, sessions, and built-in tracing. / 需要工具、handoff、guardrail、session 与内置 tracing 的轻量 agent。 | Provider-oriented SDK; keep domain logic and evaluation cases separable from the framework. / 偏提供商 SDK；业务逻辑与评测样例应尽量与框架解耦。 |
| [Anthropic Claude Agent SDK — Python](https://github.com/anthropics/claude-agent-sdk-python) | Active / 活跃 | Claude-based agents that use tools and operate over real environments. / 基于 Claude、调用工具并在真实环境中执行的 agent。 | Treat permissions, allowed tools, filesystem/network scope, and human approval as first-class design decisions. / 把权限、可用工具、文件与网络边界、人工审批作为一等设计对象。 |
| [Anthropic Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) | Active examples / 活跃示例 | Official patterns and runnable examples for Claude integrations. / Claude 集成的官方模式与可运行示例。 | Examples are learning material, not production architecture or an SLA. / 示例用于学习，不等于生产架构或 SLA。 |
| [Model Context Protocol specification](https://github.com/modelcontextprotocol/modelcontextprotocol) and [official SDK organization](https://github.com/modelcontextprotocol) | Active specification / 活跃规范 | Standardized discovery and invocation of tools, resources, and prompts across clients and servers. / 跨客户端与服务端标准化发现和调用工具、资源、prompt。 | MCP is an interoperability layer, not a security boundary. Validate server identity, tool descriptions, inputs, outputs, authorization, and user consent. / MCP 是互操作层，不是安全边界；必须验证 server 身份、工具描述、输入输出、授权和用户同意。 |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Active successor / 活跃后继 | Microsoft-aligned agent and multi-agent applications, especially for new projects replacing AutoGen-based designs. / 微软生态的 agent 与多 agent 应用，尤其适合替代新的 AutoGen 方案。 | Migration from AutoGen is not necessarily drop-in; validate behavioral parity and telemetry. / 从 AutoGen 迁移未必能无缝替换，需要验证行为一致性与遥测。 |
| [LangGraph](https://github.com/langchain-ai/langgraph) | Active / 活跃 | Stateful, long-running workflows requiring explicit graph control, persistence, interrupts, or human review. / 需要显式图控制、持久化、中断或人工审核的有状态长流程。 | Extra orchestration is justified only when the workflow needs it; keep graph state versioned and recoverable. / 只有流程确实需要时才引入额外编排；图状态应可版本化、可恢复。 |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | Active / 活跃 | Typed Python agents and structured outputs; repository also includes `pydantic-evals`. / 强类型 Python agent 与结构化输出；仓库同时包含 `pydantic-evals`。 | Type validation catches schema failures, not semantic or business-policy failures. / 类型校验只能发现 schema 问题，不能替代语义或业务政策验证。 |
| [LlamaIndex](https://github.com/run-llama/llama_index) | Active / 活跃 | Data connectors, indexing, retrieval, RAG, and agent workflows. / 数据连接、索引、检索、RAG 与 agent 工作流。 | Evaluate retrieval quality on customer data; defaults are not a substitute for corpus-specific tests. / 必须基于客户数据评测检索质量，默认配置不能代替语料专属测试。 |
| [Vercel AI SDK](https://github.com/vercel/ai) | Active / 活跃 | TypeScript applications needing model-provider abstraction, streaming UI, tool calling, and structured output. / 需要模型提供商抽象、流式 UI、工具调用与结构化输出的 TypeScript 应用。 | UI convenience does not replace durable execution, access control, or backend observability. / 前端便利性不能替代耐久执行、访问控制或后端可观测性。 |

### Important transition / 重要迁移提示

Microsoft states that [AutoGen](https://github.com/microsoft/autogen) is in **maintenance mode** and directs new work to Microsoft Agent Framework. Existing systems should use a tested migration plan rather than assuming API or behavior compatibility.

微软已说明 [AutoGen](https://github.com/microsoft/autogen) 进入**维护模式**，新项目应转向 Microsoft Agent Framework。既有系统应制定并验证迁移计划，不能假设 API 或行为完全兼容。

## 2. Durable execution and deployment patterns / 耐久执行与部署模式

| Resource / 资源 | Status / 状态 | What it demonstrates / 展示内容 | Caution / 注意事项 |
|---|---|---|---|
| [Temporal OpenAI agent patterns — Python](https://github.com/temporalio/samples-python/tree/main/openai_agents/agent_patterns) | Active sample / 活跃示例 | Durable execution patterns around OpenAI agents, including recoverable workflow structure. / 围绕 OpenAI agent 的耐久执行与可恢复工作流结构。 | Use only when pauses, retries, long-running state, or crash recovery justify a workflow engine. / 只有当暂停、重试、长期状态或崩溃恢复确有必要时才引入工作流引擎。 |
| [Temporal OpenAI Agents samples — TypeScript](https://github.com/temporalio/samples-typescript/tree/main/openai-agents) | Active sample / 活跃示例 | TypeScript examples combining durable workflows with agent execution. / 将耐久工作流与 agent 执行结合的 TypeScript 示例。 | Samples are starting points; define idempotency, cancellation, secrets, retention, and rollback for the customer environment. / 示例只是起点；仍需为客户环境定义幂等、取消、密钥、保留策略与回滚。 |

A deployment platform is not selected here because FDE constraints vary materially: SaaS, customer VPC, sovereign cloud, air-gapped environment, data residency, and customer-managed keys lead to different choices.

本页不指定唯一部署平台，因为 FDE 的环境约束差异很大：SaaS、客户 VPC、主权云、隔离网络、数据驻留和客户自管密钥都会导向不同方案。

## 3. Evaluation and regression / 评测与回归测试

| Project or guide / 项目或指南 | Status / 状态 | Good fit / 适用场景 | Caution / 注意事项 |
|---|---|---|---|
| [Promptfoo](https://github.com/promptfoo/promptfoo) | Active / 活跃 | Prompt/model comparison, application evals, red teaming, and CI regression gates. The repository states it is now part of OpenAI. / Prompt 与模型比较、应用评测、红队测试及 CI 回归门禁；仓库说明其现已加入 OpenAI。 | Freeze datasets and scoring configuration; require human adjudication for ambiguous or high-impact cases. / 固定数据集与评分配置；对模糊或高影响场景保留人工裁决。 |
| [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai) and [Inspect Evals](https://github.com/UKGovernmentBEIS/inspect_evals) | Active / 活跃 | Reproducible model and agent evaluations plus a library of evaluation implementations. / 可复现的模型与 agent 评测，以及评测实现库。 | Public benchmarks do not replace customer-workflow evals or business acceptance tests. / 公共 benchmark 不能替代客户工作流评测或业务验收测试。 |
| [Pydantic Evals](https://github.com/pydantic/pydantic-ai) | Active / 活跃 | Code-first evaluation integrated with typed Python agent development. / 与强类型 Python agent 开发结合的代码化评测。 | Keep test cases independent of the framework where portability matters. / 如重视可迁移性，应让测试用例尽量独立于框架。 |
| [OpenAI agent evals guide](https://developers.openai.com/api/docs/guides/agent-evals) | Official guidance / 官方指南 | Trace grading and reproducible evaluation workflows for agent quality. / 通过 trace grading 与可复现流程评测 agent 质量。 | Confirm current API and product lifecycle before implementation. / 实施前核对当前 API 与产品生命周期。 |
| [OpenAI evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) | Official guidance / 官方指南 | Dataset design, criteria, graders, continuous evaluation, and common anti-patterns. / 数据集设计、标准、grader、持续评测与常见反模式。 | A single aggregate score can hide safety-critical failure slices. / 单一汇总分数可能掩盖安全关键的失败切片。 |
| [OpenAI simple-evals](https://github.com/openai/simple-evals) | Reference implementation / 参考实现 | Small, readable reference for model-benchmark evaluation. / 简洁可读的模型 benchmark 评测参考。 | Not a production application-evaluation harness; do not mistake benchmark scripts for acceptance testing. / 不是生产应用评测框架，不能把 benchmark 脚本当成验收测试。 |

### Scheduled OpenAI lifecycle changes / OpenAI 已计划的生命周期变化

According to the [official OpenAI deprecations page](https://developers.openai.com/api/docs/deprecations), the hosted **Evals platform** is scheduled to become read-only on **2026-10-31** and shut down on **2026-11-30**; OpenAI recommends migration to Promptfoo. The same page lists **Agent Builder** for shutdown on **2026-11-30**. Do not introduce new dependencies on either hosted product. Export data, preserve evaluation datasets and graders in version control, and test the replacement before the deadline.

根据 [OpenAI 官方弃用页面](https://developers.openai.com/api/docs/deprecations)，托管版 **Evals platform** 计划于 **2026-10-31** 进入只读状态，并于 **2026-11-30** 关闭；OpenAI 建议迁移至 Promptfoo。同页还列出 **Agent Builder** 将于 **2026-11-30** 关闭。不要再新增对这两个托管产品的依赖；应在截止日期前导出数据，把评测数据集与 grader 纳入版本控制，并完成替代方案验证。

## 4. Observability / 可观测性

| Project / 项目 | Status / 状态 | Good fit / 适用场景 | Caution / 注意事项 |
|---|---|---|---|
| [Langfuse](https://github.com/langfuse/langfuse) | Active / 活跃 | Open-source LLM tracing, prompt management, evaluations, datasets, and metrics. / 开源 LLM tracing、prompt 管理、评测、数据集与指标。 | Review hosting location, retention, redaction, role-based access, and whether payloads may contain customer secrets or PII. / 核查托管位置、保留周期、脱敏、基于角色的访问，以及 payload 是否包含客户密钥或个人信息。 |
| [Arize Phoenix](https://github.com/Arize-ai/phoenix) | Active / 活跃 | Open-source tracing and evaluation for LLM and agent applications, with OpenTelemetry support. / 面向 LLM 与 agent 应用的开源 tracing 和评测，并支持 OpenTelemetry。 | Instrument business outcomes and tool side effects, not only model calls. / 不仅记录模型调用，还要观测业务结果与工具副作用。 |
| [OpenTelemetry GenAI semantic conventions](https://github.com/open-telemetry/semantic-conventions-genai) | Development / 开发中 | Vendor-neutral conventions for GenAI events, metrics, model spans, agent spans, and MCP. / 面向 GenAI 事件、指标、模型 span、agent span 与 MCP 的厂商中立约定。 | Agent span conventions are marked **Development** as of the verification date; pin versions and expect change. / 截至核验日，agent span 约定仍标为 **Development**；应固定版本并预期发生变化。 |

Built-in SDK tracing can be useful during prototyping, but a customer deployment still needs an explicit retention, redaction, access-control, correlation, and export strategy.

SDK 内置 tracing 对原型阶段很有帮助，但客户部署仍需明确的数据保留、脱敏、访问控制、关联 ID 与导出策略。

## 5. Security, red teaming, and governance / 安全、红队与治理

| Resource / 资源 | Status / 状态 | Use / 用途 | Caution / 注意事项 |
|---|---|---|---|
| [OpenAI — Safety in building agents](https://developers.openai.com/api/docs/guides/agent-builder-safety) | Official guidance / 官方指南 | Practical controls for prompt injection, private-data leakage, tool approvals, guardrails, and evals. / 针对 prompt injection、私有数据泄漏、工具审批、guardrail 与评测的实用控制。 | Principles remain useful, but the Agent Builder product itself is scheduled for shutdown; do not couple new architecture to that UI. / 原则仍有价值，但 Agent Builder 产品已计划关闭；新架构不要依赖该 UI。 |
| [MCP security best practices](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/docs/2026-07-28/tutorials/security/security_best_practices.mdx) and [local server security](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/docs/2026-07-28/tutorials/security/local-server-security.mdx) | Official MCP guidance / MCP 官方指南 | Threats and mitigations for authorization, confused deputy problems, tokens, sessions, local servers, and consent. / 针对授权、confused deputy、token、session、本地 server 与用户同意的威胁和缓解措施。 | Re-check the current versioned docs path because the specification evolves. / 规范持续演进，使用前应重新核对当前版本文档路径。 |
| [OWASP Top 10 for LLM and GenAI Applications 2026](https://genai.owasp.org/initiatives/top-10-for-llm-and-genai/) | Active community baseline / 活跃社区基线 | Threat taxonomy and review checklist for LLM/GenAI applications. / LLM/GenAI 应用的威胁分类与审查清单。 | A checklist is not a threat model, penetration test, or proof of compliance. / 清单不能替代威胁模型、渗透测试或合规证明。 |
| [OWASP Secure Agent Playbook](https://github.com/OWASP/secure-agent-playbook) | Active guidance / 活跃指南 | Agent-specific design and operational security practices. / 面向 agent 的设计与运营安全实践。 | Adapt controls to actual tools, privileges, assets, and blast radius. / 需按真实工具、权限、资产与爆炸半径调整控制措施。 |
| [OWASP Agent Security Regression Harness](https://github.com/OWASP/Agent-Security-Regression-Harness) | **Incubator / 孵化期** | Repeatable security regression testing for agent systems. / 对 agent 系统进行可重复的安全回归测试。 | The project explicitly describes itself as early-stage; passing it does **not** guarantee security or certification. / 项目明确说明尚处早期；通过测试**不代表**获得安全保证或认证。 |
| [NVIDIA garak](https://github.com/NVIDIA/garak) | Active / 活跃 | Automated vulnerability scanning and probe-based testing for LLM systems. / 面向 LLM 系统的自动化漏洞扫描与 probe 测试。 | Run only with authorization; control cost, rate limits, data handling, and impact on live systems. / 仅在授权下运行，并控制成本、速率限制、数据处理及对线上系统的影响。 |
| [Microsoft PyRIT](https://github.com/microsoft/PyRIT) | Active / 活跃 | Risk identification and red teaming for generative AI systems. / 生成式 AI 系统的风险识别与红队测试。 | Requires skilled interpretation and remediation; output volume is not risk reduction. / 需要专业解读与整改；输出很多结果不等于风险已经降低。 |
| [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) and [NIST AI 600-1 GenAI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) | Authoritative voluntary guidance / 权威自愿性指南 | Governance, mapping, measurement, and management of AI risk, with a GenAI-specific profile. / AI 风险的治理、映射、衡量与管理，并提供生成式 AI 专项 Profile。 | Framework alignment is not legal compliance; map requirements to the customer's jurisdiction and controls. / 对齐框架不等于满足法律合规；仍需映射到客户所在地法规与控制要求。 |

## Recommended minimum pattern / 建议的最小组合

1. **Pick one runtime / 选择一个运行时。** Choose the provider SDK or orchestration framework that matches the workflow; avoid adding multiple abstractions before the need is proven. / 按工作流选择提供商 SDK 或编排框架，在需求被证明之前不要叠加多个抽象层。
2. **Define the tool boundary / 定义工具边界。** Use MCP where interoperability helps, but enforce least privilege, explicit authorization, schemas, timeouts, idempotency, and human approval for consequential actions. / 在互操作有价值时使用 MCP，但必须落实最小权限、显式授权、schema、超时、幂等，以及对高影响操作的人工审批。
3. **Version the eval contract / 对评测契约做版本管理。** Store test cases, expected behaviors, graders, thresholds, failure slices, and business acceptance criteria alongside code; run them in CI and before rollout. / 把测试样例、预期行为、grader、阈值、失败切片与业务验收标准和代码一起版本管理，并在 CI 与上线前执行。
4. **Trace safely / 安全地做 tracing。** Capture model, tool, retrieval, latency, cost, error, and outcome signals while redacting secrets and sensitive customer data. / 记录模型、工具、检索、时延、成本、错误与结果信号，同时脱敏密钥和客户敏感数据。
5. **Design for recovery / 为恢复而设计。** Add retries, idempotency, checkpoints, cancellation, rollback, fallback, and human takeover in proportion to business impact. / 根据业务影响配置重试、幂等、检查点、取消、回滚、降级与人工接管。
6. **Threat-model the full workflow / 对完整工作流做威胁建模。** Cover model input, retrieval, memory, tools, credentials, side effects, supply chain, operators, and downstream systems. / 覆盖模型输入、检索、记忆、工具、凭证、副作用、供应链、操作人员与下游系统。
7. **Make handoff an artifact / 把交接做成正式产物。** Deliver architecture diagrams, runbooks, dashboards, test/eval suites, access-control maps, incident procedures, cost envelope, owners, and exit criteria. / 交付架构图、runbook、dashboard、测试与评测套件、访问控制图、事故流程、成本边界、负责人和退出标准。

## Lifecycle checklist / 生命周期检查清单

Before copying any recommendation from this page into a customer system, verify:

在把本页任何建议用于客户系统之前，请重新核对：

- the repository's latest release, license, security advisories, and maintenance status; / 仓库最新版本、许可证、安全公告与维护状态；
- provider API deprecations and shutdown dates; / 提供商 API 的弃用与下线日期；
- data residency, telemetry, subprocess, network, and model-provider behavior; / 数据驻留、遥测、子进程、网络及模型提供商行为；
- compatibility with the customer's IAM, VPC, secrets, audit, backup, and incident-response controls; / 与客户 IAM、VPC、密钥、审计、备份及事故响应控制的兼容性；
- whether a sample repository is reference code rather than a supported production component; / 示例仓库是否只是参考代码，而非受支持的生产组件；
- an exit plan: export format, state ownership, replacement path, and rollback procedure. / 退出计划：导出格式、状态所有权、替代路径与回滚流程。

