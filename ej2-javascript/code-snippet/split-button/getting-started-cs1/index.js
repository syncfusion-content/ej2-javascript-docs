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

// initialize SplitButton component
var splitBtn = new ej.splitbuttons.SplitButton({items: items});

// Render initialized SplitButton.
splitBtn.appendTo('#element');

