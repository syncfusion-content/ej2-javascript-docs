import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { MenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [
  {
    header: "Insert",
    groups: [
      {
        header: "Tables",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.DropDown,
                id: 'dropdownItem',
                dropDownSettings: {
                  iconCss: 'e-icons e-table',
                  content: 'Table',
                  items: [
                    { text: 'Insert Table' },
                    { text: 'Draw Table' },
                    { text: 'Convert Table' },
                    { text: 'Excel SpreadSheet' },
                  ],
                  beforeItemRender:(args: MenuEventArgs) => {
                    if (args.item.text === 'Insert Table') {
                      args.element.classList.add("e-custom-class");
                   }
                 }
                },
              },
            ],
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