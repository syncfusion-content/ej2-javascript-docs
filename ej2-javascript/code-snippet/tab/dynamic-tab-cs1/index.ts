


import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { Tab, SelectEventArgs } from '@syncfusion/ej2-navigations';

enableRipple(true);

let totalItems: number = 0;

let tabObj: Tab = new Tab({
    selected: tabSelected,
    items: [
        {
            header: { 'text': 'Tab1' },
            content: '#tab1_content'
        },
        {
            header: { 'iconCss': 'e-add-icon' },
            content: '#form-container'
        }
    ]
});
tabObj.appendTo('#element');

let addBtn : HTMLElement[] = document.querySelectorAll(".e-ileft.e-icon");
addBtn[0].setAttribute("title", "Add Tab");

function tabSelected(args: SelectEventArgs): void {
    if (args.selectedIndex === document.querySelectorAll('#element .e-toolbar-item').length - 1) {
        document.getElementById('tab-title').value = '';
        document.getElementById('tab-content').value = '';
    }
}

document.getElementById('btn-add').onclick = (e : Event) => {
    let title: string = document.getElementById('tab-title').value;
    let content: string = document.getElementById('tab-content').value;
    let item: Object =  { header: { text: title }, content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };

    totalItems = document.querySelectorAll('#element .e-toolbar-item').length;
    tabObj.addTab([item], totalItems-1);
};



