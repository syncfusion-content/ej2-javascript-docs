---
layout: post
title: Getting started with ##Platform_Name## Accumulation chart control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Accumulation chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Getting started in ##Platform_Name## Accumulation chart control

This article provides a step-by-step guide to configuring the Syncfusion JavaScript (Essential JS 2) library and building a simple JavaScript web application using the GitHub [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The list of minimum dependencies required to use an accumulation chart are follows:

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

## Add Accumulation Chart to the Project

Open the application in Visual Studio Code and add the Syncfusion JavaScript UI controls.

Add the HTML div tag with its `id` attribute as `element` in your `~/src/index.html` file to initialize the Accumulation chart.

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
     <!--container which is going to render the Accumulation chart-->
     <div id='element'>
     </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Now, import an accumulation chart component in your `app.ts` to instantiate the accumulation chart, and append the accumulation chart instance to the `#element` `[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { AccumulationChart } from '@syncfusion/ej2-charts';

// initialize Accumulation Chart component
let chart: AccumulationChart = new AccumulationChart();

// render initialized Accumulation Chart
chart.appendTo('#element');

{% endhighlight %}
{% endtabs %}

**Pie Series**

By default, the pie series will be rendered when assigning the JSON data to the series using the [`dataSource`](../api/accumulation-chart/accumulationSeries/#datasource) property. Map the field names in the JSON data to the [`xName`](../api/accumulation-chart/accumulationSeries/#xname) and [`yName`](../api/accumulation-chart/accumulationSeries/#yname) properties of the series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs72/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs72/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs72" %}

Now, use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}