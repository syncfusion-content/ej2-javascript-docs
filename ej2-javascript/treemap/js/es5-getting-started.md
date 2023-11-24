---
layout: post
title: Es5 getting started with ##Platform_Name## Treemap control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Treemap control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Treemap control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Control Initialization

The Essential JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script references in a HTML page.
* Using CDN link for script reference.

### Using local script references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
>`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-data\dist\global\ej2-data.min.js`
>
>`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-svg-base\dist\global\ej2-svg-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-treemap\dist\global\ej2-treemap.min.js`

The below located script file contains all Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts from the above installed location to `~/quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` and add the Essentials JS 2 script references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-data.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-svg-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 treemap's global script (Control Script) -->
        <script src="resources/treemap/ej2-treemap.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Now, initiate the `Syncfusion JavaScript (ES5) TreeMap` control in the `~/quickstart/index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-data.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-svg-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 treemap's global script (Control Script) -->
        <script src="resources/treemap/ej2-treemap.min.js" type="text/javascript"></script>
    </head>
    <body>
        <div id='element' style="display: block;"></div>
        <script>
            var treemap = new ej.treemap.TreeMap({
                dataSource: [
                    { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
                    { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
                    { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
                    { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
                    { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
                    { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
                    { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
                    { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
                    { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
                    { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
                    { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
                ],
                weightValuePath: 'Count',
                leafItemSettings: {
                    labelPath: 'State',
                }
            });
            treemap.appendTo('#element');
        </script>
    </body>
</html>
```

**Step 6:** Now, run the **index.html** in web browser, it will render the **Syncfusion JavaScript TreeMap** control.

### Using CDN link for script reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The Essential JS 2 controls's common script is already hosted in the below CDN link format.

**Common Control Scripts:**
> Syntax: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/dist/ej2.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/23.1.36/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/dist/ej2.min.js)
>

**or**

**Individual Control Scripts:**

**Syntax**
>`http://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> TreeMap Script: [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-treemap/dist/global/ej2-treemap.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-treemap/dist/global/ej2-treemap.min.js)
>
> Dependency Scripts
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/dist/global/ej2-base.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/dist/global/ej2-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-data/dist/global/ej2-data.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-data/dist/global/ej2-data.min.js)
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-svg-base/dist/global/ej2-svg-base.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-svg-base/dist/global/ej2-svg-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-pdf-export/dist/global/ej2-pdf-export.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-pdf-export/dist/global/ej2-pdf-export.min.js)
>

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the following CDN link references.
```
<script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
	<script src="https://cdn.syncfusion.com/ej2/ej2-treemap/dist/global/ej2-treemap.min.js"></script>

```
 Now, initiate the `Syncfusion JavaScript (ES5) TreeMap` control in the **index.html** by using following code.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs1" %}


## Apply color mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bound data source. Specify the field name from values that have to be compared for the item in the equalColorValuePath or rangeColorValuePath property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs2" %}

## Enable legend

Legend is enabled for the tree map control by setting the visible property to true in legendSettings object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs3" %}

## Add labels

Labels are added to show additional information of the items in tree map. By default, the visibility of the label is set to true. This can be customized using the showLabels property in leafItemSettings.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs4" %}

## Enable tooltip

Tooltips are used when labels cannot display information due to space constraints. Tooltips can be enabled by setting the visible property to true in tooltipSettings object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs5" %}
