

import { Ribbon, RibbonTabModel, RibbonItemType, RibbonContextualTab, RibbonContextualTabSettingsModel } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonContextualTab);

let ribbonTabs: RibbonTabModel[] = [{
  header: "Home",
  groups: [{
    showLauncherIcon: true,
    header: "Clipboard",
    groupIconCss: "e-icons e-paste",
    id: "clipboardGroup",
    collections: [{
      items: [
        { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-cut", content: "Cut", } },
        { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-copy", content: "Copy" } },
        { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-format-painter", content: "Format Painter" } }
      ]
    }]
  }]
}];

let contextualTabs: RibbonContextualTabSettingsModel = {
  tabs: [{
    id: "ArrangeView",
    header: "Arrange & View",
    groups: [{
      showLauncherIcon: true,
      header: "Arrange",
      collections: [{
        items: [
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-bring-forward", content: "Bring Forward" } },
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-send-backward", content: "Send Backward" } },
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-show-hide-panel", content: "Selection Pane" } },
        ]
      }]
    }]
  }]
};

let ribbon: Ribbon = new Ribbon({
    tabs: ribbonTabs,
    contextualTabs: [contextualTabs]
});
ribbon.appendTo("#ribbon");

(document.getElementById('show-contextual') as HTMLElement).onclick = () => {
  ribbon.showTab('ArrangeView', true);
}

(document.getElementById('hide-contextual') as HTMLElement).onclick = () => {
  ribbon.hideTab('ArrangeView', true);
}


