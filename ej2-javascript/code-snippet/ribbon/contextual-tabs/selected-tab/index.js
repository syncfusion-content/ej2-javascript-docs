var ribbonTabs = [{
  header: "Home",
  groups: [{
    showLauncherIcon: true,
    header: "Clipboard",
    groupIconCss: "e-icons e-paste",
    id: "clipboardGroup",
    collections: [{
      items: [
        { type: "Button", buttonSettings: { iconCss: "e-icons e-cut", content: "Cut", } },
        { type: "Button", buttonSettings: { iconCss: "e-icons e-copy", content: "Copy" } },
        { type: "Button", buttonSettings: { iconCss: "e-icons e-format-painter", content: "Format Painter" } }
      ]
    }]
  }]
}];
var contextualTabs = {
  visible: true,
  isSelected: true,
  tabs: [{
    header: "Styles",
    groups: [{
      showLauncherIcon: true,
      header: "Style",
      collections: [{
        items: [
          { type: "Button", buttonSettings: { iconCss: "e-icons e-style", content: "Style" } },
          { type: "Button", buttonSettings: { iconCss: "e-icons e-font-name", content: "Text Box" } },
          { type: "Button", buttonSettings: { iconCss: "e-icons e-paint-bucket", content: "Paint" } },  
        ]
      }]
    }]
  }]
};

var ribbon = new ej.ribbon.Ribbon({
  tabs: ribbonTabs,
  contextualTabs: [contextualTabs]
});

ribbon.appendTo("#ribbon");
