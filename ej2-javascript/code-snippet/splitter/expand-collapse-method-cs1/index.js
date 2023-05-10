// Initialize Splitter control
var splitObj = new ej.layouts.Splitter({
    height: '230px',
    paneSettings: [
        { collapsible: true },
        { collapsible: true },
        { collapsible: true }
    ],
    width: '100%'
});
// Render initialized splitter
splitObj.appendTo('#splitter');

document.getElementById('expand').onclick = function () {
    splitObj.expand(0);
};
document.getElementById('collapse').onclick = function () {
    splitObj.collapse(0);
};

