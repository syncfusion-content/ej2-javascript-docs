---
layout: post
title: Getting Started with ##Platform_Name## Dropdown Tree | Syncfusion
description: Set up a Syncfusion ##Platform_Name## Dropdown Tree in a plain ES5 JavaScript app using the global script and required dependencies.
platform: ej2-javascript
control: Dropdown Tree
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Dropdown Tree

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework that can be directly used in the latest web browsers.

## Dependencies

The following list of dependencies are required to use the Dropdown Tree control in your application.

```javascript
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dropdown List control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® DropDownTree CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`,`ej2-data`,`ej2-popups`,`ej2-lists`,`ej2-buttons`,`ej2-inputs`and `ej2-navigations` script is the required dependency package for the DropDownTree component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/drop-down-tree/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-dropdowns/dist/global/ej2-dropdowns.min.js
```

## Adding DropDownTree component to the application

 Add the `input` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dropdown Tree** control in the index.html by using the following code.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Dropdown Tree control</title>
            <!-- Essential JS 2 Dropdown Tree's dependent bootstrap5.3 theme -->
            <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/drop-down-tree/index.css" rel="stylesheet" />

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 Dropdown Tree's dependent scripts -->
            <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <input> element  -->
             <input type="text" tabindex="1" id='ddtreeelement' />
            <script>
            // initialize Dropdown Tree control
            var dropDownTreeObj = new ej.dropdowns.DropDownTree();
            // Render initialized Dropdown Tree.
            dropDownTreeObj.appendTo('#ddtreeelement');
            </script>
       </body>
  </html>

```

## Binding data source

The Dropdown Tree control can load the data either from local data sources or remote data services. This can be done using the [`dataSource`](../api/drop-down-tree/fieldsModel#datasource) property that is a member of the [`fields`](../api/drop-down-tree#fields) property. The dataSource property supports array of JavaScript objects and DataManager. Here, an array of JSON values is passed to the Dropdown Tree control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdowntree/es5-getting-started-cs1" %}