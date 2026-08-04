---
layout: post
title: Release Notes - Syncfusion TypeScript AI Coding Assistants
description: Explore the release notes for Syncfusion TypeScript AI Coding Assistants, covering MCP Server, and Skills updates across all versions.
control: Syncfusion TypeScript AI Coding Assistants Release Notes
platform: ej2-javascript
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion TypeScript AI Coding Assistants Release Notes

This document provides information about the changes and new features included in each version of the Syncfusion TypeScript AI Coding Assistants, including the [@syncfusion/typescript-mcp](https://www.npmjs.com/package/@syncfusion/typescript-mcp) MCP Server, Skills and so on.

## MCP Server

**(v1.0.0) - August 3, 2026**

**Breaking Changes**

- The package has been renamed from [@syncfusion/typescript-assistant](https://www.npmjs.com/package/@syncfusion/typescript-assistant) to [@syncfusion/typescript-mcp](https://www.npmjs.com/package/@syncfusion/typescript-mcp). The [@syncfusion/typescript-assistant](https://www.npmjs.com/package/@syncfusion/typescript-assistant) package is deprecated and will no longer receive updates.

- The coding assistant tool identifier has been changed from **`sf_typescript_assistant`** to **`search_docs`** for a better naming convention.

**(v2.0.0) – March 09, 2026**

**Features**

- Introduced **Agentic UI Builder** — a composite MCP tool that analyzes your UI requirements and coordinates specialized tools (Control and Styling) to generate complete TypeScript applications using natural language prompts, significantly boosting your productivity and accelerating development workflow.
- Agentic UI Builder sub-tools:
  - **Control Tool** (#sf_typescript_control) — Provides full metadata, APIs, props, events, and configuration for 145+ Syncfusion TypeScript controls.
  - **Styling Tool** (#sf_typescript_style) — Applies theme configurations (Tailwind3 CSS, Bootstrap 5.3, Material 3, Fluent 2), dark mode, color customization, and icon integration.
- Unlimited, unrestricted access with strict privacy (no project file access, no prompt storage or training).

**Breaking Changes**

- Renamed the coding assistant tool identifier from **`SyncfusionTypeScriptAssistant`** to **`sf_typescript_assistant`** for consistency, brevity, and improved user experience.

**(v1.0.1) – February 10, 2026**

**Features**

- Updated package dependencies to resolve security vulnerabilities and enhance stability.

**(v1.0.0) – December 16, 2025**

**Features**

- Added support for API key validation through file path reference.
- Updated package dependencies and security standards for improved reliability and safety.

**(v0.1.0) – October 10, 2025**

**Features**

- Initial release of AI Coding Assistants for Syncfusion TypeScript controls.
- Provides context-aware assistance for building TypeScript applications with Syncfusion controls.
- Includes support for control APIs, properties, and troubleshooting guidance.

## Skills

**Features**

- Introduced [Agent Skills](https://www.syncfusion.com/explore/agent-skills) — a set of lightweight, modular capabilities that extend the AI Coding Assistants with specialized knowledge, including pre-defined instructions, best practices, and curated code patterns for building TypeScript applications with Syncfusion components.
- Each skill is defined in a simple, readable `SKILL.md` file that specifies the correct setup, required modules, current APIs and patterns, and what a valid implementation looks like for a given component.
- Works as a standard, lightweight approach supported by modern AI development tools: install skills, the tool detects them, and the relevant skill is automatically applied to the user's prompt.
