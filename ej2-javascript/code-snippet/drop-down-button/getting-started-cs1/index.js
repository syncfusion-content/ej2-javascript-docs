ej.base.enableRipple(true);

//Initialize action items.
var items = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

// initialize DropDownButton component
var drpDownBtn = new ej.splitbuttons.DropDownButton({items: items});

// Render initialized DropDownButton.
drpDownBtn.appendTo('#element');

