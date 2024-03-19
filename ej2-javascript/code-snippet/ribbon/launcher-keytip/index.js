var tabs = [
  {
    header: "Home",
    keyTip: "H",
    groups: [
      {
        header: "Clipboard",
        showLauncherIcon: true,
        launcherIconKeyTip: "L",
        collections: [
          {
            items: [
              {
                type: 'SplitButton',
                allowedSizes: ej.ribbon.RibbonItemSize.Large,
                splitButtonSettings: {
                  content: 'Paste',
                  iconCss: 'e-icons e-paste',
                  items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }]
                }
              },
            ],
          },
          {
            items: [
              {
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut",
                }
              },
              {
                type: "Button",
                buttonSettings: {
                  content: "Copy",
                  iconCss: "e-icons e-copy",
                }
              },
            ],
          }
        ]
      }
    ]
  }
];

var fileMenuItems = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs,
    fileMenu: {
        menuItems: fileMenuItems,
        visible: true
    },
    enableKeyTips: true
});
ribbon.appendTo("#ribbon");
ribbon.ribbonKeyTipModule.showKeyTips('H');

