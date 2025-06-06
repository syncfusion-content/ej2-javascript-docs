import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

//Dock Sidebar initialization
let dockBar: Sidebar = new Sidebar({
    width: '220px',
    dockSize: '72px',
    enableDock: true,
    type: 'Push',
    target: 'e-main-content',
    zIndex: 3000
});
dockBar.appendTo('#dockSidebar');
//end of DockSidebar initialization

let defaultSidebar: Sidebar = new Sidebar({
    target: 'e-main-content',
    type: "Push",
});
defaultSidebar.appendTo('#default-sidebar');
//end of DefaultSidebar initialization

let btnEle: HTMLElement = document.querySelector("#buttonClick") as HTMLElement;
if(btnEle) {
    //switch the expand and collapse state
    btnEle.addEventListener('click', () => {
        defaultSidebar.toggle();
    });
}