---
layout: post
title: Es5 getting started with ##Platform_Name## Timeline control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Timeline control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Timeline control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework that can be directly used in latest web browsers.

## Control initialization

The Essential JS 2 JavaScript controls can be initialized by using any of the following two ways:

* Using local script and style references in an HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in an HTML page

**Step 1:** Create an app folder `myapp` for Essential JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2/confirm) build installed location.

**Syntax:**
> Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**

> Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-layouts\dist\global\ej2-layouts.min.js`
>
> Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-layouts\styles\material.css`

The below located script and style file contains all Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

**Step 3:** Create a folder `myapp/resources`, and copy and paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create an HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Timeline's global and dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-layouts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, create a `div` element to apply the `Essential JS 2 Timeline` control in the `index.html` by using following code.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Timeline's global and dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-layouts.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the div element  -->
            <div id="timeline"></div>

            <script>
            //Initialize Timeline control
            var timeline = new ej.layouts.Timeline({
               items: [{}, {}, {}, {}]
            });
            
            //Render initialized Timeline control
            timeline.appendTo('#timeline');
        </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 Timeline** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential JS 2 JavaScript controls.

**Step 2:** The Essential JS 2 control's global scripts and styles are already hosted in the following CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-layouts/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-layouts/styles/material.css)

**Step 3:** Create an HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `div` element and initiate the `Essential JS 2 Timeline` control in the index.html by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in the web browser, it will render the `Essential JS 2 Timeline` control.