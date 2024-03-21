

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
  visible: true,
  isSelected: true,
  tabs: [{
    header: "Styles",
    groups: [{
      showLauncherIcon: true,
      header: "Style",
      collections: [{
        items: [
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-style", content: "Style" } },
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-font-name", content: "Text Box" } },
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-paint-bucket", content: "Paint" } },
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


