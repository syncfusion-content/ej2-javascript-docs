// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
  height: '250px',
    paneSettings: [
        { size: '200px' },
        { size: '200px' },
        { size: '200px' }
    ],
    width: '600px'
});

// Render initialized splitter
splitObject.appendTo('#splitter');

