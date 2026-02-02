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

# Events in ##Platform_Name## Ribbon control

The Ribbon control triggers a variety of events in response to user interactions, such as selecting a tab, clicking a button, or expanding the ribbon. This section provides detailed explanations and code examples for each available event.

## tabSelected

The [tabSelected](../api/ribbon/ribbonModel/#tabselected) event is triggered after a tab is successfully selected, allowing you to execute logic based on the newly active tab.

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

The [tabSelecting](../api/ribbon/ribbonModel/#tabselecting) event is triggered before a tab is selected. This event can be canceled to prevent the tab selection.

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

The [ribbonCollapsing](../api/ribbon/ribbonModel/#ribboncollapsing) event is triggered before the ribbon is collapsed. This action can be canceled.

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

The [ribbonExpanding](../api/ribbon/ribbonModel/#ribbonexpanding) event is triggered before the ribbon is expanded. This action can be canceled.

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

The [launcherIconClick](../api/ribbon/ribbonModel/#launchericonclick) event is triggered when the launcher icon of a group is clicked. This is useful for opening dialogs or performing group-specific actions.

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

## overflowPopupOpen

The [overflowPopupOpen](../api/ribbon/ribbonModel/#overflowpopupopen) event is triggered while the overflow popup is opening.

## overflowPopupClose

The [overflowPopupClose](../api/ribbon/ribbonModel/#overflowpopupclose) event is triggered while the overflow popup is closing.

The following code example demonstrates the ribbon with the `overflowPopupOpen` and `overflowPopupClose` events.

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
  activeLayout: "Simplified",
  tabs: tabs,
  overflowPopupOpen: (args) =>{
    // Your required action here
  },
  overflowPopupClose: (args) =>{
    // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## Button item events

### clicked

The [clicked](../api/ribbon/ribbonButtonSettings/#clicked) event is triggered when a ribbon button is clicked.

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

The [created](../api/ribbon/ribbonButtonSettings/#created) event is triggered when a ribbon button is created.

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

The [change](../api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the state of the checkbox is changed.

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

The [change](../api/ribbon/ribbonColorPickerSettings/#change) event is triggered when changing the color value.

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

The [open](../api/ribbon/ribbonColorPickerSettings/#open) event is triggered while the ColorPicker popup is opening.

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

The [select](../api/ribbon/ribbonColorPickerSettings/#select) event is triggered when selecting a color from the picker or palette, particularly when the `showButtons` property is enabled.

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

The [beforeClose](../api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before the ColorPicker popup closes.

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

The [beforeOpen](../api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before the ColorPicker popup opens.

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

The [beforeTileRender](../api/ribbon/ribbonColorPickerSettingsModel/#beforetilerender) event is triggered while rendering each palette tile, allowing for customization.

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

The [change](../api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or the model value is changed by the user.

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

The [created](../api/ribbon/ribbonComboBoxSettings/#created) event is triggered when the ComboBox is created.

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

The [filtering](../api/ribbon/ribbonComboBoxSettings/#filtering) event triggers when typing a character in the ComboBox.

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

The [beforeOpen](../api/ribbon/ribbonComboBoxSettings/#beforeOpen) event triggers before the popup opens.

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

The [beforeClose](../api/ribbon/ribbonDropDownSettings/#beforeclose) event is triggered before the DropDownButton popup closes.

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

The [beforeOpen](../api/ribbon/ribbonDropDownSettings/#beforeopen) event is triggered before the DropDownButton popup opens.

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

The [beforeItemRender](../api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each popup item of the DropDownButton.

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

The [open](../api/ribbon/ribbonDropDownSettings/#open) event is triggered when the DropDownButton popup opens.

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

The [close](../api/ribbon/ribbonDropDownSettings/#close) event is triggered when the DropDownButton popup closes.

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

The [created](../api/ribbon/ribbonDropDownSettings/#created) event is triggered when the DropDownButton is created.

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

The [select](../api/ribbon/ribbonDropDownSettings/#select) event is triggered when an action item is selected in the DropDownButton popup.

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

The [beforeClose](../api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before the SplitButton popup closes.

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

The [beforeOpen](../api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before the SplitButton popup opens.

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

The [beforeItemRender](../api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each popup item of the SplitButton.

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

The [open](../api/ribbon/ribbonSplitButtonSettings/#open) event is triggered when the SplitButton popup opens.

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

The [close](../api/ribbon/ribbonSplitButtonSettings/#close) event is triggered when the SplitButton popup closes.

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

The [select](../api/ribbon/ribbonSplitButtonSettings/#select) event is triggered when an action item is selected in the SplitButton popup.

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

The [click](../api/ribbon/ribbonSplitButtonSettings/#click) event is triggered when clicking the primary button in the SplitButton.

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

The [beforeClick](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupButtonItemModel/#beforeclick) event is triggered before a button is selected from the GroupButton items.

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

The [click](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupButtonItemModel/#click) event is triggered when a button is selected from the GroupButton items.

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

The [beforeClose](../api/ribbon/fileMenuSettings/#beforeclose) event is triggered before the File Menu popup closes.

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

The [beforeOpen](../api/ribbon/fileMenuSettings/#beforeopen) event is triggered before the File Menu popup opens.

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

The [beforeItemRender](../api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon File Menu item.

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

The [open](../api/ribbon/fileMenuSettings/#open) event is triggered when the File Menu popup opens.

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

The [close](../api/ribbon/fileMenuSettings/#close) event is triggered when the File Menu popup closes.

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

The [select](../api/ribbon/fileMenuSettings/#select) event is triggered when an item is selected in the ribbon File Menu.

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

The [backStageItemClick](../api/ribbon/backstageItem/#backstageitemclick) event is triggered when a backstage item is selected.

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

## Gallery events

### popupOpen

The [popupOpen](../api/ribbon/ribbonGallerySettings/#popupopen) event is triggered when the gallery popup opens.

```js
var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Styles',
                    items: [
                        {
                            content: 'Normal'
                        }, {
                            content: 'No Spacing'
                        }, {
                            content: 'Heading 1'
                        }, {
                            content: 'Heading 2'
                        }
                      ]
                  }],
                  popupOpen: (args) => {
                    // Your required action here
                  }
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

```

### popupClose

The [popupClose](../api/ribbon/ribbonGallerySettings/#popupclose) event is triggered when the gallery popup closes.

```js
var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Styles',
                    items: [
                        {
                            content: 'Normal'
                        }, {
                            content: 'No Spacing'
                        }, {
                            content: 'Heading 1'
                        }, {
                            content: 'Heading 2'
                        }
                      ]
                  }],
                  popupClose: (args) => {
                    // Your required action here
                  }
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

```

### itemHover

The [itemHover](../api/ribbon/ribbonGallerySettings/#itemhover) event is triggered when hovering over a gallery item.

```js
var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Styles',
                    items: [
                        {
                            content: 'Normal'
                        }, {
                            content: 'No Spacing'
                        }, {
                            content: 'Heading 1'
                        }, {
                            content: 'Heading 2'
                        }
                      ]
                  }],
                  itemHover: (args) => {
                    // Your required action here
                  }
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

```

### beforeItemRender

The [beforeItemRender](../api/ribbon/ribbonGallerySettings/#beforeitemrender) event is triggered before each gallery item is rendered.

```js
var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Styles',
                    items: [
                        {
                            content: 'Normal'
                        }, {
                            content: 'No Spacing'
                        }, {
                            content: 'Heading 1'
                        }, {
                            content: 'Heading 2'
                        }
                      ]
                  }],
                  beforeItemRender: (args) => {
                    // Your required action here
                  }
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

```

### beforeSelect

The [beforeSelect](../api/ribbon/ribbonGallerySettings/#beforeselect) event is triggered before an item is selected in the Ribbon gallery.

```js
var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Styles',
                    items: [
                        {
                            content: 'Normal'
                        }, {
                            content: 'No Spacing'
                        }, {
                            content: 'Heading 1'
                        }, {
                            content: 'Heading 2'
                        }
                      ]
                  }],
                  beforeSelect: (args) => {
                    // Your required action here
                  }
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

```

### select

The [select](../api/ribbon/gallerySelectEventArgs/) event is triggered when an item is selected in the Ribbon Gallery.

```js
var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Styles',
                    items: [
                        {
                            content: 'Normal'
                        }, {
                            content: 'No Spacing'
                        }, {
                            content: 'Heading 1'
                        }, {
                            content: 'Heading 2'
                        }
                      ]
                  }],
                  select: (args) => {
                    // Your required action here
                  }
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

```
