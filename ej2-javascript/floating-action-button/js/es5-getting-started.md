---
layout: post
title: Es5 getting started with ##Platform_Name## Floating action button control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Floating action button control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Floating action button control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The list of dependencies required to use the Floating Action Button control in your application is given as follows:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Control Initialization

The JavaScript (ES5) Floating Action Button control can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\styles\material.css`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**

> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-buttons\dist\global\ej2-buttons.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-base\styles\material.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-buttons\styles\material.css`

The below located script and style file contains all Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `~/quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the JavaScript (ES5) script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>JavaScript (ES5)</title>
            <!-- JavaScript (ES5) Floating Action Button's dependency style -->
            <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Floating Action Button's control style -->
            <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Floating Action Button's dependency global script -->
            <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>

            <!-- JavaScript (ES5) Floating Action Button's control global script -->
            <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Floating Action Button` element and initiate the `JavaScript (ES5) Floating Action Button` control in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>JavaScript (ES5)</title>
            <!-- JavaScript (ES5) Floating Action Button's dependency style -->
            <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Floating Action Button's control style -->
            <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Floating Action Button's dependency global script -->
            <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>

            <!-- JavaScript (ES5) Floating Action Button's control global script -->
            <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!--Element to render the Floating Action Button control-->
            <button id='fab'></button>
            <script>
                // Initialize Floating Action Button control
                var fab = new ej.buttons.Fab({ content:'Add'});

                // Render initialized Floating Action Button.
                fab.appendTo('#fab');
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion JavaScript (ES5) Floating Action Button** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The JavaScript (ES5) control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/material.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js`](https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `Floating Action Button` element and initiate the `JavaScript (ES5) Floating Action Button` control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the `Syncfusion JavaScript Floating Action Button` control.

## Click event

The floating action button control triggers the `onclick` event when you click on the floating action button. You can use this event to perform the required action.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/floating-action-button/events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/events-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/floating-action-button/events-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs1" %}
