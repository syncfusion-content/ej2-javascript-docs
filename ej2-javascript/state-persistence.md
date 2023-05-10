---
layout: post
title: State persistence in ##Platform_Name## State persistence md control | Syncfusion
description: Learn here all about State persistence in Syncfusion ##Platform_Name## State persistence md control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: State persistence 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# State Persistence in Syncfusion JavaScript controls

The Syncfusion JavaScript (Essential JS 2) library has support for persisting control's state across page refreshes or navigation. To
enable this feature, set [`enablePersistence`](./api/base/component#enablepersistence) property as true to the required control. This will store
the control's state in browser’s `localStorage` object on page `unload` event. For example, we have enabled persistence to grid control in the following code.

```ts
import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    enablePersistence: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 268
});
grid.appendTo('#Grid');
```