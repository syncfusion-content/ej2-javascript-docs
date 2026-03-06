---
layout: post
title: Getting Started with Agentic UI Builder | Syncfusion
description: Set up and use the Syncfusion JavaScript UI Builder MCP Server for AI-powered assistance in building JavaScript applications.
control: Getting started with Syncfusion JavaScript UI Builder MCP Server
platform: ej2-javascript
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Agentic UI Builder

The **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript UI Builder** uses AI to help you build JavaScript applications with natural language commands. Simply describe what you want to create, and it generates complete UI implementations with Syncfusion controls.

## Installation

Follow the [Installation Guide](../installation) to set up the MCP server in your development environment.

## Usage

Once installed, open your AI assistant in the IDE and describe what you want to build with the `#sf_javascript_ui_builder` command:

```
#sf_javascript_ui_builder Create a dashboard with a sales data grid and monthly trend chart.
```

The UI Builder generates complete implementations including controls and styling.

> Note: Using the `#sf_javascript_ui_builder` tool ensures the Agentic UI Builder is invoked directly. Alternatively, you can use natural language without the tool—just make sure to include the "Syncfusion" keyword in your prompt so the AI model can automatically recognize and call the appropriate generator.

## Individual Tools

For targeted assistance, you can call individual tools directly using their specific tool names. This is useful when you need specialized help from a particular tool.

### Control Tool (`#sf_javascript_control`)

Provides quick reference guidelines for Syncfusion JavaScript controls, including properties, event handlers, methods, and usage examples.

**When to use:** To get basic control API information and structure details for implementing specific controls correctly.

**Example:**
```
#sf_javascript_control How do I integrate a data table?
```

### Style Tool (`#sf_javascript_style`)

Provides theme configuration, styling setup, and icon integration for Syncfusion JavaScript controls. Supports multiple themes (Tailwind3 CSS, Bootstrap 5.3, Material 3, Fluent 2), light/dark mode implementation, and icon patterns for consistent UI styling.

**When to use:** To apply themes, customize colors, modify the visual design of controls, or integrate icons into your UI.

**Example:**
```
#sf_javascript_style How do I apply the Syncfusion Tailwind 3 dark theme and add a communication icon inside a button?
```

## Best Practices

To maximize the effectiveness of the Agentic UI Builder and achieve optimal results:

- **Minimize active tools:** Limit the number of active MCP tools in your IDE to prevent tool-selection ambiguity and improve response accuracy.
- **Start simple:** Begin with straightforward prompts and progressively add complexity as needed.
- **Be specific:** Provide clear, specific descriptions of your control behavior and design preferences.
- **Reference patterns:** Mention existing design systems, control libraries, or specific patterns you want to replicate.
- **Stay consistent:** Maintain consistent file organization, naming conventions, and coding standards throughout your JavaScript project.
- **Use advanced AI models:** For best results, use **Claude Sonnet 4.5 or higher** models. Other compatible models include **GPT-5 and Gemini 3 Pro**. Higher-capability models produce better code quality and more accurate control implementations.

> Always review AI-generated code before using it in production.

## What's Next

Now that you've set up the Agentic UI Builder, explore these resources:

* **[Prompt Library](./prompt-library)** - Ready-to-use prompts for common scenarios
* **[Showcase Sample Projects](https://www.syncfusion.com/showcase-apps/javascript)** - Full application examples
* **[Control Examples](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/grid/overview)** - Interactive demos of all Syncfusion JavaScript controls
