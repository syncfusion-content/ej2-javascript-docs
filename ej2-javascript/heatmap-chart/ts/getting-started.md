---
layout: post
title: Getting started with ##Platform_Name## Heatmap chart control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Heatmap chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Heatmap chart control

This section explains the steps to create a simple HeatMap and demonstrates the basic usage of the gantt component using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

For using heat map, the following minimum requirements are needed.

```javascript
|-- @syncfusion/ej2-heatmap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
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

## Adding heat map to the project

Add an HTML div element of heat map to your `index.html`. `[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Heatmap</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <!--container which is going to render the Heatmap-->
    <div id='element'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Now, import the heat map control into your `app.ts` to instantiate the heat map and append the heat map instance to the `#container` `[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { HeatMap } from '@syncfusion/ej2-heatmap';

// initialize HeatMap control
let heatmap: HeatMap = new HeatMap();

// render initialized HeatMap
heatmap.appendTo('#element');

{% endhighlight %}
{% endtabs %}

Use the `npm start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The below example shows a basic Heatmap.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs8" %}

## Module Injection

The heat map controls are segregated into individual feature-wise modules. To use its feature, you need to inject its feature module using the `HeatMap.Inject()` method. In the current application, the basic heat map is modified to visualize sales revenue data for week, and  the tooltip and legend features of the heat map are used. Find the relevant feature modules and descriptions as follows.

* Legend - Provides the legend feature by injecting it.
* Tooltip - Provides the tooltip feature by injecting it.

Now, import the above-mentioned modules from the heat map package and inject them into the heat map control using the `HeatMap.Inject()` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import {Legend, Tooltip} from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

{% endhighlight %}
{% endtabs %}

## Populate heat map with data

This section explains how to populate the following two-dimensional array data to the heat map.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs9" %}

## Enable axis labels

You can add axis labels to the heat map and format those labels using the [xAxis](../api/heatmap/#xaxis) and [yAxis](../api/heatmap/#yaxis) properties. Axis labels provide additional information about the data points populated in the heat map.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs10" %}

## Add heat map title

Add a title using the [titleSettings](../api/heatmap/#titlesettings) property to the heat map to provide quick information to the user
about the data populated in the heat map.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs11" %}

## Enable legend

Use a legend for the heat map in the [visible](../api/heatmap/legendSettings/#visible) object by setting the [legendSettings](../api/heatmap/#legendsettings) property to **true** and injecting the `Legend` module using the `HeatMap.Inject(Legend)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs12" %}

## Add data label

Add data labels to improve the readability of the heat map. This can be achieved by setting the [showLabel](../api/heatmap/cellSettings/#showlabel) property to **true** in the [cellSettings](../api/heatmap/#cellsettings) object.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs13" %}

## Add custom cell palette

The default palette settings of the heat map cells can be customized by using the [paletteSettings](../api/heatmap/#palettesettings) property.
Using the [palette](../api/heatmap/paletteSettings/#palette) property in `paletteSettings` object, you can change the color set for the cells.
You can change the color mode of the cells to fixed or gradient mode using the [type](../api/heatmap/paletteSettings/#type) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs14" %}

## Enable tooltip

The tooltip is used when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](../api/heatmap/#showtooltip) property to `true` and injecting the `Tooltip` module using the `HeatMap.Inject(Tooltip)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/getting-started-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs15" %}