import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [
        {
            header: 'Templates',
            isCollapsible: false,
            collections: [
              {
                items: [
                  {
                    type: RibbonItemType.Template,
                    itemTemplate: '#customItem'
                }
                ],
              },
            ],
        }, {
        header: "Multimedia",
        collections: [
          {
            items: [{
                type: RibbonItemType.Template,
                itemTemplate: "#itemTemplate"
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");