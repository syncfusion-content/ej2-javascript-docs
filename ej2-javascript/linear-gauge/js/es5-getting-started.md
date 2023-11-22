---
layout: post
title: Es5 getting started with ##Platform_Name## Linear gauge control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Linear gauge control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Linear gauge control

This section explains you the steps to create a simple Linear Gauge and demonstrates the basic usage of the Linear Gauge component.

## Control Initialization

The Essential JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script references in a HTML page.
* Using CDN link for script reference.

### Using local script references in a HTML page

**Step 1:** Create an app folder **quickstart** for getting started.

**Step 2:** You can get the global scripts from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-lineargauge\dist\global\ej2-lineargauge.min.js`

The below located script file contains all Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script for a set of specific controls. This web tool is used to combine the required control scripts in a single file.

**Step 3:** Create a folder **~/quickstart/resources** and copy/paste the global scripts from the above installed location to **~/quickstart/resources/package** corresponding package location.

**Step 4:** Create a HTML page (index.html) in **~/quickstart/index.html** and add the Essentials JS 2 script references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 lineargauge's global script (Control Script) -->
        <script src="resources/lineargauge/ej2-lineargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Initiate the **Syncfusion JavaScript (ES5) LinearGauge** component in the **~/quickstart/index.html** by using the following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 lineargauge's global script (Control Script) -->
        <script src="resources/lineargauge/ej2-lineargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Add the HTML <lineargauge> element  -->
        <div id="element" style="display: block;">Linear Gauge</div>
        <script>
            // initialize lineargauge control
            var lineargauge = new ej.lineargauge.LinearGauge({ height: '400px' });
            // Render initialized lineargauge.
            lineargauge.appendTo('#element');
        </script>
    </body>
</html>
```

**Step 6:** Run the **index.html** in web browser, it will render the **Syncfusion JavaScript Lineargauge** control.

### Using CDN link for script reference

**Step 1:** Create an app folder **quickstart** for getting started.

**Step 2:** The Essential JS 2 controls' global scripts are already hosted in the below CDN link formats.

**Common Control Script:**
> Syntax: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/dist/ej2.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/23.1.36/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/dist/ej2.min.js)
>

**or**

**Individual Control Scripts:**

**Syntax**
>`http://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> Linear Gauge Script: [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-lineargauge/dist/global/ej2-lineargauge.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-lineargauge/dist/global/ej2-lineargauge.min.js)
>
>Dependency Scripts
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/dist/global/ej2-base.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/dist/global/ej2-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-svg-base/dist/global/ej2-svg-base.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-svg-base/dist/global/ej2-svg-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-pdf-export/dist/global/ej2-pdf-export.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-pdf-export/dist/global/ej2-pdf-export.min.js)

**Step 3:** Create a HTML page (index.html) in **~/quickstart/index.html** location and add the CDN link references. Now, initiate the **Syncfusion JavaScript (ES5) Linear Gauge** control in the **index.html** by using following code.

The below example shows a basic linear gauge component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/es5-getting-started-cs1" %}

**Step 4:** Now, run the **index.html** in web browser, it will render the **Syncfusion JavaScript Linear Gauge** control.

## Adding the Linear Gauge Title

The title can be added to the Linear Gauge component using the [`title`](../api/linear-gauge/linearGaugeModel/#title) property in the Linear Gauge.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/es5-getting-started-cs2" %}

## Setting the start and end of the axis line

The range of the axis can be set using the [`minimum`](../api/linear-gauge/axis/#minimum) and [`maximum`](../api/linear-gauge/axis/#maximum) properties in the Linear Gauge.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/es5-getting-started-cs3" %}

To denote the axis values with temperature units, add the °C as suffix to each label. This can be achieved by setting the **{value}°C** to the [`format`](../api/linear-gauge/labelModel/#format) property in the [`labelStyle`](../api/linear-gauge/axis/#labelstyle) object of the axis. Here, **{value}** acts as a placeholder for each axis label.

To change the pointer value from the default value of the gauge, set the [`value`](../api/linear-gauge/pointer/#value) property in [`pointers`](../api/linear-gauge/pointerModel/) object of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/es5-getting-started-cs4" %}

## Setting the value of the pointer

The pointer value is changed in the below sample using the [`value`](../api/linear-gauge/pointer/#value) property in [`pointers`](../api/linear-gauge/pointer) object of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/linear-gauge/es5-getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/es5-getting-started-cs5" %}
