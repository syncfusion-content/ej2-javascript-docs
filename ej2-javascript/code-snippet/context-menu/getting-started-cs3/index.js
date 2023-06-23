ej.base.enableRipple(true);

//ContextMenu items definition 
var menuItems = [
    {
        text: 'View',
        items: [
          {
            text: 'Large icons'
          }, 
          {
            text: 'Medium icons'
          },
          {
            text: 'Small icons'
          }
        ]
    },
    {
        text: 'Sort By'
    },
    {
        text: 'Refresh'
    },
    {
        separator: true
    },
    {
        text: 'New'
    },
    {
        separator: true
    },
    {
        text: 'Display Settings'
    },
    {
        text: 'Personalize'
    }];

//ContextMenu model definition 
var menuOptions = {
    target: '#target',
    items: menuItems,
    beforeOpen: function(args) {
      menuObj.enableItems(['Medium icons'], false);
    }
};

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

menuObj.enableItems(['Display Settings'], false);

