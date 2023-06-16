---
layout: post
title: Ribbon Events in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Ribbon Events with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Events
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in Ribbon control

This section describes the ribbon events that will be triggered when appropriate actions are performed. The following events are available in the ribbon control.

## Tab selected

The [tabSelected](../api/ribbon/ribbonModel/#tabselected) event is triggered after selecting the tab item.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
},
{
    header: "View",
    groups: [{
        header: "Views",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Print Layout",
                    iconCss: "e-icons e-print"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  tabSelected: (args) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## Tab selecting

The [`tabSelecting`](../api/ribbon/ribbonModel/#tabselecting) event is triggered before selecting the tab item.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
},
{
    header: "View",
    groups: [{
        header: "Views",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Print Layout",
                    iconCss: "e-icons e-print"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  tabSelecting: (args) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## Ribbon collapsing

The [ribbonCollapsing](../api/ribbon/ribbonModel/#ribboncollapsing) event is triggered before collapsing the ribbon.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  ribbonCollapsing: (args) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## Ribbon expanding

The [ribbonExpanding](../api/ribbon/ribbonModel/#ribbonexpanding) event is triggered before expanding the ribbon.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  ribbonExpanding: (args) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## Group launcher click

The [launcherIconClick](../api/ribbon/ribbonModel/#launchericonclick) event is triggered when the launcher icon of the group is clicked.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        showLauncherIcon: true,
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  launcherIconClick: (args) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## Button item events

### Click

The [clicked](../api/ribbon/ribbonButtonSettings/#clicked) event is triggered when the button is clicked.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut",
                    clicked: () => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Created

The [created](../api/ribbon/ribbonButtonSettings/#created) event is triggered when the button is created.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut",
                    created: () => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Checkbox item events

### Change

The [change](../api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the the Checkbox state is changed.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "View",
        collections: [
          {
            items: [{
                type: "CheckBox",
                checkBoxSettings: {
                    label: "Ruler",
                    checked: false,
                    change: () => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Created

The [created](../api/ribbon/ribbonCheckBoxSettings/#created) event is triggered once the Checkbox is created.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "View",
        collections: [
          {
            items: [{
                type: "CheckBox",
                checkBoxSettings: {
                    label: "Ruler",
                    checked: false,
                    created: () => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Colorpicker item events

### Change

The [change](../api/ribbon/ribbonColorPickerSettings/#change) event is triggered while changing the colors.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ColorPicker",
                colorPickerSettings: {
                    value: "#fff",
                    change:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Created

The [created](../api/ribbon/ribbonColorPickerSettings/#created) event is triggered once the Colorpicker is created.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ColorPicker",
                colorPickerSettings: {
                    value: "#fff",
                    created:() => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Open

The [open](../api/ribbon/ribbonColorPickerSettings/#open) event is triggered while opening the Colorpicker popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ColorPicker",
                colorPickerSettings: {
                    value: "#fff",
                    open:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Select

The [select](../api/ribbon/ribbonColorPickerSettings/#select) event is triggered while selecting the color in picker / palette, when showButtons property is enabled.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ColorPicker",
                colorPickerSettings: {
                    value: "#fff",
                    select:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Before close

The [beforeClose](../api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before closing the Colorpicker popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ColorPicker",
                colorPickerSettings: {
                    value: "#fff",
                    beforeClose:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Before open

The [beforeOpen](../api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before opening the Colorpicker popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ColorPicker",
                colorPickerSettings: {
                    value: "#123456",
                    beforeOpen:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Before tile render

The [beforeTileRender](../api/ribbon/ribbonColorPickerSettingsModel/#beforetilerender) event is triggered while rendering each palette tile.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ColorPicker",
                colorPickerSettings: {
                    value: "#123456",
                    beforeTileRender:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Combobox item events

### Change

The [change](../api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or when the model value is changed by user.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    change:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Close

The [close](../api/ribbon/ribbonComboBoxSettings/#close) event is triggered when the popup is closed.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    close:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Open

The [open](../api/ribbon/ribbonComboBoxSettings/#open) event is triggered when the popup is opened.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    open:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Created

The [created](../api/ribbon/ribbonComboBoxSettings/#created) event is triggered once the Combobox is created.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    created:() => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Filtering

The [filtering](../api/ribbon/ribbonComboBoxSettings/#filtering) event triggers on typing a character in the Combobox.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    allowFiltering: true,
                    filtering: function (e) {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Select

The [select](../api/ribbon/ribbonComboBoxSettings/#select) event is triggered when an item in the popup is selected.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    select:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Before open

The [beforeOpen](../api/ribbon/ribbonComboBoxSettings/#beforeOpen) event triggers before opening the popup.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    beforeOpen:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Dropdown item events

### Before close

The [beforeClose](../api/ribbon/ribbonDropDownSettings/#beforeclose) event is triggered before closing the DropdownButton popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "DropDown",
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeClose:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Before open

The [beforeOpen](../api/ribbon/ribbonDropDownSettings/#beforeopen) event is triggered before opening the Dropdown button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "DropDown",
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeOpen:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Before item render

The [beforeItemRender](../api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each Popup item of Dropdown button.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "DropDown",
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeItemRender:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Open

The [open](../api/ribbon/ribbonDropDownSettings/#open) event is triggered while opening the Dropdown button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "DropDown",
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    open:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Close

The [close](../api/ribbon/ribbonDropDownSettings/#close) event is triggered while closing the Dropdown button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "DropDown",
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    close:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Created

The [created](../api/ribbon/ribbonDropDownSettings/#created) event is triggered while selecting an action item in Dropdown button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "DropDown",
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    created:() => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Select

The [select](../api/ribbon/ribbonDropDownSettings/#select) event is triggered while selecting an action item in Dropdown button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "DropDown",
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    select:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Split button item events

### Before close

The [beforeClose](../api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before closing the Split button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeClose:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Before open

The [beforeOpen](../api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before opening the Split button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeOpen:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Before item render

The [beforeItemRender](../api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each Popup item of Split button.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeItemRender:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Open

The [open](../api/ribbon/ribbonSplitButtonSettings/#open) event is triggered while opening the Split button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    open:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Close

The [close](../api/ribbon/ribbonSplitButtonSettings/#close) event is triggered while closing the Split button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    close:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Created

The [created](../api/ribbon/ribbonSplitButtonSettings/#created) event is triggered while selecting an action item in Split button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    created:() => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Select

The [select](../api/ribbon/ribbonSplitButtonSettings/#select) event is triggered while selecting an action item in Split button popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    select:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Click

The [click](../api/ribbon/ribbonSplitButtonSettings/#click) event is triggered while clicking the primary button in Split button.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    click:(args) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## File menu events

### Before close

The [beforeClose](../api/ribbon/fileMenuSettings/#beforeclose) event is triggered before closing the file menu popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var menuItems = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  fileMenu: {
      menuItems: menuItems,
      visible: true,
      beforeClose: (args) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### Before open

The [beforeOpen](../api/ribbon/fileMenuSettings/#beforeopen) event is triggered before opening the file menu popup.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var menuItems = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  fileMenu: {
      menuItems: menuItems,
      visible: true,
      beforeOpen: (args) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### Before item render

The [beforeItemRender](../api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon file menu item.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var menuItems = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  fileMenu: {
      menuItems: menuItems,
      visible: true,
      beforeItemRender: (args) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### Open

The [open](../api/ribbon/fileMenuSettings/#open) event is triggered when file menu popup is opened.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var menuItems = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  fileMenu: {
      menuItems: menuItems,
      visible: true,
      open: (args) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### Close

The [close](../api/ribbon/fileMenuSettings/#close) event is triggered when file menu popup is closed.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var menuItems = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  fileMenu: {
      menuItems: menuItems,
      visible: true,
      close: (args) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### Select

The [select](../api/ribbon/fileMenuSettings/#select) event is triggered while selecting an item in ribbon file menu.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var menuItems = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  fileMenu: {
      menuItems: menuItems,
      visible: true,
      select: (args) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```