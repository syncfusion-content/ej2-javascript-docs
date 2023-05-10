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

This section explains the steps required to create a heat map and demonstrates the basic usage of the heat map control.

## Dependencies

For using heat map, the following minimum requirements are needed.

```javascript
|-- @syncfusion/ej2-heatmap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

* To  start with heat map controls, you can clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git)project
and install necessary packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

* `Heatmap packages` should be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-heatmap": "syncfusion:ej2-heatmap/dist/ej2-heatmap.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`src/styles/styles.css`, `system.config.js` ) to start with all Essential JS 2 controls.

## Adding heat map to the project

Add an HTML div element of heat map to your `index.html`. `[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Heatmap</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js"></script>
</head>

<body>
     <!--container which is going to render the Heatmap-->
     <div id='element'>
     </div>
</body>

</html>

```

Now, import the heat map control into your `app.ts` to instantiate the heat map and append the heat map instance to the `#container` `[src/app/app.ts]`

```javascript

import { HeatMap } from '@syncfusion/ej2-heatmap';

// initialize HeatMap control
let heatmap: HeatMap = new HeatMap();

// render initialized HeatMap
heatmap.appendTo('#element');

```

Use the `npm run start` command to run the application in the browser.

```

npm run start

```

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

```javascript
import {Legend, Tooltip} from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

```

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