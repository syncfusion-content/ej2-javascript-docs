var records = [];
for (var i = 1; i <= 150; i++) {
    var item = {
        id: 'id' + i,
        text: "Item " + i,
    };
    records.push(item);
}

//initiates the component
var ComboBoxObject = new ej.dropdowns.ComboBox({
    //bind the dataSorce property
    dataSource: records,
    //map the appropriate columns to fields property
    fields: { value: 'id', text: 'text' },
    query: new ej.data.Query().take(40),
    actionBegin: (args) => {
        args.query = new ej.data.Query().take(45);
    },
    //set the placeholder to ComboBox input
    placeholder:"Select an Item ",
    //set enableVirtualization property to true
    enableVirtualization: true,
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
ComboBoxObject.appendTo('#comboelement');

