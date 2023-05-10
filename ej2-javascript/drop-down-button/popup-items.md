---
layout: post
title: Popup items in ##Platform_Name## Drop down button control | Syncfusion
description: Learn here all about Popup items in Syncfusion ##Platform_Name## Drop down button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Popup items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Popup items in ##Platform_Name## Drop down button control

## Icons

The popup action item have an icon or image to provide visual representation of the action. To place the icon on a popup item, set the [`iconCss`](../api/drop-down-button#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the popup action item.

In the following sample, the icons for edit, delete, mark as read  and like message menu items are added using the iconCss property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/popup-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/popup-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/popup-icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/popup-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/popup-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/popup-icon-cs1" %}
{% endif %}

## Navigations

Actions in DropDownButton can be used to navigate to the other web page when action item is clicked. This can be achieved by providing link to the action item using `url` property.

In the following sample, navigation URL for Flipkart, Amazon, and Snapdeal action items are added using the `url` property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/action-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/action-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/action-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/action-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/action-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/action-cs1" %}
{% endif %}

## Template

### Item templating

Popup items can be customized using the [`beforeItemRender`](../api/drop-down-button#beforeitemrender) event. The item render event triggers while rendering each popup action item. The event argument will be used to identify the action item and customize based on the requirement.

The following popup template is customized using `beforeItemRender` event by appending `span` and `div` element on each `li` rendering:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/template-cs1" %}
{% endif %}

### Popup templating

The whole popup can be customized as per the requirement and it can be customized by handling it in [`target`](../api/drop-down-button#target) property.

In the following sample, the whole popup item is customized as table template by giving `div` as target and it can be achieved
using `target` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/popup-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/popup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/popup-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/popup-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/popup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/popup-cs1" %}
{% endif %}

## Separator

The Separators are the horizontal lines that are used to separate the popup items. You `cannot` select the separators. You can enable separators to group the popup items using the `separator` property.

In the following sample, cut, copy, and paste popup items are grouped using the separator property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/accessibility-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/accessibility-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/accessibility-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/accessibility-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/accessibility-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/accessibility-cs2" %}
{% endif %}

## See Also

* [Integration with ListView component](./how-to/group-popup-items-with-listview-component)
* [How to dynamically update option items in DropDownButton](https://www.syncfusion.com/forums/140430)