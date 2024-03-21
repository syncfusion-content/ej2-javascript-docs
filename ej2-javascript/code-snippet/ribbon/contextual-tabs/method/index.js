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
  tabs: [{
    id: "ArrangeView",
    header: "Arrange & View",
    groups: [{
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

document.getElementById('show-contextual').onclick = function() {
  ribbon.showTab('ArrangeView', true);
}

document.getElementById('hide-contextual').onclick = function() {
  ribbon.hideTab('ArrangeView', true);
}