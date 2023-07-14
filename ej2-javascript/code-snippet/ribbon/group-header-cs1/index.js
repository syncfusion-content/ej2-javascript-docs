
var tabs = [{
    header: "Home",
    groups: [{
        header: 'Clipboard',
        collections: [{
            items: [{
                type: 'SplitButton',
                allowedSizes: ej.ribbon.RibbonItemSize.Large,
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [
                        { text: 'Keep Source Format' },
                        { text: 'Merge format' },
                        { text: 'Keep text only' },
                    ],
                    content: 'Paste',
                }
            }]
        }]
    },
    {
        header: 'Font',
        collections: [{
            items: [{
                type: 'Button',
                buttonSettings: {
                    content: 'Bold',
                    iconCss: 'e-icons e-bold',
                }
            }, {
                type: 'Button',
                buttonSettings: {
                    content: 'Italic',
                    iconCss: 'e-icons e-italic',
                }
            }, {
                type: 'Button',
                buttonSettings: {
                    content: 'Underline',
                    iconCss: 'e-icons e-underline',
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");

