---
layout: post
title: Getting started with Dashboard layout control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Dashboard layout control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Dashboard Layout
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Getting started in ##Platform_Name## Dashboard layout control

This section explains the steps to create a simple Dashboard Layout and demonstrates the basic usage of the Dashboard Layout component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Ensure the following tools are installed on your machine:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Set up the development environment

Clone the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from GitHub in the command prompt:

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

Navigate to the project folder in the command prompt:

```
cd ej2-quickstart
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Dashboard Layout package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the `@syncfusion/ej2-layouts` package:

```
npm install @syncfusion/ej2-layouts --save
```

Then, install the remaining dependent npm packages using the following command:

```
npm install
```

> For more information about individual package and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> Dashboard Layout CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls provide built-in themes,  which are available from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages). Additionally, themes can be loaded via CDN or customized using the [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).

The quickstart application is preconfigured to use the `Fluent2` theme. To install the [Fluent2](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-fluent2-theme --save

{% endhighlight %}
{% endtabs %}

The required styles are imported in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight bash tabtitle="styles.css" %}

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/dashboard-layout/index.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Dashboard Layout control to the application

You can render the Dashboard Layout control in the following two ways.

* Adding dashboard element and defining [`panels`](../api/dashboard-layout#panels) property as attributes in the HTML elements directly.
* Adding the dashboard element and defining the [`panels`](../api/dashboard-layout#panels) property through script.

## Defining panels property through HTML attributes

The [`panels`](../api/dashboard-layout#panels) of the Dashboard layout control can defined through HTML attributes by using the predefined class `.e-panel` to the control child elements and data attributes for defining the [`sizeX`](../api/dashboard-layout/panelModel#sizex), [`sizeY`](../api/dashboard-layout/panelModel#sizey), [`row`](../api/dashboard-layout/panelModel#row) and [`col`](../api/dashboard-layout/panelModel#col) properties for each panel.

The following sample demonstrates defining of [`panels`](../api/dashboard-layout#panels) by adding child elements within the root element.

Open the application in Visual Studio Code and add the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript UI controls. 

In this article, the Dashboard Layout control is used as an example. Add the following Dashboard Layout element to the `~/src/index.html` file.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Dashboard Layout control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id='container'>
        <!--element which is going to render the Dashboard Layout-->
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
        <style>
            #container {
                margin: 0 auto;
                width: 500px;
            }

            #dashboard_inline .e-panel .e-panel-container .content {
                vertical-align: middle;
                font-weight: 600;
                font-size: 20px;
                text-align: center;
                line-height: 90px;
            }

            #dashboard_inline .e-panel {
                transition: none !important;
            }
        </style>
</body>

</html>
```

Now, to render the Dashboard Layout control, add the following TypeScript code to the `~/src/app/app.ts` file.

```ts

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize Dashboard Layout control
let dashboard: DashboardLayout  = new DashboardLayout ({
    columns: 5
});
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_inline');

````

## Run the application

Now, run the application in the browser using the following command.

```
npm start
```

The below output can be achieved by following the steps mentioned above.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-panels-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/getting-started-panels-cs1/index.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-panels-cs1" %}

## Defining panels properties through script

The panels can be defined simply during control initialization at the script section using the [`panels`](../api/dashboard-layout#panels) property of the control.

The following sample demonstrates defining panels property through script section. Here, the panels settings is defined using panels property with same settings as in HTML definition in the previous section.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize Dashboard Layout control
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
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_default');

{% endhighlight %}
{% endtabs %}

The following example shows a basic Dashboard Layout by defining the [`panels`](../api/dashboard-layout#panels) property through script.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs4" %}

## See also

* [How to register Syncfusion<sup style="font-size:70%">&reg;</sup> license key in TypeScript(ES6) application](https://ej2.syncfusion.com/documentation/licensing/license-key-registration)
