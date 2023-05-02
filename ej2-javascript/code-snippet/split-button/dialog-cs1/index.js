ej.base.enableRipple(true);

var dialogObj = new  ej.popups.Dialog({
    width: '250px',
    header: 'Software Update',
    content: 'Are you sure want to update?',
    target: document.getElementById('container'),
    visible: false,
    buttons: [
        {
           click: (function () {
                dialogObj.hide();
            } ),
            buttonModel: { content: 'OK', isPrimary: true }
        },
        {
            click: (function () {
              dialogObj.hide();
            } ),
            buttonModel: { content: 'Cancel', isPrimary: true }
        }
    ],
});
dialogObj.appendTo('#dialog');

var items = [
    {
        text: 'Help'
    },
    {
        text: 'About'
    },
    {
        text: 'Update...'
    }
    ];

var splitBtn = new ej.splitbuttons.SplitButton(
    { 
        content: 'Help',
        items: items, 
        select: (function (args) {
            if (args.item.text === 'Update...') {
                dialogObj.show();
            }
        })
    }, '#element');

