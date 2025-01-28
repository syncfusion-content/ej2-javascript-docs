ej.base.enableRipple(true);

var defaultSidebar = new ej.navigations.Sidebar({
    type: "Push",
    width: '280px',
    enableGestures: false
});
defaultSidebar.appendTo('#default-sidebar');

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = function () {
    defaultSidebar.toggle();
};

// Close the Sidebar
document.getElementById('close').onclick = function () {
    defaultSidebar.hide();
};