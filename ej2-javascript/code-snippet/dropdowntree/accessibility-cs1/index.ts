

import { DropDownTree } from '@syncfusion/ej2-dropdowns';

let data: { [key: string]: Object }[] = [{ id: 1, name: 'Australia', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'New South Wales' },
        { id: 3, pid: 1, name: 'Victoria' },
        { id: 4, pid: 1, name: 'South Australia' },
        { id: 6, pid: 1, name: 'Western Australia' },
        { id: 7, name: 'Brazil', hasChild: true },
        { id: 8, pid: 7, name: 'Paraná' },
        { id: 9, pid: 7, name: 'Ceará' },
        { id: 10, pid: 7, name: 'Acre' },
        { id: 11, name: 'China', hasChild: true },
        { id: 12, pid: 11, name: 'Guangzhou' },
        { id: 13, pid: 11, name: 'Shanghai' },
        { id: 14, pid: 11, name: 'Beijing' },
        { id: 15, pid: 11, name: 'Shantou' },
        { id: 16, name: 'France', hasChild: true },
        { id: 17, pid: 16, name: 'Pays de la Loire' },
        { id: 18, pid: 16, name: 'Aquitaine' },
        { id: 19, pid: 16, name: 'Brittany' },
        { id: 20, pid: 16, name: 'Lorraine' },
        { id: 21, name: 'India', hasChild: true },
        { id: 22, pid: 21, name: 'Assam' },
        { id: 23, pid: 21, name: 'Bihar' },
        { id: 24, pid: 21, name: 'Tamil Nadu' },
        { id: 25, pid: 21, name: 'Punjab', expanded: false }
    ];

let ddTreeObjDefault: DropDownTree = new DropDownTree({
    fields: { dataSource: data, value: "id", parentValue: 'pid', text: "name", hasChildren: "hasChild", expanded: "expanded"},
    created: ddtCreated, allowFiltering: true, showCheckBox: true, value: [2], width: '250px',
    popupHeight: '220px'
});
ddTreeObjDefault.appendTo('#ddt1');

let dataTemplate: { [key: string]: Object }[] = [
    { id: 1, name: 'Steven Buchanan', eimg: '10', job: 'CEO', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Laura Callahan', eimg: '2', job: 'Product Manager', hasChild: true },
    { id: 3, pid: 2, name: 'Andrew Fuller', eimg: '7', job: 'Team Lead', hasChild: true, selected: true },
    { id: 4, pid: 3, name: 'Anne Dodsworth', eimg: '1', job: 'Developer' },
    { id: 5, pid: 1, name: 'Nancy Davolio', eimg: '4', job: 'Product Manager', hasChild: true },
    { id: 6, pid: 5, name: 'Michael Suyama', eimg: '9', job: 'Team Lead', hasChild: true },
    { id: 7, pid: 6, name: 'Robert King', eimg: '8', job: 'Developer ' },
    { id: 8, pid: 7, name: 'Margaret Peacock', eimg: '6', job: 'Developer' },
    { id: 9, pid: 1, name: 'Janet Leverling', eimg: '3', job: 'HR' },
];

let listObjTemplate: DropDownTree = new DropDownTree({
    fields: { dataSource: dataTemplate, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    headerTemplate: '<div class="head">Contact Details</div>',
    itemTemplate: '<div><div class="ename"> ${name} </div><div class="ejob"> ${job} </div></div>',
    footerTemplate: '<div class="Foot"> Total Items Count: 5 </div>',
    width: '250px',
    cssClass: "templateDDT",
    created: ddtCreated, 
    allowMultiSelection: true,
    placeholder: 'Select an employee',
    popupHeight: '250px'
});

listObjTemplate.appendTo('#ddt2');
function ddtCreated() {
    this.showPopup();
}