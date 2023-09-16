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
                        iconCss: 'e-icons e-align-left',
                        content: 'Align Left'
                    },
                    {
                        iconCss: 'e-icons e-align-center',
                        content: 'Align Center',
                        selected: true
                    },
                    {
                        iconCss: 'e-icons e-align-right',
                        content: 'Align Right'
                    },
                    {
                        iconCss: 'e-icons e-justify',
                        content: 'Justify'
                    }]
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");