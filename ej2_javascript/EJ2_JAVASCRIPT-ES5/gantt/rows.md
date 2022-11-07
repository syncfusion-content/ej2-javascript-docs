---
title: "Rows"
component: "Gantt"
description: "Documentation for row customizations in Gantt"
---

# Rows

Row represents a task information from the data source, and it is possible to perform the following actions in Gantt rows.

## Row height

It is possible to change the height of the row in Gantt by setting row height in pixels to the [`rowHeight`](../api/gantt/#rowheight) property. The following code example explains how to change the row height in Gantt at load time.

{% tab template="gantt/rows", es5Template="rowHeight" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    rowHeight: 60
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Expand/Collapse Row

In Gantt parent tasks are expanded/collapsed by using expand/collapse icons, expand all/collapse all toolbar items and by using public methods. By default all tasks in Gantt was rendered in expanded state but we can change this status in Gantt.

### Collapse all tasks at Gantt load

All tasks available in Gantt was rendered in collapsed state by setting [`collapseAllParentTasks`](../api/gantt/#collapseallparenttasks) property as `true`. The following code example shows how to use this property.

{% tab template="gantt/rows", es5Template="enableCollapseAll" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    collapseAllParentTasks: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Define expand/collapse status of tasks

In Gantt, we can render some tasks in collapsed state and some tasks in expanded state, this can done by defining expand status of the task in data source. This value was mapped to Gantt control by using [`expandState`](../api/gantt/taskFields/#expandstate) property. The following code example shows how to use this property.

{% tab template="gantt/rows", es5Template="expandState" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';

let GanttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            isExpand:true,
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            isExpand:false,
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
            ]
        },
    ];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        expandState: 'isExpand',
        child: 'subtasks'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Customize expand/collapse action

On expand action [`expanding`](../api/gantt/#expanding) and [`expanded`](../api/gantt/#expanded) event will be triggered with current expanding row’s information. Similarly on collapse action [`collapsing`](../api/gantt/#collapsing) and [`collapsed`](../api/gantt/#collapsed) event will be triggered. Using this events and it’s arguments we can customize the expand/collapse action. The following code example shows how to prevent the particular row from expand/collapse action using [`expanding`](../api/gantt/#expanding) and [`collapsing`](../api/gantt/#collapsing) event.

{% tab template="gantt/rows", es5Template="expandCollapseEvent" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    collapsing: function (args: any) {
        if (args.data.TaskID == 1)
            args.cancel = true;
    },
    expanding: function (args: any) {
        if (args.data.TaskID == 5)
            args.cancel = true;
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Drag and drop

You can dynamically rearrange the rows in the Gantt control by using the `allowRowDragAndDrop` property. Using this property, row drag and drop can be enabled or disabled in Gantt. Using this feature, rows can be dropped at above and below as a sibling or child to the existing rows

To use row drag and drop feature, inject the `RowDD` and `Edit` module in Gantt.

{% tab template="gantt/rows", es5Template="singledrag" %}

```typescript

import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from 'datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: projectNewData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    allowRowDragAndDrop: true
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Multiple row drag and drop

Gantt also supports dragging multiple rows at a time and drop them on any rows above, below, or at child positions. In Gantt, you can enable the multiple drag and drop by setting the `selectionSettings.type` to `Multiple` and you should enable the `allowRowDragAndDrop` property.

{% tab template="gantt/rows", es5Template="multipledrag" %}

```typescript
import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from 'datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: projectNewData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    selectionSettings: {
        type: 'Multiple'
    },
    allowRowDragAndDrop: true
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Drag and drop events

We provide various events to customize the row drag and drop action, the following table explains about the available events and its details.

Event Name |Description
-----|-----
`rowDragStartHelper`  |Triggers when clicking the drag icon or Gantt row.
`rowDragStart`  |Triggers when drag action starts in Gantt.
`rowDrag`  |Triggers while dragging the Gantt row.
`rowDrop`  |Triggers when a drag row was dropped on the target row.

### Customize row drag and drop action

In Gantt, the `rowDragStartHelper` and `rowDrop` events are triggered on row drag and drop action. Using this event, you can prevent dragging of particular record, validate the drop position, and cancel the drop action based on the target record and dragged record. The following topics explains about this.

#### Prevent dragging of particular record

You can prevent drag action of the particular record by setting the `cancel` property to `true`, which is available in the `rowDragStartHelper` event argument based on our requirement. In the following sample, drag action was restricted for first parent record and its child records.

{% tab template="gantt/rows", es5Template="preventDrag" %}

```typescript

import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from 'datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: projectNewData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    rowDragStartHelper: function(args) {
        let record = args.data[0] ? args.data[0] : args.data;
        let taskId = record.ganttProperties.taskId;
        if (taskId <= 4) {
            args.cancel = true;
        }
    },
    allowRowDragAndDrop: true
});
gantt.appendTo('#Gantt');

```

{% endtab %}

#### Validating drop position

You can prevent drop action based on the drop position and target record, by this, you can prevent dropping particular task on a specific task or specific position. This can be achieved by setting the `cancel` property to `true`, which is available in the `rowDrop` event argument.

In the following sample, we have prevented the drop action based on the position. In this sample, you cannot drop row as child in any of the available rows.

{% tab template="gantt/rows", es5Template="preventDrop" %}

```typescript

import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from 'datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: projectNewData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
     rowDrop: function(args) {
        if (args.dropPosition == "middleSegment") {
            args.cancel = true;
        }
    },
    allowRowDragAndDrop: true
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](../api/gantt/#rowdrop) event argument. You can also change the drop position after cancelling using [reorderRows](../api/gantt/#reorderrows) method.

In the below example drop action is cancelled and dropped above to target row.

{% tab template="gantt/rows", es5Template="prevent-reordering" %}

```typescript
import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from 'datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: projectNewData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    allowRowDragAndDrop: true,
    rowDrop : (args) => {
     if (args.dropPosition == 'middleSegment') {
      args.cancel = true;
      gantt.reorderRows([args.fromIndex], args.dropIndex, 'above');
     }
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Perform row drag and drop action programmatically

Gantt provides option to perform row drag and drop action programmatically by using the `reorderRows` method, this method can be used for any external actions like button click.
The following arguments are used to specify the positions to drag and drop a row:

* `fromIndexes`: Index value of source(dragging) row.
* `toIndex`: Value of target index.
* `position`: Drop positions such as above, below, or child.

The following code example shows how to drag and drop a row on button click action.

{% tab template="gantt/dynamicDrag", es5Template="dynamicDrag" %}

```typescript

import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from 'datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: projectNewData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    allowRowDragAndDrop: true
});
gantt.appendTo('#Gantt');

let dragBtn: Button = new Button();
dragBtn.appendTo('#dynamicDrag');

document.getElementById('dynamicDrag').addEventListener('click', () => {
    gantt.reorderRows([1,2,3], 4, 'child');
});

```

{% endtab %}

## Customize rows

You can customize the appearance of a row in grid side, by using the [`rowDataBound`](../api/gantt/#rowdatabound) event and in chart side by using [`queryTaskbarInfo`](../api/gantt/#querytaskbarinfo) event

{% tab template="gantt/rows", es5Template="customizeRows" %}

```typescript

import { Gantt, RowDataBoundEventArgs, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    rowDataBound: rowBound,
    queryTaskbarInfo: queryTaskbarInfo,
});
gantt.appendTo('#Gantt');

function rowBound(args: RowDataBoundEventArgs) {
  if (args.data['TaskID'] == 4) {
    args.row.style.background = 'cyan';
  }
}
function queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs) {
 if (args.data['TaskID'] == 4) {
   args.rowElement.style.background = 'cyan';
  }
}

```

{% endtab %}

## Styling alternate rows

 You can change the background colour of alternative rows in Gantt chart, by overriding the class as shown below.

```css
.e-altrow, tr.e-chart-row:nth-child(even)  {
    background-color: #f2f2f2;
}
```

{% tab template="gantt/alt-rows", es5Template="altRow" %}

```typescript

import { Gantt, RowDataBoundEventArgs, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Row spanning

Gantt chart has an option to span row cells. You can achieve this using [`rowSpan`](../api/gantt/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [`QueryCellInfo`](../api/gantt/queryCellInfoEventArgs) event.

In the following demo, **Soil test approval** cell is spanned to two rows in the **TaskName** column.

{% tab template="gantt/rows", es5Template="rowSpanning" %}

```typescript

import { Gantt, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    gridLines:'Both',
    queryCellInfo: queryCellInfo,
});
gantt.appendTo('#Gantt');

function queryCellInfo(args: QueryCellInfoEventArgs): void {
    if (args.data['TaskID'] == 4 && args.column.field === 'TaskName') {
        args.rowSpan = 2;
    }
}

```

{% endtab %}