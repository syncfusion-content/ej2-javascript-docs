---
layout: post
title: Es5 getting started with ##Platform_Name## Image editor control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Image editor control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the Image Editor control in your application.

```js
|-- @syncfusion/ej2-image-editor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\styles\material.css`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-image-editor\dist\global\ej2-image-editor.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-base\styles\material.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-image-editor\styles\material.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2 - Image Editor</title>
          <!-- Essential JS 2 Image Editor's dependent material theme -->
          <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>
          <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>
          <link href="resources/inputs/material.css" rel="stylesheet" type="text/css"/>
          <link href="resources/navigations/material.css" rel="stylesheet" type="text/css"/>
          <link href="resources/popups/material.css" rel="stylesheet" type="text/css"/>
          <link href="resources/splitbuttons/material.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Image Editor's control material theme -->
          <link href="resources/image-editor/material.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Image Editor's dependent global script -->
          <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
          <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
          <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
          <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
          <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
          <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>

          <!-- Essential JS 2 Image Editor's control global script -->
          <script src="resources/image-editor/ej2-image-editor.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Image Editor` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Image Editor** control in the `index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 - Image Editor</title>
    <!-- Essential JS 2 Image Editor's dependent material theme -->
    <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/inputs/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/navigations/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/popups/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/splitbuttons/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Image Editor's control material theme -->
    <link href="resources/image-editor/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Image Editor's dependent global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Image Editor's control global script -->
    <script src="resources/image-editor/ej2-image-editor.min.js" type="text/javascript"></script>
</head>

<body>
    <!--element which is going to render-->
     <div id="imageeditor"></div>

    <script>
        //Image Editor items definition
        this.default = function() {
            new ej.imageeditor.ImageEditor({
            width: '800px',
            height: '600px',
            }, '#imageeditor');
        };
    </script>
</body>

</html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Image Editor** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/material.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-image-editor/dist/global/ej2-image-editor.min.js`](https://cdn.syncfusion.com/ej2/ej2-image-editor/dist/global/ej2-image-editor.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-image-editor/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-image-editor/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `Image Editor` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Image Editor** control in the index.html by using following code.

**Step 4:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Image Editor** control.

## Adding Image Editor control to the application

Add the HTML DIV tag with the `id` attribute as `imageeditor` to your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/es5-getting-started-cs1" %}
