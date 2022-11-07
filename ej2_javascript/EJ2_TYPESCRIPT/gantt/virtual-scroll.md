---
title: "Virtual Scrolling"
component: "Gantt"
description: "Learn how to work with Virtual Scrolling support in Essential JS 2 Gantt control."
---

# Virtual Scrolling

Virtual Scroll support in Gantt allows you to load large amount of data without performance degradation. To enable Virtual Scrolling, you need to inject `VirtualScroll` module in Gantt.

## Row Virtualization

Row virtualization allows you to load and render a large number of tasks in Gantt with effective performance. In this mode, all tasks are fetched initially from the datasource and rendered in the DOM within a compact viewport area.

The number of records displayed in the Gantt is determined by the height.

This mode can be enable by setting the `enableVirtualization` property to `true`.

{% tab template="gantt/virtual-scroll",es5Template="virtual-scroll" %}

```typescript

import { Gantt, Selection, VirtualScroll } from '@syncfusion/ej2-gantt';
import { virtualData } from './data-source';

Gantt.Inject(Selection, VirtualScroll);

    let gantt: Gantt = new Gantt({
        dataSource: virtualData,
        treeColumnIndex: 1,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'parentID'
        },
        enableVirtualization: true,
        columns: [
            { field: 'TaskID' },
            { field: 'TaskName' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' },
        ],
        allowSelection: true,
        gridLines: 'Both',
        height: '450px',
        splitterSettings: {
            columnIndex: 2
        },
        labelSettings: {
            taskLabel: 'Progress'
        }
    });
    gantt.appendTo('#Gantt');

```

{% endtab %}

## Limitations for Virtual Scroll

* Due to the element height limitation in browsers, the maximum number of records loaded is limited by the browser capacity.
* Cell selection will not be persisted.
* The number of records rendered will be determined by the `height` property.
* It is necessary to mention the height of the Gantt in pixels when enabling Virtual Scrolling.
* Virtual Scroll does not support Multi Taskbar support in Resource View.
