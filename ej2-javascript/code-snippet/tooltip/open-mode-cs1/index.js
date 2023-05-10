var hoverTooltip = new ej.popups.Tooltip({
    opensOn: 'Hover',
    content: 'Tooltip from hover'
});
hoverTooltip.appendTo('#tooltiphover');

var button = new ej.buttons.Button();
button.appendTo('#tooltiphover');


var clickTooltip = new ej.popups.Tooltip({
    opensOn: 'Click',
    content: 'Tooltip from click'
});
clickTooltip.appendTo('#tooltipclick');
button.appendTo('#tooltipclick');

var focusTooltip = new ej.popups.Tooltip({
    opensOn: 'Focus',
    content: 'Tooltip from focus'
});
focusTooltip.appendTo('#tooltipfocus');

var customTooltip = new ej.popups.Tooltip({
    opensOn: 'Custom',
    content: 'Tooltip from custom mode'
});
customTooltip.appendTo('#tooltipcustom');
button.appendTo('#tooltipopen');

document.getElementById('tooltipopen').addEventListener("click", function () {
    if (this.getAttribute("data-tooltip-id")) {
        customTooltip.close();
    } else {
        customTooltip.open(this);
    }
});


