---
layout: post
title: Es5 getting started with ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Stepper control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies is required to use the Stepper control in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
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

> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\21.1.35\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\21.1.35\Web (Essential JS 2)\JavaScript\ej2-navigations\dist\global\ej2-navigations.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\21.1.35\Web (Essential JS 2)\JavaScript\ej2-base\styles\material.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\21.1.35\Web (Essential JS 2)\JavaScript\ej2-navigations\styles\material.css`

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
    <title>Essential JS 2 - Stepper</title>
    <!-- Essential JS 2 Stepper's dependent material theme -->
    <link href="resources/base/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/navigations/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Stepper's dependent global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
  </head>
  <body></body>
</html>
```

**Step 5:** Now, add the `Stepper` element and initiate the `Syncfusion JavaScript Stepper` control in the `index.html` by using the following code snippet.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

  <body>
     <!--Element to render the Stepper control-->
    <nav id="stepper"></nav>

    <script>

      // Initialize Stepper control
      var stepper = new ej.stepper.Stepper({
        steps: [{}, {}, {}, {}, {}],
      });

      // Render initialized Stepper.
      stepper.appendTo("#stepper");

    </script>
  </body>
</html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion JavaScript (ES5) Stepper** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The Essential JS 2 control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**

> Dependency Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{DEPENDENCY_PACKAGE_NAME}/styles/material.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: [`https://cdn.syncfusion.com/ej2/22.1.34/ej2-navigations/dist/global/ej2-navigations.min.js`](https://cdn.syncfusion.com/ej2/22.1.34/ej2-navigations/dist/global/ej2-navigations.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/22.1.34/ej2-navigations/styles/material.css`](https://cdn.syncfusion.com/ej2/22.1.34/ej2-navigations/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `Stepper` element, define the steps using `steps` property and initiate the `Syncfusion JavaScript (ES5) Stepper` control in the `index.html` by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stepper/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the `Syncfusion JavaScript (ES5) Stepper` control.

## Configure icon and label

You can define the step icon and label by setting the `iconCss` and `label` properties.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/es5-iconWithLabel-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/es5-iconWithLabel-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stepper/es5-iconWithLabel-cs1" %}