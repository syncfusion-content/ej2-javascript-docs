ej.base.enableRipple(true);

var dialog = new ej.popups.Dialog({
    content: "Move Items To `Web Team`",
    header: 'Move Items',
    buttons: [{
        buttonModel: {
            isPrimary: true,
            content: 'OK',
            cssClass: 'e-flat'
        },
        click: function () {
            this.hide();
        }
    }],
    width: '250px',
    visible: false,
    position: {X: 100, Y: 100}
});
dialog.appendTo('#dialog');

var items = [
    {
        text: 'Archive'
    },
    {
        text: 'Inbox'
    },
    {
        text: 'HR Portal'
    },
    {
        separator: true
    },
    {
        text: 'Other Folder...'
    },
    {
        text: 'Copy to Folder'
    }];

var ddbOption = { 
  iconCss: 'ddb-icons e-folder',
  cssClass: 'e-vertical',
  items: items,
  iconPosition: 'Top',
  select: select
};
//To position the icon to the left of the text on a DropDownButton.
var drpDownBtn = new ej.splitbuttons.DropDownButton(ddbOption, '#iconbutton');

function select (args) {
    if (args.item.text === 'Other Folder...') {
        dialog.show();
    }
}

