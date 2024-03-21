var fontStyle = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
];
var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
var tabs = [{
  header: "Home",
  keyTip: 'H',
  groups: [{
    header: "Clipboard",
    groupIconCss: 'e-icons e-paste',
    keyTip: 'CD',
    collections: [{
      items: [{
        type: 'SplitButton',
        allowedSizes: ej.ribbon.RibbonItemSize.Large,
        keyTip: 'PA',
        ribbonTooltipSettings: {
          title: 'Paste',
          cssClass: 'custom-tooltip',
          iconCss: 'e-icons e-paste',
          content: 'Paste content here.</br> Add content on the clipboard to your document.'
        },
        splitButtonSettings: {
          content: 'Paste',
          iconCss: 'e-icons e-paste',
          items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }]
        }
      }]
    }, {
      items: [{
        type: 'Button',
        keyTip: 'CU',
        buttonSettings: {
          content: 'Cut',
          iconCss: 'e-icons e-cut'
        }
      }, {
        type: 'Button',
        keyTip: 'CO',
        buttonSettings: {
          content: 'Copy',
          iconCss: 'e-icons e-copy'
        }
      }, {
        type: 'Button',
        keyTip: 'CS',
        buttonSettings: {
          content: 'Format Painter',
          iconCss: 'e-icons e-format-painter'
        }
      }]
    },]
  }, {
    header: "Font",
    orientation: 'Row',
    groupIconCss: 'e-icons e-bold',
    enableGroupOverflow: true,
    keyTip: 'FB',
    cssClass: 'font-group',
    collections: [{
      items: [{
        type: 'ComboBox',
        keyTip: 'O',
        comboBoxSettings: {
          dataSource: fontStyle,
          index: 2,
          allowFiltering: true,
          width: '150px'
        }
      }, {
        type: 'ComboBox',
        comboBoxSettings: {
          dataSource: fontSize,
          index: 4,
          width: '65px'
        }
      }]
    }, {
      items: [{
        type: 'GroupButton',
        keyTip: 'GB',
        groupButtonSettings: {
          selection: ej.ribbon.RibbonGroupButtonSelection.Single,
          items: [{
            iconCss: 'e-icons e-bold',
            keyTip: '1',
            selected: true
          },
          {
            iconCss: 'e-icons e-italic',
            keyTip: '2'
          },
          {
            iconCss: 'e-icons e-underline',
            keyTip: '3'
          },
          {
            iconCss: 'e-icons e-strikethrough',
            keyTip: '4'
          },
          {
            iconCss: 'e-icons e-change-case',
            keyTip: '5'
          }]
        }
      }, {
        type: 'ColorPicker',
        keyTip: 'CP',
        colorPickerSettings: {
          value: '#123456'
        }
      }]
    }]
  }, {
    header: "Gallery",
    groupIconCss: 'e-icons e-paste',
    collections: [{
      items: [{
        type: 'Gallery',
        keyTip: 'GY',
        gallerySettings: {
          itemCount: 3,
          groups: [{
            itemWidth: '100',
            header: 'Styles',
            items: [{
              content: 'Normal'
            }, {
              content: 'No Spacing'
            }, {
              content: 'Heading 1'
            }, {
              content: 'Heading 2'
            }, {
              content: 'Heading 3'
            }, {
              content: 'Heading 4'
            }, {
              content: 'Heading 5'
            }]
          }]
        }
      }]
    }]
  }, {
    header: 'Tables',
    groupIconCss: 'e-icons e-table',
    collections: [{
      items: [{
        type: 'DropDown',
        keyTip: 'T',
        allowedSizes: ej.ribbon.RibbonItemSize.Large,
        dropDownSettings: {
          content: 'Table',
          iconCss: 'e-icons e-table',
          items: [
            { text: 'Insert Table' }, { text: 'Draw Table' },
            { text: 'Convert Table' }, { text: 'Excel SpreadSheet' }
          ]
        }
      }]
    }]
  }, {
    header: 'Show',
    groupIconCss: 'e-icons e-copy',
    collections: [{
      items: [{
        type: 'CheckBox',
        keyTip: 'R1',
        checkBoxSettings: {
          label: 'Ruler',
          checked: false
        }
      }, {
        type: 'CheckBox',
        keyTip: 'R2',
        checkBoxSettings: {
          label: 'Gridlines',
          checked: false
        }
      }, {
        type: 'CheckBox',
        keyTip: 'R3',
        checkBoxSettings: {
          label: 'Navigation Pane',
          checked: true
        }
      }]
    }]
  }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  enableKeyTips: true
});
ribbon.appendTo("#ribbon");

ribbon.ribbonKeyTipModule.showKeyTips('H');