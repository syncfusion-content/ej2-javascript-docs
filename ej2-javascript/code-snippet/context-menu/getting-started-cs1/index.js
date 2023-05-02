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
        text: 'Refresh'
    },
    {
        text: 'Paste'
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
        text: 'Personalize'
    }];

//ContextMenu model definition 
var menuOptions = {
    target: '#target',
    items: menuItems
};

var menuObj =  new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

menuObj.insertAfter([{text: 'Sort By'}] , 'Refresh');
menuObj.insertBefore([{text: 'Display Settings'}] , 'Personalize');
menuObj.removeItems(['Paste']);

