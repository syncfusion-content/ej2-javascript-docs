---
layout: post
title: Getting started with ##Platform_Name## Progress Bar | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Progress Bar component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Progress Bar Component

This section explains the steps required to create a simple Progress Bar and demonstrate the basic usage of the Progress Bar component. A Progress Bar visually represents the completion status of a task or process, making it useful for tracking file uploads, data processing, installations, and other long-running operations.

## Dependencies

The following list of dependencies are required to use the Progress Bar component in your application:

```javascript
|-- @syncfusion/ej2-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data: "*"
    |-- @syncfusion/ej2-svg-base
```

## Setup for local environment

Follow these steps to set up your local environment.

**Step 1:** Create a root folder **myapp** for your application.

**Step 2:** Create **myapp/resources** folder to store local scripts and styles files.

**Step 3:** Create **myapp/index.js** and **myapp/index.html** files for initializing Essential<sup style="font-size:70%">&reg;</sup> JS 2 Progress Bar component.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Progress Bar component can be initialized by using either of the following approaches.

* Using local scripts
* Using CDN links for scripts

### Using local script

You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, you can copy the Progress Bar and its dependencies scripts and style file into the **resources/scripts** and **resources/styles** folder.

Refer the below code to find location of the Progress Bar script and style file.

**Syntax:**

> Dependency script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>

**Example:**

> Dependency script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-svg-base/dist/global/ej2-svg-base.min.js`
>
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-progressbar/dist/global/ej2-progressbar.min.js`
>

After copying the files, reference the Progress Bar scripts in the `index.html` file.
The following HTML example shows the minimal dependencies required for the Progress Bar.

```html

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
  <body>

       <head>
            <title>Essential JS 2 Progress Bar</title>

             <!-- Essential JS 2 Progress Bar's dependent scripts -->
            <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 Progress Bar's global script -->
            <script src="resources/scripts/ej2.min.js" type="text/javascript"></script>
       </head>

       </body>
  </html>

```

### Using CDN link for script

Using a CDN link, you can directly reference the Progress Bar component's script in the `index.html` file without local installation.

Reference the Progress Bar CDN links as follows:

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-progressbar/dist/global/ej2-progressbar.min.js`](http://cdn.syncfusion.com/ej2/ej2-progressbar/dist/global/ej2-progressbar.min.js)

The following HTML example shows the minimal dependencies required for Progress Bar using CDN.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Progress Bar</title>
            <!-- Essential JS 2 Progress Bar global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-progressbar/dist/global/ej2-progressbar.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Adding Progress Bar component

You can now add the Progress Bar component to your application. To get started, add a **div** element in **index.html** to serve as the container for the Progress Bar. Then reference the **index.js** file in **index.html**.

This example uses **ej2.min.js**, which includes all Essential<sup style="font-size:70%">&reg;</sup> JS 2 components and their dependencies.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Progress Bar</title>
            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for Progress Bar  -->
             <div id="element"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following Progress Bar code in the **index.js**

```javascript

  var percentageProgress = new ej.progressbar.ProgressBar({
      value: 40});
  percentageProgress.appendTo('#element');

```
{% previewsample "page.domainurl/code-snippet/progressbar/progressbar-cs14" %}