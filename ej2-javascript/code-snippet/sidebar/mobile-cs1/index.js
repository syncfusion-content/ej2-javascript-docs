ej.base.enableRipple(true);
   //sidebar initialization
   var defaultSidebar = new ej.navigations.Sidebar({
        mediaQuery: window.matchMedia('(max-width: 400px)'), 
        width: "280px"
   });
    defaultSidebar.appendTo('#default');