---
layout: post
title: Es5 getting started with ##Platform_Name## Sidebar control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Sidebar control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization

Create an app folder `myapp` in local machine to initialize Essential JS 2 JavaScript components.

Using either of the following way to refer the required script and styles.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2/confirm) build installed location.

**Step 2:** To render Sidebar component, need to add Sidebar and its dependent packages from below installed location.

#### Dependencies

* ej2-base

* ej2-navigations

**Syntax:**

> package: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}`

**Example:**

> Package: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-base`
>
> packages: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-navigations`
>

**Step 3:** Create a folder `myapp/resources` and copy/paste the above mentioned packages from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Sidebar and its dependent theme -->
            <link href="resources/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Sidebar's global script -->
            <script src="resources/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

**Step 5:** Now, add the `div` element and initiate the `Essential JS 2 Sidebar` component in the `index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2</title>
    <!-- Sidebar and its dependent theme -->
    <link href="resources/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 Sidebar's global script -->
    <script src="resources/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
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

**Step 2:** Have to add `CDN` global script and style for calender and its dependent packages in `myapp/index.html` like below.

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

Enabling the [`showBackdrop`](../api/sidebar/#showbackdrop) in the Sidebar component will prevent the main content from user interactions, when it is in expanded state. Here, the DOM elements will not get changed. It only closes the main content by covering with a black backdrop overlay and focuses the Sidebar in the screen.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-howTo-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-howTo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-howTo-cs1" %}

## Position

Positioning the Sidebar to the right or left of the main content can be achieved by using the [`position`](../api/sidebar/#position) property. If the position is not set, the Sidebar will expand from the left to the body element.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/position-cs1" %}