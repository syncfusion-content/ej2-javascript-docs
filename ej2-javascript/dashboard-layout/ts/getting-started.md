---
layout: post
title: Getting started with ##Platform_Name## Dashboard layout control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Dashboard layout control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Getting started in ##Platform_Name## Dashboard layout control

This section explains how to create a simple **DashboardLayout** component and configure its available functionalities, using the Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

## Dependencies

The following list of dependencies is required to use the DashboardLayout component in your application.

```js
|-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-base

```

## Installation and configuration

* Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git), and install necessary npm packages using the following command line scripts.

  ```
   git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
   cd quickstart
   npm install
  ```

> The [application](https://github.com/syncfusion/ej2-quickstart.git) is configured with all the EJ2 dependencies. For better understanding, remove common settings (`src/styles/styles.css`, `system.config.js` ) to get started with the DashboardLayout component.

* Refer to the [DashboardLayout component dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        //Syncfusion packages path mapping
        'npm:': './node_modules/',
        'syncfusion:': 'npm:@syncfusion/'
    },
    map: {
        app: 'app',
        //Syncfusion packages mapping
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Adding style sheet to the application

To render the DashboardLayout component, import the DashboardLayout and its dependent component's styles as given below in `[src/styles/styles.css]`.

  ```
    @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../../node_modules/@syncfusion/ej2-layouts/styles/material.css";
  ```

>Note: To refer the combined component styles, use Syncfusion [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add DashboardLayout to the application

You can render the DashboardLayout component in the following two ways.

* Adding dashboard element and defining `panels` property as attributes in the HTML elements directly.
* Adding the dashboard element and defining the `panels` property through script.

## Defining panels property through HTML attributes

The `panels` of the Dashboard layout component can defined through HTML attributes by using the predefined class `.e-panel` to the component child elements and data attributes for defining the `sizeX`, `sizeY`, `row` and `column` properties for each panel.

The following sample demonstrates defining of `panels` by adding child elements within the root element.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 DashboardLayout component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <!--style reference from app-->
    <link href="./styles/styles.css" rel="stylesheet" />
    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div style="margin: 50px;">
        <!--element which is going to render the dashboardlayout-->
        <div id="dashboard_inline">
            <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">0</div>
                </div>
            </div>
            <div id="two" class="e-panel" data-row="0" data-col="1" data-sizeX="3" data-sizeY="2">
                <div class="e-panel-container">
                    <div class="content">1</div>
                </div>
            </div>
            <div id="three" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
                <div class="e-panel-container">
                    <div class="content">2</div>
                </div>
            </div>
            <div id="four" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">3</div>
                </div>
            </div>
            <div id="five" class="e-panel" data-row="2" data-col="0" data-sizeX="2" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">4</div>
                </div>
            </div>
            <div id="six" class="e-panel" data-row="2" data-col="2" data-sizeX="1" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">5</div>
                </div>
            </div>
            <div id="seven" class="e-panel" data-row="2" data-col="3" data-sizeX="1" data-sizeY="1">
                <div class="e-panel-container">
                    <div class="content">6</div>
                </div>
            </div>
        </div>
</body>

</html>
```

Now, import the DashboardLayout component into your `app.ts` and append it to `#dashboard_inline`.

`[src/app/app.ts]`

```ts

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize dashboardlayout component
let dashboard: DashboardLayout  = new DashboardLayout ({
    columns: 5
});
// render initialized dashboardlayout
dashboard.appendTo('#dashboard_inline');

```

## Run the application

Now, use the `npm run start` command to run the application in the browser.

  ```
    npm run start
  ```

The below output can be achieved by following the steps mentioned above.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-panels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-panels-cs1" %}

## Defining panels properties through script

The panels can be defined simply during component initialization at the script section using the `panels` property of the component.

The following sample demonstrates defining panels property through script section. Here, the panels settings is defined using panels property with same settings as in HTML definition in the previous section.

`[src/app/app.ts]`

```ts

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize dashboardlayout component
let dashboard: DashboardLayout  = new DashboardLayout ({
    cellSpacing: [10, 10],
    columns: 5,
    panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content:'<div class="content">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content:'<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content:'<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content:'<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content:'<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content:'<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content:'<div class="content">6</div>' }
    ]
});
// render initialized dashboardlayout
dashboard.appendTo('#dashboard_default');

```

The following example shows a basic DashboardLayout by defining the `panels` property through script.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs4" %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.