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

# Ribbon Items

Ribbon renders various built-in items based on the item [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItemType/) property. By default, the type property is set as `Button` which renders the Button.

## Built-in items

You can render the built-in Ribbon items by using the [items](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCollectionModel/#items) property, to specify the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property.

The following table explains the built-in items and their actions.

| Built-in Ribbon Items | Actions |
|------------------------|---------|
| Button | Renders button as ribbon item.|
| CheckBox | Renders checkbox as ribbon item.|
| DropDown | Renders dropdownbutton as ribbon item.|
| SplitButton | Renders splitbutton as ribbon item.|
| ComboBox | Renders combobox as ribbon item.|
| ColorPicker | Renders color picker as ribbon item.|

### Button items

You can render the built-in button Ribbon item by setting the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property as `Button` you can render a Button item. You can also customize the button item using the [RibbonButtonSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonButtonSettingsModel/), which provides options such as `iconCss`, `content`, `isToggle` and more.

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

### Checkbox items

You can render the built-in checkBox Ribbon item by setting the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `CheckBox`. You can also customize the checkBox item using the [RibbonCheckBoxSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCheckBoxSettingsModel/), which provides options such as `labelPosition`, `label`, `checked` and more.

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

### DropDown button items

You can render the built-in dropDown Ribbon item by setting the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `DropDown`. You can also customize the dropDown item through [RibbonDropDownSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonDropDownSettingsModel/), which provides options such as `iconCss`, `content`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property specifies the element selector to be displayed in the DropDownButton popup.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/dropdownTarget/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/dropdownTarget/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/dropdownTarget" %}

### Split button items

You can render the built-in splitButton Ribbon item by setting the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton`. You can also customize the splitButton item through [RibbonSplitButtonSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonSplitButtonSettingsModel/), which provides options such as `iconCss`, `items`, `target` and more.


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

### Combobox items

You can render the built-in comboBox Ribbon item by setting the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox`. You can also customize the comboBox item through [RibbonComboBoxSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonComboBoxSettingsModel/), which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

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

You can render the built-in colorPicker Ribbon item by setting the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker`. You can also customize the colorPicker item through [RibbonColorPickerSettingsModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonColorPickerSettingsModel/), which provides options such as `value`, `columns`, `showButtons` and more.

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

## Custom items

You can customize the ribbon items with non-built-in items or HTML content by setting the [type](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#type) property to `Template`. This provides an option to customize the ribbon items with greater flexibility.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/customItem/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/customItem/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/ribbon/customItem/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/customItem" %}

## Items display Mode

You can use the [displayOptions](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#displayoptions) property to display the items in the Ribbon layout.

<table>
  <tr>
    <td>`Auto`</td>
    <td>The items are displayed in all layouts based on the ribbon's overflow state.</td>
  </tr>
  <tr>
    <td>`Classic`</td>
    <td>The items are displayed only in the classic layout group.</td>
  </tr>
  <tr>
    <td>`Simplified`</td>
    <td>The items are displayed only in the simplified layout group.</td>
  </tr>
  <tr>
    <td>`Overflow`</td>
    <td>The items are displayed only in the overflow popup.</td>
  </tr>
</table>

### Display items in Classic only

To diplay the items only in the classic layout group, set the mode as `DisplayMode.Classic` in the [displayOptions](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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

To diplay the items only in the simplified layout group, set the mode as `DisplayMode.Simplified` in the [displayOptions](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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

To diplay the items only in the overflow, set the mode as `DisplayMode.Overflow` in the [displayOptions](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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

You can use the [disabled](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#disabled) property to disable a Ribbon item. It prevents the user interaction when set to `true`. By default, the value is `false`.


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
