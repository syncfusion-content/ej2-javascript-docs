---
layout: post
title: Getting started with ##Platform_Name## Linear gauge control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Linear gauge control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Linear gauge control

This section briefly explains how to create **Linear Gauge** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

Following is the list of minimum dependencies required to use the Linear Gauge.

```javascript
|-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-pdf-export
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

## Adding Linear Gauge component to the Project

The Essential JS2 Linear Gauge component can be added to the application. To get started, add the Linear Gauge component to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the Linear Gauge element in the **index.html** file using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Linear gauge</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <!-- container which is going to render the linear gauge -->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the LinearGauge component in the **app.ts** file to initialize the Linear Gauge and append the Linear Gauge instance to the `#container`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { LinearGauge } from '@syncfusion/ej2-lineargauge';

// initialize linear gauge component
let gauge: LinearGauge = new LinearGauge();

// render initialized linear gauge
gauge.appendTo('#container');

{% endhighlight %}
{% endtabs %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The below example shows a basic Linear Gauge component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs2" %}

## Module Injection

Linear Gauge component is segregated into individual feature-wise modules. In order to use a particular feature, inject its corresponding feature module using **LinearGauge.Inject()** method. Please find the feature module name and description as follows.

  * Annotation -  Inject this module to use the annotation features.
  * GaugeTooltip - Inject this module to use the tooltip features.

Now import the above mentioned modules from the Linear Gauge package and inject it into the LinearGauge component using **LinearGauge.Inject** method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { GaugeTooltip, Annotations } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Annotations, GaugeTooltip);

{% endhighlight %}
{% endtabs %}

## Adding the Linear Gauge Title

The title can be added to the Linear Gauge component using the [`title`](../api/linear-gauge/linearGaugeModel/#title) property in the Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs3" %}

## Axis Range

The range of the axis can be set using the [`minimum`](../api/linear-gauge/axis/#minimum) and [`maximum`](../api/linear-gauge/axis/#maximum) properties in the Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs4" %}

To denote the axis values with temperature units, add the °C as suffix to each label. This can be achieved by setting the **{value}°C** to the [`format`](../api/linear-gauge/labelModel/#format) property in the [`labelStyle`](../api/linear-gauge/axis/#labelstyle) object of the axis. Here, **{value}** acts as a placeholder for each axis label.

To change the pointer value from the default value of the gauge, set the [`value`](../api/linear-gauge/pointer/#value) property in [`pointers`](../api/linear-gauge/pointerModel/) object of the axis.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs5" %}

## Setting the value of the pointer

The pointer value is changed in the below sample using the [`value`](../api/linear-gauge/pointer/#value) property in [`pointers`](../api/linear-gauge/pointer) object of the axis.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs6" %}
