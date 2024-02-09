var tabs = [
  {
    header: "Insert",
    groups: [
      {
        header: "Tables",
        collections: [
          {
            items: [
              {
                type: "DropDown",
                id: 'dropdownItem',
                dropDownSettings: {
                  iconCss: 'e-icons e-table',
                  content: 'Table',
                  items: [
                    { text: 'Insert Table' },
                    { text: 'Draw Table' },
                    { text: 'Convert Table' },
                    { text: 'Excel SpreadSheet' },
                  ],
                  beforeItemRender:(args) => {
                    if (args.item.text === 'Insert Table') {
                      args.element.classList.add("e-custom-class");
                   }
                 }
                },
              },
            ],
          }
        ]
      }
    ]
  }
];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs
  });
ribbon.appendTo("#ribbon");
