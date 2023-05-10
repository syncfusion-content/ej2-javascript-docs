var tooltiphover = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
tooltiphover.appendTo('#tooltiphover');

var tooltipclick = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
tooltipclick.appendTo('#tooltipclick');

var tooltipcustom = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
tooltipcustom.appendTo('#tooltipcustom');

var Mode = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
Mode.appendTo('#Mode');

var open = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
open.appendTo('#openMode');

//Render Tooltip component

var hoverTooltip = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    opensOn: 'Hover',
    content: 'Tooltip from hover'
});
hoverTooltip.appendTo('#tooltiphover');

var clickTooltip = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    opensOn: 'Click',
    content: 'Tooltip from click'
});
clickTooltip.appendTo('#tooltipclick');

var focusTooltip = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    opensOn: 'Focus',
    content: 'Tooltip from focus'
});
focusTooltip.appendTo('#focus');

var customTooltip = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    opensOn: 'Custom',
    content: 'Tooltip from custom mode'
});
customTooltip.appendTo('#tooltipcustom');

var openMode = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    openDelay: 1000,
    closeDelay: 1000,
    position: 'BottomCenter',
    content: 'Opens and closes Tooltip with delay of <i>1000 milliseconds</i>'
});
openMode.appendTo('#openMode');

var mode = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'Click close icon to close me',
    position: 'BottomCenter',
    isSticky: true
});
mode.appendTo('#Mode');

document.getElementById('tooltipcustom').addEventListener("dblclick", function () {
    if (this.getAttribute("data-tooltip-id")) {
        customTooltip.close();
    } else {
        customTooltip.open(this);
    }
});

