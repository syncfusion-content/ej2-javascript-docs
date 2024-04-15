var tabs = [{
  header: "Home",
  groups: [ {
    header: 'Templates',
    isCollapsible: false,
    collections: [
      {
        items: [
          {
            type: 'Template',
            itemTemplate: '#customItem'
        }
        ],
      },
    ],
  },
  {
    header: "Multimedia",
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