---
title: "Appearance customization"
component: "Gantt"
description: "The overview section describes how to customize the Gantt taskbar and task labels in Gantt"
---

# Appearance customization

## Taskbar customization

### Taskbar Height

Height of child taskbars and parent taskbars can be customized by using [`taskbarHeight`](../api/gantt/#taskbarheight) property. The following code example shows how to use the property.

{% tab template="gantt/appearanceandstyling", es5Template="rowHeight" %}

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
    taskbarHeight: 50,
    rowHeight: 60
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> NOTE
The [`taskbarHeight`](../api/gantt/#taskbarheight) value should be lower than the [`rowHeight`](../api/gantt/#rowheight) property value and these properties accept only pixel values.

### Conditional formatting

The default taskbar UI can be replaced with custom templates using the [`queryTaskbarInfo`](../api/gantt/#querytaskbarinfo) event. The following code example shows customizing the taskbar UI based on task progress values in the Gantt control.

{% tab template="gantt/appearanceandstyling", es5Template="conditionalFormatting" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';

let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 70 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 80 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70 }
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
        child: 'subtasks'
    },
    queryTaskbarInfo: function (args: any) {
        if (args.data.Progress == 50) {
            args.progressBarBgColor = "red";
        } else if (args.data.Progress == 70) {
            args.progressBarBgColor = "yellow";
        } else if (args.data.Progress == 80) {
            args.progressBarBgColor = "lightgreen";
        }
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Taskbar template

You can design your own taskbars to view the tasks in Gantt by using [`taskbarTemplate`](../api/gantt/#taskbartemplate) property. And it is possible to map the template script element’s ID value to this property. It is also possible to customize the parent taskbars and milestones with custom templates by using [`parentTaskbarTemplate`](../api/gantt/#parenttaskbartemplate) and [`milestoneTemplate`](../api/gantt/#milestonetemplate) properties.

{% tab template="gantt/customizations", es5Template="taskbarTemplate" %}

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
    rowHeight: 60,
    milestoneTemplate: '#MilestoneTemplate',
    parentTaskbarTemplate: '#ParentTaskbarTemplate',
    taskbarTemplate: '#TaskbarTemplate'
});

gantt.appendTo('#Gantt');

```

{% endtab %}

### Change gripper icon in taskbar

You can change the gripper icon in the taskbar by applying styles to their respective class elements.

{% tab template="gantt/change-gripper-icon",isDefaultActive=true, es5Template="started" sourceFiles="index.ts,index.html,index.css"%}

```typescript


import { Gantt, Edit, Filter, Sort } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Filter, Sort);
let projectResources: Object[] = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];

let ganttData: Object[] = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [2, 3, 5]  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4] },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4, 8], },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0,Predecessor:"6SS", Progress: 50, resources: [12, 5] }
            ]
        },
    ];

let gantt: Gantt = new Gantt({
        dataSource: ganttData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            resourceInfo: 'resources',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'resources', headerText: 'Resources', width: '200' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
            { field: 'Predecessor', headerText: 'Predecessor', width: '150' },
        ],
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        resources: projectResources,
        allowSorting:true,
        allowFiltering:true,
        editSettings: {
           allowEditing:true,
           allowTaskbarEditing:true
         }
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Task labels

The Gantt control maps any data source fields to task labels using the [`labelSettings.leftLabel`](../api/gantt/labelSettings/#leftlabel), [`labelSettings.rightLabel`](../api/gantt/labelSettings/#rightlabel), and [`labelSettings.taskLabel`](../api/gantt/labelSettings/#tasklabel) properties. You can customize the task labels with templates.

{% tab template="gantt/tasklabels", es5Template="tasklabels" %}

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
    labelSettings: {
        leftLabel: 'TaskID',
        rightLabel: 'Task Name: ${taskData.TaskName}',
        taskLabel: '${Progress}%'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Connector lines

The width and background color of connector lines in Gantt can be customized using the [`connectorLineWidth`](../api/gantt/#connectorlinewidth) and [`connectorLineBackground`](../api/gantt/#connectorlinebackground) properties. The following code example shows how to use these properties.

{% tab template="gantt/appearanceandstyling", es5Template="dependencyFormatting" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';

let GanttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'),Predecessor:"3SS", Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Predecessor:"7FS", Duration: 3, Progress: 50 }
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
        dependency: 'Predecessor',
        progress: 'Progress',
        child: 'subtasks'
    },
    connectorLineBackground: "red",
    connectorLineWidth: 3
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Customize rows and cells

While rendering the TreeGrid part in Gantt, the [`rowDataBound`](../api/gantt/#rowdatabound) and [`queryCellInfo`](../api/gantt/#querycellinfo) events trigger for every row and cell. Using these events, you can customize the rows and cells. The following code example shows how to customize the cell and row elements using these events.

{% tab template="gantt/appearanceandstyling", es5Template="customizeRow" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';

let GanttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 80 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 60 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0 , Progress: 50 }
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
        dependency: 'Predecessor',
        progress: 'Progress',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },

    ],
    splitterSettings: {
        columnIndex: 3
    },
    queryCellInfo: function (args: any) {
        if (args.column.field == "Progress") {
            if (args.data.Progress < 60)
                args.cell.style.backgroundColor = "lightgreen"
            else
                args.cell.style.backgroundColor = "yellow"
        }
    },
    rowDataBound: function (args: any) {
        if (args.data.TaskID == 4)
            args.row.style.backgroundColor = "red"
    }
});
gantt.appendTo('#Gantt');


```

{% endtab %}

## Grid lines

In the Gantt control, you can show or hide the grid lines in the TreeGrid side and chart side by using the [`gridLines`](../api/gantt/gridLine/) property.

The following options are available in the Gantt control for rendering the grid lines:

* Horizontal: The horizontal grid lines alone will be visible.
* Vertical: The vertical grid lines alone will be visible.
* Both: Both the horizontal and vertical grid lines will be visible on the TreeGrid and chart sides.
* None: Gridlines will not be visible on TreeGrid and chart sides.

> By default, the [`gridLines`](../api/gantt/gridLine/) property is set to `Horizontal` type.

The following code example shows how to change the gridlines rendering mode in the Gantt control.

{% tab template= "gantt/gridline", es5Template="both" %}

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
    gridLines: 'Both'
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Splitter

In the Gantt control, the Splitter separates the TreeGrid section from the Chart section. You can change the position of the Splitter when loading the Gantt control using the [`splitterSettings`](../api/gantt/splitterSettings/) property. By splitting the TreeGrid from the chart, the width of the TreeGrid and chart sections will vary in the control. The [`splitterSettings.position`](../api/gantt/splitterSettings/#position) property denotes the percentage of the TreeGrid section’s width to be rendered and this property supports both pixels and percentage values. You can define the splitter position as column index value using the [`splitterSettings.columnIndex`](../api/gantt/splitterSettings/#columnindex) property. You can also define the splitter position with built-in splitter view modes by using the [`splitterSettings.view`](../api/gantt/splitterSettings/#view) property. The following list is the possible values for this property:

* `Default`: Shows Grid side and Gantt side.
* `Grid`: Shows Grid side alone in Gantt.
* `Chart`: Shows chart side alone in Gantt.

{% tab template="gantt/how-to splitter", es5Template="changeSplitter" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { data } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        position: "50%"
    }
});

gantt.appendTo('#Gantt');

```

{% endtab %}

### Change splitter position dynamically

In Gantt, we can change the splitter position dynamically by using [`setSplitterPosition`](../api/gantt/#setsplitterposition) method. We can change the splitter position by passing value and type parameter to [`setSplitterPosition`](../api/gantt/#setsplitterposition) method. Type parameter will accept one of the following values 'position', 'columnIndex', 'viewType'. The following code example shows how to use this method.

{% tab template="gantt/changeSplitterDynamically", es5Template="setSplitterPosition" %}

```typescript

import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { data } from 'datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
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

let splitBtn: Button = new Button();
splitBtn.appendTo('#changeByPosition');

let splittBtn: Button = new Button();
splittBtn.appendTo('#changeByIndex');

document.getElementById('changeByPosition').addEventListener('click', () => {
    gantt.setSplitterPosition('50%', 'position');
});

document.getElementById('changeByIndex').addEventListener('click', () => {
    gantt.setSplitterPosition(0, 'columnIndex');
});

let dropDownMode: DropDownList = new DropDownList({
     dataSource: [
            { id: 'Default', mode: 'Default' },
            { id: 'Grid', mode: 'Grid' },
            { id: 'Chart', mode: 'Chart' },
          ],
        fields: { text: 'mode', value: 'id' },
        value: 'Default',
         change: (e: ChangeEventArgs) => {
            let viewType: any = <string>e.value;
            gantt.setSplitterPosition(viewType, 'view');
        }
});
dropDownMode.appendTo('#view');

```

{% endtab %}