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

In EJ2, accumulation chart is implemented as a separate control to avoid the axis related logics. The dependencies for accumulation chart is same as chart control.

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

## Installation and Configuration

* To get started with accumulation chart component, clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project, and install necessary packages by using the following commands:

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

* Map the `Accumulation chart packages` in `system.config.js` configuration file.

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
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js"

    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});
```

> The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`src/styles/styles.css, system.config.js`)  to start with all Essential JS 2 components.

## Add Accumulation Chart to the Project

Add HTML div elements in your `index.html`. `[src/index.html]` for accumulation chart.

```html
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
     <!--container which is going to render the Accumulation chart-->
     <div id='element'>
     </div>
</body>

</html>
```

Now, import an accumulation chart component in your `app.ts` to instantiate the accumulation chart, and append the accumulation chart instance to the `#element` `[src/app/app.ts]`

```javascript
import { AccumulationChart } from '@syncfusion/ej2-charts';

// initialize Accumulation Chart component
let chart: AccumulationChart = new AccumulationChart();

// render initialized Accumulation Chart
chart.appendTo('#element');
```

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

```
npm run start
```