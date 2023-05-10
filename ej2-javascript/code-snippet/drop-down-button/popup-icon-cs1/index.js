ej.base.enableRipple(true);

var items = [
    {
        text: 'Edit',
        iconCss: 'ddb-icons e-edit'
    },
    {
        text: 'Delete',
        iconCss: 'ddb-icons e-delete'
    },
    {
        text: 'Mark as Read',
        iconCss: 'ddb-icons e-read'
    },
    {
        text: 'Like Message',
        iconCss: 'ddb-icons e-like'
    }];

//To position the icon to the left of the text on a DropDownButton.
var drpDownBtn = new ej.splitbuttons.DropDownButton({iconCss: 'ddb-icons e-message', items: items}, '#iconbutton');

