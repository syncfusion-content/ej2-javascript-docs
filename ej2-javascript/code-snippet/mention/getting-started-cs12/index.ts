


import { Mention } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let statusData: { [key: string]: Object }[] = [
    { "Status": "Open", "State": false },
    { "Status": "Waiting for Customer", "State": false },
    { "Status": "On Hold", "State": true },
    { "Status": "Follow-up", "State": false },
    { "Status": "Closed", "State": true },
    { "Status": "Solved", "State": false },
    { "Status": "Feature Request", "State": false }
];

// initialize Mention control
let mentionObject: Mention = new Mention({
    // bind the sports Data to datasource property
    dataSource: statusData,
    // maps the appropriate column to fields property
    fields: { value: 'Status', disabled: 'State' },
    //set the placeholder to DropDownList input
});

// render initialized Mention
mentionObject.appendTo('#mentionElement');
