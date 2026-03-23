---
layout: post
title: Syncfusion TypeScript Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Agent Skills to enhance AI assistants with accurate Syncfusion TypeScript control guidance.
control: Skills
platform: ej2-javascript
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion TypeScript Agent Skills for AI Assistants

This guide introduces **Syncfusion TypeScript Skills**, a knowledge package that enables AI assistants (VS Code, Cursor, CodeStudio, etc.) to understand and generate accurate Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript code using official APIs, patterns, and theming guidelines.

Syncfusion<sup style="font-size:70%">&reg;</sup> Skills eliminate common issues with generic AI suggestions by grounding the assistant in accurate Syncfusion<sup style="font-size:70%">&reg;</sup> control usage patterns, API structures, supported features, and project‑specific configuration.

## Installation

Choose one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls skills](https://github.com/syncfusion.com/typescript-ui-controls-skills.git) based on your preference. Users can also explore Syncfusion skills from the [marketplace](https://skills.sh/syncfusion/).

{% tabs %}
{% highlight bash tabtitle="npm" %}

// Install all control skills at once
npx skills add syncfusion/typescript-ui-controls-skills -y

// Choose and install skills interactively from the terminal
npx skills add syncfusion/typescript-ui-controls-skills

{% endhighlight %}
{% endtabs %}

This registers the Syncfusion<sup style="font-size:70%">&reg;</sup> skill pack so your AI assistant can automatically load it in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

To learn more about the Skills CLI, refer [here](https://skills.sh/docs). 

## What’s included

1. **Control Usage & API Knowledge** — Curated, Skill‑based guidance that captures how to add, configure, and compose Syncfusion® TypeScript controls, including key props, events, services/modules to inject (where applicable), and common integration patterns.
2. **Patterns & Best Practices** — Practical recommendations for API structures, state‑handling approaches, and feature‑injection workflows (for example, paging, sorting, and filtering for data controls). All guidance is authored directly within the Skill file rather than being fetched from documentation.
3. **Design‑System Guidance** — Includes information related to themes, dark/light variants, and icon usage patterns across Syncfusion® TypeScript controls.

## How Syncfusion<sup style="font-size:70%">&reg;</sup> Agent Skills Work

1. **Reads the relevant Skill files based on the user’s query**, with the assistant retrieving control usage patterns, APIs, and best‑practice guidance from the installed Syncfusion® Skills.
2. **Enforces Syncfusion<sup style="font-size:70%">&reg;</sup> best practices**, including:

   - Using the required feature modules for each control.
   - Injecting applicable control modules (for example, paging, sorting, filtering, and other feature modules).
   - Adding the correct theme and style imports.
3. **Generates component‑accurate code**, avoiding invalid props or unsupported patterns

### Using the AI Assistant

Once skills are installed, the assistant can be used to generate and update Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript code for tasks such as:

- “Add a Grid with paging, sorting, and filtering.”
- “Create a Scheduler with week view and drag‑drop.”
- “Apply Tailwind 3 theme and enable dark mode."

## See also

- [Agent Skills Standards](https://agentskills.io/home)
- [SKills CLI](https://skills.sh/docs)