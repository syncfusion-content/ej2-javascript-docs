// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
    height: '200px',
    paneSettings: [
        { size: '200px',  content: 'Left pane'
        },
        { size: '200px', content: 'Middle pane'
        },
        { size: '200px', content: 'Right pane'
        }
    ],
    width: '600px'
});

// Render initialized splitter
splitObject.appendTo('#splitter');

