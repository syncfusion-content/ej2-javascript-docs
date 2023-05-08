// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
    height: '250px',
    paneSettings: [
        { size: '200px' },
        { size: '200px' },
        { size: '200px' }
    ],
    width: '600px',
    separatorSize: '5'
});

// Render initialized splitter
splitObject.appendTo('#splitter');

