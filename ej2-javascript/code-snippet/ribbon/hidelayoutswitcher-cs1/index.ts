

import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { ChangeEventArgs, CheckBox } from '@syncfusion/ej2-buttons';

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
    ]}
  ]},
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
    hideLayoutSwitcher: false
});
ribbon.appendTo("#ribbon");

let updateLayoutSwitcher: CheckBox = new CheckBox({ label: 'Show/Hide Layout Switcher', checked: true, change: onChangeSwitcher });
updateLayoutSwitcher.appendTo('#checkbox1');

function onChangeSwitcher(args: ChangeEventArgs): void {
  ribbon.hideLayoutSwitcher = !args.checked;
}
