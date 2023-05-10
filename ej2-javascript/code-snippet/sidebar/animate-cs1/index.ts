


var defaultSidebar = new ej.navigations.Sidebar({
   type: "Push",
   animate: false,
   enableRtl: true,
   width: '280px'
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = function () {
        defaultSidebar.toggle();
};

// Close the Sidebar
document.getElementById('close').onclick = function () {
        defaultSidebar.toggle();
};



