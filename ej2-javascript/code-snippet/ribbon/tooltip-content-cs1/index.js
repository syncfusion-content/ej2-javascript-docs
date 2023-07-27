var tabs = [{
    header: "Home",
    groups: [{
        header: 'Clipboard',
        collections: [{
            items: [{
                type: 'Button',
                ribbonTooltipSettings: {
                    title: 'Cut',
                    content: 'Cut selected text or objects'
                },
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }]
        }, {
            items: [{
                type: 'Button',
                ribbonTooltipSettings: {
                    title: 'Copy',
                    content: 'Copy selected text or objects'
                },
                buttonSettings: {
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: 'Button',
                ribbonTooltipSettings: {
                    title: 'Paste',
                    content: 'Paste copied or cut content'
                },
                buttonSettings: {
                    content: 'Paste',
                    iconCss: 'e-icons e-paste'
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");

