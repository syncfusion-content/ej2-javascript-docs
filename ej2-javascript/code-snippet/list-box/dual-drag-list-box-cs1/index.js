var groupA = [
    { "Name": "Australia", "Code": "AU" },
    { "Name": "Bermuda", "Code": "BM" },
    { "Name": "Canada", "Code": "CA" },
    { "Name": "Cameroon", "Code": "CM" },
    { "Name": "Denmark", "Code": "DK" },
    { "Name": "France", "Code": "FR" },
    { "Name": "Finland", "Code": "FI" },
    { "Name": "Germany", "Code": "DE" },
    { "Name": "Hong Kong", "Code": "HK" }
];

var groupB = [
    { "Name": "India", "Code": "IN" },
    { "Name": "Italy", "Code": "IT" },
    { "Name": "Japan", "Code": "JP" },
    { "Name": "Mexico", "Code": "MX" },
    { "Name": "Norway", "Code": "NO" },
    { "Name": "Poland", "Code": "PL" },
    { "Name": "Switzerland", "Code": "CH" },
    { "Name": "United Kingdom", "Code": "GB" },
    { "Name": "United States", "Code": "US" }
];

var listObj = new ej.dropdowns.ListBox({

    // Set the groupa data to the data source.
    dataSource: groupA,
    allowDragAndDrop: true,
    // Map the appropriate columns to fields property.
    fields: { text: 'Name'},

    // Set the scope of the ListBox.
    scope: '#listbox2',

    // Set the tool settings with set of items.
    toolbarSettings: { items: ['moveUp', 'moveDown', 'moveTo', 'moveFrom', 'moveAllTo', 'moveAllFrom']},

    height: '330px'

});

listObj.appendTo('#listbox1');

listObj = new ej.dropdowns.ListBox({

    // Set the groupa data to the data source.
    dataSource: groupB,
    allowDragAndDrop: true,
    // Map the appropriate columns to fields property.
    fields: { text: 'Name' },

    height: '330px',

    // Set the scope of the ListBox.
    scope: '#listbox2',
});

listObj.appendTo('#listbox2');


