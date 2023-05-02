

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

document.getElementById('toggle').onclick = (): void => {
    dockBar.toggle();
};



