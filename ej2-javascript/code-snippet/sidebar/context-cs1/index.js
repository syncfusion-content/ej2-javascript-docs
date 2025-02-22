ej.base.enableRipple(true);
//Sidebar initialization
var defaultSidebar = new ej.navigations.Sidebar({
    width: "280px",
    type: "Push",
    target: '.maincontent'
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

//toggle button initialization
var togglebtn = new ej.buttons.Button({ iconCss: 'e-icons e-menu', isToggle: true, content: 'Open' }, '#toggle');

// Close the Sidebar on clicking the close button
document.getElementById('close').onclick = function () {
    defaultSidebar.hide();
    document.getElementById('toggle').classList.remove('e-active');
    togglebtn.content = 'Open'
};

//Click the toggle button to expand/collapse the Sidebar.
document.getElementById('toggle').onclick = function () {
    if (document.getElementById('toggle').classList.contains('e-active')) {
        togglebtn.content = 'Close';
        defaultSidebar.show();
    } else {
        togglebtn.content = 'Open';
        defaultSidebar.hide();
    }
};