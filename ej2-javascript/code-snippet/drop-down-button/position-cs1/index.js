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
var drpDownBtn = new ej.splitbuttons.DropDownButton({
    items: items,
    cssClass: 'e-caret-up',
    open: onOpen
});

// Render initialized DropDownButton.
drpDownBtn.appendTo('#element');

function onOpen(args) {
    args.element.parentElement.style.top = drpDownBtn.element.getBoundingClientRect().top - args.element.parentElement.offsetHeight +'px';
}

