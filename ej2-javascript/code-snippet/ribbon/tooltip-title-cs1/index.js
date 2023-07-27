var tabs = [{
  header: "Home",
  groups: [{
    header: 'Clipboard',
    collections: [{
      items: [{
        type: 'Button',
        ribbonTooltipSettings: {
          title: 'Cut'
        },
        buttonSettings: {
          content: 'Cut',
          iconCss: 'e-icons e-cut'
        }
      }]
    }, {
      items: [{
        type: 'Button',
        ribbonTooltipSettings: {
          title: 'Copy'
        },
        buttonSettings: {
          content: 'Copy',
          iconCss: 'e-icons e-copy'
        }
      }, {
        type: 'Button',
        ribbonTooltipSettings: {
          title: 'Paste'
        },
        buttonSettings: {
          content: 'Paste',
          iconCss: 'e-icons e-paste'
        }
      }]
    }]
  }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");

