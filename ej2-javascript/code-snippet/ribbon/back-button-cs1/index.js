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

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs,
    backStageMenu: {
      items: [
        { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: '#homeContent' }
      ],
      visible: true,
      backButton: { text: 'Close' }
    }
});
ribbon.appendTo("#ribbon");

