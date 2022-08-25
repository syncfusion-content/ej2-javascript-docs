---
title: "Event Markers"
component: "Gantt"
description: "Learn how to highlight the important event in Gantt chart part in the Essential JS 2 Gantt control."
---

# Event markers

The event markers in the Gantt control is used to highlight the important events in a project. Event markers can be initialized by using the [`eventMarkers`](../api/gantt/eventMarker/) property, and you can define date and label for the event markers using the [`day`](../api/gantt/eventMarker/#day) and [`label`](../api/gantt/eventMarker/#label) properties. You can also customize it using the [`cssClass`](../api/gantt/eventMarker/#cssclass) properties. The following code example shows how to add event markers in the Gantt control.

To highlight the days, inject the [`DayMarkers`](../api/gantt/#daymarkersmodule) module into the Gantt control.

{% tab template= "gantt/event-markers", es5Template="eventmarkers" %}

```javascript

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
        resourceInfo: 'resources',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    eventMarkers: [
        {
            day: '04/10/2019',
            cssClass: 'e-custom-event-marker',
            label: 'Project approval and kick-off'
        }
    ]
});
gantt.appendTo('#Gantt');

```

{% endtab %}