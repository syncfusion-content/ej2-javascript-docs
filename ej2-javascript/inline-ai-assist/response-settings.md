---
layout: post
title: Response actions in ##Platform_Name## Inline AI Assist control | Syncfusion
description: Checkout and learn about response items with ##Platform_Name## Inline AI Assist control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Inline AI Assist 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Response actions in ##Platform_Name## Inline AI Assist control

You can render response action popup by using `items` property in the [responseSettings](../api/inline-ai-assist#responsesettings) property.

## Built-in response items

By default, the response popup displays the built-in `accept` and `reject` items, allowing users to accept or reject the response. The response action popup is shown after a response is generated.

In the following example, the Inline AI Assist component is rendered with built-in response settings items such as `accept` and `reject`.

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

You can use the [responseToolbarSettings](../api/inline-ai-assist#responsetoolbarsettings) property to add custom items for the response popup in Inline AI Assist. The custom items will be added with the existing built-in items in the response popup.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/response-settings/custom-items/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/custom-items/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/custom-items" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/response-settings/custom-items/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/custom-items/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/custom-items" %}
{% endif %}

### Setting id

You can use the `id` property to assign a unique identifier to response items and perform actions based on the selected item.

### Adding iconCss

Include icons by using `iconCss` property on a response item to show an icon alongside the label.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/response-settings/iconCss/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/iconCss/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/iconCss" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/response-settings/iconCss/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/iconCss/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/iconCss" %}
{% endif %}

### Setting disabled

You can use the `disabled` property to disable an item, preventing it from being selected in the response popup. By default, its value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/response-setting/disabled/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-setting/disabled/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-setting/disabled" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/response-setting/disabled/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-setting/disabled/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-setting/disabled" %}
{% endif %}

### Setting label

You can use the `label` property to specify the visible text for an item in the response popup; this text describes the action that will be performed when selected.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/response-settings/iconCss/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/iconCss/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/iconCss" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/response-settings/iconCss/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/iconCss/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/iconCss" %}
{% endif %}

### Configure groupby

To visually group response items, use `groupBy` property. The popup will group items by the `groupBy` value and render group headers in response action popup.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/response-settings/groupby/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/groupby/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/groupby" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/response-settings/groupby/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/groupby/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/groupby" %}
{% endif %}

### Setting tooltip text

You can use the `tooltip` property to specify the tooltip text to be displayed on hovering the response item in the popup.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/response-settings/tooltip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/tooltip/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/tooltip" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/response-settings/tooltip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/tooltip/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/tooltip" %}
{% endif %}

## Configure item select

The [itemSelect](../api/inline-ai-assist/responseSettingsModel#itemselect) event is triggered when an item is selected from the response popup in the Inline AI Assist control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/response-settings/item-select/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/item-select/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/item-select" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/response-settings/item-select/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-settings/item-select/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-settings/item-select" %}
{% endif %}
