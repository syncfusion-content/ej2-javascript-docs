var tabs = [{
    header: "Home",
    groups: [{
        header: "Paragraph",
        collections: [
          {
            items: [{
                type: "GroupButton",
                allowedSizes: ej.ribbon.RibbonItemSize.Small,
                groupButtonSettings: {
                    selection: ej.ribbon.RibbonGroupButtonSelection.Multiple,
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

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");