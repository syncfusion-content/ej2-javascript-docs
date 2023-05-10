ej.base.enableRipple(true);

var menuItems = [
    {
        text: 'Save as...'
    },
    {
        text: 'View page source'
    },
    {
        text: 'Inspect'
    }];
var menuOptions = {
        target: '#target',
        items: menuItems,
        beforeItemRender: beforeItemRender
    };

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

function beforeItemRender(args) {
    var shortCutSpan = ej.base.createElement('span');
    var text = args.item.text;
    var shortCutText = text === 'Save as...' ? 'Ctrl + S' : (text === 'View page source' ? 'Ctrl + U' : 'Ctrl + Shift + I');
    shortCutSpan.textContent = shortCutText;
    args.element.appendChild(shortCutSpan);
    shortCutSpan.setAttribute('class','shortcut');
}

