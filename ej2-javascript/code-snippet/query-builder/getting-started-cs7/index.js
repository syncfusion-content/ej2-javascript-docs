    /**
     * localization querybuilder sample
     */
     ej.base.L10n.load({
    'de-DE': {
        'querybuilder': {
            'AddGroup': 'Gruppe hinzufügen',
            'AddCondition': 'Bedingung hinzufügen',
            'AddButton': 'Gruppe/Bedingung hinzufügen',
            'DeleteRule': 'Entfernen Sie diesen Zustand',
            'DeleteGroup': 'Gruppe löschen',
            'Edit': 'BEARBEITEN',
            'SelectField': 'Wählen Sie ein Feld aus',
            'DeleteRule': 'Entfernen Sie diesen Zustand',
            'DeleteGroup': 'Gruppe löschen',
            'SelectOperator': 'Operator auswählen',
            'StartsWith': 'Beginnt mit',
            'EndsWith': 'Endet mit',
            'DoesNotStartWith': 'Beginnt nicht mit',
            'DoesNotEndWith': 'Endet nicht mit',
            'IsEmpty': 'Ist leer',
            'IsNotEmpty': 'Ist nicht leer',
            'IsNull': 'Ist Null',
            'IsNotNull': 'Ist nicht Null',
            'DoesNotContain': 'Beinhaltet nicht',
            'Contains': 'Enthält',
            'Equal': 'Gleich',
            'NotEqual': 'Nicht gleich',
            'LessThan': 'Weniger als',
            'LessThanOrEqual': 'Weniger als oder gleich',
            'GreaterThan': 'Größer als',
            'GreaterThanOrEqual': 'Größer als oder gleich',
            'Between': 'Zwischen',
            'NotBetween': 'Nicht zwischen',
            'In': 'Im',
            'NotIn': 'Nicht in',
            'Remove': 'LÖSCHEN',
            'ValidationMessage': 'Dieses Feld wird benötigt',
            'True': 'Wahr',
            'False': 'Falsch',
        }
    }
});
        var columnData =  [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
        var importRules = {
        'condition': 'or',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'equal',
            'value': 'Laptop'
        }]
    };

    var hardwareData = [{
      'TaskID': 1,
      'Name': 'Lenovo Yoga',
      'Category': 'Laptop',
      'SerialNo': 'CB27932009',
      'InvoiceNo': 'INV-2878',
      'Status': 'Assigned'
  },
  {
      'TaskID': 2,
      'Name': 'Acer Aspire',
      'Category': 'Others',
      'SerialNo': 'CB35728290',
      'InvoiceNo': 'INV-3456',
      'Status': 'In-repair'
  },
  {
      'TaskID': 3,
      'Name': 'Apple MacBook',
      'Category': 'Laptop',
      'SerialNo': 'CB35628728',
      'InvoiceNo': 'INV-2763',
      'Status': 'In-repair'
  }];
  
          var qryBldrObj = new ej.querybuilder.QueryBuilder({
            width: '100%',
            dataSource: hardwareData,
            locale: 'de-DE',
            columns: columnData,
            rule: importRules
        });
        qryBldrObj.appendTo('#querybuilder');


