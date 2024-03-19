

import { Ribbon, RibbonItemSize, RibbonItemType, RibbonTabModel, RibbonGroupButtonSelection, RibbonKeyTip, RibbonGallery } from '@syncfusion/ej2-ribbon';

Ribbon.Inject(RibbonKeyTip, RibbonGallery);

let fontStyle: string[] = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
];
let fontSize: string[] = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
let tabs: RibbonTabModel[] = [{
  header: "Home",
  keyTip: 'H',
  groups: [{
    header: "Clipboard",
    groupIconCss: 'e-icons e-paste',
    keyTip: 'CD',
    collections: [{
      items: [{
        type: RibbonItemType.SplitButton,
        allowedSizes: RibbonItemSize.Large,
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
        type: RibbonItemType.Button,
        keyTip: 'CU',
        buttonSettings: {
          content: 'cut',
          iconCss: 'e-icons e-cut'
        }
      }, {
        type: RibbonItemType.Button,
        keyTip: 'CO',
        buttonSettings: {
          content: 'copy',
          iconCss: 'e-icons e-copy'
        }
      }, {
        type: RibbonItemType.Button,
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
        type: RibbonItemType.ComboBox,
        keyTip: 'O1',
        comboBoxSettings: {
          dataSource: fontStyle,
          index: 2,
          allowFiltering: true,
          width: '150px'
        }
      }, {
        type: RibbonItemType.ComboBox,
        keyTip: 'O2',
        comboBoxSettings: {
          dataSource: fontSize,
          index: 4,
          width: '65px'
        }
      }]
    }, {
      items: [{
        type: RibbonItemType.GroupButton,
        keyTip: 'GB',
        groupButtonSettings: {
          selection: RibbonGroupButtonSelection.Single,
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
        type: RibbonItemType.ColorPicker,
        keyTip: 'CP',
        colorPickerSettings: {
          value: '#123456'
        }
      }
      ]
    }]
  },
  {
    header: "Gallery",
    showLauncherIcon: true,
    groupIconCss: 'e-icons e-paste',
    collections: [{
      items: [{
        type: RibbonItemType.Gallery,
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
  },
  {
    header: 'Tables',
    groupIconCss: 'e-icons e-table',
    collections: [{
      items: [{
        type: RibbonItemType.DropDown,
        keyTip: 'T',
        allowedSizes: RibbonItemSize.Large,
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
  },
  {
    header: 'Show',
    groupIconCss: 'e-icons e-copy',
    collections: [{
      items: [{
        type: RibbonItemType.CheckBox,
        keyTip: 'R1',
        checkBoxSettings: {
          label: 'Ruler',
          checked: false
        }
      }, {
        type: RibbonItemType.CheckBox,
        keyTip: 'R2',
        checkBoxSettings: {
          label: 'Gridlines',
          checked: false
        }
      }, {
        type: RibbonItemType.CheckBox,
        keyTip: 'R3',
        checkBoxSettings: {
          label: 'Navigation Pane',
          checked: true
        }
      }]
    }]
  }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
  enableKeyTips: true
});
ribbon.appendTo("#ribbon");

ribbon.ribbonKeyTipModule.showKeyTips('H');