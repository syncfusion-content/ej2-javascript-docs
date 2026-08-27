var records = [];

for (var i = 1; i <= 15000; i++) {
    var item = {
        id: 'id' + i,
        text: 'Item ' + i,
    };
    records.push(item);
}

var value = records.map(function (item) { return item.text; });

var listObj = new ej.dropdowns.MultiSelect({
    dataSource: records,
    fields: { text: 'id', value: 'text' },
    mode: 'CheckBox',
    enableVirtualization: true,
    allowFiltering: true,
    showDropDownIcon: true,
    showSelectAll: true,
    maximumSelectionLength: 15000,
    summaryTagCount: 5,
    summaryTagTemplate: '${selectedCount} items selected',
    value: value
});

//render the component
listObj.appendTo('#select');

