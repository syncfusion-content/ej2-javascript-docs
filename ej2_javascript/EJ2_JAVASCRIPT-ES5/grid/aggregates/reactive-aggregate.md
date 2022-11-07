# Reactive Aggregate

## Auto update aggregate value in batch editing

When using batch editing, the aggregate values will be refreshed on every cell save. The footer, group footer, and group caption aggregate values will be refreshed.

> Adding a new record to the grouped grid will not refresh the aggregate values.

{% tab template="grid/aggregates", es5Template="reactive-aggregate" %}

```typescript
import { Grid, Aggregate, Edit, Toolbar, Group,Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate, Edit, Toolbar, Group, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging:true,
    pageSettings:{pageSize:6},
    toolbar: ['Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowDeleting: true, mode: 'Batch' },
    allowGrouping: true,
    groupSettings: { showDropArea: false, columns: ['ShipCountry'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Name', width: 150 }
    ],
    height: 268,
    aggregates: [{
        columns: [{
          type:'Sum',
          field:'Freight',
          format:'C2',
          footerTemplate:'Sum : ${Sum}'
        }]
    },
    {
        columns:[{
            type:'Sum',
            field:'Freight',
            format:'C2',
            groupCaptionTemplate:'Average : ${Average}'
        }]
    },
    {
        columns:[{
            type:'Sum',
            field:'Freight',
            format:'C2',
            groupFooterTemplate:'Sum : ${Sum}'
        }]
    }
    ]
});
grid.appendTo('#Grid');

```

{% endtab %}

## Refresh aggregate values in inline editing

By default, reactive aggregate update is not supported by inline and dialog edit modes as it is not feasible to anticipate the value change event for every editor. But, you can refresh the aggregates manually in the inline edit mode using the refresh method of aggregate module.

In the following code, the input event for the Freight column editor has been registered and the aggregate value has been refreshed manually.

{% tab template="grid/aggregates", es5Template="inlineEditAggregate" %}

```typescript
import { Grid, Aggregate, Edit, Toolbar, Group, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate, Edit, Toolbar, Group, Page);

let selectedRecord : Object = {};
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging:true,
    pageSettings:{pageSize:7},
    toolbar: ['Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowDeleting: true, mode: 'Normal' },
    actionBegin:(args:any)=>{
        if(args.requestType === 'beginEdit'){
           selectedRecord ={};
           selectedRecord = args.rowData;
        };
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', editType: 'numericedit', format: 'C2', edit: { params: { change: (args :any) => {
            let gridObj = document.getElementById('Grid')['ej2_instances'][0];
            selectedRecord['Freight'] = args.value; // Set the edited value to aggregate column
            gridObj.aggregateModule.refresh(selectedRecord) // Refresh aggregates using edited data
            }
           }
        }, width: 150},
       { field: 'ShipCountry', headerText: 'Ship Name', width: 150 }
    ],
    height: 268,
    aggregates: [{
        columns:[{
          type:'Sum',
          field:'Freight',
          format:'C2',
          footerTemplate:'Sum : ${Sum}'
        }]
    }]
});
grid.appendTo('#Grid');

```

{% endtab %}