var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ColorPicker",
                colorPickerSettings: {
                    value: "#123456"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");