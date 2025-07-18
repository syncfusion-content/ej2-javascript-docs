let sportsData = [
    { Id: 'Game1', Game: 'Badminton' },
    { Id: 'Game2', Game: 'Basketball' },
    { Id: 'Game3', Game: 'Cricket' },
    { Id: 'Game4', Game: 'Football' },
    { Id: 'Game5', Game: 'Golf' },
    { Id: 'Game6', Game: 'Hockey' },
    { Id: 'Game7', Game: 'Rugby' },
    { Id: 'Game8', Game: 'Snooker' }
];
   // initialize ComboBox component
    var listObj = new ej.dropdowns.ComboBox({
      //set the data to dataSource property
        dataSource: sportsData, 
        // maps the appropriate column to fields property
        fields: { value: 'Game' },
        //set the debounceDelay
        debounceDelay :'300',
        // set placeholder to ComboBox input element
        placeholder: "Find a game"});
    listObj.appendTo('#comboelement');

