import { Sidebar } from '@syncfusion/ej2-navigations';
import { ListView } from '@syncfusion/ej2-lists';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

// Initialize ListView component
let data: { [key: string]: Object }[] = [
    { text: 'Home', id: 'list-02' },
    { text: 'Offers', id: 'list-03' },
    { text: 'Support', id: 'list-04' },
    { text: 'Logout', id: 'list-06' }
];

let listInstance: ListView = new ListView({
    //Set defined data to dataSource property
    dataSource: data
});

//Render initialized ListView component

listInstance.appendTo('#list');

let defaultSidebar: Sidebar = new Sidebar({
    type: "Over", width: '100%'
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

let toggleEle: HTMLElement = document.querySelector("#toggle") as HTMLElement;
if (toggleEle) {
    // Toggle(Open/Close) the Sidebar
    toggleEle.addEventListener('click', () => {
        defaultSidebar.toggle();
    });
}

let closeEle: HTMLElement = document.querySelector("#close") as HTMLElement;
if (closeEle) {
    // Close the Sidebar
    closeEle.addEventListener('click', () => {
        defaultSidebar.hide();
    });
}