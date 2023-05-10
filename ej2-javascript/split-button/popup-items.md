---
layout: post
title: Popup items in ##Platform_Name## Split button control | Syncfusion
description: Learn here all about Popup items in Syncfusion ##Platform_Name## Split button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Popup items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Popup items in ##Platform_Name## Split button control

## Icons

The Popup action item have an icon or image to provide visual representation of the action. To place the icon on a popup item, set the [`iconCss`](../api/split-button#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the popup action item.

In the following sample, the icons for Cut, Copy, and Paste menu items are
added using the iconCss property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/popup-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/popup-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/popup-icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/split-button/popup-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/popup-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/split-button/popup-icon-cs1" %}
{% endif %}

## Template

### Item templating

Popup items can be customized by using the [`beforeItemRender`](../api/split-button#beforeitemrender) event. The item render event triggers while rendering each Popup action item. The event argument will be used to identify the action item and customize it based on the requirement.

In the following example, the icons in each [`li`] items is right aligned by appending span element while [`li`] rendering:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/split-button/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/split-button/template-cs1" %}
{% endif %}

### Popup templating

The whole popup can be customized as per the requirement and it can be customized by handling it in [`target`](../api/split-button#target) property.

In the following sample, the whole popup item is customized as color palette by giving `div` as target and it can be achieved using `target` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/popup-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/popup-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/popup-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/split-button/popup-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/popup-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/split-button/popup-template-cs1" %}
{% endif %}

## See Also

* [Popup items grouping](./how-to/group-items-in-popup)
* [SplitButton popup with separator](./icons-and-separator#separator)