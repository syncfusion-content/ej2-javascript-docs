var tabs = [{
  header: "Home",
  groups: [{
      header: "Font",
      collections: [
        {
          items: [{
              type: "Template",
              itemTemplate: "#itemTemplate"
          }]
      }]
  }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");