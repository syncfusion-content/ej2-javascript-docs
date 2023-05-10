ej.base.enableRipple(true);

//sidebar initialization
var defaultSidebar= new ej.navigations.Sidebar({
    showBackdrop: false,
    open:function(e)
    {
        console.log("Sidebar is opened");
    },
    close: function(e)
    {
       console.log("Sidebar is closed");
    }
});
defaultSidebar.appendTo('#default');
//end of sidebar initialization

// Toggle(Open/Close) the sidebar
document.getElementById('toggle').onclick = function() {
    defaultSidebar.toggle();
};

// Close the sidebar
document.getElementById('close').onclick = function() {
    defaultSidebar.hide();
};