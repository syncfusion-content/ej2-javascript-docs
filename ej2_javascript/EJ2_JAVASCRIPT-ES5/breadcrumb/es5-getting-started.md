---
title: "Breadcrumb Javascript (es5) Getting Started"
component: "Breadcrumb"
description: "This section helps to learn how to create the breadcrumb in HTML5 JavaScript (ECMAScript 5) application with its basic features in step-by-step procedure."
---

# Getting Started  with JavaScript(ES5)

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the Breadcrumb control in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Control Initialization

The Essential JS 2 JavaScript controls can be initialized by using either of the following ways.

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
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-navigations\dist\global\ej2-navigations.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-base\styles\material.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-navigations\styles\material.css`

The below located script and style file contains all Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2 - Breadcrumb</title>
          <!-- Essential JS 2 Breadcrumb's dependent material theme -->
          <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>
          <link href="resources/lists/material.css" rel="stylesheet" type="text/css"/>
          <link href="resources/popups/material.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Breadcrumb's control material theme -->
          <link href="resources/navigations/material.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Breadcrumb's dependent global script -->
          <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
          <script src="resources/data/ej2-data.min.js" type="text/javascript"></script>
          <script src="resources/lists/ej2-lists.min.js" type="text/javascript"></script>
          <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>

          <!-- Essential JS 2 breadcrumb's control global script -->
          <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Breadcrumb` element and initiate the `Syncfusion JavaScript Breadcrumb` control in the `index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 - Breadcrumb</title>
    <!-- Essential JS 2 Breadcrumb's dependent material theme -->
    <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/lists/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/popups/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Breadcrumb's control material theme -->
    <link href="resources/navigations/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Breadcrumb's dependent global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/data/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/lists/ej2-lists.min.js" type="text/javascript"></script>
    <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Breadcrumb's control global script -->
    <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
</head>

<body>
    <!--element which is going to render-->
    <ul id="breadcrumb"></ul>

    <script>
        //Breadcrumb items definition
        this.default = function() {
            new ej.navigations.Breadcrumb({
                enableNavigation: false
            }, '#keyboard-navigation');
        };
    </script>
</body>

</html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion JavaScript Breadcrumb** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The Essential JS 2 control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/material.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js`](https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `Breadcrumb` element and initiate the `Syncfusion JavaScript Breadcrumb` control in the index.html by using following code.

**Step 4:** Now, run the `index.html` in web browser, it will render the `Syncfusion JavaScript Breadcrumb` control.

## Adding Breadcrumb component to the application

Add the HTML UL tag with the `id` attribute as `breadcrumb` to your `index.html` file.

{% tab template="breadcrumb/es5-getting-started", sourceFiles="index.html, styles.css", isDefaultActive=true %}

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 - Breadcrumb</title>

    <!-- Essential JS 2 Breadcrumb's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Breadcrumb's material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Breadcrumb's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Breadcrumb's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>

    <!--style reference from app-->
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <!--element which is going to render-->
    <ul id="breadcrumb"></ul>

    <script>
        ej.base.enableRipple(true);

        new ej.navigations.Breadcrumb({
            enableNavigation: false
        }, '#breadcrumb');
    </script>
</body>

</html>
```

{% endtab %}

## Adding Breadcrumb items to the project

Use `items` property to bind items for Breadcrumb component. The below example demonstrates the basic rendering of Breadcrumb with items support.

{% tab template="breadcrumb/es5-getting-started", sourceFiles="index.html, styles.css", isDefaultActive=true %}

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 - Breadcrumb</title>

    <!-- Essential JS 2 Breadcrumb's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Breadcrumb's material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Breadcrumb's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Breadcrumb's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>

    <!--style reference from app-->
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <!--element which is going to render-->
    <ul id="breadcrumb"></ul>

    <script>
        ej.base.enableRipple(true);
        //Breadcrumb items definition
        var items = [
            {
                iconCss: 'e-icons e-home',
                url: "https://ej2.syncfusion.com/javascript/demos",
            },
            {
                text: "Components",
                url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/grid-overview",
            },
            {
                text: "Navigations",
                url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/breadcrumb/default",
            },
            {
                text: "Breadcrumb",
                url: "./breadcrumb/default",
            }
        ];

        new ej.navigations.Breadcrumb({
            items: items,
            enableNavigation: false
        }, '#breadcrumb');
    </script>
</body>

</html>
```

{% endtab %}

## Enable or Disable Navigation

This feature enables or disables the item navigation. By default, the navigation will be enabled when setting `Url` property. To prevent breadcrumb item navigation, set `enableNavigation` property as false in Breadcrumb. The below example shows enabling and disabling the navigation of Breadcrumb items.

{% tab template="breadcrumb/es5-getting-started", sourceFiles="index.html, styles.css", isDefaultActive=true %}

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 - Breadcrumb</title>

    <!-- Essential JS 2 Breadcrumb's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Breadcrumb's material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Breadcrumb's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Breadcrumb's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>

    <!--style reference from app-->
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <!--element which is going to render-->
    <div id="breadcrumb-control">
        <div class="header"><b>EnableNavigation - false</b></div><br />
        <nav id="breadcrumb"></nav>
        <br /><br/>
        <div class="header"><b>EnableNavigation - true</b></div><br />
        <nav id="breadcrumb2"></nav>
    </div>

    <script>
        ej.base.enableRipple(true);
        //Breadcrumb items definition
        var items = [
            {
                iconCss: 'e-icons e-home',
                url: "https://ej2.syncfusion.com/javascript/demos",
            },
            {
                text: "Components",
                url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/grid-overview",
            },
            {
                text: "Navigations",
                url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/breadcrumb/default",
            },
            {
                text: "Breadcrumb",
                url: "./breadcrumb/default",
            }
        ];

        new ej.navigations.Breadcrumb({
            items: items,
            enableNavigation: false
        }, '#breadcrumb');
        new ej.navigations.Breadcrumb({
            items: items,
            enableNavigation: true
        }, '#breadcrumb2');
    </script>
</body>

</html>
```

{% endtab %}