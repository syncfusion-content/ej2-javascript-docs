---
layout: post
title: Getting Started with ##Platform_Name## Skeleton | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Skeleton control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Skeleton

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Skeleton and demonstrates the basic usage of the Skeleton control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Skeleton component in an application is given below:

```js
|-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up the local environment.

**Step 1:** Create a root folder named **my-app** for the application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Skeleton control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Skeleton control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The global scripts and styles are available in the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

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
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-notifications\dist\global\ej2-notifications.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-base\styles\material.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-notifications\styles\material.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `~/quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2</title>
    <!-- Essential JS 2 Skeleton's dependency style -->
    <link href="resources/base/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Skeleton's control style -->
    <link href="resources/notifications/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Skeleton's dependency global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Skeleton's control global script -->
    <script src="resources/notifications/ej2-notifications.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>
```

**Step 5:** Now, add the `Skeleton` element and initialize the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Skeleton** control in the `index.html` using the following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2</title>
    <!-- Essential JS 2 Skeleton's dependency style -->
    <link href="resources/base/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Skeleton's control style -->
    <link href="resources/notifications/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Skeleton's dependency global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Skeleton's control global script -->
    <script src="resources/notifications/ej2-notifications.min.js" type="text/javascript"></script>
</head>

<body>
    <!-- element which is going to render -->
    <div id='skeleton'></div>
    <script>

        // initialize Skeleton control
        var skeleton = new ej.notifications.Skeleton({ height: '15px' });

        // Render initialized Skeleton.
        skeleton.appendTo('#skeleton');
    </script>
</body>

</html>
```

**Step 6:** Now, run the `index.html` in a web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Skeleton** control.

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
> Script: [`https://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js`](https://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the
`Skeleton` element and initialize the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Skeleton** control in the index.html using the following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2</title>
    <!-- Essential JS 2 Skeleton's dependency style -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Skeleton's control style -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css" rel="stylesheet"
        type="text/css" />

    <!-- Essential JS 2 Skeleton's dependency global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Skeleton's control global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js"
        type="text/javascript"></script>
</head>

<body>
    <!-- element which is going to render -->
    <div id='skeleton'></div>
    <script>

        // initialize Skeleton control
        var skeleton = new ej.notifications.Skeleton({ height: '15px' });

        // Render initialized Skeleton.
        skeleton.appendTo('#skeleton');
    </script>
</body>

</html>
```

**Step 4:** Now, run the `index.html` in a web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Skeleton** control.

The output will be as follows:

> In the previous example, the `#skeleton` is the `id` of the HTML element in a page to which the skeleton is initialized.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/skeleton/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/getting-started-cs1" %}
