// Initialize Splitter control
var horizontalObj = new ej.layouts.Splitter({
  height: '316px',
    paneSettings: [
        { size: '200px' },
        { size: '200px' },
        { size: '200px' }
    ],
    width: '600px'
});

// Render initialized splitter
horizontalObj.appendTo('#Horizontal_splitter');

var verticalObj = new ej.layouts.Splitter({
    height: '308px',
    paneSettings: [
        { size: '150px', min: '20%' },
        { size: '100px', min: '20%' }
    ],
    orientation: 'Vertical'
});

// Render initialized splitter
verticalObj.appendTo('#vertical_splitter');

