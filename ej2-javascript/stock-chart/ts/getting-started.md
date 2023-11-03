---
layout: post
title: Getting started with ##Platform_Name## Stock chart control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Stock chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Stock chart control

This section explains how to create a simple Stock chart and configure its available functionalities in TypeScript using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

Below is the list of minimum dependencies required to use the Stock Chart.

```javascript
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

## Add Stock Chart to the Project

Open the application in Visual Studio Code and add the Syncfusion JavaScript UI controls.

Add the HTML div tag with its `id` attribute as `element` in your `~/src/index.html` file to initialize the Stock Chart.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Stock Chart</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
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

Now import the Stock Chart component into your `app.ts` to instantiate a Stock Chart and append the Stock Chart instance to the `#element` `[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { StockChart  } from '@syncfusion/ej2-charts';

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

Stock Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature module using `StockChart.Inject()` method. In the current application, we are going to modify the above basic Stock Chart to visualize stock value of a company. For this application we are going to use  candle series, tooltip, data label and datetime axis feature of the stock chart. Please find relevant feature module name and description as follows.

* CandleSeries - Inject this provider to use candle series.
* Tooltip - Inject this provider to use tooltip feature.
* DataLabel - Inject this provider to use data label feature.
* DateTime - Inject this provider to use DateTime feature.

Now import the above mentioned modules from Stock Chart package and inject it into the  Stock Chart component using
`StockChart.Inject`  method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { StockChart, CandleSeries, DateTime, Tooltip } from '@syncfusion/ej2-charts';
StockChart.Inject(CandleSeries, DataLabel, Tooltip, DateTime);

{% endhighlight %}
{% endtabs %}

## Populate Stock Chart With Data

This section explains how to plot below JSON data to the  Stock Chart.Please find the below imported datasource.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let stockchartData: any[] = [{
   x: new Date( '2012-04-02' ),
    open : 85.9757,
    high : 90.6657,
    low : 85.7685,
    close : 90.5257,
    volume : 660187068
  },
  {
   x: new Date( '2012-04-09' ),
    open : 89.4471,
    high : 92,
    low : 86.2157,
    close : 86.4614,
    volume : 912634864
  },
  {
   x: new Date( '2012-04-16' ),
    open : 87.1514,
    high : 88.6071,
    low : 81.4885,
    close : 81.8543,
    volume : 1221746066
  },
  {
   x: new Date( '2012-04-23' ),
    open : 81.5157,
    high : 88.2857,
    low : 79.2857,
    close : 86.1428,
    volume : 965935749
  },
  {
   x: new Date( '2012-04-30' ),
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

Since the JSON contains DateTime data, set the [`valueType`](../api/stock-chart/stockChartAxisModel/#valuetype) for horizontal axis to DateTime. By default, the axis valueType is Numeric.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs33/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs33/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs33" %}

## Add Stock Chart Title

You can add a title using [`title`](../api/stock-chart/stockChartModel/#title) property to the Stock Chart to provide quick information to the user about the data plotted in the Chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs34/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs34/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs34" %}

## Add Crosshair

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](../api/chart/crosshairSettingsModel/#enable) property in the `crosshair`. Likewise tooltip label for an axis can be enabled by using [`enable`](../api/chart/crosshairTooltipModel/#enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs35/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs35/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs35" %}

## Add Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point. To use trackball feature, we need to inject `Crosshair` module and `Tooltip` module using
`StockChart.Inject(Crosshair, Tooltip)`.

Trackball can be enabled by setting the [`enable`](../api/chart/crosshairSettingsModel/#enable) property of the crosshair to true and
[`shared`](../api/chart/tooltipSettings/#shared) property in `tooltip` to true in chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs36/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs36/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs36" %}

> You can refer to our [JavaScript Stock Chart](https://www.syncfusion.com/javascript-ui-controls/js-stock-chart) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Stock Chart example](https://ej2.syncfusion.com/demos/#/material/stock-chart) that shows you how to present and manipulate data.