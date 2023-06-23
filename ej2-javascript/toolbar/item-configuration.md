---
layout: post
title: Item configuration in ##Platform_Name## Toolbar control | Syncfusion
description: Learn here all about Item configuration in Syncfusion ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Item configuration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Item configuration in ##Platform_Name## Toolbar control

The Toolbar can be rendered by defining an array of [`items`](../api/toolbar/#items).  Items can be constructed with the following built-in command types or item template.

## Button

`Button` is the default command [`type`](../api/toolbar/item#type), and it can be rendered by using the [`text`](../api/toolbar/item#text) property.
Properties of the button command type:

  Property   | Description
------------ | -------------
  [`text`](../api/toolbar/item#text)  | The text to be displayed for button.
 [`id`](../api/toolbar/item#id)  | The ID of the button to be rendered. If the ID is not given, auto ID is generated.
  [`prefixIcon`](../api/toolbar/item#prefixicon) | Defines the class used to specify an icon for the button. The icon is `positioned before` the text if text is available or the icon alone button is rendered.
[`suffixIcon`](../api/toolbar/item#suffixicon) | Defines the class used to specify an icon for the button. The icon is `positioned after` the text if text is available. If both [`prefixIcon`](../api/toolbar/item#prefixicon) and [`suffixIcon`](../api/toolbar/item#suffixicon) are specified, only `prefixIcon` is considered.
  [`width`](../api/toolbar/item#width)   | Used to set the [`width`](../api/toolbar/item#width) of the button.
  [`align`](../api/toolbar/item#align)  | Specifies the location for aligning Toolbar items.

## Separator

The `Separator` type adds a vertical separation between the Toolbar's single/multiple commands.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-items-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toolbar-items-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-items-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-cs2" %}
{% endif %}

> If `Separator` is added as the first or the last item, it will not be visible.

## Input

The `Input` type is only applicable for adding `template` elements when the [`template`](../api/toolbar/item#template) property is defined as an `object`.  Input type creates an `input element` internally that acts as the container for `Syncfusion` input based components.

### NumericTextBox

* The `NumericTextBox` component can be included by importing the `NumericTextBox` module from `ej2-inputs`.

* Initialize the `NumericTextBox` in template property, where the Toolbar item type is set as `Input`.

* Related `NumericTextBox` component properties can also be configured as given below.

```javascript
new NumericTextBox( { format: 'c2' }))
```

### DropDownList

* The `DropDownList` component can be included by importing the `DropDownList` module from `ej2-dropdowns`.

* Initialize the `DropDownList` in template property, where the Toolbar item type is set as `Input`.

* Related `DropDownList` component properties can also be configured as given below.

```javascript
new DropDownList({ width:100 })
```

### CheckBox

* The `CheckBox` component can be included by importing the `CheckBox` module from `ej2-buttons`.

* Initialize the `CheckBox` in template property, where the Toolbar item type is set as `Input`.

* Related `CheckBox` component properties can also be configured as given below.

```javascript
new CheckBox({ label: 'Default' })
```

### RadioButton

* The `RadioButton` component can be included by importing the `RadioButton` module from `ej2-buttons`.

* Initialize the `RadioButton` in template property, where the Toolbar item type is set as `Input`.

* Related `RadioButton` component properties can also be configured as given below.

```javascript
new RadioButton({ label: 'Option 1', name: 'default'})
```

The above steps are applicable for all 'Syncfusion' input based components.

E.g.: The following code explains how to add `NumericTextBox`,`DropDownList`,`RadioButton` and `CheckBox` components to the Toolbar.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-items-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toolbar-items-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-items-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-cs3" %}
{% endif %}

### Enabling tab key navigation in Toolbar

The [`tabIndex`](../api/toolbar/item/#tabindex) property of a Toolbar item is used to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the [`tabIndex`](../api/toolbar/item/#tabindex) property allows you to switch between items using the Tab and Shift+Tab keys as well.

To use the [`tabIndex`](../api/toolbar/item/#tabindex) property, you need to set it for each Toolbar item that you want to enable tab key navigation. The [`tabIndex`](../api/toolbar/item/#tabindex) property should be set to a positive integer value. A value of 0 or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items, you can use the following code:

```ts
import {Toolbar} from '@syncfusion/ej2-navigations';

let toolbar: Toolbar = new Toolbar({
  items: [
    { text: "Item 1", tabIndex: 1 },
    { text: "Item 2", tabIndex: 2 }
  ]
});
```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the [`tabIndex`](../api/toolbar/item/#tabindex) values.

If you set the [`tabIndex`](../api/toolbar/item/#tabindex) value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the [`tabIndex`](../api/toolbar/item/#tabindex) values. For example:

```ts
import {Toolbar} from '@syncfusion/ej2-navigations';

let toolbar: Toolbar = new Toolbar({
  items: [
    { text: "Item 1", tabIndex: 0 },
    { text: "Item 2", tabIndex: 0 }
  ]
});

```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

Example:

Here is an example of how you can use the [`tabIndex`](../api/toolbar/item/#tabindex) property to enable tab key navigation for a Toolbar component:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toolbar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs2" %}
{% endif %}

With the above code, the user can switch between the Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated based on the element order.

## See Also

* [How to set item wise custom template](./how-to/set-item-wise-custom-template)