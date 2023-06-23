ej.base.enableRipple(true);

var totalItems = 0;

//Initialize Tab component
var tabObj = new ej.navigations.Tab({
    selected: tabSelected,
    items: [
        {
            header: { 'text': 'Twitter' },
            content: '#tab1_content'
        },
        {
            header: { 'iconCss': 'e-add-icon' },
            content: '#form-container'
        }
    ]
  });
//Render initialized Tab component
tabObj.appendTo('#element');

var addBtn = document.querySelectorAll(".e-ileft.e-icon");
addBtn[0].setAttribute("title", "Add Tab");

function tabSelected(args) {
    if (args.selectedIndex === document.querySelectorAll('#element .e-toolbar-item').length -1) {
        document.getElementById('tab-title').value = '';
        document.getElementById('tab-content').value = '';
    }
}

document.getElementById('btn-add').onclick = function(e) {
    var title = document.getElementById('tab-title').value;
    var content = document.getElementById('tab-content').value;
    // Required tab item object formed by using textbox inputs
    var item = { header: { text: title }, content: ej.base.createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };

    totalItems = document.querySelectorAll('#element .e-toolbar-item').length;
    // Item object and the index argument passed into the addTab method to add a new tab
    tabObj.addTab([item], totalItems-1);
};

