

import { Ribbon, RibbonItemSize, RibbonItemType, RibbonTabModel } from '@syncfusion/ej2-ribbon';

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        collections: [{
            items: [{
                type: RibbonItemType.SplitButton,
                allowedSizes: RibbonItemSize.Large,
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }],
                    content: 'Paste'
                }
            }]
        }, {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Medium,
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Small,
                buttonSettings: {
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");


