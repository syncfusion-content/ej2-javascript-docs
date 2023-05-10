ej.base.enableRipple(true);

// Initialize ListView component
var data = [
    { text: 'Home', id: 'list-02' },
    { text: 'Offers', id: 'list-03' },
    { text: 'Support', id: 'list-04' },
    { text: 'Logout', id: 'list-06' }
];

var listInstance = new ej.lists.ListView({
    //Set defined data to dataSource property
    dataSource: data
});
listInstance.appendTo('#list');

// Initialize Sidebar component
var defaultSidebar= new ej.navigations.Sidebar({
    type: "Over", 
    width: '100%'
});
defaultSidebar.appendTo('#default-sidebar');

//Click to toggle the Sidebar
document.getElementById('toggle').onclick = function() {
    defaultSidebar.toggle();
};

// Close the sidebar
document.getElementById('close').onclick = function() {
    defaultSidebar.hide();
};






    

