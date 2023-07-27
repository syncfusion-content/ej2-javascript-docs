var tabs = [{
    header: "Home",
    groups: [{
        header: 'Clipboard',
        showLauncherIcon: true,
        collections: [{
            items: [{
                type: 'SplitButton',
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }],
                    content: 'Paste'
                }
            }]
        }, {
            items: [{
                type: 'Button',
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: 'Button',
                buttonSettings: {
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: 'Button',
                buttonSettings: {
                    content: 'Format Painter',
                    iconCss: 'e-icons e-format-painter'
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
    launcherIconCss: 'e-icons e-description',
    tabs: tabs
});
ribbon.appendTo("#ribbon");

