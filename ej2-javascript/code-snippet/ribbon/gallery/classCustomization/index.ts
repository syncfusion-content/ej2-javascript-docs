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
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
                gallerySettings: {
                  groups: [{
                    header: 'Good, Bad and Neutral',
                    items: [{
                            content: 'Normal',
                            cssClass: 'normal'
                        }, {
                            content: 'Bad',
                            cssClass: 'bad'
                        }, {
                            content: 'Good',
                            cssClass: 'good'
                        }, {
                            content: 'Neutral',
                            cssClass: 'neutral'
                        }
                    ]
                  }]
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