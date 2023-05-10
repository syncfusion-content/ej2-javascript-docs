var tooltip = new ej.popups.Tooltip({
    content: 'Tooltip content',
    animation: {
        open: { effect: 'ZoomIn', duration: 1000, delay: 0 },
        close: { effect: 'ZoomOut', duration: 500, delay: 0 }
    }
});
tooltip.appendTo('#target');

