---
layout: post
title: Getting started with ##Platform_Name## Chart control | Syncfusion
description:  Check out and learn about Getting started with ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Chart
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Chart control

This document explains how to create a simple Chart and configure its features in TypeScript using the Essential JS 2 webpack [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack getting-started guide](https://webpack.js.org/guides/getting-started/).

## Dependencies

Below is the list of minimum dependencies required to use the Chart.

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```
Note: @syncfusion/ej2-pdf-export, @syncfusion/ej2-file-utils, and @syncfusion/ej2-compression are optional—required only for PDF export features. Omit if not using exports.

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Add chart to the project

> Note: Code snippets here use webpack for local development. For online demos or StackBlitz, SystemJS may be used—ignore loader/helper scripts in rendered previews.

Open the project in Visual Studio Code and add the Chart to the application.

Add the HTML div tag with its `id` attribute as `element` in your `~/src/index.html` file to initialize the Chart.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Chart</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    ....
    ....
</head>

<body>
     <!--container which is going to render the Chart-->
     <div id='element'>
     </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the Chart component into `src/app/app.ts` to instantiate and render the Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Chart } from '@syncfusion/ej2-charts';

// initialize Chart component
let chart: Chart = new Chart();

// render initialized Chart
chart.appendTo('#element');

{% endhighlight %}
{% endtabs %}

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example shows a basic Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/chart/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs9" %}

## Module injection

The Chart component is segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature module using the `Chart.Inject()` method. In this application, we modify the basic chart to visualize sales data for a particular year. For this, we use the line series, and category axis of the chart. The relevant feature modules are:

* LineSeries - Inject this module to use the line series.
* Category - Inject this module to use the category axis.

Now import the above-mentioned modules from the chart package and inject them into the Chart component using the `Chart.Inject` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Chart, LineSeries, Category } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category);

{% endhighlight %}
{% endtabs %}

## Populate chart with data

This section explains how to plot the following JSON data to the chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let chartData: Object[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

{% endhighlight %}
{% endtabs %}

Add a series object to the chart by using the [`series`](../api/chart/series) property. Map the JSON fields `month` and `sales` to the series [`xName`](../api/chart/series#xname) and [`yName`](../api/chart/series#yname) properties, and set the JSON array as the [`dataSource`](../api/chart/series#datasource) property.

Since the JSON contains category data, set the [`valueType`](../api/chart/axisModel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/chart/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs10" %}
