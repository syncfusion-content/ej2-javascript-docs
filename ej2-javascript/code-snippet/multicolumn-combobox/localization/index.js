
var columns = [
  { field: 'ContactName', header: 'Contact Name', width: 90 },
  { field: 'CustomerID', header: 'Customer ID', width: 160 }
];

var multiColumnComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
  dataSource: [],
  columns: columns,
  locale: 'fr-BE',
  placeholder: 'Sélectionnez un client'
});
multiColumnComboboxObj.appendTo('#multicolumn');

ej.base.L10n.load({
  'fr-BE': {
    'multicolumncombobox': {
          'noRecordsTemplate': "Aucun enregistrement trouvé"
      }
  }
});