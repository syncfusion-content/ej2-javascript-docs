var tabs = [{
  header: "Home",
  groups: [{
    collections: [{
      items: [{
        type: 'SplitButton',
        allowedSizes: ej.ribbon.RibbonItemSize.Large,
        splitButtonSettings: {
          iconCss: 'e-icons e-paste',
          content: 'Paste',
          items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }]
        }
      }]
    }, {
      items: [{
        type: 'Button',
        allowedSizes: ej.ribbon.RibbonItemSize.Medium,
        buttonSettings: {
          content: 'Cut',
          iconCss: 'e-icons e-cut'
        }
      }, {
        type: 'Button',
        allowedSizes: ej.ribbon.RibbonItemSize.Small,
        buttonSettings: {
          content: 'Copy',
          iconCss: 'e-icons e-copy'
        }
      }]
    }]
  }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");

