import { Grid, Filter, Page, FilterType } from '@syncfusion/ej2-grids';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { ordersTrackData } from './datasource.ts';

Grid.Inject(Filter, Page);

let filtertype: { [key: string]: Object }[] = [
    { id: 'CheckBox', type: 'CheckBox' },
    { id: 'Excel', type: 'Excel' }
];

let grid: Grid = new Grid({
    dataSource: ordersTrackData,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox', mode: 'Immediate' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerName', headerText: 'Customer Name', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd', textAlign: 'Right' },
        { field: 'Product', headerText: 'Product', width: 80 },
        { field: 'Status', headerText: 'Status', width: 80 },
        { field: 'Amount', headerText: 'Amount', textAlign: 'Right', width: 80 }
    ]
});
grid.appendTo('#Grid');

let dropDownFilterType: DropDownList = new DropDownList({
    dataSource: filtertype,
    width: '150px',
    fields: { text: 'type', value: 'id' },
    value: 'CheckBox',
    change: (e: ChangeEventArgs) => {
        let dropSelectedValue: FilterType = <FilterType>e.value;
        grid.filterSettings.type = dropSelectedValue;
        grid.filterSettings.mode = 'Immediate';
        grid.clearFiltering();
    }
});
dropDownFilterType.appendTo('#filterType');