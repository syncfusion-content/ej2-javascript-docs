


import { Sidebar } from '@syncfusion/ej2-navigations';
import { Button, RadioButton, ChangeArgs } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
//Sidebar initialization
let defaultSidebar: Sidebar = new Sidebar({
    width: "280px",
    type: "Push",
    enablePersistence: true,
    target:  document.querySelector('.maincontent') as HTMLElement
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

//toggle button initialization
let togglebtn: Button = new Button({ iconCss: 'e-icons burg-icon', isToggle: true, content: 'Open' }, '#toggle');

//Click Event.
const toggleButton = document.getElementById('toggle');
if (toggleButton) {
    toggleButton.onclick = (): void => {
        if (toggleButton.classList.contains('e-active')) {
            togglebtn.content = 'Close';
            defaultSidebar.show();
        } else {
            togglebtn.content = 'Open';
            defaultSidebar.hide();
        }
    };
}

// Close the Sidebar
const closeButton = document.getElementById('close');
if (closeButton) {
    closeButton.onclick = (): void => {
        defaultSidebar.hide();

        const toggleButton = document.getElementById('toggle');
        if (toggleButton) {
            toggleButton.classList.remove('e-active');
        }
    };
}

let positionLeft: RadioButton = new RadioButton({ label: 'Left', name: 'state', checked: true, change: Change });
positionLeft.appendTo('#left');

//unchecked state.
let positionRight: RadioButton = new RadioButton({ label: 'Right', name: 'state', change: Change });
positionRight.appendTo('#right');

function Change(args: ChangeArgs) {
    defaultSidebar.position = ((<HTMLInputElement>args.event?.target).id == "left") ? "Left" : "Right";
}



