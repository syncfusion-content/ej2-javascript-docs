---
layout: post
title: ES5 getting started with ##Platform_Name## Chart control | Syncfusion
description:  Check out and learn about ES5 getting started with ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Chart
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# ES5 getting started with ##Platform_Name## Chart control

This section explains the steps required to create a simple chart and demonstrates the basic usage of the chart control.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/javascript/documentation/ai-coding-assistant/overview)

## Dependencies

Below is the list of minimum dependencies required to use the Chart.

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```
Note: @syncfusion/ej2-pdf-export, @syncfusion/ej2-file-utils, and @syncfusion/ej2-compression are optional—required only for PDF export features. Omit if not using exports.

## Setup for local environment

Follow these steps to set up your local environment.

**Step 1:** Create a root folder **myapp** for your application.

**Step 2:** Create **myapp/resources** folder to store local scripts and styles.

**Step 3:** Create **myapp/index.js** and **myapp/index.html** files for initializing the Syncfusion Essential JS 2 Chart control.

## Adding Syncfusion resources

The Syncfusion Essential JS 2 Chart control can be initialized in either of the following ways:

* Using local script.
* Using CDN links for scripts.

### Using local script

You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential JS 2 product build, you can copy the chart and its dependency scripts and style files into the **resources/scripts** and **resources/styles** folder.

The following shows the path to the chart's script and style files.

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
  <html xmlns="https://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Chart</title>

            <!-- Essential JS 2 Chart's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 Chart's global script -->
            <script src="resources/scripts/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

### Using CDN links for scripts

> Use versionless URLs for automatic updates, or specify a version (e.g., /32.2.3/) for stability. Check [Syncfusion releases](https://www.syncfusion.com/products/release-history) for the latest.

Using CDN links, you can reference the chart control's script in the `index.html`.

Refer the chart's CDN links as follows.

**Syntax:**

> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: [`https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js`](https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js)

The following HTML shows the minimal chart dependencies using CDN scripts.

```html
<!DOCTYPE html>
	<html xmlns="https://www.w3.org/1999/xhtml">
  <head>
    <title>Essential JS 2 Chart</title>
    <!-- Include Essential JS 2 other component's script based on features used -->
    <script
      src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdn.syncfusion.com/ej2/ej2-pdf-export/dist/global/ej2-pdf-export.min.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdn.syncfusion.com/ej2/ej2-file-utils/dist/global/ej2-file-utils.min.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdn.syncfusion.com/ej2/ej2-compression/dist/global/ej2-compression.min.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js"
      type="text/javascript"
    ></script>
    <!-- Essential JS 2 Chart's global script -->
    <script
      src="https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js"
      type="text/javascript"
    ></script>
  </head>
  <body></body>
</html>

```

## Adding Chart control

Now you can add the Chart control to the application. To get started, add a **div** element for the Chart in **index.html**. Then reference the **index.js** file in **index.html**.

This document uses `ej2.min.js`, which includes all Essential JS 2 components and dependencies.

```html
<!DOCTYPE html>
  <html xmlns="https://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Chart</title>
            <!-- Essential JS 2 all script -->
            <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for chart  -->
             <div id="element"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

The following example shows a basic Chart.

```javascript

var chart = new ej.charts.Chart();
chart.appendTo('#element');

```

The below example shows a basic Chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs2" %}

## Populate chart with data

This section explains how to plot the following JSON data to the chart.

```javascript

var chartData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

```

Add a series object to the chart by using the [`series`](../api/chart/series) property. Map the JSON fields `month` and `sales` to the series [`xName`](../api/chart/series#xname) and [`yName`](../api/chart/series#yname) properties, and set the JSON array as the [`dataSource`](../api/chart/series#datasource) property.

Since the JSON contains category data, set the [`valueType`](../api/chart/axisModel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs3" %}

The sales values are in thousands, so format the vertical axis label by adding `$` as a prefix and `K` as a suffix to each label. This can be achieved by setting `${value}K` to the [`labelFormat`](../api/chart/axisModel#labelformat) property of the axis. Here, `{value}` acts as a placeholder for each axis label.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs4" %}

## Add chart title

You can add a title using the [`title`](../api/chart/chartModel#title) property to the chart to provide quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs5" %}

## Enable legend

You can enable the legend for the chart by setting the [`visible`](../api/chart/legendSettingsModel#visible) property to `true` in the [`legendSettings`](../api/chart/chartModel#legendsettings) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs6" %}

## Add data label

You can add data labels to improve the readability of the chart. This can be achieved by setting the [`visible`](../api/chart/datalabelsettingsmodel#visible) property to `true` in the [`dataLabel`](../api/chart/markersetingsmodel#datalabel) object. Now, the data labels are arranged smartly based on the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs7" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [`enable`](../api/chart/tooltipSettingsModel#enable) property to `true` in the [`tooltip`](../api/chart/chartModel#tooltip) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started-cs8" %}