---
layout: post
title: Events in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Events with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events

This section describes the ribbon events that will be triggered when appropriate actions are performed. The following events are available in the ribbon control.

## tabSelected

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

## tabSelecting

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

## ribbonCollapsing

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

## ribbonExpanding

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

## launcherIconClick

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

### clicked

The [clicked](../api/ribbon/ribbonButtonSettings/#clicked) event is triggered when the Button is clicked.

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

### created

The [created](../api/ribbon/ribbonButtonSettings/#created) event is triggered when the Button is created.

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

## CheckBox item events

### change

The [change](../api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the Checkbox state is changed.

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

### created

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

## ColorPicker item events

### change

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

### created

The [created](../api/ribbon/ribbonColorPickerSettings/#created) event is triggered once the ColorPicker is created.

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

### open

The [open](../api/ribbon/ribbonColorPickerSettings/#open) event is triggered while opening the ColorPicker popup.

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

### select

The [select](../api/ribbon/ribbonColorPickerSettings/#select) event is triggered while selecting the color in picker/palette, when showButtons property is enabled.

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

### beforeClose

The [beforeClose](../api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before closing the ColorPicker popup.

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

### beforeOpen

The [beforeOpen](../api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before opening the ColorPicker popup.

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

### beforeTileRender

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

## ComboBox item events

### change

The [change](../api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or when the model value is changed by the user.

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

### close

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

### open

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

### created

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

### filtering

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

### select

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

### beforeOpen

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

## DropDown item events

### beforeClose

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

### beforeOpen

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

### beforeItemRender

The [beforeItemRender](../api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each popup item of the Dropdown button.

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

### open

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

### close

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

### created

The [created](../api/ribbon/ribbonDropDownSettings/#created) event is triggered when the DropDown is created.

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

### select

The [select](../api/ribbon/ribbonDropDownSettings/#select) event is triggered while selecting an action item in the Dropdown button popup.

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

## SplitButton item events

### beforeClose

The [beforeClose](../api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before closing the SplitButton popup.

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

### beforeOpen

The [beforeOpen](../api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before opening the SplitButton popup.

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

### beforeItemRender

The [beforeItemRender](../api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each popup item of SplitButton

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

### open

The [open](../api/ribbon/ribbonSplitButtonSettings/#open) event is triggered while opening the SplitButton popup.

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

### close

The [close](../api/ribbon/ribbonSplitButtonSettings/#close) event is triggered while closing the SplitButton popup.

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

### created

The [created](../api/ribbon/ribbonSplitButtonSettings/#created) event is triggered when the SplitButton is created.

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

### select

The [select](../api/ribbon/ribbonSplitButtonSettings/#select) event is triggered while selecting an action item in the SplitButton popup.

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

### click

The [click](../api/ribbon/ribbonSplitButtonSettings/#click) event is triggered while clicking the primary button in the SplitButton.

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

## GroupButton item events

### beforeClick

The [beforeClick](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupButtonItemModel/#beforeclick) event is triggered before selecting a button from the groupbutton items.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Paragraph",
        collections: [
          {
            items: [{
                type: "GroupButton",
                allowedSizes: ej.ribbon.RibbonItemSize.Small,
                groupButtonSettings: {
                    selection: ej.ribbon.RibbonGroupButtonSelection.Multiple,
                    items: [{
                        iconCss: 'e-icons e-bold',
                        content: 'Bold',
                        beforeClick:(args) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-italic',
                        content: 'Italic',
                        selected: true,
                        beforeClick:(args) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-underline',
                        content: 'Underline',
                        beforeClick:(args) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-strikethrough',
                        selected: true,
                        content: 'Strikethrough',
                        beforeClick:(args) => {
                            // Your required action here
                        }
                    }]
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### click

The [click](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupButtonItemModel/#click) event is triggered when selecting a button from the groupbutton items.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Paragraph",
        collections: [
          {
            items: [{
                type: "GroupButton",
                allowedSizes: ej.ribbon.RibbonItemSize.Small,
                groupButtonSettings: {
                    selection: ej.ribbon.RibbonGroupButtonSelection.Single,
                    items: [{
                        iconCss: 'e-icons e-align-left',
                        content: 'Align Left',
                        click:(args) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-align-center',
                        content: 'Align Center',
                        selected: true,
                        click:(args) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-align-right',
                        content: 'Align Right',
                        click:(args) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-justify',
                        selected: true,
                        content: 'Justify',
                        click:(args) => {
                            // Your required action here
                        }
                    }]
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## FileMenu events

### beforeClose

The [beforeClose](../api/ribbon/fileMenuSettings/#beforeclose) event is triggered before closing the fileMenu popup.

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

### beforeOpen

The [beforeOpen](../api/ribbon/fileMenuSettings/#beforeopen) event is triggered before opening the fileMenu popup.

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

### beforeItemRender

The [beforeItemRender](../api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon fileMenu item.

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

### open

The [open](../api/ribbon/fileMenuSettings/#open) event is triggered when the fileMenu popup is opened.

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

### close

The [close](../api/ribbon/fileMenuSettings/#close) event is triggered when the fileMenu popup is closed.

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

### select

The [select](../api/ribbon/fileMenuSettings/#select) event is triggered while selecting an item in the ribbon fileMenu.

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

## Backstage view events

### backStageItemClick

The `backStageItemClick` event is triggered when backstage item is selected.

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
  backStageMenu: {
      items: [
        { 
            id: 'home', 
            text: 'Home', 
            iconCss: 'e-icons e-home', 
            content: '#homeContent',
            backStageItemClick: (args) => {
                // Your required action here
            } 
        }
      ],
      visible: true,
      backButton: { text: 'Close' }
    }
});
ribbon.appendTo("#ribbon");
```
