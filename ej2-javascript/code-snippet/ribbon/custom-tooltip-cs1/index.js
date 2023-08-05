var tabs = [{
    header: "Home",
    groups: [{
        header: 'Clipboard',
        collections: [{
            items: [{
                type: 'SplitButton',
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }],
                    content: 'Paste'
                },
                ribbonTooltipSettings: {
                    title: 'Paste',
                    content: 'Insert the clipboard content where the cursor is currently placed.',
                    cssClass: 'custom-tooltip'
                }
            }]
        }, {
            items: [{
                type: 'Button',
                ribbonTooltipSettings: {
                    title: 'Cut',
                    content: 'Places the selected text or object on the clipboard so that you can paste it somewhere else.',
                    cssClass: 'custom-tooltip'
                },
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: 'Button',
                ribbonTooltipSettings: {
                    title: 'Copy',
                    content: 'Copies the chosen text or object to the clipboard so that you can reuse it elsewhere.',
                    cssClass: 'custom-tooltip'
                },
                buttonSettings: {
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: 'Button',
                ribbonTooltipSettings: {
                    title: 'Format Painter',
                    content: 'Copies the formatting style of a selected text or object and applies it to other content within the document.',
                    cssClass: 'custom-tooltip'
                },
                buttonSettings: {
                    content: 'Format Painter',
                    iconCss: 'e-icons e-format-painter'
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");

