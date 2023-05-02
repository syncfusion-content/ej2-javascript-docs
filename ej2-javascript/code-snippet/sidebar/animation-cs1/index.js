ej.base.enableRipple(true);
   
  //initialization of sidebar 
var sidebarElement = new ej.navigations.Sidebar({
        showBackdrop: true,width: '280px', created:oncreate
});
sidebarElement.appendTo('#sidebar-element');
//end of Sidebar initialization
document.getElementById('zoom').onclick = function () {
    sidebarElement.show();
    sidebarElement.element.classList.add("w3-animate-zoom");
}
 // Opendoor Effect
document.getElementById('open_door').onclick = function () {
    sidebarElement.show();
    var sidebar =document.getElementsByClassName("e-sidebar-overlay")[0];
    sidebar.classList.add("move");
}
//Bottom to Top
document.getElementById('bottom_top').onclick = function () {
    sidebarElement.show();
    sidebarElement.element.classList.add("w3-animate-bottom");
}
//Rotate Sidebar 
document.getElementById('rotate').onclick = function () {
    sidebarElement.show();
    sidebarElement.element.classList.add("rotate");
}
//Rotate 3d Animation
document.getElementById('rotate_3d').onclick = function () {
    sidebarElement.show();
    sidebarElement.element.classList.add("rotate_3d");
}
//Reverse Slide Out
document.getElementById('reverse').onclick = function () {
    sidebarElement.show();
    sidebarElement.element.classList.add("reverse_slide_out");
}

// Close the Sidebar
document.getElementById('close_btn').onclick = function () {
    sidebarElement.element.classList.remove("sidebar");
    sidebarElement.element.classList.remove("rotate");
    sidebarElement.element.classList.remove("w3-animate-zoom");
    sidebarElement.element.classList.remove("w3-animate-bottom");
    sidebarElement.element.classList.remove("rotate_3d");
    sidebarElement.element.classList.remove("reverse_slide_out");
    sidebarElement.hide(); 
};

function oncreate() {
     this.element.style.visibility = '';
}

