

import { Ribbon, RibbonTabModel, RibbonItemType, RibbonFileMenu } from "@syncfusion/ej2-ribbon";
import { MenuItemModel } from "@syncfusion/ej2-navigations";

Ribbon.Inject(RibbonFileMenu);

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
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: "Paste",
                  iconCss: "e-icons e-paste",
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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs,
    fileMenu: {
        text: "App",
        menuItems: [{ text: "New", iconCss: "e-icons e-file-new", id: "new" }],
        visible: true
    }
});
ribbon.appendTo("#ribbon");


