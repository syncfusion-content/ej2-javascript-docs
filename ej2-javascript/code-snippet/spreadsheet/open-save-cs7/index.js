
var sheet = [{
  rows: [{
    index: 0,
    cells: [
      { index: 0, value: 'Order ID', style: { fontWeight: 'bold' } },
      { value: 'Customer ID', style: { fontWeight: 'bold' } },
      { value: 'Employee ID', style: { fontWeight: 'bold' } },
      { value: 'Ship Name', style: { fontWeight: 'bold' } },
      { value: 'Ship City', style: { fontWeight: 'bold' } },
      { value: 'Ship Address', style: { fontWeight: 'bold' } }
    ]
  },
  {
    cells: [
      { value: '10248' },
      { value: 'VINET' },
      { value: '5' },
      { value: 'Vins et alcools Chevalier' },
      { value: 'Reims' },
      { value: '59 rue de lAbbaye' }
    ]
  },
  {
    cells: [
      { value: '10249' },
      { value: 'TOMSP' },
      { value: '6' },
      { value: 'Toms Spezialitäten' },
      { value: 'Münster' },
      { value: 'Luisenstr. 48' }
    ]
  },
  {
    cells: [
      { value: '10250' },
      { value: 'HANAR' },
      { value: '4' },
      { value: 'Hanari Carnes' },
      { value: 'Rio de Janeiro' },
      { value: 'Rua do Paço, 67' }
    ]
  },
  {
    cells: [
      { value: '10251' },
      { value: 'VICTE' },
      { value: '3' },
      { value: 'Victuailles en stock' },
      { value: 'Lyon' },
      { value: '2, rue du Commerce' }
    ]
  }],
  columns: [
    { width: 80 }, { width: 80 }, { width: 82 },
    { width: 160 }, { width: 110 }, { width: 130 }
  ]
}];
//Initialize Spreadsheet component.
var spreadsheet = new ej.spreadsheet.Spreadsheet({
  sheets: sheet,
  openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
  saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
  fileMenuItemSelect: function (args) {
    if (args.item.text === 'Microsoft Excel') {
      args.cancel = true;
      spreadsheet.saveAsJson().then((response) => {
        var formData = new FormData();
        formData.append(
          'JSONData',
          JSON.stringify(response.jsonObject.Workbook)
        );
        formData.append('fileName', 'Sample');
        formData.append('saveType', 'Xlsx');
        formData.append('pdfLayoutSettings', JSON.stringify({ fitSheetOnOnePage: false, orientation: 'Portrait' })),
        fetch(
          'https://services.syncfusion.com/js/production/api/spreadsheet/save',
          {
            method: 'POST',
            headers: { Authorization: 'YOUR TEXT' },
            body: formData,
          }
        ).then((response) => {
          response.blob().then((data) => {
            var anchor = ej.base.createElement('a', {
              attrs: { download: 'Sample.xlsx' },
            });
            var url = URL.createObjectURL(data);
            anchor.href = url;
            document.body.appendChild(anchor);
            anchor.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(anchor);
          });
        });
      });
    }
  },
});
//Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');

