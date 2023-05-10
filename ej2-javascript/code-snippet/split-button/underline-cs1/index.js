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

var splitBtn = new ej.splitbuttons.SplitButton({
    content: 'Paste',
    items: items,
    beforeItemRender: (args) => {
        if (args.item.text === 'Copy') {
            args.element.innerHTML = '<u>C</u>opy';
        }
    }
}, '#element');

