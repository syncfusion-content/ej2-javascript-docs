//define the array of string
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Initialize ListView control
var listviewInstance = new ej.lists.ListView({
    //set the data to datasource property
    dataSource: data,
    //set the template for list items
    template: '<img id="listImage" src="https://ej2.syncfusion.com/documentation/code-snippet/listview/grid-layout-cs1/apple.png" alt="apple" />'
});

//Render initialized ListView
listviewInstance.appendTo("#element");