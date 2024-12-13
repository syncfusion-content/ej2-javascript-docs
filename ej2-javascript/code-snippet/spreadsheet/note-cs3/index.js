var sheet = [
  {
    name: 'PriceDetails',
    rows: [
      {
        cells: [
          { value: 'Item Name' },
          { value: 'Stock Detail' },
          { value: 'Website' },
        ],
      },
      {
        cells: [
          { value: 'Casual Shoes' },
          { value: 'OUT OF STOCK' },
          { value: 'Amazon' },
        ],
      },
      {
        cells: [
          {
            value: 'Sports Shoes',
            notes:
              'These shoes have the highest sales in terms of quantity this month.',
          },
          { value: 'IN STOCK' },
          { value: 'Overstack' },
        ],
      },
      {
        cells: [
          { value: 'Formal Shoes' },
          { value: 'IN STOCK' },
          { value: 'AliExpress' },
        ],
      },
      {
        cells: [
          { value: 'Sandals & Floaters' },
          { value: 'OUT OF STOCK' },
          { value: 'AliBaba' },
        ],
      },
      {
        cells: [
          {
            value: 'Flip-Flops & Slippers',
            notes: 'These shoes have been the most profitable this month.',
          },
          { value: 'IN STOCK' },
          { value: 'Taobao' },
        ],
      },
    ],
    columns: [{ width: 160 }, { width: 160 }, { width: 120 }],
  },
  {
    name: 'Stock',
    rows: [
      {
        cells: [{ value: 'Item Name' }, { value: 'Available Count' }],
      },
      {
        cells: [{ value: 'Sports Shoes' }, { value: '30' }],
      },
      {
        cells: [{ value: 'Formal Shoes' }, { value: '25' }],
      },
      {
        cells: [{ value: 'Flip-Flops & Slippers' }, { value: '40' }],
      },
      {
        cells: [{ value: 'Running Shoes' }, { value: '25' }],
      },
    ],
    columns: [{ width: 160 }, { width: 120 }],
  },
];
var spreadsheet = new ej.spreadsheet.Spreadsheet({
  sheets: sheet,
  allowOpen: true,
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
  allowSave: true,
  saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save'
});
spreadsheet.appendTo('#spreadsheet');
