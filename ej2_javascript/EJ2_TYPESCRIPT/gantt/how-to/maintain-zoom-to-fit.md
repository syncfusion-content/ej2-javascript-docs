---
title: "How To"
component: "Gantt"
description: "Learn how to maintain zoomtofit."
---

# Maintain zoomToFit

In the Gantt control, While performing edit actions or dynamically change dataSource, the timeline gets refreshed. When zoomToFit toolbar item is clicked and perform editing actions or dynamically change dataSource, the timeline gets refreshed. So that, the timeline will not fit to the project any more.

## Maintain zoomToFit after edit actions

We can maintain `zoomToFit` after editing actions(cell edit,dialog edit,taskbar edit) by using [`fitToProject`](../api/gantt/#fittoproject) method in `actionComplete` and `taskbarEdited` event.

{% tab template="gantt/how-to maintainzoomtofit", es5Template="maintainZoomtofit" %}

```typescript

import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    allowSelection: true,
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
    toolbar: ['Edit', 'ZoomToFit'],
    editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true,
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019'),
    taskbarEdited: function(args){
      if (args) {
        var obj = document.getElementById("Gantt").ej2_instances[0];
        obj.dataSource = GanttData;
        obj.fitToProject();
      }
    },
    actionComplete: function (args) {
      if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
        var obj = document.getElementById("Gantt").ej2_instances[0];
        obj.dataSource = GanttData;
        obj.fitToProject();
      }
    }
});
gantt.appendTo('#Gantt');
```

{% endtab %}

## Maintain zoomToFit after change dataSource dynamically

We can maintain `zoomToFit` after change dataSource dynamically, by calling [`fitToProject`](../api/gantt/#fittoproject) method in dataBound event.

{% tab template="gantt/how-to maintainzoomtofitdatasource", es5Template="maintainZoomtofitdataSource" %}

```typescript

import { Gantt, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData, data } from 'datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

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
    toolbar: ['ZoomToFit'],
    labelSettings: {
        leftLabel: 'TaskName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019'),
    dataBound: function (args) {
      this.fitToProject();
    }
});
gantt.appendTo('#Gantt');

let changeBtn: Button = new Button();
changeBtn.appendTo('#changeData');

document.getElementById('changeData').addEventListener('click', () => {
  var obj = document.getElementById('Gantt').ej2_instances[0];
  obj.dataSource = data;
});
```

{% endtab %}