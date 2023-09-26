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

# Events

This section describes the ribbon events that will be triggered when appropriate actions are performed. The following events are available in the ribbon control.

## tabSelected

The [tabSelected](../api/ribbon/ribbonModel/#tabselected) event is triggered after selecting the tab item.

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

The [`tabSelecting`](../api/ribbon/ribbonModel/#tabselecting) event is triggered before selecting the tab item.

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

The [ribbonCollapsing](../api/ribbon/ribbonModel/#ribboncollapsing) event is triggered before collapsing the ribbon.

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

The [ribbonExpanding](../api/ribbon/ribbonModel/#ribbonexpanding) event is triggered before expanding the ribbon.

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

The [launcherIconClick](../api/ribbon/ribbonModel/#launchericonclick) event is triggered when the launcher icon of the group is clicked.

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

## Button item events

### clicked

The [clicked](../api/ribbon/ribbonButtonSettings/#clicked) event is triggered when the Button is clicked.

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

The [created](../api/ribbon/ribbonButtonSettings/#created) event is triggered when the Button is created.

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

The [change](../api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the Checkbox state is changed.

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

The [change](../api/ribbon/ribbonColorPickerSettings/#change) event is triggered while changing the colors.

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

The [open](../api/ribbon/ribbonColorPickerSettings/#open) event is triggered while opening the ColorPicker popup.

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

The [select](../api/ribbon/ribbonColorPickerSettings/#select) event is triggered while selecting the color in picker/palette, when showButtons property is enabled.

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

The [beforeClose](../api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before closing the ColorPicker popup.

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

The [beforeOpen](../api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before opening the ColorPicker popup.

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

The [beforeTileRender](../api/ribbon/ribbonColorPickerSettingsModel/#beforetilerender) event is triggered while rendering each palette tile.

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

The [change](../api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or when the model value is changed by the user.

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

The [created](../api/ribbon/ribbonComboBoxSettings/#created) event is triggered once the Combobox is created.

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

The [filtering](../api/ribbon/ribbonComboBoxSettings/#filtering) event triggers on typing a character in the Combobox.

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

The [beforeOpen](../api/ribbon/ribbonComboBoxSettings/#beforeOpen) event triggers before opening the popup.

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

The [beforeClose](../api/ribbon/ribbonDropDownSettings/#beforeclose) event is triggered before closing the DropdownButton popup.

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

The [beforeOpen](../api/ribbon/ribbonDropDownSettings/#beforeopen) event is triggered before opening the Dropdown button popup.

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

The [beforeItemRender](../api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each popup item of the Dropdown button.

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

The [open](../api/ribbon/ribbonDropDownSettings/#open) event is triggered while opening the Dropdown button popup.

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

The [close](../api/ribbon/ribbonDropDownSettings/#close) event is triggered while closing the Dropdown button popup.

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

The [created](../api/ribbon/ribbonDropDownSettings/#created) event is triggered when the DropDown is created.

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

The [select](../api/ribbon/ribbonDropDownSettings/#select) event is triggered while selecting an action item in the Dropdown button popup.

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

The [beforeClose](../api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before closing the SplitButton popup.

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

The [beforeOpen](../api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before opening the SplitButton popup.

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

The [beforeItemRender](../api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each popup item of SplitButton

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

The [open](../api/ribbon/ribbonSplitButtonSettings/#open) event is triggered while opening the SplitButton popup.

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

The [close](../api/ribbon/ribbonSplitButtonSettings/#close) event is triggered while closing the SplitButton popup.

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

The [select](../api/ribbon/ribbonSplitButtonSettings/#select) event is triggered while selecting an action item in the SplitButton popup.

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

The [click](../api/ribbon/ribbonSplitButtonSettings/#click) event is triggered while clicking the primary button in the SplitButton.

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

The [beforeClick](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonItemModel/#beforeclick) event is triggered before selecting a button from the groupbutton items.

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

The [click](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonItemModel/#click) event is triggered when selecting a button from the groupbutton items.

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

The [beforeClose](../api/ribbon/fileMenuSettings/#beforeclose) event is triggered before closing the fileMenu popup.

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

The [beforeOpen](../api/ribbon/fileMenuSettings/#beforeopen) event is triggered before opening the fileMenu popup.

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

The [beforeItemRender](../api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon fileMenu item.

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

The [open](../api/ribbon/fileMenuSettings/#open) event is triggered when the fileMenu popup is opened.

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

The [close](../api/ribbon/fileMenuSettings/#close) event is triggered when the fileMenu popup is closed.

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

The [select](../api/ribbon/fileMenuSettings/#select) event is triggered while selecting an item in the ribbon fileMenu.

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

The [backStageItemClick](../api/ribbon/backstageItem/#backstageitemclick) event is triggered when backstage item is clicked.

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