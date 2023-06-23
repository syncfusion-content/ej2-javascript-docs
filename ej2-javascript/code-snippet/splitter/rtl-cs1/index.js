// Initialize Splitter control
var splitObj = new ej.layouts.Splitter({
    paneSettings: [
        { content: 'Left Pane' },
        { content: 'Middle Pane' },
        { content: 'Right Pane' }
    ],
    enableRtl : true,
    height: '250px'
});
splitObj.appendTo('#splitter');

