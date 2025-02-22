import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let sidebarElement: Sidebar = new Sidebar({
    showBackdrop: true, width: '280px', created: oncreate
});
sidebarElement.appendTo('#sidebar-element');

// Zoom Effect
let zoomBtn = document.querySelector('#zoom');
if (zoomBtn) {
    zoomBtn.addEventListener('click', () => {
        sidebarElement.show();
        sidebarElement.element.classList.add("w3-animate-zoom");
    });
}
// Open Door Effect
let openDoorBtn = document.querySelector('#open_door');
if (openDoorBtn) {
    openDoorBtn.addEventListener('click', () => {
        sidebarElement.show();
        let sidebar: Element = document.getElementsByClassName("e-sidebar-overlay")[0];
        sidebar.classList.add("move");
    });
}
// Bottom to Top
let bottomTopBtn = document.querySelector('#bottom_top');
if (bottomTopBtn) {
    bottomTopBtn.addEventListener('click', () => {
        sidebarElement.show();
        sidebarElement.element.classList.add("w3-animate-bottom");
    });
}
// Rotate Sidebar
let rotateBtn = document.querySelector('#rotate');
if (rotateBtn) {
    rotateBtn.addEventListener('click', () => {
        sidebarElement.show();
        sidebarElement.element.classList.add("rotate");
    });
}
// Sidebar with 3D Animation
let rotate3dBtn = document.querySelector('#rotate_3d');
if (rotate3dBtn) {
    rotate3dBtn.addEventListener('click', () => {
        sidebarElement.show();
        sidebarElement.element.classList.add("rotate_3d");
    });
}
// Reverse Slide Out
let reverseBtn = document.querySelector('#reverse');
if (reverseBtn) {
    reverseBtn.addEventListener('click', () => {
        sidebarElement.show();
        sidebarElement.element.classList.add("reverse_slide_out");
    });
}
// Close the Sidebar
let closeBtn = document.querySelector('#close_btn');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sidebarElement.element.classList.remove("sidebar");
        sidebarElement.element.classList.remove("rotate");
        sidebarElement.element.classList.remove("w3-animate-zoom");
        sidebarElement.element.classList.remove("w3-animate-bottom");
        sidebarElement.element.classList.remove("rotate_3d");
        sidebarElement.element.classList.remove("reverse_slide_out");
        sidebarElement.hide();
    });
}
//Remove the Flickering Effect
function oncreate(): void {
    this.element.style.visibility = '';
}