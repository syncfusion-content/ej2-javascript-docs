


import { MultiSelect } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let tagData: { [key: string]: Object }[] = [
    { "Text": "Add to KB", "State": false },
    { "Text": "Crisis", "State": false },
    { "Text": "Enhancement", "State": true },
    { "Text": "Presale", "State": false },
    { "Text": "Needs Approval", "State": false },
    { "Text": "Approved", "State": true },
    { "Text": "Internal Issue", "State": true },
    { "Text": "Breaking Issue", "State": false },
    { "Text": "New Feature", "State": true },
    { "Text": "New Component", "State": false },
    { "Text": "Mobile Issue", "State": false }
];

//initiate the MultiSelect
let msObject: MultiSelect = new MultiSelect({
    // bind the sports Data to datasource property
    dataSource: tagData,
    // maps the appropriate column to fields property
    fields: { value: 'Text', disabled: 'State' },
    //set the placeholder to MultiSelect input
    placeholder: "Select Tags"
});
//render the component
msObject.appendTo('#select');



