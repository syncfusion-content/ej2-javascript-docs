var ribbon = new ej.ribbon.Ribbon({
  tabs: [
    {
      header: "Home",
      groups: [
          {
              header: "Clipboard"
          }
      ]
    },
    {
      header: "Insert",
      groups: [
          {
              header: "Tables"
          }
      ]
    }
  ]
});
ribbon.appendTo("#ribbon");

