


import { AutoComplete, VirtualScroll } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';

AutoComplete.Inject(VirtualScroll);

let records: { [key: string]: Object }[] = [];
for (let i: number = 1; i <= 150; i++) {
    let item = {
        id: 'id' + i,
        text: "Item " + i,
    };
    records.push(item);
}

//initiates the component
let autoCompleteObject: AutoComplete = new AutoComplete({
    //bind the dataSorce property
    dataSource: records,
    //map the appropriate columns to fields property
    fields: { value: 'text' },
    query: new Query().take(40),
    actionBegin: (args) => {
        args.query = new Query().take(45);
    },
    //set the placeholder to AutoComplete input
    placeholder:"Select an Item ",
    //set enableVirtualization property to true
    enableVirtualization: true,
    //set the height of the popup element
    popupHeight: '200px'
});

//render the component
autoCompleteObject.appendTo('#atcelement');



