import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
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