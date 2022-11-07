---
title: "Getting Started"
component: "TreeGrid"
description: "Learn how to create an Essential JS 2 TreeGrid control and enable features like paging, filtering, sorting."
---

# Getting Started

This section explains the steps to create a simple TreeGrid and demonstrates the basic usage of the TreeGrid component using the Essential JS 2
[quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.
This seed repository is pre-configured with the Essential JS 2 package.

## Dependencies

Following is the list of minimum dependencies required to use the treegrid.

```javascript
|-- @syncfusion/ej2-treegrid
    |-- @syncfusion/ej2-grids
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-popups
```

## Setup for local development

Clone the Essential JS 2 quickstart application project from
[GitHub](https://github.com/syncfusion/ej2-quickstart.git), and
install the necessary npm packages using the following command line scripts.

```sh
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Configuring system JS

[Syncfusion TreeGrid packages](#dependencies) should be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-treegrid": "syncfusion:ej2-treegrid/dist/ej2-treegrid.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder.
This can be referenced in your `[src/styles/styles.css]` using the following code.

```css
@import '../../node_modules/@syncfusion/ej2/material.css';
```

> To know more about individual component CSS, refer to the
[Individual Component theme files](../../base/theme.html#individual-component-theme-files) section.

## Adding TreeGrid component

You can start adding Essential JS 2 TreeGrid component to the application. To get started, add the TreeGrid component in the `app.ts` and `index.html` files using the following code.

Place the following grid code in the `app.ts`.

```typescript
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

```

In the above code example, the hierarchical data binding is represented in which the [`chilMapping`](../api/treegrid/#childMapping) property denotes the hierarchy relationship; whereas in self-referencing data binding [`idMapping`](../api/treegrid/#idMapping) and [`parentIdMapping`](../api/treegrid/#parentIdMapping) denotes the hierarchy relationship.

Now, add an HTML div element to act as the treegrid element in `index.html` using the following code.

```html
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

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as Grid-->
    <div id="TreeGrid"></div>
</body>

</html>
```

## Module injection

To create a treegrid with additional features, inject the required modules. The following modules are used to extend grid's basic functionality.

* `Page`: Inject this module to use paging feature.
* `Sort` Inject this module to use sorting feature.
* `Filter`: Inject this module to use filtering feature.
* `ExcelExport`: Inject this module to use Excel export feature.
* `PdfExport`: Inject this module to use PDF export feature.

These modules should be injected into the grid using the `TreeGrid.Inject` method.

## Enable paging

The paging feature enables users to view the treegrid record in a paged view. It can be enabled by setting the  [`allowPaging`](../api/treegrid/#allowpaging) property to true. Inject the [`Page`](../api/treegrid/#pagermodule)
 module as follows. If the `Page` module is not injected, the pager will not be rendered in the grid. The pager can be customized using the [`pageSettings`](../api/treegrid/#pagesettings) property.

 In root-level paging mode, paging is based on the root-level rows only i.e., it ignores the child row count and it can be enabled by using the [`pageSettings.pageSizeMode`](../api/treegrid/pageSettingsModel/#pagesizemode) property.

{% tab template="treegrid/tree-grid",es5Template="enablepaging", sourceFiles="index.ts,index.html,datasource.ts" %}

```typescript
import { TreeGrid, Page } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';
TreeGrid.Inject(Page);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowPaging: true,
    pageSettings: { pageSize: 7 },
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

```

{% endtab %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the  [`allowSorting`](../api/treegrid/#allowsorting) property to true. Inject the [`Sort`](../api/treegrid/#sortmodule)
  module as follows. If the [`Sort`](../api/treegrid/#sortmodule) module is not injected, you cannot sort when a header is clicked. Sorting feature can be customized using the  [`sortSettings`](../api/treegrid/#sortsettings) property.

{% tab template="treegrid/tree-grid",es5Template="enablesort", sourceFiles="index.ts,index.html,datasource.ts" %}

```typescript
import { TreeGrid, Sort, Page } from '@syncfusion/ej2-treegrid';
import { sortData } from './datasource.ts';

TreeGrid.Inject(Sort, Page);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sortData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowSorting: true,
    sortSettings: { columns: [{ field: 'Category', direction: 'Ascending' }, { field: 'orderName', direction: 'Ascending' }] },
    allowPaging: true,
    columns: [
                { field: 'Category', headerText: 'Category', width: 150 },
                { field: 'orderName', headerText: 'Order Name', width: 170 },
                { field: 'orderDate', headerText: 'Order Date', width: 130, textAlign: 'Right', format: 'yMd',    type: 'date' },
                { field: 'price', headerText: 'Price', width: 100, format: 'C0', textAlign: 'Right' }
    ],
    height: 260
});

treeGridObj.appendTo('#TreeGrid');


```

{% endtab %}

## Enable filtering

The filtering feature enables you to view the reduced amount of records based on the filter criteria. It can be enabled by setting the [`allowFiltering`](../api/treegrid/#allowfiltering) property to true.  The `Filter` module has to be injected as follows.
 If the `Filter` module is not injected,  filter bar will not be rendered in the treegrid. Filtering feature can be customized using the [`filterSettings`](../api/treegrid/#filtersettings) property.

By default, filtered records are shown along with its parent records. This behavior can be changed using the [`filterSettings-hierarchyMode`](../api/treegrid/filterSettingsModel/#hierarchymode) property.

{% tab template="treegrid/tree-grid",es5Template="enablefilter", sourceFiles="index.ts,index.html,datasource.ts" %}

```typescript
import { TreeGrid, Filter, Page, Sort } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Filter, Page, Sort);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowFiltering: true,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    pageSettings: {pageSize: 11},
    allowPaging: true,
    allowSorting: true
});

treeGridObj.appendTo('#TreeGrid');


```

{% endtab %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. The following command is used to run the application.

```sh
npm run start
```

Output will be displayed as follows.

{% tab template="treegrid/tree-grid", isDefaultActive=true,es5Template="started", sourceFiles="index.ts,index.html,datasource.ts" %}

```typescript
import { TreeGrid, Filter, Page, Sort } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Filter, Page, Sort);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowFiltering: true,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    allowPaging: true,
    pageSettings: {pageSize: 11},
    allowSorting: true
});

treeGridObj.appendTo('#TreeGrid');


```

{% endtab %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.
