import { Grid, Freeze, Sort } from '@syncfusion/ej2-grids';
import { telecastData } from './datasource.ts';

Grid.Inject(Freeze, Sort);

let grid: Grid = new Grid({
    dataSource: telecastData,
    gridLines: 'Both',
    enableHover: false,
    allowSelection: false,
    allowSorting: true,
    enableRowSpan: true,
    columns: [
        { field: 'Channel', headerText: 'Channel', width: 150, freeze: 'Left', isPrimaryKey: true },
        { field: 'Genre', headerText: 'Genre', width: 120, freeze: 'Left' },
        { field: 'Program12AM', headerText: '12 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program1AM', headerText: '1 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program2AM', headerText: '2 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program3AM', headerText: '3 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program4AM', headerText: '4 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program5AM', headerText: '5 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program6AM', headerText: '6 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program7AM', headerText: '7 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program8AM', headerText: '8 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program9AM', headerText: '9 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program10AM', headerText: '10 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program11AM', headerText: '11 AM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program12PM', headerText: '12 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program1PM', headerText: '1 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program2PM', headerText: '2 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program3PM', headerText: '3 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program4PM', headerText: '4 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program5PM', headerText: '5 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program6PM', headerText: '6 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program7PM', headerText: '7 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program8PM', headerText: '8 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program9PM', headerText: '9 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program10PM', headerText: '10 PM', width: 110, textAlign: 'Center', allowSorting: false},
        { field: 'Program11PM', headerText: '11 PM', width: 110, textAlign: 'Center', allowSorting: false},
    ],
    width: 'auto',
    height: 450,
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Content' },
});
grid.appendTo('#Grid');