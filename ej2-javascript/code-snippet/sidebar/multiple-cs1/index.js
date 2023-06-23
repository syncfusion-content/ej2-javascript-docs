ej.base.enableRipple(true);

//left Sidebar initialization
var leftSidebar= new ej.navigations.Sidebar({
     width: "200px",
     type:'Push'
});
leftSidebar.appendTo('#default');
//end of leftSidebar initialization

//Right Sidebar initialization
var rightSidebar = new ej.navigations.Sidebar({
    width: "200px",
    position:'Right',
    type:'Push'
 });
rightSidebar.appendTo('#default1');
//end of rightSidebar initialization

// Toggle(Open/Close) the left Sidebar
document.getElementById('toggle-btn').onclick = function () {
    leftSidebar.toggle();
};
// Toggle(Open/Close) the right Sidebar
document.getElementById('toggle-btn2').onclick = function () {
    rightSidebar.toggle();
};

