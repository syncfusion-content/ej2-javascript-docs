let statusData = [
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
// initialize DropDownList component
var listObj = new ej.dropdowns.DropDownList({
    //set the data to dataSource property
    dataSource: statusData,
    // maps the appropriate column to fields property
    fields: { value: 'Status'},
    // set placeholder to DropDownList input element
    placeholder: "Select Status",
    // set true for enable the resize property to AutoComplete
    allowResize: true,
});
listObj.appendTo('#ddlelement');

