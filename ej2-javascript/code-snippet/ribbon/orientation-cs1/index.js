
var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
var fontStyle = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
];

var tabs = [{
    header: "Home",
    groups: [{
        collections: [{
            items: [{
                type: 'SplitButton',
                allowedSizes: ej.ribbon.RibbonItemSize.Large,
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    content: 'Paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }]
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
        orientation: 'Row',
        collections: [{
            items: [{
                type: 'ComboBox',
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    allowFiltering: true,
                    width: '150px'
                }
            }, {
                type: 'ComboBox',
                comboBoxSettings: {
                    dataSource: fontSize,
                    index: 3,
                    width: '65px'
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

