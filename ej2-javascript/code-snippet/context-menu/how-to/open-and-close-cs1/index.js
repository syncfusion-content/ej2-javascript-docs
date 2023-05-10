ej.base.enableRipple(true);

var menuItems = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];
var menuOptions = {
        items: menuItems
    };

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

var button = new ej.buttons.Button();
button.appendTo('#btnElement');

document.getElementById('btnElement').onclick=function() {
    var contextMenuObj = document.getElementById("contextmenu").ej2_instances[0];
    contextMenuObj.open(60, 20);
}

