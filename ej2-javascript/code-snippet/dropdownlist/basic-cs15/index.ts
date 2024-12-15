


import { DropDownList } from '@syncfusion/ej2-dropdowns';

//define the array of complex data
let statusData: { [key: string]: Object }[] = [
    { "Status": "Open", "State": false },
    { "Status": "Waiting for Customer", "State": false },
    { "Status": "On Hold", "State": true },
    { "Status": "Follow-up", "State": false },
    { "Status": "Closed", "State": true },
    { "Status": "Solved", "State": false },
    { "Status": "Feature Request", "State": false },
    { "Status": "In Progress", "State": false },
    { "Status": "Pending", "State": true },
    { "Status": "Escalated", "State": true },
    { "Status": "New", "State": false },
    { "Status": "Under Review", "State": true },
    { "Status": "Reopened", "State": false },
    { "Status": "Approved", "State": true },
    { "Status": "Awaiting Approval", "State": false },
    { "Status": "Scheduled", "State": false },
    { "Status": "Canceled", "State": true },
    { "Status": "Completed", "State": true },
    { "Status": "Acknowledged", "State": false },
    { "Status": "In Development", "State": false }
];

//initiate the DropDownList
let dropDownListObject: DropDownList = new DropDownList({
    // bind the sports Data to datasource property
    dataSource: statusData,
    // maps the appropriate column to fields property
    fields: { value: 'Status'},
    //set the placeholder to DropDownList input
    placeholder: "Select Status",
    // set true for enable the resize property to AutoComplete
    allowResize: true,
});
//render the component
dropDownListObject.appendTo('#ddlelement');



