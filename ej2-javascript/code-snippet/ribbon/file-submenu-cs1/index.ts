

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

let fileMenuItems: MenuItemModel[] = [
    { text: "New", iconCss:"e-icons e-file-new", id: "new" },
    { text: "Open", iconCss:"e-icons e-folder-open", id: "open" },
    { text: "Rename", iconCss:"e-icons e-rename", id: "rename" },
    {
        text: "Save as",
        iconCss:"e-icons e-save",
        id: "save",
        items: [
            { text: "Microsoft Word (.docx)" },
            { text: "Microsoft Word 97-2003(.doc)" },
            { text: "Download as PDF" }
        ]
    }
];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs,
    fileMenu: {
        menuItems: fileMenuItems,
        showItemOnClick: true,
        visible: true
    }
});
ribbon.appendTo("#ribbon");


