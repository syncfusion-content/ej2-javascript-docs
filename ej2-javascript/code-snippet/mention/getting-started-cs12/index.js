let statusData = [
    { "Status": "Open", "State": false },
    { "Status": "Waiting for Customer", "State": false },
    { "Status": "On Hold", "State": true },
    { "Status": "Follow-up", "State": false },
    { "Status": "Closed", "State": true },
    { "Status": "Solved", "State": false },
    { "Status": "Feature Request", "State": false }
];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
     //set the data to dataSource property
     dataSource: statusData,
     // maps the appropriate column to fields property
     fields: { value: 'Status', disabled: 'State' },
     // set placeholder to DropDownList input element
});
mentionObj.appendTo('#mentionElement');