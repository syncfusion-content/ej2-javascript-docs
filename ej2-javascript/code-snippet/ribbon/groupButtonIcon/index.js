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

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");