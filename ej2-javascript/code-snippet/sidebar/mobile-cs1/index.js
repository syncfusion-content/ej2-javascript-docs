ej.base.enableRipple(true);
//Sidebar initialization
var defaultSidebar = new ej.navigations.Sidebar({
     mediaQuery: window.matchMedia('(max-width: 400px)'),
     width: "280px"
});
defaultSidebar.appendTo('#default');