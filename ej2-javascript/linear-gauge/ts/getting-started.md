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

This section explains you the steps to create a simple Linear Gauge and demonstrates the basic usage of the Linear Gauge component.

## Dependencies

Following is the list of minimum dependencies required to use the Linear Gauge.

```javascript
|-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
```

## Installation and Configuration

* To get started with the LinearGauge component, clone the Essential JS 2 quickstart project from [`GitHub`](https://github.com/syncfusion/ej2-quickstart.git) and install the necessary npm packages by using the following commands.

  ```
   git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
   cd quickstart
   npm install
  ```

## Configuring System JS

Syncfusion Linear Gauge packages can be mapped in the **system.config.js** configuration file.

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
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-lineargauge": "syncfusion:ej2-lineargauge/dist/ej2-lineargauge.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`system.config.js` ) to start with all Essential JS 2 components.

## Adding Linear Gauge component to the Project

The Essential JS2 Linear Gauge component can be added to the application. To get started, add the Linear Gauge component to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the Linear Gauge element in the **index.html** file using the following code.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Linear gauge</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <!--system js reference and configuration-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
     <!-- container which is going to render the linear gauge -->
     <div id='container'>
     </div>
</body>

</html>
```

Import the LinearGauge component in the **app.ts** file to initialize the Linear Gauge and append the Linear Gauge instance to the `#container`.

```javascript
import { LinearGauge } from '@syncfusion/ej2-lineargauge';

// initialize linear gauge component
let gauge: LinearGauge = new LinearGauge();

// render initialized linear gauge
gauge.appendTo('#container');
```

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

  ```
   npm start
  ```

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

```ts
import { GaugeTooltip, Annotations } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Annotations, GaugeTooltip);

```

## Adding the Linear Gauge Title

The title can be added to the Linear Gauge component using the [`title`](../api/linear-gauge/linearGaugeModel#title) property in the Linear Gauge.

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

The range of the axis can be set using the [`minimum`](../api/linear-gauge/axis#minimum) and [`maximum`](../api/linear-gauge/axis#maximum) properties in the Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs4" %}

To denote the axis values with temperature units, add the °C as suffix to each label. This can be achieved by setting the **{value}°C** to the [`format`](../api/linear-gauge/labelModel/#format) property in the [`labelStyle`](../api/linear-gauge/axis#labelstyle) object of the axis. Here, **{value}** acts as a placeholder for each axis label.

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
