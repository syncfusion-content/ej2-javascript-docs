
var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
var fontStyle = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
];

var tabs = [{
  header: "Home",
  groups: [{
    header: 'Clipboard',
    groupIconCss: 'e-icons e-paste',
    collections: [{
      items: [{
        type: 'SplitButton',
        splitButtonSettings: {
          iconCss: 'e-icons e-paste',
          items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }],
          content: 'Paste'
        }
      }]
    }, {
      items: [{
        type: 'Button',
        buttonSettings: {
          content: 'Cut',
          iconCss: 'e-icons e-cut'
        }
      }, {
        type: 'Button',
        buttonSettings: {
          content: 'Copy',
          iconCss: 'e-icons e-copy'
        }
      }, {
        type: 'Button',
        buttonSettings: {
          content: 'Format Painter',
          iconCss: 'e-icons e-format-painter'
        }
      }]
    }]
  }, {
    header: 'Font',
    groupIconCss: 'e-icons e-bold',
    collections: [{
      items: [{
        type: 'ComboBox',
        comboBoxSettings: {
          dataSource: fontStyle,
          index: 3
        }
      }, {
        type: 'ComboBox',
        comboBoxSettings: {
          dataSource: fontSize,
          index: 3
        }
      }]
    }, {
      items: [{
        type: 'Button',
        buttonSettings: {
          content: 'Bold',
          iconCss: 'e-icons e-bold'
        }
      }, {
        type: 'Button',
        buttonSettings: {
          content: 'Italic',
          iconCss: 'e-icons e-italic'
        }
      }, {
        type: 'Button',
        buttonSettings: {
          content: 'Underline',
          iconCss: 'e-icons e-underline'
        }
      }]
    }]
  }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");

