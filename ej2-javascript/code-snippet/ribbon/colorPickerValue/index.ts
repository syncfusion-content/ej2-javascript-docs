import { Ribbon, RibbonTabModel, RibbonItemType, RibbonColorPicker } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonColorPicker);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ColorPicker,
                colorPickerSettings: {
                    value: "#123456"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");