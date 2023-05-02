

import { PivotView, IDataSet, Toolbar } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

PivotView.Inject(Toolbar);
let pivotTableObj: PivotView = new PivotView({
      dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
    },
    toolbar:[{template:'#enablertl'},{template:'#disablertl'}],
    showToolbar:true,
    height: 350,
});
pivotTableObj.appendTo('#PivotTable');

let button: Button = new Button({ content: 'Enable Rtl',cssClass: `e-primary` });
button.appendTo('#element');
let button1: Button = new Button({ content: 'Disable Rtl',cssClass: `e-primary` });
button1.appendTo('#element1');
document.getElementById('element').onclick = function () {
    pivotTableObj.dataSourceSettings.expandAll=true;
};
document.getElementById('element1').onclick = function () {
    pivotTableObj.dataSourceSettings.expandAll=false;
};



