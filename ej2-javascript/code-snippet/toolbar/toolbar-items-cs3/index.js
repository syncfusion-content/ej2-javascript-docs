ej.base.enableRipple(true);

//Initialize Toolbar component

var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
var toolbar = new ej.navigations.Toolbar({
items: [
    { text: "Cut" },
    { text: "Copy" },
    { type: "Separator" },
    { text: "Undo" },
    { text: "Redo" },
    { type: "Separator" },
    { type: 'Input', template: new ej.inputs.NumericTextBox({ format: 'c2', value:1, width:150 }) },
    { type: 'Input', template: new ej.dropdowns.DropDownList({ dataSource: sportsData, width: 120, index: 2 }) },
    { type: 'Input', template: new ej.buttons.CheckBox({ label: 'Checkbox', checked: true }) },
    { type: 'Input', template: new ej.buttons.RadioButton({ label: 'Radio', name: 'default', checked: true }) },
]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

