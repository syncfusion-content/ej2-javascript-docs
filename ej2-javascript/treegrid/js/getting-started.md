---
layout: post
title: Getting started with ##Platform_Name## Tree Grid control | Syncfusion
description: Checkout and learn about Getting started with ##Platform_Name## Tree Grid control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in JavaScript Tree Grid control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tree Grid and demonstrates the basic usage of the Tree Grid control in a JavaScript application.

## Dependencies

The following packages are required to use the DataGrid with all features. These package names apply to **npm-based projects**. If you are using CDN, all dependencies are automatically included — refer to the [Adding Syncfusion® Tree Grid CDN resources](#adding-syncfusion-tree-grid-cdn-resources) section.

```javascript
	|-- @syncfusion/ej2-treegrid
     |-- @syncfusion/ej2-treegrid
          |-- @syncfusion/ej2-base
          |-- @syncfusion/ej2-data
          |-- @syncfusion/ej2-buttons
          |-- @syncfusion/ej2-popups
          |-- @syncfusion/ej2-navigations
          |-- @syncfusion/ej2-dropdowns
          |-- @syncfusion/ej2-lists
          |-- @syncfusion/ej2-inputs
          |-- @syncfusion/ej2-splitbuttons
          |-- @syncfusion/ej2-calendars
          |-- @syncfusion/ej2-excel-export
          |-- @syncfusion/ej2-pdf-export
          |-- @syncfusion/ej2-file-utils
          |-- @syncfusion/ej2-compression
          |-- @syncfusion/ej2-grids
```

## Setup for local environment

Follow these steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Open Visual Studio Code and create two files inside the **my-app** folder:
- **index.html** — the main HTML file that loads the CDN resources and provides the tree grid container element.
- **index.js** — the JavaScript file where the DataGrid control is initialized.

Refer to the [Adding Syncfusion® Tree Grid CDN resources](#adding-syncfusion-tree-grid-cdn-resources) and [Adding Tree Grid control](#adding-tree-grid-control) sections below for the content to add to each file.

**Step 3:** In **index.html**, add a `<script>` tag at the end of `<body>` to link **index.js**:

```html
<script src="index.js" type="text/javascript"></script>
```

## Adding Syncfusion® Tree Grid CDN resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tree Grid control can be initialized by the following way.

This setup includes additional dependencies required for more advanced functionalities of the tree grid, such as buttons, dropdowns, navigations and other components. Use this setup when you need to integrate additional features like filtering, paging, column menu and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Tree Grid</title>

    <!-- Essential JS 2 Tree Grid's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-notifications/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Tree Grid's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-notifications/dist/global/ej2-notifications.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-treegrid/dist/global/ej2-treegrid.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>
```
> To include all required Essential JS 2 styles and scripts, use the following CDN links.
>
> <!-- Essential JS 2 combined material theme (all components) -->
> <!-- <link href="https://cdn.syncfusion.com/ej2/34.1.29/material.css" rel="stylesheet" type="text/css" /> -->
>
> <!-- Essential JS 2 combined script (all components) -->
> <!-- <script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script> -->

## Adding Tree Grid control

Add the Tree Grid control in **index.js** file using the following code.

{% tabs %}
{% highlight ts tabtitle="index.js" %}

var data = [
    { 
        TaskID: 1, TaskName: 'Planning', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4,
        subtasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
        ],
    },
    {
        TaskID: 4, TaskName: 'Design', StartDate: new Date('02/10/2025'), EndDate: new Date('02/14/2025'), Duration: 5,
        subtasks: [
            { TaskID: 5, TaskName: 'Software Specification', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3, },
            { TaskID: 6, TaskName: 'Design Documentation', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2, },
            { TaskID: 7, TaskName: 'Design complete', StartDate: new Date('02/14/2025'), EndDate: new Date('02/14/2025'), Duration: 1 },
        ],
    },
];

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 200 },
        {
            field: 'StartDate', 
            headerText: 'Start Date', 
            width: 90, 
            textAlign: 'Right', 
            type: 'date',
            format: 'yMd'
        },
        {
            field: 'EndDate', 
            headerText: 'End Date', 
            width: 90, 
            textAlign: 'Right', 
            type: 'date',
            format: 'yMd'
        },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 Tree Grid</title>

    <!-- Essential JS 2 combined material theme (all components) -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 combined script (all components) -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
    <!-- Add the HTML <div> element for Tree Grid  -->
    <div id="TreeGrid"></div>
    
    <!-- Your Tree Grid initialization script -->
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}

{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs4" %}

## Registering a license key

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls require a valid license key from version 16.2.0.17 onwards. Without a license key, a license validation message will appear in the browser console.

**Step 1:** Obtain your license key from the [Syncfusion License Portal](https://www.syncfusion.com/account/downloads) or from the [licensing FAQ page](https://ej2.syncfusion.com/documentation/licensing/licensing-troubleshoot).

**Step 2:** Register the license key in your **index.js** file before initializing any Syncfusion<sup style="font-size:70%">&reg;</sup> control.

```javascript
// Register Syncfusion license key
ej.base.registerLicense('YOUR_LICENSE_KEY_HERE');
```

> Replace `'YOUR_LICENSE_KEY_HERE'` with the actual license key obtained from your Syncfusion account. For more information, refer to the [Syncfusion Licensing documentation](https://ej2.syncfusion.com/documentation/licensing/license-key-registration).

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tree Grid control.

## Troubleshooting

**Grid renders blank / no rows appear**
- Verify that the `dataSource` property is set and the data array is not empty.
- Open the browser developer console (F12) and check for JavaScript errors.
- Ensure all CDN script tags are loading successfully (check the Network tab for 4xx/5xx errors).

**License validation warning in the console**
- Register your license key before instantiating any Syncfusion<sup style="font-size:70%">&reg;</sup> control. Refer to the [Registering a license key](#registering-a-license-key) section.

**Scripts blocked when opening via `file://`**
- Serve the application through a local HTTP server. Refer to the [Run the application](#run-the-application) section.

**CDN resources fail to load**
- Check your internet connection.
- Confirm the version number in the CDN URLs matches a valid published release. See the [Syncfusion CDN page](https://cdn.syncfusion.com/ej2/) for available versions.

## See Also

* [Tree Grid Feature Modules](https://ej2.syncfusion.com/javascript/documentation/treegrid/module)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)