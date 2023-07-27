var tabs = [
  {
    header: "Home",
    groups: [
      {
        collections: [
          {
            items: [
              {
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
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
    helpPaneTemplate: `<button class="action_btn"> <span id="undo" class="e-icons e-undo">Undo</span> </button>
  <button class="action_btn"> <span id="redo" class="e-icons e-redo">Redo</span> </button>`
  });
ribbon.appendTo("#ribbon");

