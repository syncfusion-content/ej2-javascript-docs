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

# Getting started in ##Platform_Name## Treegrid control

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

The TreeGrid control is now ready for addition in the application.
Add a `div` element for TreeGrid in `index.html`, then refer the `index.js` file.

**Complete HTML and JavaScript setup:**

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 TreeGrid</title>
    
    <!-- Essential JS 2 CSS from CDN -->
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Scripts from CDN -->
    <script src="https://cdn.syncfusion.com/ej2/32.19/dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
    <!-- Add the HTML <div> element for TreeGrid  -->
    <div id="TreeGrid"></div>
    
    <!-- Your TreeGrid initialization script -->
    <script src="index.js" type="text/javascript"></script>
</body>
</html>
```

**JavaScript initialization in `index.js`:**

```javascript
// Create a new TreeGrid instance
var treeGridObj = ej.treegrid.TreeGrid();

// Attach TreeGrid to the HTML element with id 'TreeGrid'
// This mounts the TreeGrid component to <div id="TreeGrid"></div>
treeGridObj.appendTo('#TreeGrid');
```

**What this code does:**
- `ej.treegrid.TreeGrid()` - Creates a new TreeGrid instance using the global `ej` namespace (ES5 approach)
- `appendTo('#TreeGrid')` - Mounts the TreeGrid to the HTML `<div>` element with `id="TreeGrid"`
- The `#TreeGrid` selector matches the `<div id="TreeGrid">` element in your HTML

**Note:** This guide uses the ES5 global namespace approach (`ej.treegrid.TreeGrid`) which is loaded via CDN. For more advanced setups using ES6 modules, refer to your project's module bundler documentation.

## Defining Row Data

Data in the TreeGrid is displayed through the `dataSource` property.
This accepts either an array of JavaScript objects or a `DataManager` instance.

The TreeGrid supports two ways to define hierarchical data:
1. **Hierarchical binding** - Child records are nested inside parent records (using `childMapping` property)
2. **Self-referencing** - Parent and child are in the same flat array, linked by IDs (using `idMapping` and `parentIdMapping` properties)

**Complete example with hierarchical data:**

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 TreeGrid</title>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/32.19/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdn.syncfusion.com/ej2/32.19/dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
    <div id="TreeGrid"></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>
```

**JavaScript with sample data:**

```javascript
// Define your hierarchical data
var sampleData = [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        duration: 5,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), duration: 5 },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), duration: 5},
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), duration: 5},
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), duration: 0}
        ]
    }
];


var treeGridObj = ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks'
});

treeGridObj.appendTo('#TreeGrid');
```

**What this code does:**
- `dataSource: sampleData` - Binds the array of data to the TreeGrid
- `childMapping: 'subtasks'` - Tells TreeGrid that children are in the `subtasks` property
- Each parent record (taskID 1) has a `subtasks` array containing child records (taskID 2, 3, 4, 5)

**Hierarchical vs Self-referencing:**
- **Hierarchical (shown above)**: Use when children are nested inside parents. Each parent has a `subtasks` (or similar) property containing its children.
- **Self-referencing**: Use when all records are in one flat array, linked by parent/child IDs. Specify `idMapping` (record ID) and `parentIdMapping` (parent record ID).

## Defining Columns

The TreeGrid displays data in columns. Define columns as an array with properties that control how data appears.

**Key column properties:**
- `field` - Maps to a property in your data object
- `headerText` - The text shown in the column header
- `width` - Column width in pixels
- `textAlign` - Alignment: 'Left', 'Center', or 'Right'
- `type` - Data type for formatting: 'date', 'number', etc.
- `format` - Format string for displaying values (e.g., 'yMd' for dates, 'C2' for currency)

**Complete example with columns:**

```javascript
var sampleData = [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        duration: 5,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), duration: 5 },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), duration: 5},
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), duration: 5},
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), duration: 0}
        ]
    }
];

var treeGridObj = ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        {
            field: 'startDate', 
            headerText: 'Start Date', 
            width: 90, 
            textAlign: 'Right', 
            type: 'date',
            format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 380
});

treeGridObj.appendTo('#TreeGrid');
```

**Important: The `treeColumnIndex` property**

The `treeColumnIndex` property specifies which column displays the tree structure (with expand/collapse icons).

**Column array vs self-referencing data:**
- **Columns array**: Always define columns explicitly. This tells TreeGrid what data to show and how to format it.
- **childMapping** (`subtasks` property): Used when data has nested children
- **idMapping and parentIdMapping**: Used when data is flat and records reference their parents by ID

## Module injection

Module injection is the process of registering feature modules with TreeGrid. Without injecting a module, that feature won't be available even if the user configure it.


- `Page` - Enable paging (split data into pages)
- `Sort` - Enable sorting by clicking column headers
- `Filter` - Enable filtering with a filter bar
- `ExcelExport` - Enable exporting to Excel format
- `PdfExport` - Enable exporting to PDF format
- Additional modules like `Edit`, `Resize`, `Reorder` are available for other features
These modules should be injected into the TreeGrid using the `ej.treegrid.TreeGrid.Inject` method.

> Additional feature modules are available [`here`](./module).

## Enable paging

The paging feature enables users to view the TreeGrid record in a paged view. It can be enabled by setting the  [`allowPaging`](../api/treegrid#allowpaging-boolean) property to true. Inject the [`Page`](../api/treegrid#pagermodule)
 module as follows. If the [`Page`](../api/treegrid#pagermodule) module is not injected, the pager will not be rendered in the TreeGrid. The pager can be customized using the [`pageSettings`](../api/treegrid#pagesettings) property.

In root-level paging mode, paging is based on the root-level rows only, i.e., it ignores the child row count and it can be enabled by using the [`pageSettings.pageSizeMode`](../api/treegrid/pageSettingsModel#pagesizemode) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/tree-grid-cs1/index.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/treegrid/tree-grid-cs1/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tree-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs1" %}

## Enable sorting
The sorting feature enables record ordering. This feature is enabled by setting the
../api/treegrid/#allowsorting property to true. The
[`Sort`](../api/treegrid#sortmodule) module must be injected as follows. Without the
[`Sort`](../api/treegrid#sortmodule) module, sorting does not occur when a header is
clicked. Sorting behavior can be customized using the
[`sortSettings`](../api/treegrid#sortsettings) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/tree-grid-cs2/index.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/treegrid/tree-grid-cs2/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tree-grid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs2" %}

## Enable filtering

The filtering feature enables viewing a reduced set of records based on filter
criteria. It can be enabled by setting the
[`allowFiltering`](../api/treegrid#allowfiltering) property to true. The
[`Filter`](../api/treegrid#filtermodule) module must be injected as follows.
If the [`Filter`](../api/treegrid#filtermodule) module is not injected, the
filter bar is not rendered in the TreeGrid. The filtering feature can be
customized using the [`filterSettings`](../api/treegrid#filtersettings) property.

By default, filtered records are shown along with its parent records. This behavior can be changed by using the [`filterSettings-hierarchyMode`](../api/treegrid/filterSettingsModel#hierarchymode) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/tree-grid-cs3/index.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/treegrid/tree-grid-cs3/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tree-grid-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs3" %}

## Run the application

Now, run the `index.html` in the web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/tree-grid-cs4/index.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/treegrid/tree-grid-cs4/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tree-grid-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs4" %}

## Deploy the application

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid control features are segregated into individual feature modules. The [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build and `CDN` scripts contains code for all features used in the TreeGrid. So, do not  use the `CDN` scripts in production. It is strongly recommended to generate script files to use in production using our **Custom Resource Generator**[`(CRG)`](https://crg.syncfusion.com/) for Essential<sup style="font-size:70%">&reg;</sup> JS 2. CRG allows to generate the bundled script for the currently enabled features in TreeGrid.

> The [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page provides a comprehensive overview of its advanced capabilities. The JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) demonstrates effective techniques for presenting and manipulating data.

## Handling errors

Error handling in Tree Grid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#actionfailure) event. When configuring the Tree Grid or enabling specific features through its API, mistakes can occur. The `actionFailure` event can be used to manage these errors. This event triggers when such mistakes happen. The `actionFailure` event handles various scenarios, including:

* For CRUD operations, row drag and drop, and persisting the selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#isprimarykey) property is mapped to a unique data column. Failure to do so will cause an error.
* [Paging](https://ej2.syncfusion.com/javascript/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/javascript/documentation/treegrid/virtual-scroll). Enabling `paging` with `virtualization` will result in an error.
* To render the Tree Grid, map either the [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#datasource) or [columns](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#columns) property. Failure to do so will result in an error.
* Freeze columns by mapping either [isFrozen](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#frozencolumns). Enabling both properties simultaneously will result in an error.
* The [detailTemplate](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#detailtemplate) is not supported with `virtualization` and `stacked header`. Enabling them with these features will result in an error.
* The [frozenRows](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#frozenrows) and `frozenColumns` are not supported with [rowtemplate](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#rowtemplate), `detailTemplate`, and [cell editing](https://ej2.syncfusion.com/javascript/documentation/treegrid/editing/cell-editing). Enabling them with these features will result in an error.
* In `stacked header`, the [freeze](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#freeze) direction is incompatible with [column reordering](https://ej2.syncfusion.com/javascript/documentation/treegrid/columns/column-reorder). 
* [Selection](https://ej2.syncfusion.com/javascript/documentation/treegrid/selection/selection) functionality is not supported when using `rowTemplate`. Enabling both properties simultaneously will result in an error.
* Set the [treeColumnIndex](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#treecolumnindex) value to display the tree structure. Make sure the value does not exceed the total column count, or it will result in an error.
* For `virtualization`, do not specify height and width in percentages. Using percentages will result in an error.
* When using the default filter ([filterbar](https://ej2.syncfusion.com/javascript/documentation/treegrid/filtering/filter-bar)) type, do not apply the other [filterType](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/filterType) to columns within the same tree grid, as this will result in an error.
* In Tree Grid, avoid enabling [idMapping](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#childmapping) simultaneously. Enabling both properties at the same time will result in an error.
* The [showCheckbox](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#showcheckbox) column should only be defined in the tree column. Defining it elsewhere will result in an error.
* The [textAlign](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#textalign) right is not applicable for tree columns in the Tree Grid.  Enabling right alignment for tree columns will result in an error.

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#actionfailure) event in the Tree Grid control to display an exception when `isPrimaryKey` are not configured properly in the Tree Grid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/error-handling/index.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/treegrid/error-handling/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/error-handling/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/error-handling" %}

## See Also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)