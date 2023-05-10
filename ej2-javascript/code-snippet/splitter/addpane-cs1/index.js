// Initialize Splitter control
var splitObject = new ej.layouts.Splitter({
    height: '200px',
    paneSettings: [
        { size: '200px' },
        { size: '200px' }
    ],
    width: '600px',
    created: onSplitterCreate
});

// Render initialized splitter
splitObject.appendTo('#splitter');

var paneDetails = {
    size: '190px',
    content: 'New Pane',
    min: '30px',
    max: '250px',
}

function onSplitterCreate() {
    document.getElementById('addpane').addEventListener('click', function () {
        splitObject.addPane(paneDetails, 1);
    });
}


