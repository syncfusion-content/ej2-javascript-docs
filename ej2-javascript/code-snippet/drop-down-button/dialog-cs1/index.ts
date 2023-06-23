

import { DropDownButton, ItemModel, MenuEventArgs, DropDownButtonModel } from '@syncfusion/ej2-splitbuttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To initialize the Dialog component.
let dialog: Dialog = new Dialog({
    content: "Move Items To 'Web Team'",
    header: 'Move Items',
    buttons: [{
        buttonModel: {
            isPrimary: true,
            content: 'OK',
            cssClass: 'e-flat',
        },
        click: function () {
            this.hide();
        }
    }],
    width: '250px',
    height: '150px',
    visible: false,
    position: {X: 100, Y: 100}
});

// Render initialized Dialog.
dialog.appendTo('#dialog');

// Initialize action items.
let items: ItemModel[] = [
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

// Initialize DropDownButton options.
let ddbOption: DropDownButtonModel = {
  iconCss: 'ddb-icons e-folder',
  cssClass: 'e-vertical',
  items: items,
  iconPosition: 'Top',
  select: (args: MenuEventArgs) => {
      if (args.item.text === 'Other Folder...') {
        dialog.show();
      }
  }
};
// To initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton(ddbOption, '#iconbutton');



