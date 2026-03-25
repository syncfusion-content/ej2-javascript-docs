---
layout: post
title: Syncfusion ##Platform_Name## Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Agent Skills to enhance AI assistants with accurate Syncfusion ##Platform_Name## control guidance.
control: Skills
platform: ej2-javascript
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion JavaScript Agent Skills for AI Assistants

This guide introduces **Syncfusion JavaScript Skills**, a knowledge package that enables AI assistants (VS Code, Cursor, CodeStudio, etc.) to understand and generate accurate Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript code using official APIs, patterns, and theming guidelines.

Syncfusion<sup style="font-size:70%">&reg;</sup> Skills eliminate common issues with generic AI suggestions by grounding the assistant in accurate Syncfusion<sup style="font-size:70%">&reg;</sup> control usage patterns, API structures, supported features, and project‑specific configuration.

## Key Benefits

1. **Control Usage & API Knowledge** — Curated, Skill‑based guidance that captures how to add, configure, and compose Syncfusion® JavaScript controls, including key props, events, services/modules to inject (where applicable), and common integration patterns.
2. **Patterns & Best Practices** — Practical recommendations for API structures, state‑handling approaches, and feature‑injection workflows (for example, paging, sorting, and filtering for data controls). All guidance is authored directly within the Skill file rather than being fetched from documentation.
3. **Design‑System Guidance** — Includes information related to themes, dark/light variants, and icon usage patterns across Syncfusion® JavaScript controls.

## Installation

Choose one of the following commands to install [Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls skills](https://github.com/syncfusion/javascript-ui-controls-skills.git) based on your preference. Users can also explore Syncfusion skills from the [marketplace](https://skills.sh/syncfusion/).

Install all control skills at once (installs to `.agents/skills` directory):

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/javascript-ui-controls-skills -y

{% endhighlight %}
{% endtabs %}

Choose and install skills interactively from the terminal:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx skills add syncfusion/javascript-ui-controls-skills

{% endhighlight %}
{% endtabs %}

The terminal will show a list of available skills. Use the arrow keys to navigate, space bar to select the skills you want, and Enter to confirm.
{% tabs %}
{% highlight bash tabtitle="npm" %}

 Select skills to install (space to toggle)
│  ◻ syncfusion-javascript-3d-chart (Implement Syncfusion javascript 3D Chart control from the @s...)
│  ◻ syncfusion-javascript-3d-circular-chart
│  ◻ syncfusion-javascript-accordion
│  ◻ syncfusion-javascript-accumulation-chart
│  ◻ syncfusion-javascript-ai-assistview
│  ◻ syncfusion-javascript-appbar
│  ◻ syncfusion-javascript-avatar
│  ◻ syncfusion-javascript-barcode
│  ◻ syncfusion-javascript-blockeditor
|  .....

{% endhighlight %}
{% endtabs %}

Next, select which AI agent you're using and where to store the skills.
{% tabs %}
{% highlight bash tabtitle="npm" %}

│  ── Additional agents ─────────────────────────────
│  Search:  
│  ↑↓ move, space select, enter confirm
│
│ ❯ ○ Augment (.augment/skills)
│   ○ Claude Code (.claude/skills)
│   ○ OpenClaw (skills)
│   ○ CodeBuddy (.codebuddy/skills)
│   ○ Command Code (.commandcode/skills)
│   ○ Continue (.continue/skills)
│   ○ Cortex Code (.cortex/skills)
│   ○ Crush (.crush/skills)
|   ....

{% endhighlight %}
{% endtabs %}

Choose your installation scope (project-level or global), then confirm to complete the installation.

{% tabs %}
{% highlight bash tabtitle="npm" %}

◆  Installation scope
│  ● Project (Install in current directory (committed with your project))
│  ○ Global

◆  Proceed with installation?
│  ● Yes / ○ No

{% endhighlight %}
{% endtabs %}

This registers the Syncfusion<sup style="font-size:70%">&reg;</sup> skill pack so your AI assistant can automatically load it in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

To learn more about the Skills CLI, refer [here](https://skills.sh/docs). 

## How Syncfusion<sup style="font-size:70%">&reg;</sup> Agent Skills Work

1. **Reads relevant Skill files based on the user’s query**, retrieving control usage patterns, APIs, and best‑practice guidance from installed Syncfusion<sup style="font-size:70%">&reg;</sup> Skills. The assistant initially loads only skill names and descriptions, then dynamically loads the required skill and reference files as needed to provide accurate Syncfusion guidance.
2. **Enforces Syncfusion<sup style="font-size:70%">&reg;</sup> best practices**, including:

   - Using the required feature modules for each control.
   - Injecting applicable control modules (for example, paging, sorting, filtering, and other feature modules).
   - Adding the correct theme and style imports.
3. **Generates control‑accurate code**, avoiding invalid props or unsupported patterns.

### Using the AI Assistant

Once skills are installed, the assistant can be used to generate and update Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript code for tasks such as:

- “Add a Grid with paging, sorting, and filtering.”
- “Create a Scheduler with week view and drag‑drop.”
- “Apply Tailwind 3 theme and enable dark mode."

## See also

- [Agent Skills Standards](https://agentskills.io/home)
- [Skills CLI](https://skills.sh/docs)