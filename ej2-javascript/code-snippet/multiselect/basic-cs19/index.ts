


import { MultiSelect } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let sportsData: { [key: string]: Object }[] = [
    { id: 'game1', sports: 'Badminton' },
    { id: 'game2', sports: 'Basketball' },
    { id: 'game3', sports: 'Cricket' },
    { id: 'game4', sports: 'Football' },
    { id: 'game5', sports: 'Golf' },
    { id: 'game6', sports: 'Hockey' },
    { id: 'game7', sports: 'Rugby' },
    { id: 'game8', sports: 'Snooker' }
];

//initiate the MultiSelect
let msObject: MultiSelect = new MultiSelect({
    // bind the sports Data to datasource property
    dataSource: sportsData,
    // maps the appropriate column to fields property
    fields: { text: 'sports', value: 'id' },
    //set the debounceDelay
    debounceDelay :300,
    //set the placeholder to MultiSelect input
    placeholder:"Select games"
});
//render the component
msObject.appendTo('#select');



