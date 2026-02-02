---
layout: post
title: Ribbon Events in  ##Platform_Name## Ribbon control | Syncfusion
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

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, TabSelectedEventArgs } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
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
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Print Layout",
                    iconCss: "e-icons e-print"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
  tabSelected: (args: TabSelectedEventArgs) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## tabSelecting

The [tabSelecting](../api/ribbon/ribbonModel/#tabselecting) event is triggered before a tab is selected. This event can be canceled to prevent the tab selection.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, TabSelectingEventArgs } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
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
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Print Layout",
                    iconCss: "e-icons e-print"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
  tabSelecting: (args: TabSelectingEventArgs) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## ribbonCollapsing

The [ribbonCollapsing](../api/ribbon/ribbonModel/#ribboncollapsing) event is triggered before the ribbon is collapsed. This action can be canceled.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, ExpandCollapseEventArgs } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
  ribbonCollapsing: (args: ExpandCollapseEventArgs) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## ribbonExpanding

The [ribbonExpanding](../api/ribbon/ribbonModel/#ribbonexpanding) event is triggered before the ribbon is expanded. This action can be canceled.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, ExpandCollapseEventArgs } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
  ribbonExpanding: (args: ExpandCollapseEventArgs) =>{
     // Your required action here
  }
});
ribbon.appendTo("#ribbon");
```

## launcherIconClick

The [launcherIconClick](../api/ribbon/ribbonModel/#launchericonclick) event is triggered when the launcher icon of a group is clicked. This is useful for opening dialogs or performing group-specific actions.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, LauncherClickEventArgs } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        showLauncherIcon: true,
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
  launcherIconClick: (args: LauncherClickEventArgs) =>{
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

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, OverflowPopupEventArgs, RibbonLayout } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  activeLayout: RibbonLayout.Simplified,
  tabs: tabs,
  overflowPopupOpen: (args: OverflowPopupEventArgs) => {
    // Your required action here
  },
  overflowPopupClose: (args: OverflowPopupEventArgs) => {
    // Your required action here
  },
});
ribbon.appendTo('#ribbon');
```

## Button item events

### clicked

The [clicked](../api/ribbon/ribbonButtonSettings/#clicked) event is triggered when a ribbon button is clicked.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
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

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### created

The [created](../api/ribbon/ribbonButtonSettings/#created) event is triggered when a ribbon button is created.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
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

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## CheckBox item events

### change

The [change](../api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the state of the checkbox is changed.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "View",
        collections: [
          {
            items: [{
                type: RibbonItemType.CheckBox,
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

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### created

The [created](../api/ribbon/ribbonCheckBoxSettings/#created) event is triggered once the Checkbox is created.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "View",
        collections: [
          {
            items: [{
                type: RibbonItemType.CheckBox,
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

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## ColorPicker item events

### change

The [change](../api/ribbon/ribbonColorPickerSettings/#change) event is triggered when changing the color value.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonColorPicker } from "@syncfusion/ej2-ribbon";
import { ChangeEventArgs } from "@syncfusion/ej2-inputs";

Ribbon.Inject(RibbonColorPicker);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ColorPicker,
                colorPickerSettings: {
                    value: "#fff",
                    change:(args: ChangeEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### created

The [created](../api/ribbon/ribbonColorPickerSettings/#created) event is triggered once the ColorPicker is created.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonColorPicker } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonColorPicker);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ColorPicker,
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

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### open

The [open](../api/ribbon/ribbonColorPickerSettings/#open) event is triggered while the ColorPicker popup is opening.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonColorPicker } from "@syncfusion/ej2-ribbon";
import { OpenEventArgs } from "@syncfusion/ej2-inputs";

Ribbon.Inject(RibbonColorPicker);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ColorPicker,
                colorPickerSettings: {
                    value: "#fff",
                    open:(args: OpenEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### select

The [select](../api/ribbon/ribbonColorPickerSettings/#select) event is triggered when selecting a color from the picker or palette, particularly when the `showButtons` property is enabled.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonColorPicker } from "@syncfusion/ej2-ribbon";
import { ColorPickerEventArgs } from "@syncfusion/ej2-inputs";

Ribbon.Inject(RibbonColorPicker);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ColorPicker,
                colorPickerSettings: {
                    value: "#fff",
                    select:(args: ColorPickerEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### beforeClose

The [beforeClose](../api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before the ColorPicker popup closes.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonColorPicker } from "@syncfusion/ej2-ribbon";
import { BeforeOpenCloseEventArgs } from "@syncfusion/ej2-inputs";

Ribbon.Inject(RibbonColorPicker);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ColorPicker,
                colorPickerSettings: {
                    value: "#fff",
                    beforeClose:(args: BeforeOpenCloseEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### beforeOpen

The [beforeOpen](../api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before the ColorPicker popup opens.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonColorPicker } from "@syncfusion/ej2-ribbon";
import { BeforeOpenCloseEventArgs } from "@syncfusion/ej2-inputs";

Ribbon.Inject(RibbonColorPicker);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ColorPicker,
                colorPickerSettings: {
                    value: "#123456",
                    beforeOpen:(args: BeforeOpenCloseEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### beforeTileRender

The [beforeTileRender](../api/ribbon/ribbonColorPickerSettingsModel/#beforetilerender) event is triggered while rendering each palette tile, allowing for customization.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonColorPicker } from "@syncfusion/ej2-ribbon";
import { PaletteTileEventArgs } from "@syncfusion/ej2-inputs";

Ribbon.Inject(RibbonColorPicker);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ColorPicker,
                colorPickerSettings: {
                    value: "#123456",
                    beforeTileRender:(args: PaletteTileEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## ComboBox item events

### change

The [change](../api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or the model value is changed by the user.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { ChangeEventArgs } from "@syncfusion/ej2-dropdowns";

let fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    change:(args: ChangeEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### close

The [close](../api/ribbon/ribbonComboBoxSettings/#close) event is triggered when the popup is closed.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { PopupEventArgs } from "@syncfusion/ej2-dropdowns";

let fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    close:(args: PopupEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### open

The [open](../api/ribbon/ribbonComboBoxSettings/#open) event is triggered when the popup is opened.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { PopupEventArgs } from "@syncfusion/ej2-dropdowns";

let fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    open:(args: PopupEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### created

The [created](../api/ribbon/ribbonComboBoxSettings/#created) event is triggered when the ComboBox is created.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ComboBox,
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

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### filtering

The [filtering](../api/ribbon/ribbonComboBoxSettings/#filtering) event triggers when typing a character in the ComboBox.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { FilteringEventArgs } from "@syncfusion/ej2-dropdowns";

let fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    allowFiltering: true,
                    filtering: function (e: FilteringEventArgs) {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### select

The [select](../api/ribbon/ribbonComboBoxSettings/#select) event is triggered when an item in the popup is selected.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { SelectEventArgs } from "@syncfusion/ej2-dropdowns";

let fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    select:(args: SelectEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### beforeOpen

The [beforeOpen](../api/ribbon/ribbonComboBoxSettings/#beforeOpen) event triggers before the popup opens.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { BeforeOpenEventArgs } from "@syncfusion/ej2-dropdowns";

let fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    beforeOpen:(args: BeforeOpenEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## DropDown item events

### beforeClose

The [beforeClose](../api/ribbon/ribbonDropDownSettings/#beforeclose) event is triggered before the DropDownButton popup closes.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { BeforeOpenCloseMenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.DropDown,
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeClose:(args: BeforeOpenCloseMenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### beforeOpen

The [beforeOpen](../api/ribbon/ribbonDropDownSettings/#beforeopen) event is triggered before the DropDownButton popup opens.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { BeforeOpenCloseMenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.DropDown,
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeOpen:(args: BeforeOpenCloseMenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### beforeItemRender

The [beforeItemRender](../api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each popup item of the DropDownButton.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { MenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.DropDown,
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeItemRender:(args: MenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### open

The [open](../api/ribbon/ribbonDropDownSettings/#open) event is triggered when the DropDownButton popup opens.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { OpenCloseMenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.DropDown,
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    open:(args: OpenCloseMenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### close

The [close](../api/ribbon/ribbonDropDownSettings/#close) event is triggered when the DropDownButton popup closes.up.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { OpenCloseMenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.DropDown,
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    close:(args: OpenCloseMenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### created

The [created](../api/ribbon/ribbonDropDownSettings/#created) event is triggered when the DropDownButton is created.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.DropDown,
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

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### select

The [select](../api/ribbon/ribbonDropDownSettings/#select) event is triggered when an action item is selected in the DropDownButton popup.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { MenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.DropDown,
                dropDownSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    select:(args: MenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## SplitButton item events

### beforeClose

The [beforeClose](../api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before the SplitButton popup closes.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { BeforeOpenCloseMenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeClose:(args: BeforeOpenCloseMenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### beforeOpen

The [beforeOpen](../api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before the SplitButton popup opens.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { BeforeOpenCloseMenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeOpen:(args: BeforeOpenCloseMenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### beforeItemRender

The [beforeItemRender](../api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each popup item of the SplitButton.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { MenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    beforeItemRender:(args: MenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### open

The [open](../api/ribbon/ribbonSplitButtonSettings/#open) event is triggered when the SplitButton popup opens.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { OpenCloseMenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    open:(args: OpenCloseMenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### close

The [close](../api/ribbon/ribbonSplitButtonSettings/#close) event is triggered when the SplitButton popup closes.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { OpenCloseMenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    close:(args: OpenCloseMenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### created

The [created](../api/ribbon/ribbonSplitButtonSettings/#created) event is triggered when the SplitButton is created.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.SplitButton,
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

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### select

The [select](../api/ribbon/ribbonSplitButtonSettings/#select) event is triggered when an action item is selected in the SplitButton popup.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { MenuEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    select:(args: MenuEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### click

The [click](../api/ribbon/ribbonSplitButtonSettings/#click) event is triggered when clicking the primary button in the SplitButton.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType } from "@syncfusion/ej2-ribbon";
import { ClickEventArgs } from "@syncfusion/ej2-splitbuttons";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    content: "Header",
                    iconCss: "e-icons e-header",
                    items: [{ text: "Insert Header" }, { text: "Edit Header" }, { text: "Remove Header" }],
                    click:(args: ClickEventArgs) => {
                      // Your required action here
                    }
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## GroupButton item events

### beforeClick

The [beforeClick](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonItemModel/#beforeclick) event is triggered before a button is selected from the GroupButton items.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, BeforeClickGroupButtonEventArgs } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.GroupButton,
                allowedSizes: RibbonItemSize.Small,
                groupButtonSettings: {
                    selection: RibbonGroupButtonSelection.Multiple,
                    items: [{
                        iconCss: 'e-icons e-bold',
                        content: 'Bold',
                        beforeClick:(args: BeforeClickGroupButtonEventArgs) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-italic',
                        content: 'Italic',
                        selected: true,
                        beforeClick:(args: BeforeClickGroupButtonEventArgs) => {
                            // Your required action here
                        }                        
                    },
                    {
                        iconCss: 'e-icons e-underline',
                        content: 'Underline',
                        beforeClick:(args: BeforeClickGroupButtonEventArgs) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-strikethrough',
                        content: 'Strikethrough',
                        beforeClick:(args: BeforeClickGroupButtonEventArgs) => {
                            // Your required action here
                        }
                    }]
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### click

The [click](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonItemModel/#click) event is triggered when a button is selected from the GroupButton items.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, ClickGroupButtonEventArgs } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Header & Footer",
        collections: [
          {
            items: [{
                type: RibbonItemType.GroupButton,
                allowedSizes: RibbonItemSize.Small,
                groupButtonSettings: {
                    selection: RibbonGroupButtonSelection.Single,
                    items: [{
                        iconCss: 'e-icons e-align-left',
                        content: 'Align Left',
                        click:(args: ClickGroupButtonEventArgs) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-align-center',
                        content: 'Align Center',
                        selected: true,
                        click:(args: ClickGroupButtonEventArgs) => {
                            // Your required action here
                        }                        
                    },
                    {
                        iconCss: 'e-icons e-align-right',
                        content: 'Align Right',
                        click:(args: ClickGroupButtonEventArgs) => {
                            // Your required action here
                        }
                    },
                    {
                        iconCss: 'e-icons e-justify',
                        content: 'Justify',
                        click:(args: ClickGroupButtonEventArgs) => {
                            // Your required action here
                        }
                    }]
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```


## FileMenu events

### beforeClose

The [beforeClose](../api/ribbon/fileMenuSettings/#beforeclose) event is triggered before the File Menu popup closes.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonFileMenu, FileMenuBeforeOpenCloseEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonFileMenu);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Large,
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
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
      visible: true,
      beforeClose: (args: FileMenuBeforeOpenCloseEventArgs) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### beforeOpen

The [beforeOpen](../api/ribbon/fileMenuSettings/#beforeopen) event is triggered before the File Menu popup opens.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonFileMenu, FileMenuBeforeOpenCloseEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonFileMenu);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Large,
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
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
      visible: true,
      beforeOpen: (args: FileMenuBeforeOpenCloseEventArgs) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### beforeItemRender

The [beforeItemRender](../api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon File Menu item.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonFileMenu, FileMenuEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonFileMenu);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Large,
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
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
      visible: true,
      beforeItemRender: (args: FileMenuEventArgs) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### open

The [open](../api/ribbon/fileMenuSettings/#open) event is triggered when the File Menu popup opens.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonFileMenu, FileMenuOpenCloseEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonFileMenu);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Large,
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
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
      visible: true,
      open: (args: FileMenuOpenCloseEventArgs) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### close

The [close](../api/ribbon/fileMenuSettings/#close) event is triggered when the File Menu popup closes.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonFileMenu, FileMenuOpenCloseEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonFileMenu);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Large,
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
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
      visible: true,
      close: (args: FileMenuOpenCloseEventArgs) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

### select

The [select](../api/ribbon/fileMenuSettings/#select) event is triggered when an item is selected in the ribbon File Menu.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonFileMenu, FileMenuEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonFileMenu);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Large,
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
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
      visible: true,
      select: (args: FileMenuEventArgs) => {
        // Your required action here
      }
  }  
});
ribbon.appendTo("#ribbon");
```

## Backstage menu events

### backStageItemClick

The [backStageItemClick](../api/ribbon/backstageItem/#backstageitemclick) event is triggered when a backstage item is selected.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonBackstage, FileMenuBeforeOpenCloseEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonBackstage);

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Large,
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
  backStageMenu: {
      items: [
        { 
            id: 'home', 
            text: 'Home', 
            iconCss: 'e-icons e-home', 
            content: '#homeContent',
            backStageItemClick: (args: BackstageItemClickArgs) => {
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

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery, GalleryPopupEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonGallery);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
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
                  popupOpen: (args: GalleryPopupEventArgs) => {
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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");
```

### popupClose

The [popupClose](../api/ribbon/ribbonGallerySettings/#popupclose) event is triggered when the gallery popup closes.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery, GalleryPopupEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonGallery);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
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
                  popupClose: (args: GalleryPopupEventArgs) => {
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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");
```

### itemHover

The [itemHover](../api/ribbon/ribbonGallerySettings/#itemhover) event is triggered when hovering over a gallery item.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery, GalleryHoverEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonGallery);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
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
                  itemHover: (args: GalleryHoverEventArgs) => {
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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");
```

### beforeItemRender

The [beforeItemRender](../api/ribbon/ribbonGallerySettings/#beforeitemrender) event is triggered before each gallery item is rendered.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery, GalleryItemEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonGallery);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
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
                  beforeItemRender: (args: GalleryItemEventArgs) => {
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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");
```

### beforeSelect

The [beforeSelect](../api/ribbon/ribbonGallerySettings/#beforeselect) event is triggered before an item is selected in the Ribbon gallery.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery, GalleryBeforeSelectEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonGallery);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
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
                  beforeSelect: (args: GalleryBeforeSelectEventArgs) => {
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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");
```

### select

The [select](../api/ribbon/gallerySelectEventArgs/) event is triggered when an item is selected in the Ribbon Gallery.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery, GallerySelectEventArgs } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonGallery);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
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
                  select: (args: GallerySelectEventArgs) => {
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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");
```