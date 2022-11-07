---
title: "Adaptive"
component: "TreeGrid"
description: "Learn how to render the filter, edit dialog and other features adaptively in the Essential JS 2 Tree Grid control."
---

# Adaptive View

The Tree Grid user interface (UI) was redesigned to provide an optimal viewing experience and improve usability on small screens. This interface will render the filter, edit dialog and other features adaptively. For example, Filtering opens the UI for user in a pop-up occupying the entire screen.

To make the tree grid adaptive, set the [`enableAdaptiveUI`](../api/treegrid/#enableAdaptiveUI) to true.

{% tab template="treegrid/adaptive",es5Template="adaptive" %}

```typescript
import { TreeGrid, Filter, Sort, Edit, Toolbar, Page } from '@syncfusion/ej2-treegrid';
import { Browser } from '@syncfusion/ej2-base';
import { sampleData } from './datasource.ts';
TreeGrid.Inject(Filter, Sort, Edit, Toolbar, Page);
let treegrid: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    enableAdaptiveUI: true,
    allowPaging: true,
    allowSorting: true,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
    height: '100%',
    load: () => {
        treegrid.grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    },
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 135, validationRules: { required: true, number: true } },
        { field: 'taskName', headerText: 'Task Name', width: 280, editType: "dropdownedit", validationRules: { required: true } },
        { field: 'duration', headerText: 'Duration', filter: { type : 'Menu' }, width: 140, validationRules: { required: true } },
        { field: 'progress', headerText: 'Progress', width: 145 , validationRules: { required: true } },
    ]
});
treegrid.appendTo('#adaptivebrowser');
```

{% endtab %}

> Please refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to learn how to present and manipulate data.
