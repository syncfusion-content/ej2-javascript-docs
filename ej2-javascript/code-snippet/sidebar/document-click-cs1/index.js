ej.base.enableRipple(true);
   
   var defaultSidebar = new ej.navigations.Sidebar({
        type: "Push",
        width: '280px',
		closeOnDocumentClick:true,
        isOpen: true
    });
    defaultSidebar.appendTo('#default-sidebar');
    //end of Sidebar initialization

  // Toggle(Open/Close) the sidebar
    document.getElementById('toggle').onclick = function() {
        defaultSidebar.show();
    };

    //end of sidebar initialization

    // Toggle(Open/Close) the sidebar



