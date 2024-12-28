---
layout: post
title: Getting started with JavaScript Sidebar control | Syncfusion
description: Checkout and learn about Getting started with JavaScript Sidebar control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: JavaScript
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with JavaScript Sidebar control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization

Create an app folder `myapp` in local machine to initialize Essential JS 2 JavaScript components.

Using either of the following way to refer the required script and styles.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2/confirm) build installed location.

**Syntax:**
> Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**

> Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-navigations\dist\global\ej2-navigations.min.js`
>
> Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-navigations\styles\material.css`

The below located script and style file contains all Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the above mentioned packages from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Sidebar's global and dependent script -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-navigations.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `div` element and initiate the `Essential JS 2 Sidebar` component in the `index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2</title>
    <!-- Essential JS 2 material theme -->
    <link href="resources/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Sidebar's global and dependent script -->
    <script src="resources/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/ej2-navigations.min.js" type="text/javascript"></script>
</head>

<body>
    <!-- Add the HTML <div> element  -->
    <div id='container'>
        <aside id="default">
            <div class="title"> Sidebar </div>
        </aside>
        <!-- end of sidebar element -->
        <!-- main content declaration -->
        <div>
            <div class="title">Main content</div>
            <div class="sub-title"> Content goes here</div>
        </div>
    </div>
    <script>
        // initialize Sidebar component
        var defaultSidebar = new ej.navigations.Sidebar();

        // Render initialized sidebar.
        defaultSidebar.appendTo('#default')
    </script>
</body>

</html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 Sidebar** component.

### Using CDN link for script and style reference

**Step 1:** The Essential JS 2 components scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Style: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js`](http://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css)
>

**Step 2:** Have to add `CDN` global script and style for Sidebar and its dependent packages in `myapp/index.html` like below.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Sidebar Component</title>
    <!-- Sidebar and its dependent theme -->
    <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 Sidebar's global script -->
    <script src="http://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
</head>

<body>
    <!-- Add the HTML <div> element  -->
    <div id='container'>
        <aside id="default">
            <div class="title"> Sidebar </div>
        </aside>
        <!-- end of sidebar element -->
        <!-- main content declaration -->
        <div>
            <div class="title">Main content</div>
            <div class="sub-title"> Content goes here</div>
        </div>
    </div>
    <script>
        // initialize Sidebar component
        var defaultSidebar  = new ej.navigations.Sidebar();

        // Render initialized sidebar.
        defaultSidebar.appendTo('#default')
    </script>
</body>

</html>
```

>When referencing CDN links in application, always ensure the network connection will be in enabled state.

## Enable backdrop

Enabling the `showBackdrop` in the Sidebar component will prevent the main content from user interactions, when it is in expanded state.
Here, the DOM elements will not get changed. It only closes the main content by covering with a black backdrop overlay and focuses the Sidebar in the screen. Sidebar can be rendered with specific width by setting `width` property.

N> To achieve a proper **backdrop**, we suggest that you create a wrapper parent container for the div block in which you intend to enable the backdrop. Set the class name of this parent container as the **target** for the Sidebar. Alternatively, you can place an empty div container after the target container.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-howTo-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-howTo-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-howTo-cs2" %}

## Position

Positioning the Sidebar to the right or left of the main content can be achieved by using the `position` property. If the position is not set, the Sidebar will expand from the left to the body element. `enablePersistence` will persist the component's state between page reloads. `change` event will be triggered when the state(expand/collapse) of the component is changed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/position-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/position-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/position-cs2" %}

## Animate

Animation transitions can be set while expanding or collapsing the Sidebar using the `animate` property. By default , `animate` property is set to true. `enableRTL` will display the sidebar in the right-to-left direction.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/animate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/animate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/animate-cs1" %}

## Close on document click

Sidebar can be closed on document click by setting `closeOnDocumentClick` to true. If this property is not set, the Sidebar will not close on document click since its default value is false. Sidebar can be kept opened during rendering using `isOpen` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/document-click-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/document-click-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/document-click-cs1" %}

## Enable gestures

Expand or collapse the Sidebar while swiping in touch devices using `enableGestures` property. By default, `enableGestures` is set to true.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/gestures-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/gestures-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/gestures-cs1" %}

## See Also

* [Sidebar with navigation menu](https://ej2.syncfusion.com/javascript/demos/#/material/sidebar/sidebar-menu.html)
* [Sidebar responsive panel](https://ej2.syncfusion.com/javascript/demos/#/material/sidebar/responsive-panel.html)
* [Sidebar with listView](./how-to/sidebar-with-list-view/)
* [Usecase sample](https://ej2.syncfusion.com/showcase/javascript/webmail/#/home)
