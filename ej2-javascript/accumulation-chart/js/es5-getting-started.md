---
layout: post
title: ES5 getting started with ##Platform_Name## Accumulation chart control | Syncfusion
description:  Checkout and learn about ES5 getting started with ##Platform_Name## Accumulation chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: ES5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# ES5 getting started in ##Platform_Name## Accumulation chart control

The Essential JS 2 accumulation chart is provided as a separate control to simplify rendering by excluding axis-related logic. The accumulation chart uses the same core dependencies as the chart control; additional packages are required only for specific features (for example, export and compression features).

## Dependencies

Below is the list of minimum dependencies required to use the accumulation chart.

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Setup for local environment

Follow these steps to set up your local environment.

**Step 1:** Create a root folder **myapp** for your application.

**Step 2:** Create **myapp/resources** folder to store local scripts and styles files.

**Step 3:** Create **myapp/index.js** and **myapp/index.html** files for initializing the Syncfusion Essential JS 2 Accumulation Chart control.

## Adding Syncfusion resources

The Syncfusion Essential JS 2 Accumulation Chart control can be initialized in either of the following ways:

* Using local script.
* Using CDN link for script.

### Using local script

You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential JS 2 product build, you can copy the chart and its dependencies scripts and style file into the **resources/scripts** and **resources/styles** folder.

The following shows the path to the accumulation chart's script and style files.

**Syntax:**

> Dependency script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{DEPENDENCY_PACKAGE_NAME}/dist/global/{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>

**Example:**

> Dependency script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-base/dist/global/ej2-base.min.js`
>
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-charts/dist/global/ej2-charts.min.js`
>

After copying the files, reference the chart scripts from `index.html`. The following HTML shows the minimal chart dependencies.

```

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Accumulation Chart</title>

            <!-- Essential JS 2 Accumulation Chart's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 Accumulation Chart's global script -->
            <script src="resources/scripts/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

### Using CDN link for script

Using CDN link, you can directly refer the chart control's script into the `index.html`.

Refer the chart's CDN links as below.

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js`](http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js)

The following HTML shows the minimal chart dependencies using CDN scripts.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Chart</title>
            <!-- Essential JS 2 Chart's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Adding Accumulation Chart control

Now, you can start adding accumulation chart control in the application. For getting started, add a **div** element for accumulation chart control in **index.html**. Then refer the **index.js** file into the **index.html** file.

This document uses `ej2.min.js`, which includes all Essential JS 2 components and dependencies.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Chart</title>
            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for chart  -->
             <div id="element"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following accumulation chart initialization code in `index.js`.

```javascript

var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
            { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
            { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }],
            xName: 'x',
            yName: 'y'
        }
    ]
});
piechart.appendTo('#element');

```

**Pie series**

By default, a pie series is rendered when JSON data is assigned to the series [`dataSource`](../api/accumulation-chart/accumulationseries#datasource) property. Map JSON fields to the series [`xName`](../api/accumulation-chart/accumulationseries#xname) and [`yName`](../api/accumulation-chart/accumulationseries#yname) properties to bind data correctly.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs29" %}
