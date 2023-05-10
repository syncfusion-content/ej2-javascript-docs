

import { Tooltip } from '@syncfusion/ej2-popups';
import { RadioButton, ChangeArgs, Button } from '@syncfusion/ej2-buttons';

let tooltip: Tooltip = new Tooltip({
   cssClass: 'curvetips e-tooltip-css',
    content: 'Tooltip arrow customized',
});
tooltip.appendTo('#target');

let curvebutton: Button = new Button();
curvebutton.appendTo('#target');

let tipbutton: Button = new Button();
tipbutton.appendTo('#tooltip');

let bubblebutton: Button = new Button();
bubblebutton.appendTo('#bubbletip');

let radiobutton: RadioButton = new RadioButton({ label: 'TopCenter', name: 'default', value: 'TopCenter', checked: true, change: onChange});

// Render initialized radio button
radiobutton.appendTo('#element1');

let radiobutton = new RadioButton({ label: 'BottomLeft', name: 'default', value: 'BottomLeft',  change: onChange});
radiobutton.appendTo('#element2');

let tippointer: Tooltip = new Tooltip({
    cssClass: 'pointertip e-tooltip-css',
    mouseTrail: true,
    content: 'Disabled tooltip pointer',
    showTipPointer: false
});
tippointer.appendTo('#tooltip');

let bubble: Tooltip = new Tooltip({
    cssClass: 'bubbletip e-tooltip-css',
    position: 'TopRight',
    content: 'Tooltip arrow customized as balloon tip'
});
bubble.appendTo('#bubbletip');

let radiobutton: RadioButton = new RadioButton({ label: 'BottomLeft', name: 'position', value: 'BottomLeft', change: onChanged});

// Render initialized radio button
radiobutton.appendTo('#radio1');

let radiobutton = new RadioButton({ label: 'TopRight', name: 'position', value: 'TopRight',  checked: true, change: onChanged});
radiobutton.appendTo('#radio2');

function onChange(args: ChangeArgs): void {
    tooltip.position = args.value as any;
    tooltip.dataBind();
}
function onChanged(args: ChangeArgs): void {
    bubble.position = args.value as any;
    if(bubble.position == 'BottomLeft'){
      bubble.offsetY = -30;
    } else {
      bubble.offsetY = 0;
    }
    bubble.dataBind();
}



