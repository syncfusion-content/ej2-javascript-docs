// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
    height: '200px',
    paneSettings: [
        { size: '200px', min: '20%', max: '40%'},
        { size: '200px', min: '30%', max: '60%'},
        { size: '200px'}
    ],
    width: '600px',
});

// Render initialized splitter
splitObject.appendTo('#splitter');

