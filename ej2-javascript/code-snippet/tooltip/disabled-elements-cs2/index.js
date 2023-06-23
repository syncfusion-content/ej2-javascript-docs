var tooltipObj_1 = new ej.popups.Tooltip({
  content: 'Tooltip from disabled element'
});
tooltipObj_1.appendTo('#box');

//Initialize Button component
var buttonObj_1 = new ej.buttons.Button({
  disabled: true
});
//Render initialized Button component
buttonObj_1.appendTo('#disabledbutton');

//Initialize Button component
var button = new ej.buttons.Button();
//Render initialized Button component
button.appendTo('#tooltip');

//Initialize Tooltip component
var tooltipObj_2 = new ej.popups.Tooltip({
  //Set tooltip content
  content: 'Lets go green & Save Earth !!!',
  beforeRender: function(args) {
     if (!(document.getElementById('checked')).checked) {
       args.cancel = true;
     }
  }
});
//Render initialized Tooltip component
tooltipObj_2.appendTo('#tooltip');

var switchObj = new ej.buttons.Switch({
  value: 'USB tethering',
  checked: true,
  change: function(args) {
    if ((document.getElementById('checked')).checked) {
      var tooltipObj_2 = new ej.popups.Tooltip({
        //Set tooltip content
        content: "Lets go green & Save Earth !!!"
      });
      tooltipObj_2.appendTo('#tooltip');
    } 
  }
});
switchObj.appendTo('#checked');


