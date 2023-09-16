import { Ribbon, RibbonTabModel, RibbonItemType, RibbonItemSize } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Paragraph",
        collections: [
          {
            items: [{
                type: RibbonItemType.GroupButton,
                allowedSizes: RibbonItemSize.Small,
                groupButtonSettings: {
                    items: [{
                        iconCss: 'e-icons e-align-left'
                    },
                    {
                        iconCss: 'e-icons e-align-center'
                    },
                    {
                        iconCss: 'e-icons e-align-right'
                    },
                    {
                        iconCss: 'e-icons e-justify'
                    }]
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");