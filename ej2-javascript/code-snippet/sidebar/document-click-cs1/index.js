ej.base.enableRipple(true);

var defaultSidebar = new ej.navigations.Sidebar({
    type: "Push",
    width: '280px',
    closeOnDocumentClick: true,
    isOpen: true
});
defaultSidebar.appendTo('#default-sidebar');

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = function () {
    defaultSidebar.show();
};