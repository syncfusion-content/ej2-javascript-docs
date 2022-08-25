# Zooming

The zooming support provides options to increase or decrease the width of timeline cells and also provides options to change the timeline units dynamically. This support enables you to view the tasks in a project clearly from minute to decade timespan. To enable the zooming features, define the `ZoomIn`, `ZoomOut`, and `ZoomToFit` items to toolbar items collections, and this action can be performed on external actions such as button click using the [`zoomIn`](../api/gantt/#zoomin), [`zoomOut`](../api/gantt/#zoomout), and [`fitToProject`](../api/gantt/#fittoproject) built-in methods. The following zooming options are available to view the project:

## Zoom in

This support is used to increase the timeline width and timeline unit from years to minutes
timespan. When the `ZoomIn` icon was clicked, the timeline cell width is increased when the cell
size exceeds the specified range and the timeline unit is changed based on the current zoom levels.

## Zoom out

This support is used to increase the timeline width and timeline unit from minutes to years timespan. When the `ZoomOut` icon was clicked, the timeline cell width is decreased when the cell size falls behind the specified range and the timeline view mode is changed based on the current zooming levels.

## Zoom to fit

This support is used to view all the tasks available in a project within available area on the chart part of Gantt. When users click the `ZoomToFit` icon, then all the tasks are rendered within the available chart container width.

{% tab template= "gantt/zooming", es5Template="zooming" %}

```typescript

import { Gantt, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    toolbar: ['ZoomIn', 'ZoomOut', 'ZoomToFit'],
    labelSettings: {
        leftLabel: 'TaskName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019')
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Customizing zooming levels

In Gantt, the zoom in and zoom out actions are performed based on the predefined zooming levels in the `zoomingLevels` property. You can customize the zooming actions by defining the required zooming collection to the `zoomingLevels` property.

{% tab template= "gantt/zooming", es5Template="customZooming" %}

```typescript

import { Gantt, Toolbar, ZoomTimelineSettings } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
let customZoomingLevels: ZoomTimelineSettings[] = [{
    topTier: { unit: 'Month', format: 'MMM, yy', count: 1 },
    bottomTier: { unit: 'Week', format: 'dd', count: 1 }, timelineUnitSize: 33, level: 0,
    timelineViewMode: 'Month', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Month', format: 'MMM, yyyy', count: 1 },
    bottomTier: { unit: 'Week', format: 'dd MMM', count: 1 }, timelineUnitSize: 66, level: 1,
    timelineViewMode: 'Month', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Month', format: 'MMM, yyyy', count: 1 },
    bottomTier: { unit: 'Week', format: 'dd MMM', count: 1 }, timelineUnitSize: 99, level: 2,
    timelineViewMode: 'Month', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Week', format: 'MMM dd, yyyy', count: 1 },
    bottomTier: { unit: 'Day', format: 'd', count: 1 }, timelineUnitSize: 33, level: 3,
    timelineViewMode: 'Week', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Week', format: 'MMM dd, yyyy', count: 1 },
    bottomTier: { unit: 'Day', format: 'd', count: 1 }, timelineUnitSize: 66, level: 4,
    timelineViewMode: 'Week', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Day', format: 'E dd yyyy', count: 1 },
    bottomTier: { unit: 'Hour', format: 'hh a', count: 12 }, timelineUnitSize: 66, level: 5,
    timelineViewMode: 'Day', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Day', format: 'E dd yyyy', count: 1 },
    bottomTier: { unit: 'Hour', format: 'hh a', count: 6 }, timelineUnitSize: 99, level: 6,
    timelineViewMode: 'Day', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
];
Gantt.Inject(Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    toolbar: ['ZoomIn', 'ZoomOut', 'ZoomToFit'],
    labelSettings: {
        leftLabel: 'TaskName'
    },
    dataBound: function () {
        gantt.zoomingLevels = customZoomingLevels;
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019')
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Zoom action by methods

You can perform the various zoom actions dynamically or on external click action using the following methods:
* Zoom in - [`zoomIn`](../api/gantt/#zoomin)
* Zoom out - [`zoomOut`](../api/gantt/#zoomout)
* Fit to project - [`fitToProject`](../api/gantt/#fittoproject)

{% tab template= "gantt/zoomingMethods", es5Template="zoomingMethods" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
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
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019')
});
gantt.appendTo('#Gantt');

let zoomInBtn: Button = new Button();
zoomInBtn.appendTo('#zoomIn');

document.getElementById('zoomIn').addEventListener('click', () => {
    gantt.zoomIn();
});

let zoomOutBtn: Button = new Button();
zoomOutBtn.appendTo('#zoomOut');

document.getElementById('zoomOut').addEventListener('click', () => {
    gantt.zoomOut();
});

let fitToBth: Button = new Button();
fitToBth.appendTo('#fitToProject');

document.getElementById('fitToProject').addEventListener('click', () => {
    gantt.fitToProject();
});

```

{% endtab %}