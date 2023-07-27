

import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

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
  },
  {
    header: "Insert",
    groups: [
        {
            header: "Tables",
            collections: [{
                items: [{
                    type: RibbonItemType.DropDown,
                    dropDownSettings: {
                        iconCss: "e-icons e-table",
                        content: "Table",
                        items: [
                            { text: "Insert Table" }, { text: "Draw Table" },
                            { text: "Convert Table" }, { text: "Excel SpreadSheet" }
                        ]
                    }
                }]
            }]
        }
      ]
    }
];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs,
    activeLayout: "Classic"
});
ribbon.appendTo("#ribbon");
