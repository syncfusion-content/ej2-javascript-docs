ej.base.enableRipple(true);

//Dock Sidebar initialization
var dockBar= new ej.navigations.Sidebar({
        width: '220px',
        dockSize: '72px',
        enableDock: true,
        type:'Push',
        target:'e-main-content',
        zIndex:3000
});
dockBar.appendTo('#dockSidebar');
//end of DockSidebar initialization

//Default Sidebar initialization
var defaultSidebar = new ej.navigations.Sidebar({
    target:'e-main-content',
      type:"Push"
 });
defaultSidebar.appendTo('#default-sidebar');
//end of DefaultSidebar initialization


//switch the expand and collapse state
document.getElementById('buttonClick').onclick = function () {
    defaultSidebar.toggle();
}; 

