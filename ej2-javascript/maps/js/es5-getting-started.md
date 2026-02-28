---
layout: post
title: Getting started with ##Platform_Name## Maps component | Syncfusion
description:  Checkout and learn about getting started with ##Platform_Name## Maps component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Maps component

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Maps and demonstrate the basic usage of the Maps control in a JavaScript application.

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Dependencies

A list of dependencies to use the Maps with all features.

```
|-- @syncfusion/ej2-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Maps control.

## Adding Syncfusion® resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Maps control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

To use local scripts and styles for Syncfusion® Maps, you can follow these steps:

**1. Download Essential Studio® JavaScript (Essential® JS 2):** Obtain the global scripts and styles from the [Essential Studio® JavaScript (Essential® JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installation location.

**2. Copy Files to Resources Folder:** After installing the Essential® JS 2 product build, copy the Maps's scripts, and dependencies scripts and style file into the designated folders:

* **Scripts:** Copy the scripts to the **resources/scripts** folder.
* **Styles:** Copy the styles to the **resources/styles** folder.

**3. Locate Script and Style Files:** Identify the location of the Maps's script and style files. The syntax for the file paths are as follows:

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-maps/dist/global/ej2-maps.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-maps/styles/material.css`

**4. Referencing in HTML File:** Once the files are copied, reference the Maps's scripts and styles into the **index.html** file.

Here's an example of referencing the Maps's scripts and styles in an HTML file:

**a. Essential® Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion® Maps. Use this setup for a lightweight application that requires basic Maps functionality.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Maps</title>

    <!-- Essential JS 2 Maps's dependent material theme -->
    <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/maps/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Maps's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Maps's global script -->
    <script src="resources/scripts/ej2-maps.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>
```

**b. Extended Dependency (Additional Components)**

This setup includes additional dependencies required for more advanced functionalities of the Maps, such as PDF export and compression features. Use this setup when you need to integrate additional features like exporting and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Maps</title>

    <!-- Essential JS 2 Maps's dependent material theme -->
    <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/maps/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Maps's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-pdf-export.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-file-utils.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-compression.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Maps's global script -->
    <script src="resources/scripts/ej2-maps.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>
```

**c. Comprehensive Dependency (All Components)**

This setup includes all possible dependencies for Syncfusion® components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion® components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Maps</title>

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

Using CDN links, you can directly refer the Maps control's script and style into the `index.html`.

Refer the Maps's CDN links as below

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js](http://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js)
>
> Styles: [https://cdn.syncfusion.com/ej2/ej2-maps/styles/material.css](http://cdn.syncfusion.com/ej2/ej2-maps/styles/material.css)

Here's an example of referencing the Maps's scripts and styles in an HTML file using CDN links:

**a. Essential® Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion® Maps. Use this setup for a lightweight application that requires basic Maps functionality.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Maps</title>

    <!-- Essential JS 2 Maps's dependent material theme -->
    <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-maps/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Maps's dependent script -->
    <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="http://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Maps's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>
```

**b. Extended Dependency (Additional Components)**

This setup includes additional dependencies required for more advanced functionalities of the Maps, such as PDF export and compression features. Use this setup when you need to integrate additional features like exporting and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Maps</title>

    <!-- Essential JS 2 Maps's dependent material theme -->
    <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-maps/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Maps's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Maps's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>
```

**c. Comprehensive Dependency (All Components)**

This setup includes all possible dependencies for Syncfusion® components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion® components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Maps</title>

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

## Adding Maps control

Now, you can start adding Maps control in the application. For getting started, add a **div** element for Maps control in **index.html**. Then refer the **index.js** file into the **index.html** file.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Maps</title>

    <!-- Essential JS 2 material theme -->
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for Maps  -->
    <div id="element"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>
```

Place the following Maps code in the **index.js**.

```javascript
var map = new ej.maps.Maps();
map.appendTo('#element');
```

## Defining shape data

Shape data for the Maps control is bind by using the [shapeData](../api/maps/layerSettingsModel#shapedata) property in the [layers](../api/maps/layerSettingsModel). It accepts GeoJSON data which defines the geographic shapes to be rendered in the map.

> **Note:** The shape data (GeoJSON) is required to render the map. Download the shape data from [this location](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) and include it as a script file in your HTML page.

<!-- markdownlint-disable MD009 -->
<!-- markdownlint-disable MD010 -->
<!-- markdownlint-disable MD031 -->
<!-- markdownlint-disable MD040 -->

Create an HTML file at `~/my-app/index.html` and add the following Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references using CDN.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Maps</title>

    <!-- Essential JS 2 material theme -->
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for Maps  -->
    <div id="element"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>
```

Add the shape data **world_map.js** as a script file within the **head** tag of the HTML code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- Add the worldmap -->
        <script src="world_map.js"></script>
    </head>
</html>
```

Place the following Maps code in the **index.js**.

```javascript
var map = new ej.maps.Maps({
   layers: [
        {
            shapeData: world_map
        }
    ]
});
map.appendTo('#element');
```

## Bind data source to map

<!-- markdownlint-disable MD009 -->

Data for the Maps control is bind by using the [dataSource](../api/maps/layerSettingsModel#datasource) property in the [layers](../api/maps/layerSettingsModel). It accepts either an array of JSON objects or [DataManager](../data-binding/data-binding) instance.

The following properties in layers are used for binding data source to map:

* [dataSource](../api/maps/layerSettingsModel#datasource) - Specifies the data source for the layer
* [shapeDataPath](../api/maps/layerSettingsModel#shapedatapath) - Specifies the field name in the dataSource to match with the shape data
* [shapePropertyPath](../api/maps/layerSettingsModel#shapepropertypath) - Specifies the field name in the shapeData to match with the dataSource

The [dataSource](../api/maps/layerSettingsModel#datasource) property takes collection value as input. For example, a list of JSON objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [shapeDataPath](../api/maps/layerSettingsModel#shapedatapath) property is used to refer the data ID in dataSource. Where as, the [shapePropertyPath](../api/maps/layerSettingsModel#shapepropertypath) property is used to refer the column name in shapeData to identify the shape. Both the properties are related to each other. When the values of the shapeDataPath property in the dataSource property and the value of shapePropertyPath in the shapeData property match, then the associated object from the dataSource is bound to the corresponding shape.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs55/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs55/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs55" %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) here.

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data. Specify the field name from which the values have to be compared for the shapes in [colorValuePath](../api/maps/shapeSettingsModel#colorvaluepath) property in [shapeSettings](../api/maps/shapeSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs56/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs56/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs56" %}

## Add Title for Maps

Use the [titleSettings](../api/maps/titleSettingsModel) property to add a title to the map. A title provides context and quick information about the shapes and data displayed in the map.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs57/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs57/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs57" %}

## Enable Legend

Display a legend for the map by setting the [visible](../api/maps/legendSettingsModel#visible) property to `true` in the [legendSettings](../api/maps/legendSettingsModel) object. The legend helps users understand the meaning of colors and symbols used in the map.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs58/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs58/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs58" %}

## Add Data Label

Add data labels to display additional information about shapes in the map. Set the [visible](../api/maps/dataLabelSettingsModel#visible) property to `true` in the [dataLabelSettings](../api/maps/dataLabelSettingsModel) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs59/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs59/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs59" %}

## Enable Tooltip

The tooltip displays additional information when space constraints prevent using data labels. Enable tooltips by setting the [visible](../api/maps/tooltipSettingsModel#visible) property to `true` in the [tooltipSettings](../api/maps/tooltipSettingsModel) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs60/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs60/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs60" %}

## Run the application

Now, run the **index.html** in a web browser. It will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Maps control with all the features configured in the previous sections, including tooltips, legends, data labels, and color mapping.

The final output will display a fully functional interactive map component.

## Deploy the application

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Maps control features are segregated into individual feature-wise modules. The [Essential Studio® JavaScript (Essential® JS 2)](https://www.syncfusion.com/downloads/essential-js2) build and CDN scripts include code for all Maps features. Therefore, these are not recommended for production environments. For production use, generate optimized script and style files using the [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) for Essential<sup style="font-size:70%">&reg;</sup> JS 2. CRG will allow you to generate the bundled script for the currently enabled features in Maps.

## See also

* [How to add multiple layers in Maps](./layers#sublayer)
* [How to add markers in Maps](./markers)
* [How to add bubbles in Maps](./bubble)
* [How to add navigation lines in Maps](./navigation-line)
