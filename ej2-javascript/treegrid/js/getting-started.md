---
layout: post
title: Getting started with ##Platform_Name## Treegrid control | Syncfusion
description: Checkout and learn about Getting started with ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in JavaScript Treegrid control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid and demonstrates the basic usage of the TreeGrid control in a JavaScript application.

## Dependencies

The TreeGrid control requires several packages to function properly. These packages provide the core functionality and supporting components needed for the TreeGrid to work.

Following is the list of dependencies to use the TreeGrid with all features:

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

There are two main approaches to use TreeGrid: **CDN** and **local installation**. This guide covers both, but CDN is simpler for getting started.

### Approach 1: Using CDN

Using a CDN (Content Delivery Network) is the simplest approach to get started. The user can directly link to Syncfusion scripts and styles without installing anything locally. This approach is recommended for initial setup.

**Refer to the [Using CDN link for script and style](#using-cdn-link-for-script-and-style) section below for complete setup.**

### Approach 2: Using Local Installation

For local installation, packages should be installed locally (useful for production applications or offline work):

**Step 1:** Create a root folder `my-app` for your application.

**Step 2:** Create `my-app/resources` folder to store local scripts and style files.
- This `resources` folder will contain:
  - `scripts/` subfolder - stores all Syncfusion JavaScript files
  - `styles/` subfolder - stores all Syncfusion CSS theme files

**Step 3:** Create `my-app/index.js` and `my-app/index.html` files.
- `index.js` will contain your TreeGrid initialization code
- `index.html` will contain the HTML structure and script references

## Adding Syncfusion resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid control can be initialized by using either of the following ways.

* Using CDN links 
* Using local script and style files 

### Using CDN link for script and style

Using CDN, the TreeGrid control's script can be directly referred to and style in your `index.html` without installing anything locally.

**Where to find CDN links:**

The CDN provides the TreeGrid scripts and styles at these paths:

**Syntax:**

> Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/styles/material.css`

**Example with version 32.19:**

> Script: [`https://cdn.syncfusion.com/ej2/32.19/ej2-treegrid/dist/global/ej2-treegrid.min.js`](https://cdn.syncfusion.com/ej2/32.19/ej2-treegrid/dist/global/ej2-treegrid.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/32.19/ej2-treegrid/styles/material.css`](https://cdn.syncfusion.com/ej2/32.19/ej2-treegrid/styles/material.css)

**Complete CDN setup example:**

The following HTML code shows the minimal dependencies needed to load TreeGrid from CDN:

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 TreeGrid</title>
    
    <!-- Essential JS 2 TreeGrid's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
    
    <!-- Essential JS 2 material theme -->
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 TreeGrid's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/32.19/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.19/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.19/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.19/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
    
    <!-- Essential JS 2 TreeGrid's global script -->
    <script src="https://cdn.syncfusion.com/ej2/32.19/ej2-treegrid/dist/global/ej2-treegrid.min.js" type="text/javascript"></script>
</head>
<body>
    <!-- TreeGrid will be rendered here -->
</body>
</html>
```

**CSS files explained:**
- `ej2-base/styles/material.css` - Base theme styles needed by all components
- `ej2-popups/styles/material.css` - Styles for dialogs and popups
- `ej2-grids/styles/material.css` - Grid component styles
- `ej2-treegrid/styles/material.css` - TreeGrid-specific styles

**Important note about CDN:** While CDN is convenient for learning and demos, it loads the complete bundle of all Syncfusion components.For production applications, a build process or the Custom Resource Generator should be used a build process or the [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) to include only the features the user need, reducing file size and improving performance.

### Using local script and style

If the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build is installed, the files should be copied locally instead of using CDN.

**Prerequisites:**
- The user must have Essential Studio JavaScript (Essential JS 2) product build installed
- Access to the installation directory is needed where Syncfusion files are stored

The global scripts and styles can be obtained from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, copy the TreeGrid and its dependencies scripts and style files into the `resources/scripts` and `resources/styles` folders.

**File location syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/32.1.19/Essential JS 2/ej2-treegrid/dist/global/ej2-treegrid.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/32.1.19/Essential JS 2/ej2-treegrid/styles/material.css`

After copying the files, refer the TreeGrid's scripts and styles into the `index.html` file.

**Local setup example:**

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 TreeGrid</title>
    
    <!-- Essential JS 2 TreeGrid's dependent material theme -->
    <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css"/>
    
    <!-- Essential JS 2 material theme -->
    <link href="resources/treegrid/styles/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 TreeGrid's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
    
    <!-- Essential JS 2 TreeGrid's global script -->
    <script src="resources/scripts/ej2-treegrid.min.js" type="text/javascript"></script>
</head>
<body>
</body>
</html>
```

## Adding TreeGrid control

Add the TreeGrid control in **index.js** file using the following code.

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
    <title>Essential JS 2 TreeGrid</title>
    <!-- Essential JS 2 material theme -->
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
    <!-- Add the HTML <div> element for TreeGrid  -->
    <div id="TreeGrid"></div>
    
    <!-- Your TreeGrid initialization script -->
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}

{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs4" %}

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid control.

## See Also

* [TreeGrid Feature Modules](https://ej2.syncfusion.com/javascript/documentation/treegrid/module)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)