import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonGallery);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Clipboard",
        groupIconCss: 'e-icons e-paste',
        collections: [{
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                    content: 'Paste'
                }
            }]
        }, {
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {                    
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {                    
                    content: 'Format Painter',
                    iconCss: 'e-icons e-format-painter'
                }
            }]
        }]
    },
      {
        header: "Table Styles",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
                gallerySettings: {
                  template: '#galleryTemplate',
                  popupTemplate: "#galleryTemplate",
                  itemCount: 7,
                  groups: [{
                    header: 'Plain Tables',
                    items: [
                      {
                        cssClass: "plainTables_item_1"
                      },
                      {
                        cssClass: "plainTables_item_2"
                      },
                      {
                        cssClass: "plainTables_item_3"
                      },
                      {
                        cssClass: "plainTables_item_4"
                      },
                      {
                        cssClass: "plainTables_item_5"
                      },
                      {
                        cssClass: "plainTables_item_6"
                      },
                      {
                        cssClass: "plainTables_item_7"
                      }
                    ]
                  }, {
                    header: 'List Tables',
                    items: [
                      {
                        cssClass: "listTables_item_1"
                      },
                      {
                        cssClass: "listTables_item_2"
                      },
                      {
                        cssClass: "listTables_item_3"
                      },
                      {
                        cssClass: "listTables_item_4"
                      },
                      {
                        cssClass: "listTables_item_5"
                      },
                      {
                        cssClass: "listTables_item_6"
                      },
                      {
                        cssClass: "listTables_item_7"
                      }
                    ]
                  }]
                }
              }
            ]
          }
        ]
      },
      {
        header: "Insert", 
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: "Above",
                  iconCss: "e-icons e-insert-above",
                }
              },
              {
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: "Below",
                  iconCss: "e-icons e-insert-below",
                }
              }
            ]
          }, {
            items: [
              {
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: "Left",
                  iconCss: "e-icons e-insert-left",
                }
              },
              {
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: "Right",
                  iconCss: "e-icons e-insert-right",
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");
