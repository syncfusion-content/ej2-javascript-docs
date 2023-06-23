var tooltip = new ej.popups.Tooltip({
    opensOn: 'Custom',
    content: 'Tooltip from custom mode'
});
tooltip.appendTo('#box');
document.getElementById('box').addEventListener("dblclick", function () {
    if (this.getAttribute("data-tooltip-id")) {
        tooltip.close();
    }
    else {
        tooltip.open(this);
    }
});

