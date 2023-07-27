

import { Ribbon, RibbonItemSize, RibbonItemType, RibbonTabModel } from '@syncfusion/ej2-ribbon';

let tabs: RibbonTabModel[] = [{
    header: 'Home',
    groups: [{
        header: 'Clipboard',
        collections: [{
            items: [{
                type: RibbonItemType.SplitButton,
                allowedSizes: RibbonItemSize.Large,
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
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Bold',
                    iconCss: 'e-icons e-bold',
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Italic',
                    iconCss: 'e-icons e-italic',
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Underline',
                    iconCss: 'e-icons e-underline',
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");


