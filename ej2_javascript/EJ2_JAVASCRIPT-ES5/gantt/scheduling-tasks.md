---
title: "Scheduling Tasks"
component: "Gantt"
description: "Learn about duration values in the Essential JS 2 Gantt control."
---

# Scheduling Tasks

## Duration units

In Gantt, the tasks’ duration value can be measured by the following duration units,

* Day
* Hour
* Minute

In Gantt, we can define duration unit for whole project by using [`durationUnit`](../api/gantt/#durationunit) property, when we defines the value for this property, this unit will be applied for all task which don't has duration unit value.
And each task in the project can be defined with different duration units and the duration unit of a task can be defined by the following ways,

* Using [`taskFields.durationUnit`](../api/gantt/taskFields/#durationunit) property, to map the duration unit data source field.
* Defining the duration unit value along with the duration field in the data source.

### Mapping the duration unit field

The below code snippet explains the mapping of duration unit data source field to the Gantt control using the [`taskFields.durationUnit`](../api/gantt/taskFields/#durationunit) property.

{% tab template="gantt/durationUnits", es5Template="durationUnits" %}

```typescript

let GanttData: Object[]  =  [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 2, DurationUnit:'day', Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 12,DurationUnit:'hour', Progress: 70  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 240,DurationUnit:'minute', Progress: 80 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, DurationUnit:'hour', Progress: 50  },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, DurationUnit:'day' },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 480, DurationUnit:'minute', Progress: 70 }
            ]
        },
    ];

import { Gantt } from '@syncfusion/ej2-gantt';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        durationUnit: 'DurationUnit',
        child: 'subtasks'
    },
    splitterSettings: {
        columnIndex: 4
    }

});

gantt.appendTo('#Gantt');

```

{% endtab %}

> NOTE
The default value of the [`durationUnit`](../api/gantt/taskFields/#durationunit) property is `day`.

### Defining duration unit along with duration field

Duration units for the tasks can also be defined along with the duration values, the below code snippet explains the duration unit for a task along with duration value,

{% tab template="gantt/durationUnits", es5Template="durationUnitswithDuration" %}

```typescript
let GanttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            isParent:true,
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: '3days', Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: '12hours', Progress: 70   },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: '1800minutes', Progress: 80  },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            isParent:true,
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: '12hours',Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: '3days', Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: '480minutes', Progress: 70  }
            ]
        },
    ];

import { Gantt } from '@syncfusion/ej2-gantt';

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
    splitterSettings: {
        columnIndex: 4
    }
});

gantt.appendTo('#Gantt');

```

{% endtab %}

>NOTE:
The edit type of the duration column in Gantt is string, to support editing the duration field along with duration units.

## Unscheduled Tasks

Unscheduled tasks are planned for a project without any definite schedule dates. The Gantt control supports rendering the unscheduled tasks. You can create or update the tasks with anyone of start date, end date, and duration values or none. You can enable or disable the unscheduled tasks by using the [`allowUnscheduledTasks`](../api/gantt/#allowunscheduledtasks) property. The following images represent the various types of unscheduled tasks in Gantt.

### Start Date Only

![Alt text](images/startDate-only.png)

### End Date Only

![Alt text](images/endDate-only.png)

### Duration Only

![Alt text](images/duration-only.png)

### Milestone

A milestone is a task that has no start and end dates, but it has a duration value of zero. It is represented as follows.

![Alt text](images/milestone.png)

## Define unscheduled tasks in data source

You can define the various types of unscheduled tasks in the data source as follows

{% tab template= "gantt/unscheduledTasks", es5Template="unscheduledTasks" %}

```typescript

import { Gantt, Edit } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit);

let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', Duration: 3, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', EndDate: new Date('04/08/2019'), Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), EndDate: new Date('04/08/2019'), Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', Duration: 0, Progress: 50 }
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
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true
    },
    allowUnscheduledTasks: true
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> NOTE
> If the [`allowUnscheduledTasks`](../api/gantt/#allowunscheduledtasks) property is set to false, then the Gantt control automatically calculates the scheduled date values with a default value of duration 1 and the project start date is considered as the start date for the task.

## Working Time Range

In the Gantt control, working hours in a day for a project can be defined by using the [`dayWorkingTime`](../api/gantt/dayWorkingTime/) property. Based on the working hours, automatic date scheduling and duration validations for a task are performed.

The following code snippet explains how to define the working time range for the project in Gantt.

{% tab template="gantt/workingtimerange", es5Template="workingtimerange" %}

```typescript

import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';


Gantt.Inject(DayMarkers);

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
    highlightWeekends: true,
    dayWorkingTime: [{ from: 9, to: 18 }],
    timelineSettings: {
        timelineViewMode: 'Day'
    },
    splitterSettings: {
        columnIndex: 0
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> NOTE
>* Individual tasks can lie between any time within the defined working time range of the project.
>* The [`dayWorkingTime`](../api/gantt/dayWorkingTime/) property is used to define the working time for the whole project.

## Weekend/Non-working days

Non-working days/weekend are used to represent the non-productive days in a project. You can define the non-working days in a week using the [`workWeek`](../api/gantt/#workweek) property in Gantt.

{% tab template="gantt/how-to changeworkweek", es5Template="changeWorkweek" %}

```typescript

import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { data } from 'datasource.ts';

Gantt.Inject(DayMarkers)

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
    workWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    highlightWeekends: true
});

gantt.appendTo('#Gantt');

```

{% endtab %}

> By default, Saturdays and Sundays are considered as non-working days/weekend in a project.
> In the Gantt control, you can make weekend as working day by setting the [`includeWeekend`](../api/gantt/#includeweekend) property to `true`.