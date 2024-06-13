let tagData = [
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
// initialize MultiSelect component
var listObj = new ej.dropdowns.MultiSelect({
    //set the data to dataSource property
    dataSource: tagData,
    // maps the appropriate column to fields property
    fields: { value: 'Text', disabled: 'State' },
    // set placeholder to MultiSelect input element
    placeholder: "Select Tags"
});
listObj.appendTo('#select');

