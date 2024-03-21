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
  tabs: [{
    id: "ShapeFormat",
    header: "Shape Format",
    groups: [{
      showLauncherIcon: true,
      header: "Text decoration",
      collections: [{
        items: [
          { type: "Button", buttonSettings: { iconCss: "e-icons e-text-header", content: "Text Header" } },
          { type: "Button", buttonSettings: { iconCss: "e-icons e-text-wrap", content: "Text Wrap" } },
          { type: "Button", buttonSettings: { iconCss: "e-icons e-text-annotation", content: "Text Annotation" } },
        ]
      }]
    },{
      header: "Accessibility",
      collections: [{
        items: [
          { type: "Button", allowedSizes: ej.ribbon.RibbonItemSize.Large, buttonSettings: { iconCss: "e-icons e-text-alternative", content: "Alt Text" } },
        ]
      }]
    },{
      showLauncherIcon: true,
      header: "Arrange",
      collections: [{
        items: [
          { type: "Button", buttonSettings: { iconCss: "e-icons e-bring-forward", content: "Bring Forward" } },
          { type: "Button", buttonSettings: { iconCss: "e-icons e-send-backward", content: "Send Backward" } },
          { type: "Button", buttonSettings: { iconCss: "e-icons e-show-hide-panel", content: "Selection Pane" } },
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
