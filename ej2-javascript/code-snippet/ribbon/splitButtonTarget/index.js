var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Illustrations",
        collections: [
          {
            items: [
              {
                type: "SplitButton",
                splitButtonSettings: {
                  content: "Picture",
                  iconCss: "e-icons e-image",
                  target: "#pictureList"
                }
              },
            ],
          }
        ]
      }
    ]
  }
];

var list = new ej.lists.ListView({
  headerTitle: 'Insert Picture From',
  dataSource: ['Stock Images', 'This device', 'Online Images'],
  showHeader: true
});
list.appendTo('#pictureList');

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs
  });
ribbon.appendTo("#ribbon");