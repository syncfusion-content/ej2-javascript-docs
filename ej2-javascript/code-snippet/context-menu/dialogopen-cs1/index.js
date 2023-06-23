ej.base.enableRipple(true);

var dialog = new ej.popups.Dialog({
    content: "This file can be saved as PDF",
    buttons: [{
        buttonModel: {
            isPrimary: true,
            content: 'Submit',
            cssClass: 'e-flat',
        },
        click: function () {
            this.hide();
        }
    }],
    target: document.getElementById("container"),
    width: '200px',
    height: '110px'
});
// Render initialized Dialog
dialog.appendTo('#dialog');
dialog.hide();

var menuItems = [
    {
        text: 'Back'
    },
    {
        text: 'Forward'
    },
    {
        text: 'Reload'
    },
    {
        separator: true
    },
    {
        text: 'Save As...'
    },
    {
        text: 'Print'
    },
    {
        text: 'Cast'
    }];


var menuOptions = {
    target: '#target',
    items: menuItems,
    select: function(args) {
      if(args.item.text === 'Save As...') {
           dialog.show();
       }
    }
};

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

