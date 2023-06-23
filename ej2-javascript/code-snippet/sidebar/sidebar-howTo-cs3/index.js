ej.base.enableRipple(true);
   //sidebar initialization
   var defaultSidebar = new ej.navigations.Sidebar({
        showBackdrop: true,
        type: "Push",
        width: '280px'
    });
    defaultSidebar.appendTo('#default-sidebar');
    //end of sidebar initialization

    // Toggle(Open/Close) the sidebar
    document.getElementById('toggle').onclick = function() {
        defaultSidebar.toggle();
    };

    // Close the sidebar
    document.getElementById('close').onclick = function() {
        defaultSidebar.hide();
    };
    //end of sidebar initialization

    // Toggle(Open/Close) the sidebar
    

