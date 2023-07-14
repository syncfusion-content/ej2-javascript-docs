

import { Ribbon, RibbonItemSize, RibbonItemType, RibbonTabModel } from '@syncfusion/ej2-ribbon';

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: 'Clipboard',
        showLauncherIcon: true,
        collections: [{
            items: [{
                type: RibbonItemType.Button,
                ribbonTooltipSettings: {
                    title: 'Cut'
                },
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }]
        }, {
            items: [{
                type: RibbonItemType.Button,
                ribbonTooltipSettings: {
                    title: 'Copy'
                },
                buttonSettings: {
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: RibbonItemType.Button,
                ribbonTooltipSettings: {
                    title: 'Paste'
                },
                buttonSettings: {
                    content: 'Paste',
                    iconCss: 'e-icons e-paste'
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");


