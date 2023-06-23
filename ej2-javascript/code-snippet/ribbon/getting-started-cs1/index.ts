

import { Ribbon, ItemOrientation, RibbonItemSize, RibbonItemType, RibbonTabModel, RibbonColorPicker, DisplayMode, RibbonFileMenu } from "@syncfusion/ej2-ribbon";
import { MenuItemModel, MenuEventArgs } from "@syncfusion/ej2-navigations";

Ribbon.Inject(RibbonFileMenu, RibbonColorPicker);

let fontSize: string[] = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"];

let fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"
];

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        id: "clipboard",
        header: "Clipboard",
        showLauncherIcon: true,
        groupIconCss: "e-icons e-paste",
        collections: [{
            items: [{
                type: RibbonItemType.SplitButton,
                allowedSizes: RibbonItemSize.Large,
                splitButtonSettings: {
                    iconCss: "e-icons e-paste",
                    items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }],
                    content: "Paste"
                }
            }]
        }, {
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Copy",
                    iconCss: "e-icons e-copy"
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Format Painter",
                    iconCss: "e-icons e-format-painter"
                }
            }]
        }]
    }, {
        header: "Font",
        isCollapsible: false,
        enableGroupOverflow: true,
        orientation: ItemOrientation.Row,
        groupIconCss: "e-icons e-bold",
        cssClass: "font-group",
        collections: [{
            items: [{
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    allowFiltering: true,
                    width: "150px"
                }
            }, {
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontSize,
                    index: 3,
                    width: "65px",
                    allowFiltering: true
                }
            }]
        }, {
            items: [{
                type: RibbonItemType.ColorPicker,
                allowedSizes: RibbonItemSize.Small,
                displayOptions: DisplayMode.Simplified,
                colorPickerSettings: {
                    value: "#123456"
                }
            }, {
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Small,
                buttonSettings: {
                    content: "Bold",
                    iconCss: "e-icons e-bold"
                }
            }, {
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Small,
                buttonSettings: {
                    content: "Italic",
                    iconCss: "e-icons e-italic"
                }
            }, {
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Small,
                buttonSettings: {
                    content: "Underline",
                    iconCss: "e-icons e-underline"
                }
            },{
                allowedSizes: RibbonItemSize.Small,
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Strikethrough",
                    iconCss: "e-icons e-strikethrough"
                }
            }, {
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Small,
                buttonSettings: {
                    content: "Change Case",
                    iconCss: "e-icons e-change-case"
                }
            }]
        }]
    }, {
        header: "Editor",
        isCollapsible: false,
        collections: [{
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Large,
                buttonSettings: {
                    content: "Editor",
                    iconCss:"e-icons e-edit"
                }
            }]
        }]
    }]
}, {
    header: "Insert",
    groups: [{
        header: "Tables",
        isCollapsible: false,
        collections: [{
            items: [{
                type: RibbonItemType.DropDown,
                allowedSizes: RibbonItemSize.Large,
                dropDownSettings: {
                    iconCss: "e-icons e-table",
                    content: "Table",
                    items: [
                        { text: "Insert Table" }, { text: "Draw Table" },
                        { text: "Convert Table" }, { text: "Excel SpreadSheet" }
                    ]
                }
            }]
        }]
    }, {
        id: "illustration",
        header: "Illustrations",
        showLauncherIcon: true,
        orientation: ItemOrientation.Row,
        enableGroupOverflow: true,
        groupIconCss: "e-icons e-image",
        collections: [{
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Chart",
                    iconCss:"e-icons e-chart"
                }
            },]
        }]
    }, {
        header: "Media",
        isCollapsible: false,
        collections: [{
            items: [{
                type: RibbonItemType.Template,
                itemTemplate: "#itemTemplate"
            }]
        }]
    }]
}, {
    header: "View",
    groups: [{
        header: "Views",
        groupIconCss: "e-icons e-print",
        orientation: ItemOrientation.Row,
        collections: [{
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Print Layout",
                    iconCss: "e-print e-icons"
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    iconCss: "e-icons e-web-layout",
                    content: "Web Layout"
                }
            }]
        }]
    }, {
        header: "Show",
        isCollapsible: false,
        collections: [{
            items: [{
                type: RibbonItemType.CheckBox,
                checkBoxSettings: {
                    label: "Ruler",
                    checked: false
                }
            }, {
                type: RibbonItemType.CheckBox,
                checkBoxSettings: {
                    checked: false,
                    label: "Gridlines"
                }
            }, {
                type: RibbonItemType.CheckBox,
                checkBoxSettings: {
                    label: "Navigation Pane",
                    checked: true
                }
            }]
        }]
    }]
}];

let menuItems: MenuItemModel[] = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs,
    fileMenu: {
        menuItems: menuItems,
        visible: true
    }
});
ribbon.appendTo("#ribbon");


