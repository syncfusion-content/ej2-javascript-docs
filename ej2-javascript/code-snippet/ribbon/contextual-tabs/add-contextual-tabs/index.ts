

import { Ribbon, RibbonTabModel, RibbonItemType, RibbonItemSize, RibbonContextualTab, RibbonContextualTabSettingsModel } from "@syncfusion/ej2-ribbon";

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
  tabs: [{
    id: "ShapeFormat",
    header: "Shape Format",
    groups: [{
      showLauncherIcon: true,
      header: "Text decoration",
      collections: [{
        items: [
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-text-header", content: "Text Header" } },
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-text-wrap", content: "Text Wrap" } },
          { type: RibbonItemType.Button, buttonSettings: { iconCss: "e-icons e-text-annotation", content: "Text Annotation" } },
        ]
      }]
    },{
      header: "Accessibility",
      collections: [{
        items: [
          { type: RibbonItemType.Button, allowedSizes: RibbonItemSize.Large, buttonSettings: { iconCss: "e-icons e-text-alternative", content: "Alt Text" } },
        ]
      }]
    },{
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


