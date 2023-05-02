


var defaultSidebar = new ej.navigations.Sidebar({
   type: "Push",
   closeOnDocumentClick:true,
   isOpen: true,
   width: '280px'
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = function () {
        defaultSidebar.show();
};




