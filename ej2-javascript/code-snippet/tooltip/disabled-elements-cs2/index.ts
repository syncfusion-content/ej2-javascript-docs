

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button, Switch } from '@syncfusion/ej2-buttons';

let tooltipObj_1: Tooltip = new Tooltip({
  content: 'Tooltip from disabled element'
});
tooltipObj_1.appendTo('#box');


//Initialize Button component
let buttonObj_1: Button = new Button({
  disabled: true
});
//Render initialized Button component
buttonObj_1.appendTo('#disabledbutton');

//Initialize Button component
let button: Button = new Button();
//Render initialized Button component
button.appendTo('#tooltip');

//Initialize Tooltip component
let tooltipObj_2: Tooltip = new Tooltip({
  //Set tooltip content
  content: 'Lets go green & Save Earth !!!'
});
//Render initialized Tooltip component
tooltipObj_2.appendTo('#tooltip');

let switchObj: Switch = new Switch({
  value: 'USB tethering',
  checked: true,
  change: (args) => {
    if ((document.getElementById('checked') as HTMLInputElement).checked) {
      tooltipObj_2.appendTo('#tooltip');
    } else {
      tooltipObj_2.destroy();
    }
  }
});
switchObj.appendTo('#checked');


