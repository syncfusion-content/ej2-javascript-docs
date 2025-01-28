import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let sidebarElement: Sidebar = new Sidebar({
    showBackdrop: true, width: '280px', created: oncreate
});
sidebarElement.appendTo('#sidebar-element');

document.querySelector('#zoom')?.addEventListener('click', () => {
    sidebarElement.show();
    sidebarElement.element.classList.add("w3-animate-zoom");
})
// Open door Effect
document.querySelector('#open_door')?.addEventListener('click', () => {
    sidebarElement.show();
    let sidebar: Element = document.getElementsByClassName("e-sidebar-overlay")[0];
    sidebar.classList.add("move");
})
//Bottom to Top
document.querySelector('#bottom_top')?.addEventListener('click', () => {
    sidebarElement.show();
    sidebarElement.element.classList.add("w3-animate-bottom");
})
//Rotate Sidebar
document.querySelector('#rotate')?.addEventListener('click', () => {
    sidebarElement.show();
    sidebarElement.element.classList.add("rotate");
})
//Sidebar with 3d Animation
document.querySelector('#rotate_3d')?.addEventListener('click', () => {
    sidebarElement.show();
    sidebarElement.element.classList.add("rotate_3d");
})
//Reverse Slide Out
document.querySelector('#reverse')?.addEventListener('click', () => {
    sidebarElement.show();
    sidebarElement.element.classList.add("reverse_slide_out");
})

// Close the Sidebar
document.querySelector('#close_btn')?.addEventListener('click', () => {
    sidebarElement.element.classList.remove("sidebar");
    sidebarElement.element.classList.remove("rotate");
    sidebarElement.element.classList.remove("w3-animate-zoom");
    sidebarElement.element.classList.remove("w3-animate-bottom");
    sidebarElement.element.classList.remove("rotate_3d");
    sidebarElement.element.classList.remove("reverse_slide_out");
    sidebarElement.hide();
})
//Remove the Flickering Effect
function oncreate(): void {
    this.element.style.visibility = '';
}