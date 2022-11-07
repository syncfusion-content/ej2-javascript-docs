---
title: "Toolbar"
component: "Gantt"
description: "Learn how to use the toolbar and add custom toolbar items in the Essential JS 2 Gantt control"
---

# Toolbar

The Gantt control provides the toolbar support to handle Gantt actions. The [`toolbar`](../api/gantt/#toolbar) property accepts the collection of built-in toolbar items and `ItemModel` objects for custom toolbar items.

## Built-in toolbar items

Built-in toolbar items execute standard actions of the Gantt control, and these items can be added to toolbar by defining the [`toolbar`](../api/gantt/#toolbar) as a collection of built-in items. It renders the button with icon and text.

The following table shows built-in toolbar items and its actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new record. |
| Cancel | Cancels the edit state. |
| CollapseAll | Collapses all the rows. |
| Delete | Deletes the selected record. |
| Edit | Edits the selected record. |
| Indent | Indent the selected record to one level. |
| Outdent | Outdent the selected record to one level. |
| ExpandAll | Expands all the rows. |
| NextTimeSpan | Navigate the Gantt timeline to next time span. |
| PrevTimeSpan | Navigate the Gantt timeline to previous time span. |
| Search | Searches the records by the given key. |
| Update | Updates the edited record. |

{% tab template="gantt/toolbar", es5Template="defaultItems" %}

```typescript

import { Gantt, Toolbar, Selection, Edit, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Selection, Edit, Filter);

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
    toolbar: ['Add', 'Cancel', 'CollapseAll', 'Delete', 'Edit', 'ExpandAll', 'NextTimeSpan', 'PrevTimeSpan', 'Search', 'Update', 'Indent', 'Outdent'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> * The [`toolbar`](../api/gantt/#toolbar) has options to define both built-in and custom toolbar items.

## Custom toolbar items

Custom toolbar items can be added to the toolbar by defining the [`toolbar`](../api/gantt/#toolbar) property as a collection of `ItemModels`.
Actions for this customized toolbar items are defined in the [`toolbarClick`](../api/gantt/#toolbarclick) event.

By default, the custom toolbar items are at left position. You can change the position by using the `align` property. In the following sample, the `Quick Filter` toolbar item is positioned at right.

{% tab template="gantt/toolbar", es5Template="customItems" %}

```typescript

import { Gantt, Toolbar, Filter } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Filter);

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
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item.id === 'toolbarfilter') {
            gantt.filterByColumn('TaskName', 'startswith', 'Identify');
        }
    },
    toolbar: [{ text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align: 'Right', prefixIcon: 'e-quickfilter' }],
    allowFiltering: true
});

gantt.appendTo('#Gantt');


```

{% endtab %}

> * The [`toolbar`](../api/gantt/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Built-in and custom items in toolbar

The Gantt control has an option to use both built-in and custom toolbar items at the same time.

In the following example, the `ExpandAll` and `CollapseAll` are built-in toolbar items and `Test` is the custom toolbar item.

{% tab template="gantt/toolbar", es5Template="defaultandCustomItems" %}

```typescript

import { Gantt, Toolbar, Filter } from '@syncfusion/ej2-gantt';
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Filter);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.text === 'Test') {
        alert("Custom toolbar click...");
    }
};

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
    toolbarClick: clickHandler,
    toolbar: ['ExpandAll', 'CollapseAll', { text: 'Test', tooltipText: 'Test', id: 'Test' }]
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Enable/disable toolbar items

You can enable or disable the toolbar items by using the `enableItems` method.

{% tab template="gantt/enable-disabletoolbarItems", es5Template="enabledisableItems" %}

```typescript

import { Gantt, Toolbar, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Filter);

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
    toolbar: ['QuickFilter', 'ClearFilter'],
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item.text === 'QuickFilter') {
            gantt.filterByColumn('TaskName', 'startswith', 'Identify');
        }
        if (args.item.text === 'ClearFilter') {
            gantt.clearFiltering();
        }
    },
    allowFiltering: true
});

gantt.appendTo('#Gantt');

let enable: Button = new Button({}, '#enable');
let disable: Button = new Button({}, '#disable');

enable.element.onclick = () => {
    gantt.toolbarModule.enableItems([gantt.element.id + '_QuickFilter', gantt.element.id + '_ClearFilter'], true);// enable toolbar items.
};

disable.element.onclick = () => {
    gantt.toolbarModule.enableItems([gantt.element.id + '_QuickFilter', gantt.element.id + '_ClearFilter'], false);// disable toolbar items.
};

```

{% endtab %}

## Add input elements to toolbar

In the Gantt toolbar, you can add EJ2 editor elements like numeric text box, drop-down list, and date picker controls. The following code snippets demonstrates how to add EJ2 editors to the Gantt toolbar.

{% tab template="gantt/customToolbarItems", es5Template="customToolbarItems" %}

```typescript
import { Gantt, Toolbar } from '@syncfusion/ej2-gantt';
import { NumericTextBox} from '@syncfusion/ej2-inputs';
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
        child: 'subtasks'
    },
    toolbar: [{ type: 'Input', template: new NumericTextBox({ format: 'c2', value:1, width:150 }) }]
});

gantt.appendTo('#Gantt');

```

{% endtab %}