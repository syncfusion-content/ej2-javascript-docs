---
layout: post
title: Es5 getting started with ##Platform_Name## Maps component | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Maps component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started with ##Platform_Name## Maps component

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Control Initialization

<!-- markdownlint-disable MD009 -->
<!-- markdownlint-disable MD010 -->
<!-- markdownlint-disable MD031 -->
<!-- markdownlint-disable MD040 -->
The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Local Setup: Using Script and Style References

**Step 1:** Create a folder named `quickstart` for your application.

**Step 2:** Download the global scripts and styles from the [Essential Studio® JavaScript (Essential® JS 2)](https://www.syncfusion.com/downloads/essential-js2) installation location.

**File Path Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example Paths:**
> Dependency Scripts:
>
> `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\32.1.19\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\32.1.19\Web (Essential JS 2)\JavaScript\ej2-data\dist\global\ej2-data.min.js`
>
> `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\32.1.19\Web (Essential JS 2)\JavaScript\ej2-svg-base\dist\global\ej2-svg-base.min.js`
>
> Control Script:
>
> `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\32.1.19\Web (Essential JS 2)\JavaScript\ej2-maps\dist\global\ej2-maps.min.js`

Alternatively, use the combined script file:

> `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`

This file contains all Syncfusion® JavaScript (ES5) UI control resources.

**Alternative Approach:** Use the [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com) online tool to generate custom scripts and styles for specific controls, combining multiple resources into a single optimized file.

**Step 3:** Create a resources folder structure:

```
~/quickstart/
├── resources/
│   ├── scripts/    (copy dependency and control scripts here)
│   └── styles/     (copy control stylesheets here)
├── index.html
└── index.js
```

**Step 4:** Create an HTML file at `~/quickstart/index.html` and add the Essential® JS 2 script and style references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2 Maps</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
        <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 Maps's global script (Control Script) -->
        <script src="resources/scripts/ej2-maps.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Add a container div element to initialize the Maps component. Update `~/quickstart/index.html` with the following code:

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-data.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-svg-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 maps's global script (Control Script) -->
        <script src="resources/maps/ej2-maps.min.js" type="text/javascript"></script>
    </head>
    <body>
    <div id='container'>
        <div id='element'></div>
    </div>
</body>
</html>
```

**Step 6:** Add the Maps component to the div element with **id** attribute as "**element**" using the below code. The below code can be added in a separate script file (index.js) in `~/quickstart/index.js` and refer it in the **script** tag within the **body** tag.

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

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    //..
    //..
    <body>
    <div id='container'>
        <div id='element'></div>
        <!-- Add the Maps script -->
        <script src="index.js"></script>
    </div>
</body>
</html>
```

**Step 7:** Add the data `world_map.js` as a script file within the **head** tag of the HTML code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- Add the worldmap -->
        <script src="world_map.js"></script>
    </head>
</html>
```

> **Note:** The world_map data is required to render the map. Download the data from [this location](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) and include it as a script file in your HTML page.

**Step 8:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript maps** control.

### Using CDN link for script and style reference

**Step 1:** Create a folder named `quickstart` for your application.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls' global scripts are already hosted in the below CDN link formats.

**Common Control Script:**
> Syntax: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/dist/ej2.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/23.1.36/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/dist/ej2.min.js)

**or**

**Individual Control Scripts:**

**Syntax**
>`http://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> Maps Script: [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-maps/dist/global/ej2-maps.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-maps/dist/global/ej2-maps.min.js)
>
>Dependency Scripts
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/dist/global/ej2-base.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/dist/global/ej2-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-data/dist/global/ej2-data.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-data/dist/global/ej2-data.min.js)
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-svg-base/dist/global/ej2-svg-base.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-svg-base/dist/global/ej2-svg-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-pdf-export/dist/global/ej2-pdf-export.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-pdf-export/dist/global/ej2-pdf-export.min.js)
>

**Step 3:** Create a HTML page **index.html** in the **quickstart** folder and add the following CDN link references.
```
<script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js"></script>

```

**Step 4:** Now, add the div element for initiating the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Maps** control in the **index.html** by using following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-maps/dist/global/ej2-maps.min.js"></script>
    </head>
    <body>
        <div id='container'>
            <div id='element'></div>
        </div>
    </body>
</html>
```

**Step 5:** Add the Maps component to the div element with `id` attribute as "**element**" using the below code. The below code can be added as separate script file (index.js) in `~/quickstart/index.js` and refer it in the **script** tag within the **body** tag.

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

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    //..
    //..
    <body>
        <div id='container'>
            <div id='element'></div>
            <!-- Add the Maps script -->
            <script src="index.js"></script>
        </div>
    </body>
</html>
```

**Step 6:** Add the data **world_map.js** as a script file within the **head** tag of the HTML code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- Add the worldmap -->
        <script src="world_map.js"></script>
    </head>
</html>
```

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) here. These data must be referred as script file in the HTML code.

**Step 7:** Now, run the **index.html** in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript maps** control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs54/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs54/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs54" %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892) here.

<!-- markdownlint-disable MD009 -->

## Bind data source to map

The following properties in layers are used for binding data source to map.

* `dataSource`
* `shapeDataPath`
* `shapePropertyPath`

The [`dataSource`](../api/maps/layerSettingsModel#datasource) property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](../api/maps/layerSettingsModel#shapedatapath) property used to refer the data ID in dataSource. Where as, the [`shapePropertyPath`](../api/maps/layerSettingsModel#shapepropertypath) property is used to refer the column name in shapeData to identify the shape. Both the properties are related to each other. When the values of the shapeDataPath property in the dataSource property and the value of shapePropertyPath in the shapeData property match, then the associated object from the dataSource is bound to the corresponding shape.

The JSON object "UnCountries" is used as data source below.

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

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data. Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`](../api/maps/shapeSettingsModel#colorvaluepath) property in [`shapeSettings`](../api/maps/shapeSettingsModel).

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

Use the [`titleSettings`](../api/maps/titleSettingsModel) property to add a title to the map. A title provides context and quick information about the shapes and data displayed in the map.

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

Display a legend for the map by setting the [`visible`](../api/maps/legendSettingsModel#visible) property to `true` in the [`legendSettings`](../api/maps/legendSettingsModel) object. The legend helps users understand the meaning of colors and symbols used in the map.

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

Add data labels to display additional information about shapes in the map. Set the [`visible`](../api/maps/dataLabelSettingsModel#visible) property to `true` in the [`dataLabelSettings`](../api/maps/dataLabelSettingsModel) object.

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

The tooltip displays additional information when space constraints prevent using data labels. Enable tooltips by setting the [`visible`](../api/maps/tooltipSettingsModel#visible) property to `true` in the [`tooltipSettings`](../api/maps/tooltipSettingsModel) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs60/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs60/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs60" %}
