---
layout: post
title: Getting Started with ##Platform_Name## Dashboard Layout | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Dashboard Layout control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Dashboard Layout 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Dashboard Layout

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework that can be directly used in latest web browsers.

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dashboard Layout control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Dashboard Layout CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base` script is the required dependency package for the Dashboard Layout component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/dashboard-layout/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-layouts/dist/global/ej2-layouts.min.js
```

## Adding Dashboard Layout component to the application

Add the `dashboardlayout` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dashboard Layout** control in the index.html by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/es5-getting-started-cs1" %}

### Setting the [`panels`](../api/dashboard-layout#panels) property using script

You can render the Dashboard Layout control by using the [`panels`](../api/dashboard-layout#panels) property through script. Add the HTML div element for Dashboard Layout into your `index.html` file.

`[src/index.html]`

```
<body>
    <div style="margin: 50px;">
        <!--element which is going to render the Dashboard Layout-->
        <div id="element">
        </div>
</body>

```

Now, render the panel property inside the `<script>` tag

```javascript

// initialize Dashboard Layout control
var dashboard  = new ej.layouts.DashboardLayout ({
    cellSpacing: [10, 10],
    columns: 5,
    panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content:'<div class="content ">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content:'<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content:'<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content:'<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content:'<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content:'<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content:'<div class="content">6</div>' }
    ]
});
// render initialized Dashboard Layout
dashboard.appendTo('#element');

```

The following example shows a basic Dashboard Layout by using the [`panels`](../api/dashboard-layout#panels) property.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/es5-getting-started-cs2" %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/bootstrap5.3/dashboard-layout/default.html) to knows how to present and manipulate data.
