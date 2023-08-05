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
    helpPaneTemplate: `<button class="action_btn"><label><span id="undo" class="e-icons e-undo"></span> Undo </label></button>
    <button class="action_btn"><label><span id="redo" class="e-icons e-redo"></span> Redo </label></button>`
  });
ribbon.appendTo("#ribbon");

