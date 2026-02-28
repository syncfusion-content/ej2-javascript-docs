---
layout: post
title: Getting started with ##Platform_Name## Circular Gauge Component | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Circular Gauge Component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Circular Gauge component

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Circular Gauge and demonstrate the basic usage of the Circular Gauge component in a JavaScript application.

## Dependencies

A list of dependencies to use the circular gauge with all features.

```
|-- @syncfusion/ej2-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Circular Gauge component.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Circular Gauge component can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

To use local scripts and styles for Syncfusion<sup style="font-size:70%">&reg;</sup> Circular Gauge, you can follow these steps:

1. **Download Essential<sup style="font-size:70%">&reg;</sup> Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2):** Obtain the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installation location.

2. **Copy Files to Resources Folder:** After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, copy the circular gauge's scripts, and dependencies scripts and style file into the designated folders:

   * **Scripts:** Copy the scripts to the **resources/scripts** folder.
   * **Styles:** Copy the styles to the **resources/styles** folder.

3. **Locate Script and Style Files:** Identify the location of the circular gauge's script and style files. The syntax for the file paths are as follows:

**Syntax:**
> **Script:** `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> **Styles:** `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> **Script:** `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-circulargauge/dist/global/ej2-circulargauge.min.js`
>
> **Styles:** `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-circulargauge/styles/material.css`

4. **Referencing in HTML File:** Once the files are copied, reference the circular gauge's scripts and styles into the **index.html** file.

Here's an example of referencing the circular gauge's scripts and styles in an HTML file:

**a. Essential<sup style="font-size:70%">&reg;</sup> Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Circular Gauge. Use this setup for a lightweight application that requires basic circular gauge functionality.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2 Circular Gauge</title>

        <!-- Essential JS 2 Circular Gauge's dependent material theme -->
        <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css" />
        <link href="resources/circulargauge/styles/material.css" rel="stylesheet" type="text/css" />

        <!-- Essential JS 2 Circular Gauge's dependent scripts -->
        <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>

        <!-- Essential JS 2 Circular Gauge's global script -->
        <script src="resources/scripts/ej2-circulargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**b. Extended Dependency (Additional Components)**

This setup includes additional dependencies required for more advanced functionalities of the circular gauge, such as legend, annotations, tooltip and PDF export. Use this setup when you need to integrate additional features like PDF export and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2 Circular Gauge</title>

        <!-- Essential JS 2 Circular Gauge's dependent material theme -->
        <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css" />
        <link href="resources/circulargauge/styles/material.css" rel="stylesheet" type="text/css" />

        <!-- Essential JS 2 Circular Gauge's dependent scripts -->
        <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>
        <script src="resources/scripts/ej2-pdf-export.min.js" type="text/javascript"></script>

        <!-- Essential JS 2 Circular Gauge's global script -->
        <script src="resources/scripts/ej2-circulargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**c. Comprehensive Dependency (All Components)**

This setup includes all possible dependencies for Syncfusion<sup style="font-size:70%">&reg;</sup> components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion<sup style="font-size:70%">&reg;</sup> components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2 Circular Gauge</title>

        <!-- Essential JS 2 material theme -->
        <link href="resources/styles/material.css" rel="stylesheet" type="text/css" />
        <!-- Essential JS 2 script -->
        <script src="resources/scripts/ej2.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

### Using CDN link for script and style

Using CDN links, you can directly refer the circular gauge component's script and style into the **index.html**.

Refer the circular gauge's CDN links as below

**Syntax:**
> **Script:** `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> **Styles:** `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> **Script:** [`https://cdn.syncfusion.com/ej2/ej2-circulargauge/dist/global/ej2-circulargauge.min.js`](http://cdn.syncfusion.com/ej2/ej2-circulargauge/dist/global/ej2-circulargauge.min.js)
>
> **Styles:** [`https://cdn.syncfusion.com/ej2/ej2-circulargauge/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-circulargauge/styles/material.css)

Here's an example of referencing the circular gauge's scripts and styles in an HTML file using CDN links:

**a. Essential<sup style="font-size:70%">&reg;</sup> Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Circular Gauge. Use this setup for a lightweight application that requires basic circular gauge functionality.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2 Circular Gauge</title>

        <!-- Essential JS 2 Circular Gauge's dependent material theme -->
        <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.syncfusion.com/ej2/ej2-circulargauge/styles/material.css" rel="stylesheet" type="text/css" />

        <!-- Essential JS 2 Circular Gauge's dependent script -->
        <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
        <script src="http://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>

        <!-- Essential JS 2 Circular Gauge's global script -->
        <script src="https://cdn.syncfusion.com/ej2/ej2-circulargauge/dist/global/ej2-circulargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**b. Extended Dependency (Additional Components)**

This setup includes additional dependencies required for more advanced functionalities of the circular gauge, such as legend, annotations, tooltip and PDF export. Use this setup when you need to integrate additional features like PDF export and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2 Circular Gauge</title>

        <!-- Essential JS 2 Circular Gauge's dependent material theme -->
        <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.syncfusion.com/ej2/ej2-circulargauge/styles/material.css" rel="stylesheet" type="text/css" />

        <!-- Essential JS 2 Circular Gauge's dependent scripts -->
        <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>

        <!-- Essential JS 2 Circular Gauge's global script -->
        <script src="https://cdn.syncfusion.com/ej2/ej2-circulargauge/dist/global/ej2-circulargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**c. Comprehensive Dependency (All Components)**

This setup includes all possible dependencies for Syncfusion<sup style="font-size:70%">&reg;</sup> components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion<sup style="font-size:70%">&reg;</sup> components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2 Circular Gauge</title>

        <!-- Essential JS 2 material theme -->
        <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
        <!-- Essential JS 2 all script -->
        <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

Based on your requirement, additional dependencies can be included as needed. In this documentation, the common **ej2.min.js** and **material.css** are used, which include all the Essential<sup style="font-size:70%">&reg;</sup> JS 2 components and their dependent scripts and theme files.

## Adding Circular Gauge component

Now, you can start adding Circular Gauge component in the application. For getting started, add a **div** element for Circular Gauge component in **index.html**. Then refer the **index.js** file into the **index.html** file.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2 Circular Gauge</title>

        <!-- Essential JS 2 material theme -->
        <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
        <!-- Essential JS 2 all script -->
        <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Add the HTML <div> element for circular gauge  -->
        <div id="element"></div>
        <script src="index.js" type="text/javascript"></script>
    </body>
</html>
```

Place the following circular gauge code in the **index.js**.

```js
var circulargauge = new ej.circulargauge.CircularGauge();
circulargauge.appendTo('#element');
```

## Set pointer value

The pointer value displayed on the gauge can be controlled using the [value](../api/circular-gauge/pointer#value-number) property of the [pointers](../api/circular-gauge/pointer) API. The circular gauge has an option to define multiple axes. Each axis in this array supports various properties. The following example demonstrates how to set a custom pointer value.

```js
var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        pointers: [{
            value: 60
        }]
    }]
});
circulargauge.appendTo('#element');
```

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Circular Gauge component.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/es5-getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/es5-getting-started-cs1" %}

## Deploy the application

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Circular Gauge component features are segregated into individual feature-wise modules. The [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build and CDN scripts include code for all Circular Gauge features. Therefore, these are not recommended for production environments. For production use, generate optimized script and style files using the Custom Resource Generator [(CRG)](https://crg.syncfusion.com/) for Essential<sup style="font-size:70%">&reg;</sup> JS 2. CRG will allow you to generate the bundled script for the currently enabled features in circular gauge.

## See also

* [How to customize the appearance of circular gauge](../circular-gauge/gauge-appearance)
* [How to work with pointers in circular gauge](../circular-gauge/gauge-pointers)
* [How to work with ranges in circular gauge](../circular-gauge/gauge-ranges)
