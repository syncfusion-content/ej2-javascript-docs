var tooltip = new ej.popups.Tooltip({
   cssClass: 'curvetips e-tooltip-css',
   content: 'Tooltip arrow customized',
});
tooltip.appendTo('#target');

var curvebutton = new ej.buttons.Button();
curvebutton.appendTo('#target');

var tipbutton = new ej.buttons.Button();
tipbutton.appendTo('#tooltip');

var bubblebutton = new ej.buttons.Button();
bubblebutton.appendTo('#bubbletip');

var radiobutton = new ej.buttons.RadioButton({ label: 'TopCenter', name: 'default', value: 'TopCenter', checked: true, change: onChange});

// Render initialized RadioButton.
radiobutton.appendTo('#element1');

var radiobutton = new ej.buttons.RadioButton({ label: 'BottomLeft', name: 'default', value: 'BottomLeft',  change: onChange});
radiobutton.appendTo('#element2');

var tippointer = new ej.popups.Tooltip({
    cssClass: 'pointertip e-tooltip-css',
    mouseTrail: true,
    content: 'Disabled tooltip pointer',
    showTipPointer: false
});
tippointer.appendTo('#tooltip');

var bubble = new ej.popups.Tooltip({
    cssClass: 'bubbletip e-tooltip-css',
    position: 'TopRight',
    content: 'Tooltip arrow customized as balloon tip'
});
bubble.appendTo('#bubbletip');

var radiobutton = new ej.buttons.RadioButton({ label: 'BottomLeft', name: 'position', value: 'BottomLeft', change: onChanged});

// Render initialized RadioButton.
radiobutton.appendTo('#radio1');

var radiobutton = new ej.buttons.RadioButton({ label: 'TopRight', name: 'position', value: 'TopRight',  checked: true, change: onChanged});
radiobutton.appendTo('#radio2');

function onChange(args) {
    tooltip.position = args.value;
    tooltip.dataBind();
}
function onChanged(args) {
    bubble.position = args.value;
    if(bubble.position == 'BottomLeft'){
      bubble.offsetY = -30;
    } else {
      bubble.offsetY = 0;
    }
    bubble.dataBind();
}




