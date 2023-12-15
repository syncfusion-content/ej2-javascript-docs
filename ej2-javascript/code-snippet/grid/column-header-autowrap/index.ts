import { Grid, Page, ChangeEventArgs } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { inventoryData } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid(
    {
        dataSource: inventoryData,
        allowPaging: true,
        allowTextWrap: true,
        textWrapSettings: { wrapMode: 'Header' },
        columns: [
            { field: 'Inventor', headerText: 'Inventor Name', width: 180, textAlign: 'Right' },
            { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: 180 },
            { field: 'Country', headerText: 'Country', width: 140 },
            { field: 'Active', headerText: 'Active', width: 120 },
            { field: 'Mainfieldsofinvention', headerText: 'Main Feilds Of Invention', width: 200 },
        ],
    });
grid.appendTo('#Grid');

let dropdownData = [
    { text: 'Header', value: 'Header' },
    { text: 'Both', value: 'Both' },
]

let dropDownColumn: DropDownList = new DropDownList({
    dataSource: dropdownData,
    popupHeight: '240px',
    width: '120px',
    value: 'Header',
    change: change,
});
dropDownColumn.appendTo('#dropdownlist');

function change(args: ChangeEventArgs) {
    grid.textWrapSettings.wrapMode = args.value;
}