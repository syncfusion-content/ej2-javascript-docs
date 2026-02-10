---
layout: post
title: Getting started with ##Platform_Name## Badge control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Badge control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Badge control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge and demonstrate the basic usage of the Badge control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Badge component in your application is given below:

```javascript
|-- @syncfusion/ej2-notifications
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style references in an HTML page

**Step 1:** Create an app folder `myapp` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**

> Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-notifications\dist\global\ej2-notifications.min.js`
>
> Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-notifications\styles\material.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

**Step 3:** Create a folder `myapp/resources`, and copy and paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create an HTML page (index.html) in `myapp` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, create a `span` element to apply the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge** control in the `index.html` by using following code.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

       </head>
       <body>
            <!-- Add the HTML <span> element  -->
            <h1>Badge control <span class="e-badge e-badge-primary">New</span></h1>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 control's global scripts and styles are already hosted in the following CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css)
>
>[`https://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css)

**Step 3:** Create an HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `span` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge** control in the index.html by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/badge/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in the web browser to display the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge** control.

## See Also

[Types of Badge](./types)
