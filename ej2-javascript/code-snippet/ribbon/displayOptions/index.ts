import { Ribbon, RibbonTabModel, RibbonItemType, DisplayMode } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                displayOptions: DisplayMode.Simplified,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");