---
title: "Scrolling"
component: "Gantt"
description: "Learn how to set width and height for Gantt content, display a scrollbar and make the Gantt responsive with a parent container."
---

# Scrolling

The scrollbar will be displayed in the gantt when content exceeds the element `width` or `height`. The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the gantt exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the grid pane size.
* The [height](../api/gantt/#height) and [width](../api/gantt/#width) are used to set the gantt height and width, respectively.

> The default value for `height` and `width` is `auto`.

## Set width and height

We can even set pixel values to width and height of gantt container using [width](../api/gantt/#width) and [height](../api/gantt/#height) properties.

{% tab template="gantt/scrolling", es5Template="scroll" %}

```typescript
import { Gantt} from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '350px',
    width: '600px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
});
gantt.appendTo('#Gantt')
```

{% endtab %}

## Responsive with the parent container

Specify the [width](../api/gantt/#width) and [height](../api/gantt/#height) as `100%` to make the gantt element fill its parent container.
Setting the `height` to `100%` requires the gantt parent element to have explicit height. Also, the component will be responsive when the parent container is resized.

{% tab template="gantt/responsive-scrolling", sourceFiles="index.ts,index.html", es5Template="responsive" %}

```typescript
import { Gantt} from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '100%',
    width: '100%',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
});
gantt.appendTo('#Gantt')
```

{% endtab %}
