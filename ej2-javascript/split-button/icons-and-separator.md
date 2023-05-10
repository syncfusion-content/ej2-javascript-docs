---
layout: post
title: Icons and separator in ##Platform_Name## Split button control | Syncfusion
description: Learn here all about Icons and separator in Syncfusion ##Platform_Name## Split button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Icons and separator 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Icons and separator in ##Platform_Name## Split button control

## SplitButton icons

SplitButton can have an icon to provide the visual representation of the action. To place the icon on a SplitButton, set the [`iconCss`](../api/split-button#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the SplitButton. You can customize the icon's position by using the [`iconPosition`](../api/split-button#iconposition) property.

In the following example, the SplitButton with default iconPosition and `iconPosition` as `Top` is showcased:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/split-button/icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/split-button/icon-cs1" %}
{% endif %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element.
You can also use third party icons on the splitBtn using the [`iconCss`](../api/split-button#iconcss)property.

### Vertical button

Vertical Button in SplitButton can be achieved by adding `e-vertical` class using [`cssClass`](../api/split-button#cssclass) property.

The following example illustrates how to provide vertical support in SplitButton component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/vertical-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/vertical-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/vertical-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/split-button/vertical-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/vertical-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/split-button/vertical-cs1" %}
{% endif %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the SplitButton using the [`iconCss`](../api/split-button#iconcss) property.

## Separator

The Separators are the horizontal lines that are used to separate the popup items. You `cannot` select the separators. You can enable separators to group the popup items using the `separator` property.

The following example illustrates how to enable separator support in SplitButton component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/seperator-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/seperator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/seperator-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/split-button/seperator-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/seperator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/split-button/seperator-cs1" %}
{% endif %}

## See Also

* [SplitButton popup with icons](./popup-items#icons)
