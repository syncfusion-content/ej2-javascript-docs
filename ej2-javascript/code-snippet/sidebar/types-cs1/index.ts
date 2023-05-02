

import { Sidebar } from '@syncfusion/ej2-navigations';
import { Button,RadioButton, ChangeArgs } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    type: "Push",
    target: <HTMLElement>document.querySelector('.maincontent'),
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

//toggle button initialization
let togglebtn: Button = new Button({iconCss: 'e-icons burg-icon', isToggle: true, content:'Open'}, '#toggle');

//Click Event.
document.getElementById('toggle').onclick = (): void => {
        if (document.getElementById('toggle').classList.contains('e-active')) {
            togglebtn.content = 'Close';
            defaultSidebar.show();
        } else {
            togglebtn.content = 'Open';
            defaultSidebar.hide();
        }
    };

// Close the Sidebar
document.getElementById('close').onclick = (): void => {
    defaultSidebar.hide();
    document.getElementById('toggle').classList.remove('e-active');
    togglebtn.content = 'Open'
};

let typeOver: RadioButton = new RadioButton({ label: 'Over', name: 'state', change: Change });
typeOver.appendTo('#over');

//unchecked state.
let typePush: RadioButton = new RadioButton({ label: 'Push', name: 'state', checked: true, change: Change });
typePush.appendTo('#push');

let typeSlide: RadioButton = new RadioButton({ label: 'Slide', name: 'state', change: Change });
typeSlide.appendTo('#slide');

//unchecked state.
let typeAuto: RadioButton = new RadioButton({ label: 'Auto', name: 'state', change: Change });
typeAuto.appendTo('#auto');

//change the togglebtn state.
function Changestate() {
    if (defaultSidebar.type == "Auto") {
        document.getElementById('toggle').classList.add('e-active');
        togglebtn.content = 'close';
    }
    else {
        document.getElementById('toggle').classList.remove('e-active');
        togglebtn.content = 'Open';
    }
}

function Change(args: ChangeArgs) {
    if ((<HTMLInputElement>args.event.target).id == "over") {
        defaultSidebar.type = "Over";
    } else if ((<HTMLInputElement>args.event.target).id == "push") {
        defaultSidebar.type = "Push";
    }
    else if ((<HTMLInputElement>args.event.target).id == "slide") {
        defaultSidebar.type = "Slide";
    }
    else {
        defaultSidebar.type = "Auto";
    }
    Changestate();
    defaultSidebar.dataBind();
}


