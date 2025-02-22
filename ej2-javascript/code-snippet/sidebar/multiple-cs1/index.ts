import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let leftSidebar: Sidebar = new Sidebar({
    width: "200px",
    type: 'Push'

});
leftSidebar.appendTo('#default');
//end of leftSidebar initialization

let rightSidebar: Sidebar = new Sidebar({
    width: "200px",
    position: 'Right',
    type: 'Push'
});
rightSidebar.appendTo('#default1');
//end of rightSidebar initialization

let toggleEle: HTMLElement = document.querySelector("#toggle-btn") as HTMLElement;
if(toggleEle) {
    // Toggle(Open/Close) the Sidebar1
    toggleEle.addEventListener('click', () => {
        leftSidebar.toggle();
    });
}

let toggleEle2: HTMLElement = document.querySelector("#toggle-btn2") as HTMLElement;
if(toggleEle2) {
    // Toggle(Open/Close) the Sidebar2
    toggleEle2.addEventListener('click', () => {
        rightSidebar.toggle();
    });
}