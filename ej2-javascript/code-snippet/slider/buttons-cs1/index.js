// Initialize Slider component
 let rangeObj: Slider = new ej.inputs.Slider({
        // Slider tooltip
        tooltip: { placement: 'After', isVisible: true, showOn: 'Always' },
        value: 30,
        type: 'MinRange'
        showButtons: true
    });
    // Render initialized Slider
    rangeObj.appendTo('#slider');

