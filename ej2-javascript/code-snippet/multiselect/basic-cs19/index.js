   var sportsData = [
     { id: 'game1', sports: 'Badminton' },
    { id: 'game2', sports: 'Basketball' },
    { id: 'game3', sports: 'Cricket' },
    { id: 'game4', sports: 'Football' },
    { id: 'game5', sports: 'Golf' },
    { id: 'game6', sports: 'Hockey' },
    { id: 'game7', sports: 'Rugby' },
    { id: 'game8', sports: 'Snooker' }
];
   // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        dataSource: sportsData,
        // maps the appropriate column to fields property
        fields: { text: 'sports', value: 'id' },
        //set the debounceDelay
        debounceDelay :'300',
        // set placeholder to MultiSelect input element
        placeholder: "Select games"});
    listObj.appendTo('#select');

