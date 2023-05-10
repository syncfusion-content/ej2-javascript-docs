var tooltip = new ej.popups.Tooltip({
    content: 'Tooltip content',
    opensOn: 'Custom'
});
tooltip.appendTo('#target');
document.getElementById('target').addEventListener("click", function () {
    if (this.getAttribute("data-tooltip-id")) {
        var closeAnimation = { effect: 'FadeOut', duration: 1000 };
        tooltip.close(closeAnimation);
    }
    else {
        var openAnimation = { effect: 'FadeIn', duration: 1000 };
        tooltip.open(this, openAnimation);
    }
});

