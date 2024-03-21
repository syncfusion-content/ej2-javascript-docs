var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Clipboard",
        groupIconCss: 'e-icons e-paste',
        collections: [{
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                    content: 'Paste'
                }
            }]
        }, {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: "Button",
                buttonSettings: {                    
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: "Button",
                buttonSettings: {                    
                    content: 'Format Painter',
                    iconCss: 'e-icons e-format-painter'
                }
            }]
        }]
    },
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Good, Bad and Neutral',
                    items: [{
                            content: 'Normal',
                            cssClass: 'normal'
                        }, {
                            content: 'Bad',
                            cssClass: 'bad'
                        }, {
                            content: 'Good',
                            cssClass: 'good'
                        }, {
                            content: 'Neutral',
                            cssClass: 'neutral'
                        }
                    ]
                  }]
                }
              }
            ]
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
