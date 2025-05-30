---
layout: post
title: Getting started with ##Platform_Name## Treegrid control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Treegrid control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid and demonstrates the basic usage of the TreeGrid control in a JavaScript application.

## Dependencies

Following is the list of dependencies to use the TreeGrid with all features.

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

Refer to the following steps to setup your local environment.

**Step 1:** Create a root folder `myapp` for your application.

**Step 2:** Create `myapp/resources` folder to store local scripts and styles files.

**Step 3:** Create `myapp/index.js` and `myapp/index.html` files for initializing Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, copy the TreeGrid and its dependencies scripts and style file into the `resources/scripts` and `resources/styles` folder.

Refer to the following code to find location TreeGrid's script and style file.

**Syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/26.1.35/Essential JS 2/ej2-treegrid/dist/global/ej2-treegrid.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/26.1.35/Essential JS 2/ej2-treegrid/styles/material.css`

After copying the files, refer the TreeGrid's scripts and styles into the `index.html` file.
The following HTML code example shows the minimal dependency of TreeGrid.

```

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

### Using CDN link for script and style

Using CDN link, you can directly refer the TreeGrid control's script and style into the `index.html`.

Refer to the TreeGrid's CDN links as follows.

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: [`https://cdn.syncfusion.com/ej2/26.1.35/ej2-treegrid/dist/global/ej2-treegrid.min.js`](https://cdn.syncfusion.com/ej2/ej2-treegrid/dist/global/ej2-treegrid.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/26.1.35/ej2-treegrid/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-treegrid/styles/material.css)

The following HTML code example shows the minimal dependency of TreeGrid.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 TreeGrid</title>
            <!-- Essential JS 2 TreeGrid's dependent material theme -->
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 TreeGrid's dependent script -->
            <script src="http://cdn.syncfusion.com/ej2/26.1.35/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/26.1.35/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/26.1.35/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/26.1.35/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 TreeGrid's global script -->
            <script src="http://cdn.syncfusion.com/ej2/26.1.35/ej2-treegrid/dist/global/ej2-treegrid.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Adding TreeGrid control

Now, you can start adding TreeGrid control in the application. For getting started, add a `div` element for TreeGrid control in `index.html`. Then refer the `index.js` file into the `index.html` file.

In this document context, the `ej2.min.js` is used, which includes all the Essential<sup style="font-size:70%">&reg;</sup> JS 2 components and its dependent scripts.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 TreeGrid</title>
            <!-- Essential JS 2 TreeGrid's dependent material theme -->
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/26.1.35/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for TreeGrid  -->
             <div id="TreeGrid"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following TreeGrid code in the `index.js`.

```javascript

var treeGridObj = ej.treegrid.TreeGrid();
treeGridObj.appendTo('#TreeGrid');

```

## Defining Row Data

Data for the TreeGrid control is bind by using the `dataSource` property. It accepts either an array of JavaScript object or `DataManager` instance.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 TreeGrid</title>
            <!-- Essential JS 2 TreeGrid's dependent material theme -->
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/26.1.35/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/26.1.35/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for TreeGrid  -->
             <div id="TreeGrid"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following TreeGrid code in the `index.js`.

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
    }];
var treeGridObj = ej.treegrid.TreeGrid({dataSource: sampleData});
treeGridObj.appendTo('#TreeGrid');

```

## Defining Columns

The TreeGrid has an option to define the columns as an array. In these columns, the following properties are used to customize the columns.

* The `field` has been added to map with a property name in an array of JavaScript objects.
* The `headerText` has been added to change the title of columns.
* The `textAlign` has been added to change the alignment of columns. By default, columns will be left aligned. To change the columns to right align, define `textAlign` to `Right`.
* Also, the another useful property, `format` has been used. Using this, you can format number and date values to standard or custom formats. Here, it is defined for the conversion of numeric values to currency.

Tree Column which is used to expand or collapse child rows is defined by using [`treeColumnIndex`](../api/treegrid/#treecolumnindex) property.

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
    }];
var treeGridObj = ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 380
});
treeGridObj.appendTo('#TreeGrid');

```

In the above code example, the hierarchical data binding is represented in which the [`chilMapping`](../api/treegrid/#childmapping) property denotes the hierarchy relationship; whereas in self-referencing data binding [`idMapping`](../api/treegrid/#idmapping) and [`parentIdMapping`](../api/treegrid/#parentidmapping) denotes the hierarchy relationship.

## Module injection

To create a treegrid with additional features, inject the required modules. The following modules are used to extend TreeGrid's basic functionality.

* `Page`: Inject this module to use paging feature.
* `Sort`: Inject this module to use sorting feature.
* `Filter`: Inject this module to use filtering feature.
* `ExcelExport`: Inject this module to use Excel export feature.
* `PdfExport`: Inject this module to use PDF export feature.

These modules should be injected into the TreeGrid using the `ej.treegrid.TreeGrid.Inject` method.

> Additional feature modules are available [`here`](./module).

## Enable paging

The paging feature enables users to view the TreeGrid record in a paged view. It can be enabled by setting the  [`allowPaging`](../api/treegrid/#allowpaging-boolean) property to true. Inject the [`Page`](../api/treegrid/#pagermodule)
 module as follows. If the [`Page`](../api/treegrid/#pagermodule) module is not injected, the pager will not be rendered in the TreeGrid. The pager can be customized using the [`pageSettings`](../api/treegrid/#pagesettings) property.

In root-level paging mode, paging is based on the root-level rows only, i.e., it ignores the child row count and it can be enabled by using the [`pageSettings.pageSizeMode`](../api/treegrid/pageSettingsModel/#pagesizemode) property.

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

The sorting feature enables you to order the records. It can be enabled by setting the  [`allowSorting`](../api/treegrid/#allowsorting) property to true. Inject the [`Sort`](../api/treegrid/#sortmodule)
  module as follows. If the [`Sort`](../api/treegrid/#sortmodule) module is not injected, you cannot sort when a header is clicked. Sorting feature can be customized using the  [`sortSettings`](../api/treegrid/#sortsettings) property.

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

The filtering feature enables you to view the reduced amount of records based on the filter criteria. It can be enabled by setting the [`allowFiltering`](../api/treegrid/#allowfiltering) property to true.  The [`Filter`] module has to be injected as follows.
 If the [`Filter`] module is not injected,  filter bar will not be rendered in the TreeGrid. Filtering feature can be customized using the [`filterSettings`](../api/treegrid/#filtersettings) property.

By default, filtered records are shown along with its parent records. This behavior can be changed by using the [`filterSettings-hierarchyMode`](../api/treegrid/filterSettingsModel/#hierarchymode) property.

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

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid control features are segregated into individual feature-wise modules. The [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build and `CDN` scripts contains code for all features used in the TreeGrid. So, do not to use the `CDN` scripts in production. It is strongly recommended to generate script files to use in production using our **Custom Resource Generator**[`(CRG)`](https://crg.syncfusion.com/) for Essential<sup style="font-size:70%">&reg;</sup> JS 2. CRG allows you to generate the bundled script for the currently enabled features in TreeGrid.

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.

## Handling errors

Error handling in Tree Grid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/#actionfailure) event. When configuring the Tree Grid or enabling specific features through its API, mistakes can occur. The `actionFailure` event can be used to manage these errors. This event triggers when such mistakes happen. The `actionFailure` event handles various scenarios, including:

* For CRUD operations, row drag and drop, and persisiting the selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column/#isprimarykey) property is mapped to a unique data column. Failure to do so will cause an error.
* [Paging](https://ej2.syncfusion.com/javascript/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/javascript/documentation/treegrid/virtual-scroll). Enabling `paging` with `virtualization` will result in an error.
* To render the Tree Grid, map either the [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/#datasource) or [columns](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/#columns) property. Failure to do so will result in an error.
* Freeze columns by mapping either [isFrozen](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column/#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#frozencolumns). Enabling both properties simultaneously will result in an error.
* The [detailTemplate](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#detailtemplate) is not supported with `virtualization` and `stacked header`. Enabling them with these features will result in an error.
* The [frozenRows](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#frozenrows) and `frozenColumns` are not supported with [rowtemplate](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#rowtemplate), `detailTemplate`, and [cell editing](https://ej2.syncfusion.com/javascript/documentation/treegrid/editing/cell-editing). Enabling them with these features will result in an error.
* In `stacked header`, the [freeze](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column/#freeze) direction is incompatible with [column reordering](https://ej2.syncfusion.com/javascript/documentation/treegrid/columns/column-reorder). 
* [Selection](https://ej2.syncfusion.com/javascript/documentation/treegrid/selection/selection) functionality is not supported when using `rowTemplate`. Enabling both properties simultaneously will result in an error.
* Set the [treeColumnIndex](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#treecolumnindex) value to display the tree structure. Make sure the value does not exceed the total column count, or it will result in an error.
* For `virtualization`, do not specify height and width in percentages. Using percentages will result in an error.
* When using the default filter ([filterbar](https://ej2.syncfusion.com/javascript/documentation/treegrid/filtering/filter-bar)) type, do not apply the other [filterType](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/filterType/) to columns within the same tree grid, as this will result in an error.
* In Tree Grid, avoid enabling [idMapping](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#childmapping) simultaneously. Enabling both properties at the same time will result in an error.
* The [showCheckbox](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column/#showcheckbox) column should only be defined in the tree column. Defining it elsewhere will result in an error.
* The [textAlign](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column/#textalign) right is not applicable for tree columns in the Tree Grid.  Enabling right alignment for tree columns will result in an error.

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/#actionfailure) event in the Tree Grid control to display an exception when `isPrimaryKey` are not configured properly in the Tree Grid.

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
        
{% previewsample "page.domainurl/ej2-javascript/code-snippet/treegrid/error-handling" %}

## See Also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
