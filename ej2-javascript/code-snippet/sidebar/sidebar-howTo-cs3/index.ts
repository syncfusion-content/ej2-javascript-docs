


import { Sidebar } from '@syncfusion/ej2-navigations';

let defaultSidebar: Sidebar = new Sidebar({
    showBackdrop: true, type: "Push",width: '280px'
});
defaultSidebar.appendTo('#default-sidebar');

// Toggle(Open/Close) the Sidebar
const toggleButton = document.getElementById('toggle');
if (toggleButton) {
    toggleButton.onclick = (): void => {
        defaultSidebar.toggle();
    };
}

// Close the Sidebar
const closeButton = document.getElementById('close');
if (closeButton) {
    closeButton.onclick = (): void => {
        defaultSidebar.hide();
    };
}



