import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { budgetData, salaryData } from './datasource.ts';

let columns: ColumnModel[] = [
  { width: 100 },
  { width: 100 },
  { width: 100 },
  { width: 100 },
];
let spreadsheet: Spreadsheet = new Spreadsheet({
  allowOpen: true,
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
  allowSave: true,
  saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
  sheets: [
    { name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns },
    { name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns },
  ],
  allowPrint: false
});

spreadsheet.appendTo('#spreadsheet');
