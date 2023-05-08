
var button = new ej.buttons.Button({content: 'Show Tooltip'});
button.appendTo('#tooltip');

var tooltip = new ej.popups.Tooltip({
  position: 'TopCenter',
  content: 'Tooltip Content'
});
tooltip.appendTo('#tooltip');

var dropDownListObject = new ej.dropdowns.DropDownList({
  change: (args) => {
      tooltip.close();
      tooltip.position = args.value;
    }
});
dropDownListObject.appendTo('#positions');


