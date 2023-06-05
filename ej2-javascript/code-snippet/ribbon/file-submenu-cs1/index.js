var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Clipboard",
        collections: [
          {
            items: [
              {
                type: "Button",
                buttonSettings: {
                  content: "Paste",
                  iconCss: "e-icons e-paste",
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
    { text: "New", iconCss:"e-icons e-file-new", id: "new" },
    { text: "Open", iconCss:"e-icons e-folder-open", id: "open" },
    { text: "Rename", iconCss:"e-icons e-rename", id: "rename" },
    {
        text: "Save as",
        iconCss:"e-icons e-save",
        id: "save",
        items: [
            { text: "Microsoft Word (.docx)" },
            { text: "Microsoft Word 97-2003(.doc)" },
            { text: "Download as PDF" }
        ]
    }
];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs,
    fileMenu: {
        menuItems: fileMenuItems,
        showItemOnClick: true,
        visible: true
    }
});
ribbon.appendTo("#ribbon");

