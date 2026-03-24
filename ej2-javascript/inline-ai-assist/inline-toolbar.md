---
layout: post
title: Inline toolbar configuration in ##Platform_Name## Inline AI Assist control | Syncfusion
description: Checkout and learn about inline toolbar with ##Platform_Name## Inline AI Assist control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Inline AI Assist 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Inline toolbar configuration in ##Platform_Name## Inline AI Assist control

You can render the inline toolbar items by using the `items` property in the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property.

## Built-in toolbar items

By default, the inline toolbar renders the `send` item which allows users to send the prompt text.

In the following example, Inline AI Assist component rendered with footer toolbar items such as `send` icon.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/gettingstarted/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/gettingstarted/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/gettingstarted" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/gettingstarted/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/gettingstarted/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/gettingstarted" %}
{% endif %}

## Adding custom items

You can use the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property to add custom items for the inline toolbar in the Inline AI Assist. The custom items will be added with the existing built-in items in the inline toolbar.

> To know more about the items, please refer to the [items](#items) section.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-settings/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-settings/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/toolbar-settings" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-settings/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-settings/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/toolbar-settings" %}
{% endif %}

## Items

The Inline AI Assist toolbar can be rendered by defining an array of items. Items can be constructed with the following built-in command types or item template.

### Adding iconCss

You can customize the toolbar icons by using the `iconCss` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/align/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/align/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/align" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/align/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/align/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/align" %}
{% endif %}

### Setting item type

You can change the toolbar item type by using the `type` property. The `type` supports three types of items such as `Button`, `Separator` and `Input`. By default, the type is `Button`.

In the following example, toolbar item type is set as `Button`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/item-type/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/item-type/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/item-type" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/item-type/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/item-type/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/item-type" %}
{% endif %}

### Setting text

You can use the `text` property to set the text for toolbar item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-text/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-text/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/toolbar-text" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-text/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-text/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/toolbar-text" %}
{% endif %}

### Show or hide toolbar item

You can use the `visible` property to specify whether to show or hide the toolbar item. By default, its value is `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/visible/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/visible/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/visible" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/visible/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/visible/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/visible" %}
{% endif %}

### Setting disabled

You can use the `disabled` property to disable the toolbar item. By default, its value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/disabled/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/disabled/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/disabled" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/disabled/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/disabled/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/disabled" %}
{% endif %}

### Setting tooltip text

You can use the `tooltip` property to specify the tooltip text to be displayed on hovering the toolbar item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/tooltip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/tooltip/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/tooltip" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/tooltip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/tooltip/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/tooltip" %}
{% endif %}

### Setting cssClass

You can use the `cssClass` property to customize the toolbar item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/cssclass/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/cssclass/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/cssclass" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/cssclass/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/cssclass/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/cssclass" %}
{% endif %}

### Setting alignment

You can change the alignment of toolbar item by using the `align` property. It supports three types of alignments such as `Left`, `Center` and `Right`. By default, the value is `Left`.

In the following example, toolbar item type is set with `Right`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/align/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/align/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/align" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/align/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/align/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/align" %}
{% endif %}

### Enabling tab key navigation in toolbar

You can use the `tabIndex` property of a Toolbar item to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the `tabIndex` property allows you to switch between items using the `Tab` and `Shift+Tab` keys as well.

To use the `tabIndex` property, set it for each Toolbar item which you want to enable tab key navigation. The `tabIndex` property should be set to a positive integer value. A value of `0` or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items you can use the following code:

```ts
import { InlineAIAssist } from "@syncfusion/ej2-interactive-chat";

 let defaultInlineAIAssist: InlineAIAssist = new InlineAIAssist({
    inlineToolbarSettings: {
        items: [
            { text: "Item 1", tabIndex: 1 },
            { text: "Item 2", tabIndex: 2 }
        ]
    }
});
```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the `tabIndex` values.

If you set the `tabIndex` value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the `tabIndex` values. For example:

```ts
import { InlineAIAssist } from "@syncfusion/ej2-interactive-chat";

 let defaultInlineAIAssist: InlineAIAssist = new InlineAIAssist({
    inlineToolbarSettings: {
        items: [
            { text: "Item 1", tabIndex: 0 },
            { text: "Item 2", tabIndex: 0 }
        ]
    }
});
```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

### Setting template

You can use the `template` property to add custom toolbar item in the Inline AI Assist.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/template" %}
{% endif %}

## Toolbar positioning

You can use the [toolbarPosition](../api/inline-ai-assist/inlineToolbarSettingsModel#toolbarPosition) property to customize footer toolbar position. It has two modes such as `Inline`, and `Bottom`. By default, the toolbarPosition is `Inline`.

By settings toolbarPosition as `Bottom`, footer items will be rendered at the bottom with a dedicated footer area.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/toolbar-position" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/toolbar-position" %}
{% endif %}

## Item click

The [itemClick](../api/inline-ai-assist/inlineToolbarSettingsModel#itemclick) event is triggered when the inline toolbar item is clicked.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/itemclick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/itemclick/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/itemclick" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/itemclick/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/itemclick/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/itemclick" %}
{% endif %}
