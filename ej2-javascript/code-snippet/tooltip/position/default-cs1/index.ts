

import { Tooltip } from '@syncfusion/ej2-popups';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';

let button: Button = new Button({content: 'Show Tooltip'});
button.appendTo('#tooltip');

let tooltip: Tooltip = new Tooltip({
  position: 'TopCenter',
  content: 'Tooltip Content'
});
tooltip.appendTo('#tooltip');

let dropDownListObject: DropDownList = new DropDownList({
  change: dropChange
});
dropDownListObject.appendTo('#positions');

function dropChange() {
  tooltip.close();
  tooltip.position = this.value;
}



