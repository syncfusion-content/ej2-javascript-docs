import { Spreadsheet, PrintType } from '@syncfusion/ej2-spreadsheet';
import { budgetData, salaryData } from './datasource.ts';
import {
  DropDownButton,
  ItemModel,
  MenuEventArgs,
} from '@syncfusion/ej2-splitbuttons';

let items: ItemModel[] = [
  {
    text: 'ActiveSheet',
  },
  {
    text: 'Workbook',
  },
];

let allowGridLines: boolean;
let allowRowColumnHeader: boolean;


let drpDownBtn: DropDownButton = new DropDownButton({
  items: items,
  cssClass: 'e-round-corner',
  select: (args: MenuEventArgs) => {
    spreadsheet.print({
      type: args.item.text as PrintType,
      allowGridLines: allowGridLines,
      allowRowColumnHeader: allowRowColumnHeader,
    });
  },
});

drpDownBtn.appendTo('#element');

let checkboxgrid: HTMLElement = document.getElementById('gridline');

if (checkboxgrid != null) {
  checkboxgrid.onchange = function () {
    allowGridLines = (checkboxgrid as HTMLInputElement).checked;
  };
}

let checkboxheader: HTMLElement = document.getElementById('header');

if (checkboxheader != null) {
  checkboxheader.onchange = function () {
    allowRowColumnHeader = (checkboxheader as HTMLInputElement).checked;
  };
}

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
});

spreadsheet.appendTo('#spreadsheet');
