# Render chart control based on cell selection

The cell selection support is enabled using the [`allowSelection`](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings/#allowselection) property and its type and mode are configured using the [`selectionSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSelectionSettings/) property. The [`cellSelected`](https://ej2.syncfusion.com/documentation/api/pivotview/#cellselected) event gets fired on every selection operation performed in the pivot table. This event returns the selected cell informations, like row header name, column header name, measure name, and value. Based on this information, the [`chart`](https://ej2.syncfusion.com/documentation/chart/getting-started/) control will be plotted.

{% tab template="pivot-table/chart", es5Template="selection-chart", sourceFiles="index.ts,index.html" %}

```typescript

import { Chart, Category, Legend, Tooltip, ColumnSeries, LineSeries, SeriesModel } from '@syncfusion/ej2-charts';
import { PivotView, IDataSet, PivotCellSelectedEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

let onInit: boolean = true;
let measureList: { [key: string]: string } = {};
let chart: Chart;
let selectedCells: CellSelectedObject[];
let chartSeries: SeriesModel[];

let pivotObj: PivotView = new PivotView({
  dataSourceSettings: {
    dataSource: pivotData as IDataSet[],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    filters: []
  },
  width: '100%',
  height: 290,
  dataBound: () => {
        if (onInit) {
            for (let value of pivotObj.dataSourceSettings.values) {
                measureList[value.name] = value.caption || value.name;
            }
            pivotObj.grid.selectionModule.selectCellsByRange({ cellIndex: 1, rowIndex: 1 }, { cellIndex: 3, rowIndex: 3 });
        }
    },
    gridSettings: {
        allowSelection: true,
        selectionSettings: { mode: 'Both', type: 'Multiple', cellSelectionMode: 'Box' }
    },
    cellSelected: (args: PivotCellSelectedEventArgs) => {
        selectedCells = args.selectedCellsInfo;
        if (selectedCells && selectedCells.length > 0) {
            chartSeries = frameChartSeries();
            chartUpdate();
        }
    }
});
pivotObj.appendTo('#PivotTable');

function frameChartSeries(): SeriesModel[] {
    let columnGroupObject: { [key: string]: { x: string, y: number }[] } = {};
    for (let cell of selectedCells) {
      if (cell.measure !== '') {
        let columnSeries = (pivotObj.dataSourceSettings.values.length > 1 && measureList[cell.measure]) ?
        (cell.columnHeaders.toString() + ' ~ ' + measureList[cell.measure]) : cell.columnHeaders.toString();
        if (columnGroupObject[columnSeries]) {
          columnGroupObject[columnSeries].push({ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) });
        } else {
          columnGroupObject[columnSeries] = [{ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) }];
        }
      }
    }
    let columnKeys: string[] = Object.keys(columnGroupObject);
    let chartSeries: SeriesModel[] = [];
    for (let key of columnKeys) {
        chartSeries.push({
            dataSource: columnGroupObject[key],
            xName: 'x',
            yName: 'y',
            type: 'Column',
            name: key
        });
    }
    return chartSeries;
}

function chartUpdate() {
    if (onInit) {
        onInit = false;
        Chart.Inject(ColumnSeries, LineSeries, Legend, Tooltip, Category);
        chart = new Chart({
            title: 'Sales Analysis',
            legendSettings: {
                visible: true
            },
            tooltip: {
                enable: true
            },
            primaryYAxis: {
                title: pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name }).join(' ~ '),
            },
            primaryXAxis: {
                valueType: 'Category',
                title: pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name }).join(' ~ '),
                labelIntersectAction: 'Rotate45'
            },
            series: chartSeries,
        }, '#Chart');
    } else {
        chart.series = chartSeries;
        chart.primaryXAxis.title = pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name }).join(' ~ ');
        chart.primaryYAxis.title = pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name }).join(' ~ ');
        chart.refresh();
    }
}

```

{% endtab %}