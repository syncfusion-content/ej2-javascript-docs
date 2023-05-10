ej.base.enableRipple(true);

var listItems = [
    {
        'text': 'Cut',
        'category': 'Basic'
    },
    {
        'text': 'Copy',
        'category': 'Basic'
    },
    {
        'text': 'Paste',
        'category': 'Basic'
    },
    {
        'text': 'Paste as Formula',
        'category': 'Advanced'
    },
    {
        'text': 'Paste as Hyperlink',
        'category': 'Advanced'
    },
];

var listView = new ej.lists.ListView({
    dataSource: listItems,
    fields: { groupBy: 'category' }
}, '#listview');

var splitBtn =  new ej.splitbuttons.SplitButton({ content: 'ClipBoard', target: listView.element }, '#element');

