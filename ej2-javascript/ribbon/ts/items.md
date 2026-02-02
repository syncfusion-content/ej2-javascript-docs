---
layout: post
title: Ribbon Items in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Items with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Items in ##Platform_Name## Ribbon control

The Ribbon control renders various built-in items based on the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItemType/) property of a ribbon-item. By default, this property is set to `Button`, which renders a standard Button item.

## Built-in Items

Render the built-in Ribbon items by using the [items](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCollectionModel/#items) property. Specify the desired item by setting its [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property.

The following table describes the available built-in items and their functions:

| Built-in Ribbon Item | Action |
|----------------------|---------|
| Button | Renders a clickable button. |
| CheckBox | Renders a checkbox for binary selection. |
| DropDown | Renders a dropdown button with a popup list. |
| SplitButton | Renders a button with a primary action and a secondary dropdown list. |
| ComboBox | Renders a combo box for selection from a list of options. |
| ColorPicker | Renders a color picker for color selection. |
| GroupButton | Renders a group of related buttons. |

### Button items

To render a `Button` item, set the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `Button`. You can customize its appearance and behavior using the [RibbonButtonSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonButtonSettingsModel/), which includes options like `iconCss`, `content`, and `isToggle`.

#### Toggle button

The [isToggle](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonButtonSettingsModel/#istoggle) property can be used to define whether the button act as a toggle button or not. By default, the value is `false`.

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
                    isToggle: true
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");

```

### CheckBox Items

To render a `CheckBox`, set the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `CheckBox`. Customize it using the [RibbonCheckBoxSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCheckBoxSettingsModel/), which provides options for `label`, `labelPosition`, and `checked` state.

#### Checkbox state

You can use the [checked](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#checked) property to handle the checked or unchecked state. By default, the value is `false`.

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
                    checked: true
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### Defining label

You can use the [label](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#label) property to add a caption for the CheckBox. The label position can be set `Before` or `After`, by using the [labelPosition](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#labelposition) property. By default, the labelPosition is `After`.

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
                    labelPosition: "Before"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### DropDown Button Items

To render a `DropDownButton`, set the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `DropDown`. Customize it using the [RibbonDropDownSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonDropDownSettingsModel/), which includes `items`, `iconCss`, `content`, and a `target` for the popup content.

#### Target

The [target](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property specifies the element selector for the content to be displayed in the DropDownButton popup.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/dropdownTarget/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/dropdownTarget/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/dropdownTarget" %}

#### Customize dropdown button item

Apply a custom CSS class to style dropdown items using the [beforeItemRender](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonDropDownSettings/#beforeitemrender) event.

The following sample showcases how to customize a specific dropdown item.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/dropdownCustomization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/dropdownCustomization/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/dropdownCustomization" %}

#### Create dropdown popup on demand

Set the [createPopupOnClick](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonDropDownSettings/#createpopuponclick) property to `true` to create the popup only when the dropdown is opened, optimizing performance.
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/dropdownPopup/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/dropdownPopup/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/dropdownPopup" %}

### Split button items

To render a `SplitButton`, set the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton`. Customize it with the [RibbonSplitButtonSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonSplitButtonSettingsModel/), which provides options like `iconCss`, `items`, and `target`.

#### Target

The [target](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonSplitButtonSettingsModel/#target) property specifies the element selector to be displayed in the SplitButton popup.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/splitButtonTarget/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/splitButtonTarget/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/splitButtonTarget" %}

### ComboBox Items

To render a `ComboBox` item, set the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox`. You can configure it using the [RibbonComboBoxSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonComboBoxSettingsModel/), which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

#### Filtering

You can use the [allowFiltering](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonComboBoxSettingsModel/#allowfiltering) property to filter the data items. The filtering operation is initiated automatically, as soon as you start typing characters. If no match is found the value of the `noRecordsTemplate` property will be displayed. By default, the value is `false`.

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
                    allowFiltering: true
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### Index

You can use the [index](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonComboBoxSettingsModel/#index) property to get or set the selected item in the combobox.

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
                    index: 3
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### SortOrder

You can use the [sortOrder](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonComboBoxSettingsModel/#sortorder) property to specify the order in which the DataSource should be sorted.

<table>
  <tr>
    <td>`None`</td>
    <td>The data source is not sorted.</td>
  </tr>
  <tr>
    <td>`Ascending`</td>
    <td>The data source is sorted in ascending order.</td>
  </tr>
  <tr>
    <td>`Descending`</td>
    <td>The data source is sorted in descending order.</td>
  </tr>
</table>

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/sortOrder/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/sortOrder/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/sortOrder" %}

### Colorpicker items

To render a `ColorPicker`, set the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker`. Customize it using the [RibbonColorPickerSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonColorPickerSettingsModel/), which includes properties like `value`, `columns`, and `showButtons`.

#### Value

You can use the [value](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property to specify the color value. The value should be specified as Hex code.
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/colorPickerValue/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/colorPickerValue/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/colorPickerValue" %}

### Groupbutton items

To render a `GroupButton`, set the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `GroupButton`. Configure its items and selection behavior using the [RibbonGroupButtonSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonSettingsModel/).

#### Items

You can render the groupbutton items by using [items](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonSettingsModel/#items) property. You can also customize the groupbutton items through [RibbonGroupButtonItemModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonItemModel/), which provides options such as `content`, `iconCss`, `selected` and more.

#### Item content

You can use the [content](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonItemModel/#content) property to define the text content for the groupbutton.

```typescript

import { Ribbon, RibbonTabModel, RibbonItemType, RibbonItemSize } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Paragraph",
        collections: [
          {
            items: [{
                type: RibbonItemType.GroupButton,
                allowedSizes: RibbonItemSize.Small,
                groupButtonSettings: {
                    items: [{
                        iconCss: 'e-icons e-align-left',
                        content: 'Align Left'
                    },
                    {
                        iconCss: 'e-icons e-align-center',
                        content: 'Align Center'
                    },
                    {
                        iconCss: 'e-icons e-align-right',
                        content: 'Align Right'
                    },
                    {
                        iconCss: 'e-icons e-justify',
                        content: 'Justify'
                    }]
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");


```

#### Icon only

You can use the [iconCss](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonItemModel/#iconcss) property to customize the groupbutton icon. If the `iconCss` property is not defined, the groupbutton will not be rendered.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/groupButtonIcon/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/groupButtonIcon/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/groupButtonIcon" %}

#### Selection

You can use the [selected](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonItemModel/#selected) property to select the groupbutton item initally. When set to `true`, the button will be selected. By default the `selected` property is false.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/groupButtonSelected/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/groupButtonSelected/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/groupButtonSelected" %}

#### Single selection

You can set the [selection](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonSettingsModel/#selection) property value as `RibbonGroupButtonSelection.Single` to make one selection at a time. It automatically deselects the previous choice when a different item is clicked.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/singleSelection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/singleSelection/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/singleSelection" %}

#### Multiple selection

You can set the [selection](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupButtonSettingsModel/#selection) property value as `RibbonGroupButtonSelection.Multiple` to select more than one button at a time. Users can select a button one by one to select multiple buttons.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/multipleSelection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/multipleSelection/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/multipleSelection" %}

#### Groupbutton in simplified mode layout

In simplified mode, the groupbutton will be rendered as a dropdownbutton. The dropdownbutton icon will be updated based on the button item selected. The initial button icon will be the set, if none of the buttons are selected.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/simplifiedModeGroupButton/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/simplifiedModeGroupButton/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/simplifiedModeGroupButton" %}

## Custom items

To create custom Ribbon items, set the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `Template`. This allows you to render any HTML content or non-built-in components, offering maximum flexibility.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/customItem/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/customItem/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/customItem" %}

## Items display Mode

Use the [displayOptions](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#displayoptions) property to control in which Ribbon layouts an item appears.

| Option | Description |
|------------|----------------------------------------------------------------------|
| `Auto` | (Default) The item is displayed in all layouts. |
| `Classic` | The item is displayed only in the classic layout. |
| `Simplified` | The item is displayed only in the simplified layout. |
| `Overflow` | The item is displayed only in the overflow popup. |

### Display items in Classic only

To display the items only in the classic layout group, set the mode as `DisplayMode.Classic` in the [displayOptions](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#displayoptions) property.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, DisplayMode } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                displayOptions: DisplayMode.Classic,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Display items in Simplified only

To display the items only in the simplified layout group, set the mode as `DisplayMode.Simplified` in the [displayOptions](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#displayoptions) property.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, DisplayMode } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                displayOptions: DisplayMode.Simplified,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### Display items in Overflow popup only

To display the items only in the overflow, set the mode as `DisplayMode.Overflow` in the [displayOptions](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#displayoptions) property.

```typescript
import { Ribbon, RibbonTabModel, RibbonItemType, DisplayMode } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: RibbonItemType.Button,
                displayOptions: DisplayMode.Overflow,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Enable or disable items

Use the [disabled](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#disabled) property to enable or disable a Ribbon item. When set to `true`, the item becomes non-interactive.


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
                disabled: true,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            },
            {
                type: RibbonItemType.CheckBox,
                disabled: true,
                checkBoxSettings: {
                    label: "Ruler",
                    checked: true
                }
            },
            {
                type: RibbonItemType.DropDown,
                disabled: true,
                dropDownSettings: {
                  content: "Table",
                  iconCss: "e-icons e-table",
                }
            },
            {
                type: RibbonItemType.SplitButton,
                disabled: true,
                splitButtonSettings: {
                  content: "Table",
                  iconCss: "e-icons e-table"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");
```
