ej.base.enableRipple(true);
   //sidebar initialization
   var dockbar = new ej.navigations.Sidebar({
        width: '220px',
        dockSize: '72px',
        enableDock: true
    });
    dockbar.appendTo('#dockSidebar');
    //end of sidebar initialization

    document.getElementById('toggle').onclick = function() {
        dockbar.toggle();
    };

