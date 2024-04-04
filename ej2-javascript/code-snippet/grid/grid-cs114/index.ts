import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Grid, InfiniteScroll } from '@syncfusion/ej2-grids';
Grid.Inject(InfiniteScroll);

let names: string[] = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani',
    'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
let hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let designation: string[] = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
let status: string[] = ['Completed', 'Open', 'In Progress', 'Review', 'Testing']
let data: Function = (count: number) => {
    let result: Object[] = [];
    for (let i = 0; i < count; i++) {
        result.push({
            TaskID: i + 1,
            Engineer: names[Math.round(Math.random() * names.length)] || names[0],
            Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
            Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
            Status: status[Math.round(Math.random() * status.length)] || status[0]
        });
    }
    return result;
};

let grid: Grid = new Grid({
    dataSource: data(5000),
    height: 300,
    enableInfiniteScrolling: true,
    pageSettings: { pageSize: 50 },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 70 },
        { field: 'Engineer', width: 100 },
        { field: 'Designation', width: 100 },
        { field: 'Estimation', textAlign: 'Right', width: 100 },
        { field: 'Status', width: 100 }
    ]
});
grid.appendTo('#Grid');

let dropDownColumn: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Select count' },
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' }
    ],
    popupHeight: '240px',
    width: '220px',
    value: 'Select count',
    change: valueChange
});
dropDownColumn.appendTo('#dropdownlist');

function valueChange(args: ChangeEventArgs) {
    (grid as Grid).infiniteScrollSettings.initialBlocks = parseInt(args.value as string, 10);
    (grid as Grid).refresh();
}