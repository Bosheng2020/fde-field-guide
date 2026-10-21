# Illustrative Case: Enterprise Coding-Workflow Deployment

**Language:** English · [简体中文](enterprise-coding-workflow.zh-CN.md)  
**Type:** Illustrative—not a real customer claim

## Initial request

An enterprise engineering leader wants to “roll out an AI coding agent to every developer” within one quarter.

## Frame

Interviews and repository analysis reveal three different needs: understanding unfamiliar services, migrating a deprecated internal API, and reducing review time for repetitive changes. A broad license rollout would not prove any of them.

The first outcome becomes: **reduce safe completion time for one recurring API migration across a selected service cohort without increasing escaped defects or review burden.**

## Instrument

The evaluation set contains completed historical migrations, representative repositories, permission boundaries, failing tests, generated-diff review, and cases where no change should be made. Metrics include task completion, accepted diff rate, defects, reviewer time, CI pass rate, latency, cost, and developer repeat use.

## Engineer

- Index only repositories each developer can access.
- Provide migration guidance and code search as read-only tools first.
- Run edits in isolated branches or sandboxes.
- Require tests, static checks, and human review before merge.
- Record model/tool versions and trace each proposed change to evidence.
- Keep deployment credentials outside the coding agent.

## Launch

Pilot with teams that own representative services and have real migration work scheduled. Train developers on reviewing generated changes, reporting failures, and protecting secrets. Review rejected diffs—not only accepted ones—to learn where the system wastes attention.

## Distill

Convert repeated fixes into repository instructions, migration-specific tools, evaluation cases, CI rules, and product feedback. Expand to another workflow only after the first has stable adoption and operating ownership.

## Key lesson

Success is not “seats enabled” or “lines generated.” It is a verified workflow outcome with sustained use, safe engineering behavior, and reusable learning.

