let statusData = [
    { "Status": "Open", "State": false },
    { "Status": "Waiting for Customer", "State": false },
    { "Status": "On Hold", "State": true },
    { "Status": "Follow-up", "State": false },
    { "Status": "Closed", "State": true },
    { "Status": "Solved", "State": false },
    { "Status": "Feature Request", "State": false }
];
// initialize DropDownList component
var listObj = new ej.dropdowns.DropDownList({
    //set the data to dataSource property
    dataSource: statusData,
    // maps the appropriate column to fields property
    fields: { value: 'Status', disabled: 'State' },
    // set placeholder to DropDownList input element
    placeholder: "Select Status"
});
listObj.appendTo('#ddlelement');

