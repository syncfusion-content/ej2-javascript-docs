var tabs = [{
  header: "Home",
  groups: [{
    header: 'Clipboard',
    collections: [{
      items: [{
        type: 'Button',
        allowedSizes: ej.ribbon.RibbonItemSize.Large,
        buttonSettings: {
          content: 'Cut',
          iconCss: 'e-icons e-cut'
        }
      }]
    }]
  }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");

