# Drag and Drop

The grid row drag and drop allows you to drag and drop grid rows to another grid or custom component. To enable row drag and drop, set the [`allowRowDragAndDrop`](../../api/grid/#allowrowdraganddrop) to true.
The target component where the grid rows are to be dropped can be set by using
the [`targetID`](../../api/grid/rowDropSettings/#targetid).

To use row drag and drop, inject the **RowDD** module in the grid.

{% tab template="grid/draganddrop",es5Template="dragdrop" %}

```typescript
import { Grid, Page, RowDD, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, RowDD, Selection);

let grid: Grid = new Grid({
    dataSource: data.slice(0, 5),
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'DestGrid' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

let destGrid: Grid = new Grid({
    dataSource: [],
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'Grid' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
destGrid.appendTo('#DestGrid');

```

{% endtab %}

> * Selection feature must be enabled for row drag and drop.
> * Multiple rows can be selected by clicking and dragging inside the grid.
For multiple row selection, the [`type`](../../api/grid/selectionSettings/#type) property must be set to **multiple**.

## Drag and drop within Grid

The grid row drag and drop allows you to drag and drop grid rows on the same grid using drag icon. To enable row drag and drop, set the [`allowRowDragAndDrop`](../../api/grid/#allowrowdraganddrop) to true.

{% tab template="grid/draganddrop-single",es5Template="dragdrop" %}

```typescript
import { Grid, RowDD, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(RowDD, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowRowDragAndDrop: true,
    heigth:300,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

```

{% endtab %}

## Drag and drop to custom component

You can drag and drop the grid rows to any custom component. To enable row drag and drop, set the [`allowRowDragAndDrop`](../../api/grid/#allowrowdraganddrop) as true and define the custom component id in [`targetID`](../../api/grid/rowDropSettings/#targetid) property of rowDropSettings.

In the below example, the selected grid row is dragged and dropped in to the TreeView component by using [`rowDrop`](../../api/grid/#rowdrop) event. Once the row is dropped into the TreeView component, we have removed the corresponding grid row from grid and its data inserted in custom component. To know more information about the drag and drop events check [`here`](https://ej2.syncfusion.com/documentation/grid/row/?no-cache=1#drag-and-drop-events).

{% tab template="grid/draganddrop-custom",es5Template="dragdrop-custom" %}

```typescript
import { Grid, Page, RowDD, Selection } from '@syncfusion/ej2-grids';
import { TreeView } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Page, RowDD, Selection);
let hierarchicalData: { [key: string]: Object }[];
let grid: Grid = new Grid({
    dataSource: data.slice(0, 5),
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'tree' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    rowDrop: function(args:any){
            let currLi: Element = args.target.closest('li');
            let gridData: any = args.data;
            if(currLi !=null && closest(currLi, '.' + 'e-control').classList.contains('e-treeview')){
                if(gridData != null){
                    let grid: any = (<any>document.getElementById('Grid')).ej2_instances[0];
                    let tree: any = (<any>document.getElementById('tree')).ej2_instances[0];
                    for(let i:number = 0, len = gridData.length; i < len; i++){
                        let obj: any = [{ nodeId:gridData[i].OrderID,nodeText:gridData[i].CustomerID }];
                        (grid as any).deleteRow(args.rows[i]);
                        tree.addNodes(obj,currLi);
                    }
                    args.cancel=true;
                }
            }
        }  
});
grid.appendTo('#Grid');

let treeObj: TreeView = new TreeView({
    fields: { dataSource: hierarchicalData, id: 'nodeId', text: 'nodeText',  
            child: 'nodeChild'
        },
    });
    treeObj.appendTo('#tree');

```

{% endtab %}

## Drag and drop with sorting and filtering

In the following demo, you can achieve the grid row drag and drop support with filtering and sorting using [`rowDrop`](../../api/grid/rowDragEventArgs) event.

{% tab template="grid/draganddrop-single-filter-sort",es5Template="dragdrop" %}

```typescript
import { Grid, Page, RowDD, Selection, Filter, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, RowDD, Selection, Filter, Sort);

let grid: Grid = new Grid({
    dataSource: data.slice(0, 10),
    allowRowDragAndDrop: true,
    selectionSettings: { type: 'Multiple' },
    height:300,
    allowFiltering:true,
    allowSorting:true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
     rowDrop: function (args: any) {
        let gObj: any = (<any>document.getElementById('Grid')).ej2_instances[0];
        let seletedRowIndexes: number[] = gInstance.getSelectedRowIndexes();
        if (gObj.sortSettings.columns.length > 0 || gObj.filterSettings.columns.length > 0) {
            let startedRow: HTMLTableRowElement = args.rows[0];
            let startRowIndex: number = startedRow.rowIndex;
            if (!args.target) {
                return
            }
            let targetRow: HTMLTableRowElement = args.target.closest('tr');
            let targetRowIndex: number = targetRow.rowIndex;
            gInstance.getContentTable().querySelector('tbody').insertBefore(startedRow, targetRow);

            if (!isNullOrUndefined(targetRow.nextElementSibling)) {
                let currentIndex: number = targetRow.rowIndex;
                if (currentIndex <= startedRow.rowIndex) {
                    gObj.getContentTable().querySelector('tbody').insertBefore(startedRow, targetRow);
                } else {
                    gObj.getContentTable().querySelector('tbody').insertBefore(startedRow, targetRow.nextElementSibling);
                }
            } else {
                gObj.getContentTable().querySelector('tbody').insertBefore(targetRow, startedRow);
            }

            let startRowObj: any = gObj.getRowObjectFromUID(startedRow.getAttribute('data-uid'));
            let targetRowObj: any = gObj.getRowObjectFromUID(targetRow.getAttribute('data-uid'))
            for (let i: number = 0, len: number = gObj.currentViewData.length; i < len; i++) {
                let getDataByField = gObj.currentViewData[i];
                if (gObj.sortSettings.columns.length > 0 || gObj.filterSettings.columns.length > 0) {
                    filteredCurrentViewData = gObj.currentViewData;
                    filteredCurrentViewData.splice(targetRowIndex, 0, filteredCurrentViewData.splice(startRowIndex, 1)[0]);
                    gObj.rowDragAndDropModule.removeBorder(targetRow);
                    gObj.contentModule.refreshContentRows();
                    dropSelectedRowIndx.push(targetRowIndex);
                    if (gObj.sortSettings.columns.length > 0) {
                        args.cancel = true;
                    }
                    if (dropSelectedRowIndx.length > 0) {
                        gObj.clearSelection();
                        gObj.selectRows(dropSelectedRowIndx);
                    }
                    return;
                }
            }
        }
    }
  
});
grid.appendTo('#Grid');

```

{% endtab %}

> * You can enable/disable the drag icon by using **disableRowDD** method which is achieved in the [`actionComplete`](../../api/grid/actionEventArgs) event.

```typescript
    actionComplete: function (args) {
        if (this.filterSettings.columns.length) {
            this.disableRowDD(true);
        }
        else {
            this.disableRowDD(false);
        }
    }

```

## Drag and drop events

The following events are triggered while drag and drop the grid rows.

[`rowDragStartHelper`](../../api/grid/#rowdragstarthelper) - Triggers when click the drag icon or grid row and this event is used to customize the drag element based on user criteria.<br/>
[`rowDragStart`](../../api/grid/#rowdragstart) -Triggers when starts to drag the grid row. <br/>
[`rowDrag`](../../api/grid/#rowdrag) - Triggers while dragging the grid row. <br/>
[`rowDrop`](../../api/grid/#rowdrop) - Triggers when a drag element is dropped on the target element. <br/>

## Drag and drop rows without drag icon

You can hide the drag and drop icon when performing a drag and drop operation within the grid. This can be achieved by setting the [targetID](../../api/grid/rowDropSettings/#targetid) of the [rowDropSettings](../../api/grid/rowDropSettings/) as the current Grid’s ID.

By setting the [targetID](../../api/grid/rowDropSettings/#targetid), the Grid will render without a helper icon (for row drag). Now you can customize the drag and drop action. To control the drop action, you can bind the [rowDrop](../../api/grid/#rowdrop) event of the Grid. In the [rowDrop](../../api/grid/#rowdrop) event, you can prevent the default action(args.cancel as true) and reorder the rows using [reorderRows](../../api/grid/#reorderrows) method of the Grid.

{% tab template="grid/draganddrop-single",es5Template="dragdrop-withouticon" %}

```typescript
import { Grid, Page, RowDD, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(RowDD,Page, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowRowDragAndDrop: true,
    allowPaging: true,
    rowDropSettings: { targetID: 'Grid' },
    selectionSettings: { type: 'Multiple' },
    pageSettings: { pageSize: 10 },
    height: 300,
    columns: [
        {
            field: 'OrderID',headerText: 'Order ID',isPrimaryKey: true,width: 80,textAlign: 'Center',
        },
        {
            field: 'CustomerID',headerText: 'Customer Name',width: 130,textAlign: 'Center',
        },
        {
            field: 'OrderDate',headerText: 'Order Date',width: 120,format: 'yMd',textAlign: 'Center',
        },
        {
            field: 'Freight',headerText: 'Freight',width: 130,format: 'C2',textAlign: 'Center',
        },
        {
            field: 'ShipCity',headerText: 'Ship City',width: 130,textAlign: 'Center',
        },
        {
            field: 'ShipCountry', headerText: 'Ship Country', width: 150
        },
    ],
    rowDrop: function(args:any){
        args.cancel = true;
        let value = [];
        for (let r = 0; r < args.rows.length; r++) {
            value.push(args.fromIndex + r);
        }
        grid.reorderRows(value, args.dropIndex);
    }
});
grid.appendTo('#Grid');

```

{% endtab %}

## Limitations

* Multiple rows can be drag and drop in the row selections basis.
* Single row is able to drag and drop in same grid without enable the row selection.
* Row drag and drop feature is not having built in support with sorting, filtering, hierarchy grid and grouping features of grid. However we can achieve sorting and filtering behavior by sample side customization which will be explained in the previous topic.