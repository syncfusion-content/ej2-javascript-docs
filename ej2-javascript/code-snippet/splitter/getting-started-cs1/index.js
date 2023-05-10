// Initialize splitter control
var splitObj = new ej2_layouts_1.Splitter({
    paneSettings: [
        // Content for Pane 1
        { content: 'Left Pane' },
        // Content for Pane 2
        { content: 'Middle Pane' },
        // Content for Pane 3
        { content: 'Right Pane' }
    ],
    height: '250px'
});

// Render initialized splitter
splitObj.appendTo('#splitter');

