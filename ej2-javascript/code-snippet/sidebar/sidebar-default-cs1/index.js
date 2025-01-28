ej.base.enableRipple(true);

//Sidebar initialization
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
//end of Sidebar initialization

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = function() {
    defaultSidebar.toggle();
};

// Close the Sidebar
document.getElementById('close').onclick = function() {
    defaultSidebar.hide();
};