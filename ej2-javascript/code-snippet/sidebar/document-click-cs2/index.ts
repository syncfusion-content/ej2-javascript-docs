


import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    type: "Push",width: '280px',closeOnDocumentClick: true,isOpen: true
});
defaultSidebar.appendTo('#default-sidebar');

// Toggle(Open/Close) the Sidebar
const toggleButton = document.getElementById('toggle');
if (toggleButton) {
    toggleButton.onclick = (): void => {
        defaultSidebar.show();
    };
}




