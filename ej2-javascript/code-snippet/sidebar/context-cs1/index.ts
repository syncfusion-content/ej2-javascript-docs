import { Sidebar } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    width: "280px",
    type: "Push",
    target: '.maincontent'
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

//toggle button initialization
let togglebtn: Button = new Button({ iconCss: 'e-icons e-menu', isToggle: true, content: 'Open' }, '#toggle');

let toggleEle = document.getElementById('toggle');

// Close the Sidebar
const closeBtn = document.querySelector('#close');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        defaultSidebar.hide();
        if (toggleEle) {
            toggleEle.classList.remove('e-active');
        }
        togglebtn.content = 'Open';
    });
}

// Click Event
const toggleBtn = document.querySelector('#toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        if (toggleEle && toggleEle.classList.contains('e-active')) {
            togglebtn.content = 'Close';
            defaultSidebar.show();
        } else {
            togglebtn.content = 'Open';
            defaultSidebar.hide();
        }
    });
}