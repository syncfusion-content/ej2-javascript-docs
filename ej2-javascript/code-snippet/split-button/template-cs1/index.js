ej.base.enableRipple(true);

var items = [
      {
       text: 'Cut',
     },
     {
       text: 'Copy',
     },
     {
       text: 'Paste',
      }];
var menuOptions = {
      items: items,
        iconCss: 'e-sb-icons e-paste',
        beforeItemRender: (function (args) {
            var shortCutSpan = ej.base.createElement('span');
            var text = args.item.text;
            args.element.appendChild(shortCutSpan);
            shortCutSpan.setAttribute('class', 'shortcut');
            var clsName = (text === 'Copy') ? 'e-icons' : 'e-sb-icons';
            shortCutSpan.classList.add(clsName);
            (text === 'Cut') ? shortCutSpan.classList.add('e-cut') : (text === 'Paste') ? shortCutSpan.classList.add('e-paste') : shortCutSpan.classList.add('e-copy');
        })
    };

var splitBtn = new ej.splitbuttons.SplitButton(menuOptions, '#action');

