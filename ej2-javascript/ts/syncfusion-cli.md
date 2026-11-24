---
layout: post
title: Syncfusion CLI in TypeScript | Syncfusion
description: Learn to use Syncfusion CLI to create and manage TypeScript projects with Syncfusion controls, templates, themes, and AI-powered tools.
control: Syncfusion CLI
platform: ej2-typescript
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion CLI in TypeScript

The **Syncfusion<sup style="font-size:70%">&reg;</sup> CLI** is a command-line tool that helps developers create, configure, and manage TypeScript projects with Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls. It simplifies project setup by enabling developers to scaffold TypeScript applications, add ready-to-use Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls, configure themes, set up Syncfusion<sup style="font-size:70%">&reg;</sup> MCP assistants, install Syncfusion<sup style="font-size:70%">&reg;</sup> control skills, manage Syncfusion accounts and licenses, and check for CLI updates.

For TypeScript development, the Syncfusion<sup style="font-size:70%">&reg;</sup> CLI supports project creation with **Vite**. By using the CLI, developers can reduce manual configuration effort and quickly start building TypeScript projects with a recommended project structure, predefined templates, and the required control setup.

> The `@syncfusion/syncfusion-cli` package has been deprecated to follow the standard package naming convention. Please use the latest `@syncfusion/cli` package instead. Future updates and new features will be available only in `@syncfusion/cli`. Uninstall the older package and upgrade to the latest package.

## Prerequisites

- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- A terminal, command prompt, or shell environment is available.

## Key Benefits

- **Project Scaffolding** - Quickly create TypeScript projects with the required Syncfusion configuration and recommended project structure.
- **Control Templates** - Start with ready-to-use TypeScript control templates such as `Grid`, `Chart`, `Scheduler`, `Gantt`, `File Manager`, `Diagram`, `Rich Text Editor`, `PDF Viewer`, `DOCX Editor`, and `Spreadsheet Editor`.
- **Theme and Styling Configuration** - Easily apply built-in themes such as `Material 3`, `Fluent 2`, `Bootstrap 5.3`, and `Tailwind 3` with CSS or SCSS support.
- **AI Assistant Integration** - Configure MCP assistants and install Syncfusion<sup style="font-size:70%">&reg;</sup> control skills to improve AI-assisted TypeScript development.
- **Project Information** - View environment and project details, and review installed Syncfusion package information.
- **Account and License Management** - Sign in to Syncfusion, download and activate license keys, and view installed licenses.

## Installation

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> CLI globally from npm.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
npm install -g @syncfusion/cli
{% endhighlight %}
{% endtabs %}

After installation, verify that the `sf` command is available.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf --version
or
sf -v
{% endhighlight %}
{% endtabs %}

> If you have the previous `@syncfusion/syncfusion-cli` package installed, run `npm uninstall -g @syncfusion/syncfusion-cli` before installing `@syncfusion/cli` to avoid installation failures.

## Interactive Mode

Interactive mode provides a guided command-line interface for accessing the main Syncfusion<sup style="font-size:70%">&reg;</sup> CLI actions. It is useful for users who prefer a menu-driven experience instead of manually entering complete commands.

To start interactive mode, run the CLI without additional arguments.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf
{% endhighlight %}
{% endtabs %}

The interactive menu displays the available CLI actions grouped by category.

```bash
 ──────────────────────────────────────────────────────────────
  Syncfusion CLI                                     v1.0.0
 ──────────────────────────────────────────────────────────────

? What would you like to do? (Use arrow keys)

  📦 PROJECT MANAGEMENT
>      Create a new project                              sf new
       Add component to an existing project              sf add
       Add theme to an existing project                  sf theme switch
       Show environment & project information            sf info

  🤖 AI & SKILLS
       Setup Model Context Protocol (MCP)                sf mcp init
       Add component skills to AI Agent                  sf skills install

  🔑 LICENSE MANAGEMENT
       License & Account Management                      sf license

  ℹ️ HELP & EXIT
       View help                                         sf --help
       Check for CLI updates                             sf upgrade
       Exit                                              Ctrl + C
```

The following options are available in interactive mode:

<table>
<tr>
<th>Option</th>
<th>Description</th>
<th>Command</th>
</tr>
<tr>
<td>Create a new project</td>
<td>Creates a new TypeScript project using Syncfusion controls.</td>
<td>sf new</td>
</tr>
<tr>
<td>Add control to existing project</td>
<td>Adds a Syncfusion TypeScript control to an existing project.</td>
<td>sf add</td>
</tr>
<tr>
<td>Add themes to existing project</td>
<td>Applies or changes the theme in the current project.</td>
<td>sf theme switch</td>
</tr>
<tr>
<td>Setup MCP</td>
<td>Configures MCP assistant support for the current project.</td>
<td>sf mcp init</td>
</tr>
<tr>
<td>Install Control Skills</td>
<td>Installs Syncfusion control skills to improve AI-assisted development.</td>
<td>sf skills install</td>
</tr>
<tr>
<td>License & Account Management</td>
<td>Manages your Syncfusion account and licenses.</td>
<td>sf license</td>
</tr>
<tr>
<td>Show Project info</td>
<td>Displays environment and project information.</td>
<td>sf info</td>
</tr>
<tr>
<td>View help</td>
<td>Displays Syncfusion CLI help information.</td>
<td>sf --help</td>
</tr>
<tr>
<td>Check for CLI updates</td>
<td>Checks the installed and latest available Syncfusion CLI versions.</td>
<td>sf upgrade</td>
</tr>
<tr>
<td>Exit</td>
<td>Exits interactive mode.</td>
<td>Ctrl + C</td>
</tr>
</table>

## Non-Interactive Mode

Non-interactive mode allows you to run Syncfusion CLI commands directly from the terminal by passing options as flags. This mode does not show prompts and is useful for automation, scripts, and repeatable project creation.

### Syntax

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf <command> [options]
{% endhighlight %}
{% endtabs %}

### Example

The following example uses the `new` command to create a TypeScript project with the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls using the Grid template and Material 3 theme.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf new my-app --framework typescript --template grid --theme material3
{% endhighlight %}
{% endtabs %}

## Syncfusion CLI Commands

The Syncfusion<sup style="font-size:70%">&reg;</sup> CLI provides commands to create projects, add Syncfusion<sup style="font-size:70%">&reg;</sup> controls, configure the MCP server, install skills, manage themes and licenses, inspect project information, and check for CLI updates.

### Project Creation Command

Create a new Syncfusion<sup style="font-size:70%">&reg;</sup> project with the desired framework, templates, themes, and other configuration options. The project creation commands help you quickly set up a development environment and start building applications with Syncfusion controls.

#### `new` command

The `new` command creates a TypeScript project with Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls. You can use this command to specify the framework, control template, theme, styling format, MCP assistant configuration, and component skills installation.

#### Syntax

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf new <project-name> --framework <framework> --template <control> --theme <theme> --styling <styling> --mcp <editor> --skills
{% endhighlight %}
{% endtabs %}

#### Example

The following command creates a TypeScript project with a Grid template, Tailwind 3 theme, CSS styling, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio MCP configuration, and skills installation.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf new my-app --framework typescript --template grid --theme tailwind3 --mcp code-studio --skills
{% endhighlight %}
{% endtabs %}

#### Options

The `new` command supports options for configuring the project during creation.

<table>
<tr>
<th>Option</th>
<th>Description</th>
<th>Supported values</th>
</tr>
<tr>
<td><code>--framework</code></td>
<td>Specifies the application  framework.</td>
<td><code>typescript</code>, <code>react</code>, <code>angular</code>, <code>vue</code></td>
</tr>
<tr>
<td><code>--template</code></td>
<td>Specifies the starter template for the application .</td>
<td><code>empty</code>, <code>grid</code>, <code>chart</code>, <code>scheduler</code>, <code>file-manager</code>, <code>gantt</code>, <code>diagram</code>, <code>rich-text-editor</code>, <code>pdf-viewer</code>, <code>docx-editor</code>, <code>spreadsheet-editor</code></td>
</tr>
<tr>
<td><code>--theme</code></td>
<td>Specifies the Syncfusion<sup style="font-size:70%">&reg;</sup> theme to configure in the application.</td>
<td><code>material3</code>, <code>tailwind3</code>, <code>bootstrap5.3</code>, <code>fluent2</code></td>
</tr>
<tr>
<td><code>--styling</code></td>
<td>Specifies the stylesheet format.</td>
<td><code>css</code>, <code>scss</code></td>
</tr>
<tr>
<td><code>--mcp</code></td>
<td>Configures Syncfusion<sup style="font-size:70%">&reg;</sup> MCP assistant support for the selected development environment.</td>
<td><code>all</code>, <code>code-studio</code>, <code>vs-studio</code>, <code>cursor</code>, <code>jetbrains</code></td>
</tr>
<tr>
<td><code>--skills</code></td>
<td>Installs Syncfusion<sup style="font-size:70%">&reg;</sup> control skills during project creation.</td>
<td>No value required</td>
</tr>
</table>

### Project-Specific Commands

The following commands must be run inside an existing Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript project directory.

#### Add control command

Use the `add` command to add a supported Syncfusion<sup style="font-size:70%">&reg;</sup> control to an existing project.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf add <control>
{% endhighlight %}
{% endtabs %}

**Examples:**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf add grid
sf add chart
sf add scheduler
sf add gantt
sf add filemanager
sf add diagram
sf add rich-text-editor
sf add pdf-viewer
sf add docx-editor
sf add spreadsheet-editor
{% endhighlight %}
{% endtabs %}

#### MCP configuration command

Use the `mcp init` command to configure Syncfusion<sup style="font-size:70%">&reg;</sup> MCP assistant support in an existing project.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf mcp init code-studio
{% endhighlight %}
{% endtabs %}

#### Skills command

Use the `skills install` command to install Syncfusion<sup style="font-size:70%">&reg;</sup> control skills in an existing project.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf skills install
{% endhighlight %}
{% endtabs %}

#### Theme switch command

Use the `theme switch` command to change the Syncfusion<sup style="font-size:70%">&reg;</sup> theme used in the project.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf theme switch --tailwind3
{% endhighlight %}
{% endtabs %}

#### Project information command

Use the `info` command to display project and environment details.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf info
{% endhighlight %}
{% endtabs %}

### License Management Commands

The following commands must be run inside an existing Syncfusion<sup style="font-size:70%">&reg;</sup> project directory.

#### License activate command

Use the `license activate` command to activate a Syncfusion<sup style="font-size:70%">&reg;</sup> license for the current project. If you are not already signed in, the command authenticates your account, downloads the license key for the currently installed package version, saves it to the `syncfusion-license.txt` file, and activates the license using the downloaded key. If no product license is available for your account, the command prompts to set up a trial license after obtaining your approval.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf license activate
{% endhighlight %}
{% endtabs %}

The `license activate` command supports the following option:

<table>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
<tr>
<td><code>--file</code></td>
<td>Activate a Syncfusion<sup style="font-size:70%">&reg;</sup> license from an existing license file instead of downloading a license key from your Syncfusion<sup style="font-size:70%">&reg;</sup> account. If you do not specify a file path, the command uses the default `syncfusion-license.txt` file in the project directory.</td>
</tr>
<tr>
<td><code>--file "D:\license.txt"</code></td>
<td>To activate the license from a custom file, by specifying its path.</td>
</tr>
</table>

> Before activating a Syncfusion<sup style="font-size:70%">&reg;</sup> license through the CLI, remove any existing [registerLicense](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration#register-syncfusion-license-key-in-the-project) method call. If [registerLicense](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration#register-syncfusion-license-key-in-the-project) is present in the project, it overrides the CLI license activation.

#### License view command

Use the `license view` command to view the downloaded license keys for the current project. The `.syncfusion/license-meta.json` file stores information about the downloaded license metadata.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf license view
{% endhighlight %}
{% endtabs %}

### Account Management Commands

Manage your Syncfusion<sup style="font-size:70%">&reg;</sup> account authentication. The account management commands let you sign in to access your Syncfusion licenses and subscriptions, and sign out of the currently authenticated Syncfusion account.

#### `login` command

Use the `login` command to authenticate your Syncfusion account and enable access to your licenses and subscriptions.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf login
{% endhighlight %}
{% endtabs %}

The Syncfusion CLI stores a session token in the following location based on the operating system:

<table>
<tr>
<th>Operating System</th>
<th>Path</th>
</tr>
<tr>
<td>Windows</td>
<td>%APPDATA%\Roaming\Syncfusion\session.json</td>
</tr>
<tr>
<td>macOS</td>
<td>~/Library/Application Support/Syncfusion/session.json</td>
</tr>
<tr>
<td>Linux</td>
<td>~/.config/syncfusion/session.json</td>
</tr>
</table>

#### `logout` command

Use the `logout` command to sign out of the currently authenticated Syncfusion account.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf logout
{% endhighlight %}
{% endtabs %}

### Default Values

When values are not provided, the Syncfusion CLI uses default values where applicable.

<table>
<tr>
<th>Setting</th>
<th>Default value</th>
</tr>
<tr>
<td>Framework</td>
<td>typescript</td>
</tr>
<tr>
<td>Template</td>
<td>empty</td>
</tr>
<tr>
<td>Theme</td>
<td>material3</td>
</tr>
<tr>
<td>Styling</td>
<td>css</td>
</tr>
<tr>
<td>MCP</td>
<td>no</td>
</tr>
<tr>
<td>Skills</td>
<td>no</td>
</tr>
</table>

## Check for CLI updates

Use the `upgrade` command to check the installed and latest available Syncfusion CLI versions.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf upgrade
{% endhighlight %}
{% endtabs %}

If the installed CLI version is outdated, the command displays the following command to upgrade to the latest version:

{% tabs %}
{% highlight bash tabtitle="CMD" %}
npm i -g @syncfusion/cli
{% endhighlight %}
{% endtabs %}

## Help

The `--help` option displays the list of available Syncfusion CLI commands, arguments, and options.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf --help
{% endhighlight %}
{% endtabs %}

## FAQ

**Which frameworks are supported?**  
The Syncfusion CLI supports TypeScript, React, Angular and Vue applications.

**Can I create a project without interactive prompts?**  
Yes. Use command-line flags to create projects non-interactively.

**Can I add controls after project creation?**  
Yes. Use the `sf add <control>` command to add supported Syncfusion<sup style="font-size:70%">&reg;</sup> controls to an existing TypeScript project.

**Can I change the theme after project creation?**  
Yes. Use the `sf theme switch` command to switch themes.

**Does the Syncfusion CLI support Syncfusion<sup style="font-size:70%">&reg;</sup> MCP and Skills?**  
Yes. The CLI supports Syncfusion<sup style="font-size:70%">&reg;</sup> MCP assistant configuration and Syncfusion<sup style="font-size:70%">&reg;</sup> control skills installation.
