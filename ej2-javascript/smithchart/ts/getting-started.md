---
layout: post
title: Getting started with ##Platform_Name## Smith Chart control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Smith Chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Smith Chart control

This document explains how to create a simple Smith Chart and configure its features in TypeScript using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack getting-started guide](https://webpack.js.org/guides/getting-started/).

## Dependencies

Below is the list of minimum dependencies required to use the Smith Chart.

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-file-utils
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

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

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Add smith chart to the project

Open the project in Visual Studio Code and add the Smith Chart to the application.

Add the HTML div tag with its `id` attribute as `element` in your `~/src/index.html` file to initialize the Smith Chart.

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
</head>

<body>
    <!--container which is going to render the Smith Chart-->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the Smith Chart component into `[src/app/app.ts]` to instantiate and render the Smith Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Smithchart } from '@syncfusion/ej2-charts';

// initialize Smithchart component
let smithchart: Smithchart = new Smithchart();

// render initialized Smithchart
smithchart.appendTo('#container');

{% endhighlight %}
{% endtabs %}

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The below example shows a basic Smithchart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smithchart/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs8" %}

## Module Injection

Smithchart component are segregated into individual feature-wise modules. In order to use a particular feature,you need to inject its feature module using `Smithchart.Inject()` method. In the current application, we are going to modify the above basic smithchart to visualize transmission lines. For this application we are going to use  tooltip and legend feature of the smithchart. Please find relevant feature module name and description as follows.

* SmithchartLegend - Inject this provider to use legend feature.
* TooltipRender - Inject this provider to use tooltip feature.

Now import the above-mentioned modules from smithchart package and inject it into the Smithchart component using
`Smithchart.Inject` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Smithchart, SmithchartLegend, TooltipRender } from '@syncfusion/ej2-charts';
Smithchart.Inject(SmithchartLegend, TooltipRender);

{% endhighlight %}
{% endtabs %}

## Add Series to Smithchart

Smithchart had two type of specification for adding series.

* dataSource — Bind a data object directly by specifying resistance and reactance values; the series renders from the provided dataSource.
* points — Provide a collection of resistance and reactance value points for the series.

Below sample demonstrate adding two series to smithchart both ways.

* First series `Transmission1` shows dataSource bound series.
* Second series `Transmission2` shows points bound series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smithchart/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs9" %}

## Add title to smithChart

You can add a title using the [`title`](../api/chart/chartModel#title) property to the Smith Chart to provide quick information to the user about the data plotted in the Smith Chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smithchart/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs10" %}

## Enable marker to smithchart

You can add and customize the markers in the smith chart. This can be achieved by setting the [`visible`](../api/smithchart/seriesmarkermodel#visible) property to `true` in the [`marker`](../api/smithchart/smithchartseriesmodel#marker) object. The sample below enables markers for the first series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smithchart/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs11" %}

## Enable dataLabel to smithchart marker

You can add data labels to improve the readability of the smith chart. This can be achieved by setting the [`visible`](../api/smithchart/seriesmarkerdatalabelmodel#visible) property to `true` in the [`dataLabel`](../api/smithchart/seriesmarkermodel#datalabel) object. Now, the data labels are arranged smartly based on series. The sample below enables data labels for the first series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smithchart/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs12" %}

## Enable legend for smithchart

You can use legend for the Smith Chart by setting the [`visible`](../api/smithchart/smithchartlegendsettingsmodel#visible) property to `true` in [`legendSettings`](../api/smithchart/smithchartmodel#legendsettings) object and by injecting `SmithchartLegend` module using `Smithchart.Inject(SmithchartLegend)` method. Following example sample shows enabling legend for smithchart. Series name can customize using series `name`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smithchart/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs13" %}

## Enable tooltip for smithchart series

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`visible`](../api/smithchart/seriestooltipmodel#visible) property as `true` in [`tooltip`](../api/smithchart/smithchartseries#tooltip) object and by injecting `TooltipRender` module using `Smithchart.Inject(TooltipRender)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smithchart/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs14" %}