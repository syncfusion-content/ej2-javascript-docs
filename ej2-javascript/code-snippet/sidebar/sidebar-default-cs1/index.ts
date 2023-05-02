


import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

//Sidebar initialization
let defaultSidebar: Sidebar = new Sidebar({
    showBackdrop: false,
    open:function(e)
    {
        console.log("Sidebar is opened");
    },
    close: function(e)
    {
       console.log("Sidebar is closed");
    }
});
defaultSidebar.appendTo('#default');
//end of Sidebar initialization

// Open the Sidebar
document.getElementById('open').onclick = (): void => {
    defaultSidebar.show();
};

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = (): void => {
    defaultSidebar.toggle();
};

// Close the Sidebar
document.getElementById('close').onclick = (): void => {
    defaultSidebar.hide();
};




