// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
    height: '305px',
    paneSettings: [
        { size: '100px' },
        { size: '100px' },
        { size: '100px' }
    ],
    width: '600px',
    orientation: 'Vertical'
});

// Render initialized splitter
splitObject.appendTo('#splitter');

