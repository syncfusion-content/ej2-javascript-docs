---
layout: post
title: ES5 getting started with ##Platform_Name## Bullet chart control | Syncfusion
description:  Checkout and learn about ES5 getting started with ##Platform_Name## Bullet chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: ES5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# ES5 getting started in ##Platform_Name## Bullet chart control

This section explains the steps required to create a simple Bullet Chart and demonstrates the basic usage of the Bullet Chart control.

## Dependencies

Below is the list of minimum dependencies required to use the Bullet Chart.

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

**Step 3:** Create **myapp/index.js** and **myapp/index.html** files for initializing the Syncfusion Essential 2 Bullet Chart control.

## Adding Syncfusion resources

The Essential JS 2 Bullet Chart control can be initialized by using either of the following ways.

* Using local script.
* Using CDN link for script.

### Using local script

You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential JS 2 product build, you can copy the Bullet Chart and its dependencies scripts and style file into the **resources/scripts** and **resources/styles** folder.

The following shows the path to the bullet chart's script and style file.

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

After copying the files, reference the chart scripts from `index.html`. The following HTML shows the minimal bullet chart dependencies.

```

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Bullet Chart</title>

            <!-- Essential JS 2 Bullet Chart's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 Bullet Chart's global script -->
            <script src="resources/scripts/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

### Using CDN link for script

Using CDN link, you can directly refer the bullet chart control's script into the `index.html`.

Refer the Bullet Chart's CDN links as below.

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js`](http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js)

The following HTML shows the minimal bullet chart dependencies using CDN scripts.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Bullet Chart</title>
            <!-- Essential JS 2 Bullet Chart's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Adding Bullet Chart control

Now, you can start adding Bullet Chart control in the application. For getting started, add a **div** element for Bullet Chart control in **index.html**. Then refer the **index.js** file into the **index.html** file.

This document uses `ej2.min.js`, which includes all Essential JS 2 components and dependencies.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Bullet Chart</title>
            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for bullet chart  -->
             <div id="element"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following Bullet Chart initialization code in `index.js`.

```javascript

var bulletChart = new ej.charts.BulletChart();
bulletChart.appendTo('#element');

```

The below example shows a basic Bullet Chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started-cs1" %}

## BulletChart With Data

This section explains how to plot local data to the Bullet Chart.

```javascript

var data = [
     { value: 100, target: 80 },
     { value: 200, target: 180 },
     { value: 300, target: 280 },
     { value: 400, target: 380 },
     { value: 500, target: 480 },
];
```

Now assign the local data to `dataSource` property. `value` and `target` values should be mapped with `valueField` and `targetField` respectively.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started-cs2" %}

## Add Bullet Chart Title

You can add a title using the `title` property to the Bullet Chart to provide quick information to the user about the data plotted in the Bullet Chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started-cs3" %}

## Ranges

You can add a range using the `ranges` property to the Bullet Chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started-cs4" %}

## Tooltip

You can use tooltip for the Bullet Chart by setting the `enable` property to true in `tooltip` object and by injecting the `BulletTooltip` module using `BulletChart.Inject(BulletTooltip)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started-cs5" %}