

import { Ribbon, RibbonTabModel, RibbonItemType, RibbonBackstage } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonBackstage);

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
    backStageMenu: {
      items: [
        { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: '#homeContent' },
        { id: 'new', text: 'New', iconCss: 'e-icons e-file-new', content: '#newContent' },
        { id: 'open', text: 'Open', iconCss: 'e-icons e-folder-open', content: '#openContent' },
        { separator: true },
        { text: 'Print', content: '#printContent' }
      ],
      visible: true,
      backButton: { text: 'Close' }
    }
});
ribbon.appendTo("#ribbon");


