


var defaultSidebar = new ej.navigations.Sidebar({
   type: "Push",
   enableGestures:false,
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



