---
layout: post
title: Getting started with ##Platform_Name## Sankey control | Syncfusion
description: Check out and learn about Getting started with ##Platform_Name## Sankey control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Sankey
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Sankey control

This document explains how to create a Sankey diagram and configure its features in TypeScript using the Essential JS 2 webpack quickstart seed repository. The page contains focused samples: initialize, add data, and tooltip/module injection.

> This application is integrated with `webpack.config.js` and uses the latest `webpack-cli`. It requires Node.js v14.15.0 or higher.

## Dependencies

Below is the list of minimum dependencies required to use the Sankey (part of the charts package).

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

Note: `@syncfusion/ej2-pdf-export`, `@syncfusion/ej2-file-utils`, and `@syncfusion/ej2-compression` are optional—required only for PDF export features.

## Set up development environment

Clone the Syncfusion quickstart repository and install dependencies.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
cd ej2-quickstart
npm install
```

## Sample 1 — Initialize Sankey

Add a container in `~/src/index.html` and initialize the Sankey in `src/app/app.ts`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/sankey/getting-started/initialize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/getting-started/initialize-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}
npm run start
{% endhighlight %}
{% endtabs %}

## Sample — Add data to Sankey

Provide nodes and links to the Sankey component via the data configuration. See the example files included in the quickstart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sankey/getting-started/data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/getting-started/data-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/getting-started/data-cs1" %}

## Sample 3 — Tooltip and module injection

Inject Sankey modules to enable the tooltip and legend features when using modular imports. When using global scripts (CDN), modules are often available without explicit injection.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/sankey/getting-started/tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/getting-started/tooltip-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/getting-started/tooltip-cs1" %}

## Further reading

Refer to the Sankey API docs for configuration options and advanced topics.
{% endhighlight %}

