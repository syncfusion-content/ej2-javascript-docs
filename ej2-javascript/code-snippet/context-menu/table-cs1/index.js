ej.base.enableRipple(true);

var header = document.createElement('h4');
header.textContent = 'Insert Table';

var table = document.createElement('table');
for (var i = 0; i < 5; i++) {
    var row = document.createElement('tr');
    table.appendChild(row);
for (var j = 0; j < 6; j++) {
    var col = document.createElement('td');
    row.appendChild(col);
    col.setAttribute('class', 'e-border');
}
}

var menuItems = [
    {
        text: 'Cut',
        iconCss: 'e-cm-icons e-cut'
    },
    {
        text: 'Copy',
        iconCss: 'e-icons e-copy'
    },
    {
        text: 'Paste',
        iconCss: 'e-cm-icons e-paste'
    },
    {
        separator: true
    },
    {
        text: 'Link',
        iconCss: 'e-icons e-link'
    },
    {
        text: 'Table',
        iconCss: 'e-icons e-table',
        items: [
            {
              id: 'table'
            }
        ]
    }];

var menuOptions = {
    target: '#target',
    items: menuItems,
    beforeItemRender: function(args) {
        if (args.item.id === 'table') {
            args.element.classList.add('bg-transparent');
            args.element.appendChild(header);
            args.element.appendChild(table);
      }
    }
};

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');


