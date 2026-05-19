---
layout: post
title: Getting started with ##Platform_Name## Stock Chart control | Syncfusion
description:  Check out and learn about Getting started with ##Platform_Name## Stock Chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stock Chart 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Stock Chart control

This document explains how to create a simple Stock Chart and configure its features in TypeScript using the Essential JS 2 webpack [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack getting-started guide](https://webpack.js.org/guides/getting-started/).

## Dependencies

Below is the list of minimum dependencies required to use the Stock Chart.

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
```

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

## Add Stock Chart to the Project

Open the project in Visual Studio Code and add the Stock Chart to the application.

Add the HTML div tag with its `id` attribute as `element` in your `~/src/index.html` file to initialize the Stock Chart.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Stock Chart</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TypeScript UI Controls" />
    <meta name="author" content="Syncfusion" />
    ....
    ....
</head>

<body>
     <!--container which is going to render the Stock Chart-->
     <div id='element'>
     </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the Stock Chart component into `src/app/app.ts` to instantiate and render the Stock Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { StockChart, DateTime } from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime);
// initialize  Stock Chart component
let stockChart: StockChart = new StockChart();

// render initialized Stock Chart
stockChart.appendTo('#element');

{% endhighlight %}
{% endtabs %}

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

## Module Injection

The Stock Chart component is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `StockChart.Inject()` method. In this application, we modify the basic Stock Chart to visualize the stock value of a company. For this, we use the candle series, and DateTime axis features of the Stock Chart. The relevant feature modules are:

* CandleSeries - Inject this module to use the candle series.
* DateTime - Inject this module to use the DateTime feature.

Now import the above-mentioned modules from the charts package and inject them into the Stock Chart component using the `StockChart.Inject` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { StockChart, CandleSeries, DateTime } from '@syncfusion/ej2-charts';
StockChart.Inject(CandleSeries, DateTime);

{% endhighlight %}
{% endtabs %}

## Populate Stock Chart with Data

This section explains how to plot the following JSON data in the Stock Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let chartData: Object[] = [{
    date : new Date('2012-04-02'),
    open : 85.9757,
    high : 90.6657,
    low : 85.7685,
    close : 90.5257,
    volume : 660187068
  },
  {
    date : new Date('2012-04-09'),
    open : 89.4471,
    high : 92,
    low : 86.2157,
    close : 86.4614,
    volume : 912634864
  },
  {
    date : new Date('2012-04-16'),
    open : 87.1514,
    high : 88.6071,
    low : 81.4885,
    close : 81.8543,
    volume : 1221746066
  },
  {
    date : new Date('2012-04-23'),
    open : 81.5157,
    high : 88.2857,
    low : 79.2857,
    close : 86.1428,
    volume : 965935749
  },
  {
    date : new Date('2012-04-30'),
    open : 85.4,
    high : 85.4857,
    low : 80.7385,
    close : 80.75,
    volume : 615249365
  },
  ............];

{% endhighlight %}
{% endtabs %}

Add a series object to the chart by using [`series`](../api/stock-chart/stockSeries/) property and then set the JSON data to [`dataSource`](../api/stock-chart/stockSeries/#datasource) property.

Since the JSON contains DateTime data, set the [`valueType`](../api/stock-chart/stockChartAxisModel/#valuetype) for the horizontal axis to DateTime. By default, the axis `valueType` is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/stock-chart/getting-started-cs33/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs33/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="stockData.ts" %}
{% include code-snippet/stock-chart/getting-started-cs33/stockData.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs33" %}