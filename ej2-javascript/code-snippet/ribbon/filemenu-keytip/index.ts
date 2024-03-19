

import { Ribbon, RibbonTabModel, RibbonItemType, RibbonItemSize, RibbonFileMenu, RibbonKeyTip } from "@syncfusion/ej2-ribbon";
import { MenuItemModel } from "@syncfusion/ej2-navigations";

Ribbon.Inject(RibbonFileMenu, RibbonKeyTip);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Clipboard",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.SplitButton,
                allowedSizes: RibbonItemSize.Large,
                splitButtonSettings: {
                    content: 'Paste',
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }]
                }
              },
            ],
          },
          {
            items: [
              {
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut",
                }
              },
              {
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: "Copy",
                  iconCss: "e-icons e-copy",
                }
              },
            ],
          }
        ]
      }
    ]
  }
];

let fileMenuItems: MenuItemModel[] = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs,
    fileMenu: {
        menuItems: fileMenuItems,
        keyTip: "F",
        visible: true
    },
    enableKeyTips: true
});
ribbon.appendTo("#ribbon");
ribbon.ribbonKeyTipModule.showKeyTips();

