---
layout: post
title: Ribbon Items in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Ribbon Items with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Items

## Built-in Ribbon items

By using the [Items](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCollectionModel/#items) property, the ribbon items type should be specified in the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#type) property to define the built-in items.

The following items can be rendered as built in items

| Built-in Ribbon Items | Actions |
|------------------------|---------|
| Button | Renders button as ribbon item.|
| CheckBox | Renders checkbox as ribbon item.|
| DropDown | Renders dropdownbutton as ribbon item.|
| SplitButton | Renders splitbutton as ribbon item.|
| ComboBox | Renders combobox as ribbon item.|
| ColorPicker | Renders color picker as ribbon item.|

### Button

By setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#type) property to `Button` you can render a Button item. You can also customize the button item using the [ribbonButtonSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonButtonSettingsModel/) which provides options such as `iconCss`, `content`, `isToggle` and more.

#### Toggle Button

The [isToggle](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonButtonSettingsModel/#istoggle) property can be used to define whether the button is a toggle button or not. By default the value is `false`.

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
                    isToggle: true
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");
```

### CheckBox

By setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#type) property to `CheckBox` you can render a CheckBox item. You can also customize the CheckBox item using the [ribbonCheckBoxSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCheckBoxSettingsModel/) which provides options such as `labelPosition`, `label`, `checked` and more.

#### CheckBox State

The [checked](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#checked) property is used to handle the checked and unchecked state. The CheckBox will display a tick mark when it is checked. By default the value is `false`.

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
                    checked: true
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### Label and label Position

The [label](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#label) property can handle the caption for a CheckBox. This helps in reducing the need for manually adding a separate label element.
The [labelPosition](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#labelposition) property can be used to alter the position of the label relative to the CheckBox, whether it should appear before or after the CheckBox.

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
                    labelPosition: "Before"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### DropDown

By setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property to `DropDown` you can render a DropDown item. You can also customize the DropDown item through [ribbonDropDownSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonDropDownSettingsModel/) which provides options such as `iconCss`, `content`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property specifies the element selector to be shown in the DropDownButton popup.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/dropdownTarget/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/dropdownTarget/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/dropdownTarget" %}

### SplitButton

By setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton` you can render a SplitButton item. You can also customize the SplitButton item through [ribbonSplitButtonSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonSplitButtonSettingsModel/) which provides options such as `iconCss`, `items`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonSplitButtonSettingsModel/#target) property specifies the element selector to be shown in the SplitButton popup.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/splitButtonTarget/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/splitButtonTarget/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/splitButtonTarget" %}

### ComboBox

By setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox` you can render a ComboBox item. You can also customize the ComboBox item through [ribbonComboBoxSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonComboBoxSettingsModel/) which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

#### Filtering

The [allowFiltering](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonComboBoxSettingsModel/#allowfiltering) property provides built-in support for filtering data items. The filtering operation is initiated automatically, as soon as you start typing characters. If no match is found, the value of the `noRecordsTemplate` property will be displayed. By default the value is `false`.

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
                    allowFiltering: true
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### Index

The [index](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonComboBoxSettingsModel/#index) property can be used to specify the index of the selected item in the combobox.

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
                    index: 3
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### SortOrder

The [sortOrder](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonComboBoxSettingsModel/#sortorder) property is used to select the order in which the DataSource should be sorted.

`None` - The data source is not sorted.
`Ascending` - The data source is sorted in ascending order.
`Descending` - The data source is sorted in descending order.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/sortOrder/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/sortOrder/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/sortOrder" %}

### ColorPicker

By setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker` you can render the ColorPicker item. You can also customize the ColorPicker item through [ribbonColorPickerSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonColorPickerSettingsModel/) which provides options such as `value`, `columns`, `showButtons` and more.

#### Value

By using the [value](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property you can specify the value color. The value should be a valid hex color code.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/colorPickerValue/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/colorPickerValue/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/colorPickerValue" %}

## Custom Ribbon items

The [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property can be set to `Template` to customize ribbon items with non-built-in items. It can be used to define the custom template for the ribbon item, which has the flexibility to create unique and personalized content.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/customItem/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/customItem/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/customItem/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/customItem" %}

### Display Options 

By setting the [displayOptions](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#displayoptions) property you can determines how an item is displayed in different ribbon layouts.

`Auto` - The item is displayed in the classic layout group, simplified layout group, and overflow popup based on the ribbon's overflow state.
`Classic` - The item is displayed only in the classic layout group.
`Overflow` - The item is displayed only in the overflow popup.
`Simplified` - The item is displayed only in the simplified layout group.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/displayOptions/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/displayOptions/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/displayOptions" %}

## Enable or disable items

The [disabled](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#disabled) property can be used to disable an item. The item will be disabled and prevents the user interaction when set to `true`. By default the value is `false`.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                disabled: true,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");
```