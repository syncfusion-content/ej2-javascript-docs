---
layout: post
title: Getting started with ##Platform_Name## Range Slider control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Range Slider control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Range Slider control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider and demonstrate the basic usage of the Range Slider control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Range Slider component in your application is given below:

```js
|-- @syncfusion/ej2-inputd
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `my-app` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**

> Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-inputs\dist\global\ej2-inputs.min.js`
>
> Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-inputs\styles\material.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

**Step 3:** Create a folder `my-app/resources` and copy/paste the global scripts and styles from the above installed location to `my-app/resources` location.

**Step 4:** Create an HTML page (index.html) in the `my-app` folder and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Range Slider control</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Inputs's global and dependent script -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Slider` element and initialize the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider** control in the `index.html` file by using the following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Range Slider control</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Inputs's global and dependent script -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
            <div id='element'></div>
            <script>
               // Initialize Essential JS 2 JavaScript Range Slider control
               var sliderInstance = new ej.inputs.Slider({ value: 30 });
               //Render initialized Range Slider
               sliderInstance.appendTo("#element");
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `my-app` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js`](https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css)

**Step 3:** Create an HTML page (index.html) in the `my-app` folder and add the CDN link references. Now, add the `Slider` element and initialize the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider** control in the `index.html` file by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/es5-getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in a web browser. It will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider** control.

> Need to refer dependency control styles and scripts as like above example. We can also use [CRG](https://crg.syncfusion.com/) to generate combined control styles.

## See Also

[Slider Types](./types)

[Slider Formatting](./format)

[Orientation Slider](./orientation)

[Ticks in Slider](./ticks)

[Tooltip in Slider](./tooltip)