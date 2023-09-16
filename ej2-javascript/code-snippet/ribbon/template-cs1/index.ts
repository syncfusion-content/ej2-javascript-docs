

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
      visible: true,
      template: '#templateContent'
    }
});
ribbon.appendTo("#ribbon");

let ribbonEle: HTMLElement | null = document.getElementById('ribbon');
(document.getElementById('ribbon_backstage') as HTMLElement).onclick  = () => {
  (ribbonEle?.querySelector('#ribbon_backstagepopup') as HTMLElement).style.display = 'block'
}
