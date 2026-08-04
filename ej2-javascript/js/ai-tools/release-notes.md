---
layout: post
title: Release Notes - Syncfusion JavaScript AI Coding Assistants
description: Explore the release notes for Syncfusion JavaScript AI Coding Assistants, covering MCP Server updates across all versions.
control: Syncfusion JavaScript AI Coding Assistants Release Notes
platform: ej2-javascript
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion JavaScript AI Coding Assistants Release Notes

This document provides information about the changes and new features included in each version of the Syncfusion JavaScript AI Coding Assistants, including the [@syncfusion/javascript-mcp](https://www.npmjs.com/package/@syncfusion/javascript-mcp) MCP Server and so on.

## MCP Server

**(v1.0.0) - August 3, 2026**

**Breaking Changes**

- The package has been renamed from [@syncfusion/javascript-assistant](https://www.npmjs.com/package/@syncfusion/javascript-assistant) to [@syncfusion/javascript-mcp](https://www.npmjs.com/package/@syncfusion/javascript-mcp). The [@syncfusion/javascript-assistant](https://www.npmjs.com/package/@syncfusion/javascript-assistant) package is deprecated and will no longer receive updates.

- The coding assistant tool identifier has been changed from **`sf_javascript_assistant`** to **`search_docs`** for a better naming convention.

**(v2.0.0) – March 09, 2026**

**Features**

- Introduced **Agentic UI Builder** — a composite MCP tool that analyzes your UI requirements and coordinates specialized tools (Control and Styling) to generate complete JavaScript applications using natural language prompts, significantly boosting your productivity and accelerating development workflow.
- Agentic UI Builder sub-tools:
  - **Control Tool** (#sf_javascript_control) — Provides full metadata, APIs, props, events, and configuration for 145+ Syncfusion JavaScript controls.
  - **Styling Tool** (#sf_javascript_style) — Applies theme configurations (Tailwind3 CSS, Bootstrap 5.3, Material 3, Fluent 2), dark mode, color customization, and icon integration.
- Unlimited, unrestricted access with strict privacy (no project file access, no prompt storage or training).

**Breaking Changes**

- Renamed the coding assistant tool identifier from **`SyncfusionJavaScriptAssistant`** to **`sf_javascript_assistant`** for consistency, brevity, and improved user experience.

**(v1.0.1) – February 10, 2026**

**Features**

- Updated package dependencies to resolve security vulnerabilities and enhance stability.

**(v1.0.0) – December 16, 2025**

**Features**

- Added support for API key validation through file path reference.
- Updated package dependencies and security standards for improved reliability and safety.

**(v0.1.0) – October 10, 2025**

**Features**

- Initial release of AI Coding Assistants for Syncfusion JavaScript controls.
- Provides context-aware assistance for building JavaScript applications with Syncfusion controls.
- Includes support for control APIs, properties, and troubleshooting guidance.
