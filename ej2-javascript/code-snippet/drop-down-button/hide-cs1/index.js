ej.base.enableRipple(true);

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

var drpDownBtn = new ej.splitbuttons.DropDownButton({items: items});

drpDownBtn.appendTo('#hide');

drpDownBtn.element.classList.add('e-caret-hide');

