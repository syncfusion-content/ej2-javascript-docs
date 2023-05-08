// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
    height: '200px',
    paneSettings: [
        { size: '30%',  content: 'Left pane'
        },
        { size: '40%', content: 'Middle pane'
        },
        { size: '30%', content: 'Right pane'
        }
    ],
    width: '600px'
});

// Render initialized splitter
splitObject.appendTo('#splitter');

