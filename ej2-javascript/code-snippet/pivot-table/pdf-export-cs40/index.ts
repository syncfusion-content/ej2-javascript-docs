


import { PivotView, IDataSet, PDFExport, PdfCellRenderArgs, VirtualScroll} from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';

PivotView.Inject(PDFExport, VirtualScroll);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    allowPdfExport: true,
    enableVirtualization: true,
    height: 320,
    onPdfCellRender: (args: PdfCellRenderArgs) => {
        if (args.pivotCell && args.pivotCell.valueSort && args.pivotCell.valueSort.levelName === 'France.Mountain Bikes') {
            args.cell.height = 30
        }
    },
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    pivotTableObj.pdfExport({}, false, null, false, true);
};



