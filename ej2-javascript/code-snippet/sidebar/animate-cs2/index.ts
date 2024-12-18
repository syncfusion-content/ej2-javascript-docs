


import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    type: "Push",width: '280px',animate: false
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

// Toggle(Open/Close) the Sidebar
const toggleButton = document.getElementById('toggle');
if (toggleButton) {
    toggleButton.onclick = (): void => {
        defaultSidebar.toggle();
    };
}

const closeButton = document.getElementById('close');
if (closeButton) {
    closeButton.onclick = (): void => {
        defaultSidebar.hide();
    };
}



