

import { PivotView, IDataSet, PivotChart } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(PivotChart);
let pivotTableObj: PivotView = new PivotView({
        dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    displayOption: { view: 'Chart' },
    chartSettings: {
        chartSeries: {
            type: 'Column'
        }
    },
    height: 320,
    allowPdfExport: true,
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#chartexport');

document.getElementById('chartexport').addEventListener('click', () => {
    pivotTableObj.chartExport('PNG', 'result');
});




