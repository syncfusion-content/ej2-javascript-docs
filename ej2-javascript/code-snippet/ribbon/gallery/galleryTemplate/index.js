var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Clipboard",
        groupIconCss: 'e-icons e-paste',
        collections: [{
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                    content: 'Paste'
                }
            }]
        }, {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: "Button",
                buttonSettings: {                    
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: "Button",
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
                type: "Gallery",
                gallerySettings: {
                  template: '#galleryTemplate',
                  popupTemplate: "#galleryTemplate",
                  itemCount: 7,
                  groups: [{
                    header: 'Plain Tables',
                    itemHeight: "79",
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
                    itemHeight: "79",
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
                  type: "Button",
                  buttonSettings: {
                    content: "Above",
                    iconCss: "e-icons e-insert-above",
                  }
                },
                {
                  type: "Button",
                  buttonSettings: {
                    content: "Below",
                    iconCss: "e-icons e-insert-below",
                  }
                }
              ]
            }, {
              items: [
                {
                  type: "Button",
                  buttonSettings: {
                    content: "Left",
                    iconCss: "e-icons e-insert-left",
                  }
                },
                {
                  type: "Button",
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

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs
  });
ribbon.appendTo("#ribbon");
