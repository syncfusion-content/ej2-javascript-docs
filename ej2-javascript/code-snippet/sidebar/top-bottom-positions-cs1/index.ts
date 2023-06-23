


import { Sidebar } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';

// Top sidebar initialization
let topSidebar: Sidebar = new Sidebar({ type: "Push", open: top_sidebar_open, close: top_sidebar_close });
topSidebar.appendTo('#top-sidebar');

// Bottom sidebar initialization
let bottomSidebar: Sidebar = new Sidebar({ type: "Push", open: bottom_sidebar_open, close: bottom_sidebar_close });
bottomSidebar.appendTo('#bottom-sidebar');

// Top sidebar toogle button initialization
let topBtn: Button = new Button({ cssClass: 'e-info' });
topBtn.appendTo('#top-btn');

// Bottom sidebar toogle button initialization
let bottomBtn: Button = new Button({ cssClass: 'e-info' });
bottomBtn.appendTo('#bottom-btn');

topBtn.element.onclick = ()=>{
  topSidebar.toggle();
}
bottomBtn.element.onclick = ()=>{
  bottomSidebar.toggle();
}

function top_sidebar_open() {
    let element: Element = document.getElementsByClassName("e-content-animation")[0];
    (<HTMLElement>element).style.height = ((<HTMLElement>element).offsetHeight - 75) + "px";
    element.classList.add("top_content_animation");
    // Remove the e-left class in sidebar
    topSidebar.element.classList.remove("e-left");
    // Add the custom class to sidebar
    topSidebar.element.classList.add("top_sidebar");
}

function top_sidebar_close() {
    let element: Element = document.getElementsByClassName("e-content-animation")[0];
    (<HTMLElement>element).style.height = ((<HTMLElement>element).offsetHeight + 75) + "px";
    element.classList.remove("top_content_animation");
}

function bottom_sidebar_open() {
    let element: Element = document.getElementsByClassName("e-content-animation")[0];
    (<HTMLElement>element).style.height = ((<HTMLElement>element).offsetHeight - 75) + "px";
    element.classList.add("bottom_animation_content");
    // Remove the e-left class in sidebar
    bottomSidebar.element.classList.remove("e-left");
    // Add the custom class to sidebar
    bottomSidebar.element.classList.add("bottom_sidebar");
}

function bottom_sidebar_close() {
    let element: Element = document.getElementsByClassName("e-content-animation")[0];
    (<HTMLElement>element).style.height = ((<HTMLElement>element).offsetHeight + 75) + "px";
    element.classList.remove("bottom_animation_content");
}



