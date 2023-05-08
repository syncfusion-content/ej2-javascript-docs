---
layout: post
title: Getting started with ##Platform_Name## Range navigator control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Range navigator control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Range navigator control

This section explains you the steps required to create a simple range navigator and demonstrate the basic usage of the range navigator control.

## Dependencies

 The list of minimum dependencies required to use a range navigator are follows:

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars
```

## Setup for Local Development

Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart), and install the necessary npm packages using the following command line scripts.

```javascript
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install
```

## Configuring System JS

Syncfusion Chart packages have to be mapped in the `system.config.js` configuration file to render range navigator.

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
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
    "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js"    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');

```

## Add Range Navigator to the Project

Add the HTML div element for Range Navigator into your `index.html`. [src/index.html]

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Animation</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
     <!--container which is going to render the RangeNavigator-->
     <div id='element'>
     </div>
</body>

</html>
```

Now import the RangeNavigator component into your `app.ts` to instantiate a RangeNavigator and append the range navigator instance to the `#element` [src/app/app.ts].

```ts

import { RangeNavigator } from '@syncfusion/ej2-charts';

// initialize RangeNavigator component
let range: RangeNavigator = new RangeNavigator();

// render initialized RangeNavigator
range.appendTo('#element');


```

## Run the Application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

The below example shows a basic Range Navigator.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rangenavigator/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rangenavigator/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs6" %}
{% endif %}

## Module Injection

To create range navigator with additional features, inject the required modules. The following modules are used to extend rangenavigator’s basic functionality.

* `AreaSeriesService` - Inject this module to use area series.
* `DateTimeService` - Inject this module to use date time axis.
* `RangeTooltipService` - Inject this module to show the tooltip.

Now import the above mentioned modules from chart package and inject it into the RangeNavigator component using `RangeNavigator.Inject` method.

 ```javascript
   import { RangeNavigator, AreaSeries, DateTime, RangeTooltip }from '@syncfusion/ej2-charts';
   RangeNavigator.Inject(AreaSeries, DateTime, RangeTooltip);
 ```

## Populate Range Navigator with Data

Now, we are going to provide data to the range navigator. Add a series object to the range navigator  by using `series` property. Now map the field names x and y in the JSON data to the `xName` and `yName` properties of the series, then set the JSON data to dataSource property.
Since the JSON contains Datetime data, set the `valueType` as `DateTime`. By default, the axis valueType is Numeric.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rangenavigator/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rangenavigator/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs7" %}
{% endif %}

>Note: Get data from [here](https://gitlab.syncfusion.com/essential-studio/ej2-samples/blob/master/src/rangenavigator/default_data.json).

The sample should look like our [default](http://npmci.syncfusion.com/production/demos/#/material/rangenavigator/default.html), don’t worry about the gradient color, let it takes the default color.

## Enable Tooltip

The tooltip is useful to show the selected data. You can enable tooltip by setting the enable property as true in `tooltip` object and by injecting `RangeTooltipService` module using `RangeNavigator.Inject(RangeTooltip)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rangenavigator/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rangenavigator/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs8" %}
{% endif %}