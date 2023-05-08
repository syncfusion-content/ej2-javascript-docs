// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
    height: '200px',
    paneSettings: [
        { size: '200px', collapsible: true },
        { size: '200px', collapsible: true },
        { size: '200px', collapsible: true }
    ],
    width: '600px'
});

// Render initialized splitter
splitObject.appendTo('#splitter');

