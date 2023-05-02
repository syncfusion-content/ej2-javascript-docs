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

var ddbOption = {
  items: items,
  beforeItemRender: itemRender
}

var drpDownBtn = new ej.splitbuttons.DropDownButton(ddbOption);

drpDownBtn.appendTo('#element');

function itemRender(args) {
    if (args.item.text === 'Copy') {
        args.element.innerHTML = '<u>C</u>opy';
    }
}

