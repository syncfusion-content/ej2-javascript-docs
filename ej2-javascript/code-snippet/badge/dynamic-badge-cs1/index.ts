import { ListView } from '@syncfusion/ej2-lists';

let badgeElements: HTMLElement[];
// Datasource for LisView, badge field is the class data for Badge
let dataSource: { [key: string]: Object }[] = [
    { id: 'p_01', text: 'Primary', messages: '3 New', badge: 'e-badge e-badge-primary', icons: 'primary', type: 'Primary' },
    { id: 'p_04', text: 'Updates', messages: '13 New', badge: 'e-badge e-badge-info', icons: 'updates', type: 'Primary' },
    { id: 'p_05', text: 'Starred', messages: '', badge: '', icons: 'starred', type: 'All Labels' },
    { id: 'p_06', text: 'Important', messages: '2 New', badge: 'e-badge e-badge-danger', icons: 'important', type: 'All Labels' },
    { id: 'p_09', text: 'Drafts', messages: '7 New', badge: 'e-badge e-badge-warning', icons: 'draft', type: 'All Labels' },
];

let list: ListView = new ListView({
    // Bind LisView datasource
    dataSource: dataSource,
    // Assign header title
    headerTitle: 'Inbox',
    // Enable header
    showHeader: true,
    // Assign template
    template: '<div class="listWrapper" style="width: inherit;height: inherit;"><span class="${icons} list_svg">&nbsp;</span>' +
        '<span class="list_text">${text} </span>' +
        '${if(messages !== "")}<span class="${badge}" style="float: right;margin-top: 16px;font-size: 12px;">${messages}</span>${/if}</div>',
    // Map fields
    fields: { groupBy: 'type' },
    // Bind actionComplete event
    actionComplete: () => {
        badgeElements = Array.prototype.slice.call(document.getElementById('lists')?.getElementsByClassName('e-badge'));
    }
});
list.appendTo('#lists');
document.getElementById('button')?.addEventListener('click', function buttonClick() {
    badgeElements.forEach((element) => {
        element.textContent = (Number(element.textContent?.split(' ')[0])) + 1 + ' New';
    })
});