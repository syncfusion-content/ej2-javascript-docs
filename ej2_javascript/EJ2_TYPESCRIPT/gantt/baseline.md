---
title: "BaseLine"
component: "Gantt"
description: "Learn how to render the baseline in the Essential JS 2 Gantt control."
---

# BaseLine

The baseline feature enables users to view the deviation between the planned dates and actual dates of the tasks in a project. Baseline dates or planned dates of a task may or may not be same as the actual task dates. The baseline can be enabled by setting the [`renderBaseline`](../api/gantt/#renderbaseline) property to true and the baseline color can be changed using the [`baselineColor`](../api/gantt/#baselinecolor) property. To render the baseline, you should map the baseline start and end date values from the data source. This can be done using the [`baselineStartDate`](../api/gantt/taskFields/#baselinestartdate) and [`baselineEndDate`](../api/gantt/taskFields/#baselineenddate) properties. The following code example shows how to enable a baseline in the Gantt control.

{% tab template= "gantt/baseline", es5Template="baseline" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';

let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/06/2019'), StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', BaselineStartDate: new Date('04/04/2019'), BaselineEndDate: new Date('04/09/2019'), StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', BaselineStartDate: new Date('04/08/2019'), BaselineEndDate: new Date('04/12/2019'), StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', BaselineStartDate: new Date('04/04/2019'), BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/04/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/02/2019'), StartDate: new Date('04/04/2019'), Duration: 0, Progress: 50 }
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
        baselineStartDate: "BaselineStartDate",
        baselineEndDate: "BaselineEndDate",
        child: 'subtasks'
    },
    renderBaseline: true,
    baselineColor: 'red'
});
gantt.appendTo('#Gantt');

```

{% endtab %}