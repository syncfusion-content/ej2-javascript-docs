ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar, ej.grids.Page);

var grid = new ej.grids.Grid({
    dataSource: inventoryStoreData,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true },
    allowPaging: true,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'],
    columns: [
        { field: 'ID', headerText: 'ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'Product', headerText: 'Product Name', width: 180, editType: 'dropdownedit', edit: { params: { popupHeight: '200px' } } },
        { field: 'VendorA', headerText: 'Vendor A (units)', width: 160, textAlign: 'Right', editType: 'numericedit', edit: { params: { showSpinButton: false } } },
        { field: 'VendorB', headerText: 'Vendor B (units)', width: 160, textAlign: 'Right', editType: 'numericedit', edit: { params: { showSpinButton: false } } },
        { field: 'VendorC', headerText: 'Vendor C (units)', width: 160, textAlign: 'Right', editType: 'numericedit', edit: { params: { showSpinButton: false } } },
        { field: 'VendorD', headerText: 'Vendor D (units)', width: 160, textAlign: 'Right', editType: 'numericedit', edit: { params: { showSpinButton: false } } },
        { field: 'UnitPrice', headerText: 'Price (per unit)', width: 160, textAlign: 'Right', format: 'C2', editType: 'numericedit', edit: { params: { showSpinButton: false } }, validationRules: { required: true, min: 1 } }
    ],
    height: 240
});
grid.appendTo('#Grid');
