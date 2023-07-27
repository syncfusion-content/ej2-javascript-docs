import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { ListView } from "@syncfusion/ej2-lists";

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Illustrations",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.DropDown,
                dropDownSettings: {
                  content: "Picture",
                  iconCss: "e-icons e-image",
                  target: "#pictureList"
                }
              },
            ],
          }
        ]
      }
    ]
  }
];

let list: ListView = new ListView({
  showHeader: true,
  headerTitle: 'Insert Picture From',
  dataSource: ['This device', 'Stock Images', 'Online Images']
});
list.appendTo('#pictureList');
let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");