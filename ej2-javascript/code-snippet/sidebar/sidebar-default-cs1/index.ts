import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

//Sidebar initialization
let defaultSidebar: Sidebar = new Sidebar({
    showBackdrop: false,
    open: function (e) {
        console.log("Sidebar is opened");
    },
    close: function (e) {
        console.log("Sidebar is closed");
    }
});
defaultSidebar.appendTo('#default');
//end of Sidebar initialization

let openEle: HTMLElement = document.querySelector("#open") as HTMLElement;
if(openEle) {
    // Open the Sidebar
    openEle.addEventListener('click', () => {
        defaultSidebar.show();
    });
}

let toggleEle: HTMLElement = document.querySelector("#toggle") as HTMLElement;
if(toggleEle) {
    // Toggle(Open/Close) the Sidebar
    toggleEle.addEventListener('click', () => {
        defaultSidebar.toggle();
    });
}

let closeEle: HTMLElement = document.querySelector("#close") as HTMLElement;
if(closeEle) {
    // Close the Sidebar
    closeEle.addEventListener('click', () => {
        defaultSidebar.hide();
    });
}