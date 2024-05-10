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
},
{
  header: "Insert",
  groups: [
  {
    header: "Tables",
    collections: [{
        items: [{
          type: "DropDown",
          dropDownSettings: {
              iconCss: "e-icons e-table",
              content: "Table",
              items: [
                  { text: "Insert Table" }, { text: "Draw Table" },
                  { text: "Convert Table" }, { text: "Excel SpreadSheet" }
              ]
          }
        }]
      }]
    }]
  }
];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs,
    hideLayoutSwitcher: false
});
ribbon.appendTo("#ribbon");

var updateLayoutSwitcher = new ej.buttons.CheckBox({ label: 'Show/Hide Layout Switcher', checked: true, change: onChangeSwitcher });
updateLayoutSwitcher.appendTo('#checkbox1');

function onChangeSwitcher(args) {
  ribbon.hideLayoutSwitcher = !args.checked;
}