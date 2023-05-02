ej.base.enableRipple(true);

var ddbOption = { 
  target: '#listview',
  iconCss: 'e-icons e-down',
  cssClass: 'e-caret-hide'
};

var drpDownBtn = new ej.splitbuttons.DropDownButton(ddbOption);

drpDownBtn.appendTo('#element');

var dataSource = [
    { class: 'data', text: 'Print', id: 'data1', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Save As', id: 'data2', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Update Folder', id: 'data3', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Reply', id: 'data4', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Reply All', id: 'data4', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Forward', id: 'data4', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Delete', id: 'data4', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Undo', id: 'data4', category: 'Customize Quick Access Toolbar' },
];

//Initialize ListView component
var listviewInstance = new ej.lists.ListView({
    dataSource: dataSource,
    //map the appropriate columns to fields property
    fields: { text: 'text', groupBy: 'category' },
    showCheckBox: true
});

//Render initialized ListView
listviewInstance.appendTo("#listview");


