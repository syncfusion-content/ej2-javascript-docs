// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
    height: '200px',
    paneSettings: [
        { size: '25%', min: '60px', content: '#left-pane-content' },
        { size: '50%', min: '60px', content: '#middle-pane-content' },
        { size: '25%', min: '60px', content: '#last-pane-content' }
    ],
    width: '100%',
    separatorSize: 4
});

// Render initialized splitter
splitObject.appendTo('#horizontal');

