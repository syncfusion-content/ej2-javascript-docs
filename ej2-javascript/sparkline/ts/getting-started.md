---
layout: post
title: Getting started with ##Platform_Name## Sparkline control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Sparkline control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Sparkline control

This section explains the steps required to create a sparkline and demonstrate its basic usage.

## Dependencies

The following list of minimum dependencies are required to use the sparkline:

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

* To get started with the sparkline control, clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project, and then install the necessary packages using the following commands:

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

* Map the `Sparkline packages` in `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});
```

## Add sparkline to project

Add an HTML div element for map into your `index.html`. `[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Sparkline</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
     <!--container which is going to render the Sparkline-->
     <div id='element'>
     </div>
</body>

</html>
```

Then, import the sparkline control into your `index.ts` to instantiate a sparkline and append its instance to the `#container`.

```javascript
import { Sparkline } from '@syncfusion/ej2-charts';

// Initialize the sparkline control
let sparkline: Sparkline = new Sparkline();

// Render initialized sparkline
sparkline.appendTo('#element');
```

Now, use the `npm run start` command to run the application in browser.

```
npm run start
```

```ts
import { Sparkline } from '@syncfusion/ej2-charts';

let sparkline: Sparkline = new Sparkline();

sparkline.appendTo('#element');
```

Since the data source has not been specified to the sparkline, no shapes will be rendered. Only an empty SVG element is appended to the sparkline container.

## Module injection

The sparkline component is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `Sparkline.Inject()` method. The module available in sparkline and its description is as follows.

* SparklineTooltip - Inject this provider to use tooltip series.

In the current application, the above basic sparkline is modified to visualize the types of sparkline.

In this application, the tooltip feature of the sparkline is used. Now, import the SparklineTooltip module from the sparkline package, and inject it into the sparkline control using the `Sparkline.Inject` method.

```javascript

import { Sparkline, SparklineTooltip } from '@syncfusion/ej2-charts';
Sparkline.Inject(SparklineTooltip);

```

## Bind data source to sparkline

The [`dataSource`] property is used for binding data source to the sparkline. This property takes the collection value as input. For example, a list of objects can be provided as input.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs4" %}

## Change the type of sparkline

You can change the sparkline type by setting the [`type`] property to [`Line`], [`Column`], [`WinLoss`], [`Pie`], or [`Area`]. Here, the sparkline type has been set to [`area`].

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs5" %}

## Enable tooltip for sparkline

The sparkline displays additional information through tooltip when the mouse is hovered over the sparkline. You can enable tooltip by setting the [`visible`] property to true in [`tooltipSettings`] and injecting `SparklineTooltip` module using the `Sparkline.Inject(SparklineTooltip )` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs6" %}