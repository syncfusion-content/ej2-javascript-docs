---
title: "Infinite Scrolling"
component: "Tree Grid"
description: "Learn how to improve performance in the Essential JS 2 Tree Grid control by using infinite scroll feature. Also learn about the limitations of this feature."
---

# Infinite scrolling

Infinite scrolling is used to load a huge amount of data without degrading the Tree Grid performance. This feature works like the lazy loading concept, which means the buffer data is loaded only when the scrollbar reaches the end of the scroller.

To use Infinite scrolling, set `enableInfiniteScrolling` property as true and inject the `InfiniteScroll` module in the treegrid.

> * In this feature, Tree Grid will not make a new data request when you visit the same page again.

{% tab template="treegrid/infinite-scroll", sourceFiles="index.ts,index.css,index.html",es5Template="infinitescroll" %}

```typescript
import { InfiniteScroll, TreeGrid } from '@syncfusion/ej2-treegrid';
import { virtualData, dataSource } from './datasource.ts';

TreeGrid.Inject(InfiniteScroll);

dataSource();

let treegrid: TreeGrid = new TreeGrid(
        {
            dataSource: virtualData,
            enableInfiniteScrolling: true,
            treeColumnIndex: 1,
            childMapping: 'Crew',
            pageSettings: { pageSize: 30 },
            height: 317,
            columns: [
                { field: 'TaskID', headerText: 'Player Jersey', width: 140, textAlign: 'Right' },
                { field: 'FIELD1', headerText: 'Player Name', width: 140 },
                { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
                { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
                { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' }
               ]
        });
    treegrid.appendTo('#TreeGrid');

```

{% endtab %}

## InitialBlocks

You can define the initial loading pages count by using `infiniteScrollSettings.initialBlocks` property. By default, this feature loads three pages in initial rendering.

In the below demo, we have changed this property value to load five page records instead of three.

{% tab template="treegrid/infinite-scroll", sourceFiles="index.ts,index.css,index.html",es5Template="initialblocks" %}

```typescript
import { InfiniteScroll, TreeGrid } from '@syncfusion/ej2-treegrid';
import { virtualData, dataSource } from './datasource.ts';

TreeGrid.Inject(InfiniteScroll);

dataSource();

let treegrid: TreeGrid = new TreeGrid(
        {
            dataSource: virtualData,
            enableInfiniteScrolling: true,
            infiniteScrollSettings: { initialBlocks: 5 },
            treeColumnIndex: 1,
            childMapping: 'Crew',
            pageSettings: { pageSize: 30 },
            height: 317,
            columns: [
                { field: 'TaskID', headerText: 'Player Jersey', width: 140, textAlign: 'Right' },
                { field: 'FIELD1', headerText: 'Player Name', width: 140 },
                { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
                { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
                { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' }
               ]
        });
    treegrid.appendTo('#TreeGrid');

```

{% endtab %}

## Cache Mode

Cache is used to store the loaded rows object in the Tree Grid instance which can be reused for creating the row elements whenever you scroll to already visited page. Also, this mode maintains row elements based on the `infiniteScrollSettings.maxBlocks` count value, once this limit exceeds then it will remove row elements from DOM for new rows.

To enable the cache mode in Infinite scrolling, set `infiniteScrollSettings.enableCache` property as true.

{% tab template="treegrid/infinite-scroll", sourceFiles="index.ts,index.css,index.html",es5Template="cache" %}

```typescript
import { InfiniteScroll, TreeGrid } from '@syncfusion/ej2-treegrid';
import { virtualData, dataSource } from './datasource.ts';

TreeGrid.Inject(InfiniteScroll);

dataSource();

let treegrid: TreeGrid = new TreeGrid(
        {
            dataSource: virtualData,
            enableInfiniteScrolling: true,
            infiniteScrollSettings: { enableCache: true },
            treeColumnIndex: 1,
            childMapping: 'Crew',
            pageSettings: { pageSize: 30 },
            height: 317,
            columns: [
                { field: 'TaskID', headerText: 'Player Jersey', width: 140, textAlign: 'Right' },
                { field: 'FIELD1', headerText: 'Player Name', width: 140 },
                { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
                { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
                { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' }
               ]
        });
    treegrid.appendTo('#TreeGrid');

```

{% endtab %}

## Limitations for Infinite Scrolling

* Due to the element height limitation in browsers, the maximum number of records loaded by the tree grid is limited due to the browser capability.
* Initial loading rows total height must be greater than the viewport height.
* Cell selection will not be persisted in cache mode.
* Infinite scrolling is not compatible with batch editing, cell editing, detail template and hierarchy features.
* The aggregated information and total group items are displayed based on the current view items. To get these information regardless of the view items, refer to the
* Programmatic selection using the [`selectRows`](../api/treegrid/#selectrows) and [`selectRow`](../api/treegrid/#selectrow) method is not supported in infinite scrolling.

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.
