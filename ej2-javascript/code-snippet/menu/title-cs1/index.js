ej.base.enableRipple(true);

//Menu datasource
var menuItems =[
        {
            id: 'settingIcon',
            iconCss: 'em-icons e-file',
            items: [
                { text: 'Open',
                  items: [
                      { text: 'Sub Option1' },
                      { text: 'Sub Option2' },
                  ]
                },
                { text: 'Save' },
                { separator: true },
                { text: 'Exit' }
            ]
        }
    ];
// Initialize Menu component.
var menuObj = new ej.navigations.Menu({items: menuItems, 
beforeItemRender: function (args) {
    if (args.item.id == 'settingIcon') {        
      args.element.setAttribute('title', 'Settings');
    }}
    },'#menu');

