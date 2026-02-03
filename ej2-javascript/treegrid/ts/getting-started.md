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

#  Getting started in ##Platform_Name## Treegrid control

The TreeGrid component is essential for displaying hierarchical data in a tabular format. It is commonly used for project management (displaying tasks and subtasks), organizational structures (displaying company hierarchies), file systems, and any scenario where data has parent-child relationships. This section explains the steps to create a simple TreeGrid and demonstrates the basic usage of the TreeGrid component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The TreeGrid component requires several npm packages that work together to provide core functionality. Understanding these dependencies helps ensure that all required packages are installed.

Following is the list of minimum dependencies required to use the treegrid:

```javascript
|-- @syncfusion/ej2-treegrid
    |-- @syncfusion/ej2-grids
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-popups
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available in the public registry on [npmjs.com](https://www.npmjs.com/~syncfusionorg). All Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls are available either as a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or as individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2/material.css";

{% endhighlight %}
{% endtabs %}

>The [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section explains more about built-in themes and CSS reference for individual controls.

## Adding TreeGrid component

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid component can be added to the application. To get started, add the TreeGrid component in the `index.ts` and `index.html` files using the following code. Place the following TreeGrid code in the `index.ts`.

The TreeGrid component requires two key configurations:
1. [DataSource](https://ej2.syncfusion.com/documentation/api/treegrid/index-default#datasource): The hierarchical data to display (typically with parent-child relationships)
2. [Columns](https://ej2.syncfusion.com/documentation/api/treegrid/index-default#columns): The columns to render with field mappings

For hierarchical data where child records are nested in a parent record's property (like "subtasks" within a task), use the [`childMapping`](../api/treegrid#childMapping) property to specify which property contains the child records. This is the most common approach for displaying structured hierarchical data.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { TreeGrid } from '@syncfusion/ej2-treegrid';

let sampleData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    }
];

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                {
                    field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
                { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
                { field: 'priority', headerText: 'Priority', width: 90 }
    ],
    height: 380
});

treeGridObj.appendTo('#TreeGrid');

{% endhighlight %}
{% endtabs %}

In the above code example, the hierarchical data binding is represented in which the [`childMapping`](../api/treegrid#childMapping) property denotes the hierarchy relationship; whereas in self-referencing data binding [`idMapping`](../api/treegrid#idMapping) and [`parentIdMapping`](../api/treegrid#parentIdMapping) denotes the hierarchy relationship.

Now, add an HTML div element to act as the treegrid element in `index.html` using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!--Element which will render as Grid-->
    <div id="TreeGrid"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Module injection

To create a treegrid with additional features, inject the required modules. The following modules are used to extend grid's basic functionality.

* `Page`: Inject this module to use paging feature.
* `Sort`: Inject this module to use sorting feature.
* `Filter`: Inject this module to use filtering feature.
* `ExcelExport`: Inject this module to use Excel export feature.
* `PdfExport`: Inject this module to use PDF export feature.

These modules should be injected into the tree grid using the `TreeGrid.Inject` method.

## Enable paging

The paging feature enables users to view the treegrid record in a paged view. It can be enabled by setting the  [`allowPaging`](../api/treegrid#allowpaging) property to true. Inject the [`Page`](../api/treegrid#pagermodule) module as follows. If the `Page` module is not injected, the pager will not be rendered in the grid. The pager can be customized using the [`pageSettings`](../api/treegrid#pagesettings) property.

 In root-level paging mode, paging is based on the root-level rows only i.e., it ignores the child row count and it can be enabled by using the [`pageSettings.pageSizeMode`](../api/treegrid/pageSettingsModel#pagesizemode) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/tree-grid-cs5/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/tree-grid-cs5/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tree-grid-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs5" %}

## Enable sorting

The sorting feature enables record ordering. It can be enabled by setting the [`allowSorting`](../api/treegrid#allowsorting) property to true. Inject the[`Sort`](../api/treegrid#sortmodule) module as follows. If the [`Sort`](../api/treegrid#sortmodule) module is not injected, sorting is not available when a header is clicked. The sorting feature can be customized using the [`sortSettings`](../api/treegrid#sortsettings) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/tree-grid-cs6/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/tree-grid-cs6/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tree-grid-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs6" %}

## Enable filtering

The filtering feature enables viewing a reduced set of records based on filter criteria. It can be enabled by setting the [`allowFiltering`](../api/treegrid#allowfiltering) property to true. The `Filter` module must be injected as follows. If the `Filter` module is not injected, the filter bar is not rendered in the TreeGrid. The filtering feature can be customized using the [`filterSettings`](../api/treegrid#filtersettings) property.

By default, filtered records are displayed along with their parent records. This behavior can be modified using the[`filterSettings-hierarchyMode`](../api/treegrid/filterSettingsModel#hierarchymode) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/tree-grid-cs7/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/tree-grid-cs7/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tree-grid-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs7" %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. The following command is used to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/tree-grid-cs8/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/tree-grid-cs8/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tree-grid-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treegrid/tree-grid-cs8" %}

> The [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page provides an overview of its advanced capabilities. The [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) demonstrates effective techniques for presenting and manipulating data.

## Handling errors

Error handling in Tree Grid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/documentation/api/treegrid#actionfailure) event. When configuring the Tree Grid or enabling specific features through its API, mistakes can occur. The `actionFailure` event can be used to manage these errors. This event triggers when such mistakes happen. The `actionFailure` event handles various scenarios, including:

* For CRUD operations, row drag and drop, and persisting the selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/documentation/api/treegrid/column#isprimarykey) property is mapped to a unique data column. Failure to do so will cause an error.
* [Paging](https://ej2.syncfusion.com/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/documentation/treegrid/virtual-scroll). Enabling `paging` with `virtualization` will result in an error.
* To render the Tree Grid, map either the [dataSource](https://ej2.syncfusion.com/documentation/api/treegrid#datasource) or [columns](https://ej2.syncfusion.com/documentation/api/treegrid#columns) property. Failure to do so will result in an error.
* Freeze columns by mapping either [isFrozen](https://ej2.syncfusion.com/documentation/api/treegrid/column#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/documentation/api/treegrid#frozencolumns). Enabling both properties simultaneously will result in an error.
* The [detailTemplate](https://ej2.syncfusion.com/documentation/api/treegrid#detailtemplate) is not supported with `virtualization` and `stacked header`. Enabling them with these features will result in an error.
* The [frozenRows](https://ej2.syncfusion.com/documentation/api/treegrid#frozenrows) and `frozencolumns` are not supported with [rowtemplate](https://ej2.syncfusion.com/documentation/api/treegrid#rowtemplate), `detailTemplate`, and [cell editing](https://ej2.syncfusion.com/documentation/treegrid/editing/cell-editing). Enabling them with these features will result in an error.
* In `stacked header`, the [freeze](https://ej2.syncfusion.com/documentation/api/treegrid/column#freeze) direction is incompatible with [column reordering](https://ej2.syncfusion.com/documentation/treegrid/columns/column-reorder).  
* [Selection](https://ej2.syncfusion.com/documentation/treegrid/selection/selection) functionality is not supported when using `rowTemplate`. Enabling both properties simultaneously will result in an error.
* Set the [treeColumnIndex](https://ej2.syncfusion.com/documentation/api/treegrid#treecolumnindex) value to display the tree structure. Make sure the value does not exceed the total column count, or it will result in an error.
* For `virtualization`, do not specify height and width in percentages. Using percentages will result in an error.
* When using the default filter ([filterbar](https://ej2.syncfusion.com/documentation/treegrid/filtering/filter-bar)) type, do not apply the other [filterType](https://ej2.syncfusion.com/documentation/api/treegrid/filterType) to columns within the same tree grid, as this will result in an error.
* In Tree Grid, avoid enabling [idMapping](https://ej2.syncfusion.com/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/documentation/api/treegrid#childmapping) simultaneously. Enabling both properties at the same time will result in an error.
* The [showCheckbox](https://ej2.syncfusion.com/documentation/api/treegrid/column#showcheckbox) column should only be defined in the tree column. Defining it elsewhere will result in an error.
* The [textAlign](https://ej2.syncfusion.com/documentation/api/treegrid/column#textalign) right is not applicable for tree columns in the Tree Grid.  Enabling right alignment for tree columns will result in an error.

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/documentation/api/treegrid#actionfailure) event in the Tree Grid control to display an exception when `isPrimaryKey` property is not configured properly in the Tree Grid.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/error-handling/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/error-handling/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/error-handling/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treegrid/error-handling" %}

## See Also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
