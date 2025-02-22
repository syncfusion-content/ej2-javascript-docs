import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

//Sidebar initialization
let dockBar: Sidebar = new Sidebar({
    width: '220px',
    dockSize: '72px',
    enableDock: true
});

dockBar.appendTo('#dockSidebar');
//end of Sidebar initialization

let toggleEle: HTMLElement = document.querySelector("#toggle") as HTMLElement;
if(toggleEle) {
    toggleEle.addEventListener('click', () => {
        dockBar.toggle();
    }); 
}