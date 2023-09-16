import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGroupButtonSelection, RibbonItemSize } from "@syncfusion/ej2-ribbon";

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
                    selection: RibbonGroupButtonSelection.Multiple,
                    items: [{
                        iconCss: 'e-icons e-bold',
                        content: 'Bold'
                    },
                    {
                        iconCss: 'e-icons e-italic',
                        content: 'Italic',
                        selected: true
                    },
                    {
                        iconCss: 'e-icons e-underline',
                        content: 'Underline'
                    },
                    {
                        iconCss: 'e-icons e-strikethrough',
                        selected: true,
                        content: 'Strikethrough'
                    }]
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");