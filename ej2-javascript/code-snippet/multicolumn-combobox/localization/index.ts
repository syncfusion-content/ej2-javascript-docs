


import { MultiColumnComboBox, ColumnModel } from '@syncfusion/ej2-multicolumn-combobox';
import { L10n, setCulture} from '@syncfusion/ej2-base';

const Columns: ColumnModel[] = [
    { field: 'ContactName', header: 'Contact Name', width: 90 },
    { field: 'CustomerID', header: 'Customer ID', width: 160 }
]

let multiColumnComboboxObj: MultiColumnComboBox = new MultiColumnComboBox({
    dataSource: [],
    columns: Columns,
    locale: 'fr-BE',
    placeholder: 'Sélectionnez un client'
});
multiColumnComboboxObj.appendTo('#multicolumn');

L10n.load({
    'fr-BE': {
       'multicolumncombobox': {
             'noRecordsTemplate': "Aucun enregistrement trouvé"
         }
     }
});

