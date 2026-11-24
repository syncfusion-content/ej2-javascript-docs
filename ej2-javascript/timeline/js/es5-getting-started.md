---
layout: post
title: Getting Started with ##Platform_Name## Timeline | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Timeline control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Timeline
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Timeline

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework that can be directly used in latest web browsers.

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Timeline control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Timeline CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base` script is the required dependency package for the Timeline component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/timeline/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-layouts/dist/global/ej2-layouts.min.js
```

## Adding Timeline component to the application

Add the `div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Timeline** control in the index.html by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/es5-getting-started/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/es5-getting-started" %}