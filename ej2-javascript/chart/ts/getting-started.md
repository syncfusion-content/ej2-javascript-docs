---
layout: post
title: Getting started with ##Platform_Name## Chart control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Chart control

This section explains how to create a simple Chart and configure its available functionalities in TypeScript using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

Below is the list of minimum dependencies required to use the Chart.

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

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

## Add Chart to the Project

Open the application in Visual Studio Code and add the Syncfusion JavaScript UI controls.

Add the HTML div tag with its `id` attribute as `element` in your `~/src/index.html` file to initialize the Chart.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Animation</title>
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

Now import the Chart component into your `app.ts` to instantiate a chart and append the chart instance to the `#element` `[src/app/app.ts]`

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

The below example shows a basic Chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs9" %}

## Module Injection

Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature module using `Chart.Inject()` method. In the current application, we are going to modify the above basic chart to visualize sales data for a particular year. For this application we are going to use  line series, tooltip, data label, category axis and legend feature of the chart. Please find relevant feature module name and description as follows.

* LineSeries - Inject this provider to use line series.
* Legend - Inject this provider to use legend feature.
* Tooltip - Inject this provider to use tooltip feature.
* DataLabel - Inject this provider to use data label feature.
* Category - Inject this provider to use category feature.

Now import the above mentioned modules from chart package and inject it into the Chart component using
`Chart.Inject`  method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Chart, LineSeries, Legend, Category, Tooltip } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Legend, DataLabel, Tooltip, Category);

{% endhighlight %}
{% endtabs %}

## Populate Chart With Data

This section explains how to plot below JSON data to the chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let chartData: any[] = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

{% endhighlight %}
{% endtabs %}

Add a series object to the chart by using [`series`](../api/chart/series/) property. Now map the field names `month` and `sales` in the JSON data to the [`xName`](../api/chart/series/#xname) and [`yName`](../api/chart/series/#yname) properties of the series, then set the JSON data to [`dataSource`](../api/chart/series/#datasource) property.

Since the JSON contains category data, set the [`valueType`](../api/chart/axisModel/#valuetype) for horizontal axis to Category. By default, the axis valueType is Numeric.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs10" %}

The sales data are in thousands, so format the vertical axis label by adding `$` as a prefix and `K` as a suffix to each label. This can be achieved by setting the `${value}K` to the [`labelFormat`](../api/chart/axisModel/#labelformat) property of axis. Here, `{value}` act as a placeholder for each axis label.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs11" %}

## Add Chart Title

You can add a title using [`title`](../api/chart/chartModel/#title) property to the chart to provide quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs12" %}

## Enable Legend

You can use legend for the chart by setting the [`visible`](../api/chart/legendSettingsModel/#visible) property to true in [`legendSettings`](../api/chart/chartModel/#legendsettings) object and by injecting the `Legend` module using `Chart.Inject(Legend)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs13" %}

## Add Data Label

You can add data labels to improve the readability of the chart. This can be achieved by setting the visible property to true in the dataLabel object and by injecting `DataLabel` module using `Chart.Inject(DataLabel)` method. Now, the data labels are arranged smartly based on series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs14" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](../api/chart/tooltipSettingsModel/#enable) property as true in [`tooltip`](../api/chart/chartModel/#tooltip) object and by injecting `Tooltip` module using `Chart.Inject(Tooltip)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/getting-started-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs15" %}

> You can refer to our [JavaScript Charts](https://www.syncfusion.com/javascript-ui-controls/js-charts) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Charts example](https://ej2.syncfusion.com/demos/#/material/chart/line.html) that shows various chart types and how to represent time-dependent data, showing trends in data at equal intervals.