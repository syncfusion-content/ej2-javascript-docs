---
layout: post
title: Icons in ##Platform_Name## Drop down button control | Syncfusion
description: Learn here all about Icons in Syncfusion ##Platform_Name## Drop down button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Icons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Icons in ##Platform_Name## Drop down button control

## DropDownButton icons

DropdownButton can have an icon to provide the visual representation of the action. To place the icon on a DropdownButton, set the [`iconCss`](../api/drop-down-button#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the DropdownButton. You can customize the icon's position using the [`iconPosition`](../api/drop-down-button#iconcss) property.

In the following example, the DropdownButton with default iconPosition and iconPosition as `Top` is showcased:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/icon-cs1" %}
{% endif %}

### Icon only DropDownButton

Icon only DropDownButton can be achieved by using [`iconCss`](../api/drop-down-button#iconcss) property and to hide drop down arrow
`e-caret-hide` class is added using [`cssClass`](../api/drop-down-button#cssclass) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/icon-only-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/icon-only-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/icon-only-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/icon-only-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/icon-only-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/icon-only-cs1" %}
{% endif %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the DropDownButton using the [`iconCss`](../api/drop-down-button#iconcss) property.

### DropDownButton with sprite image

Sprite images can be loaded in DropDownButton instead of font icons using [`iconCss`](../api/drop-down-button#iconcss) property.

In this following example, `e-image` class is added with background url of the sprite image along with X and Y positions. The `width` and
`height` of the element set as `32px`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/sprite-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/sprite-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/sprite-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/sprite-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/sprite-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/sprite-cs1" %}
{% endif %}

## Vertical button

Vertical button in DropDownButton can be achieved by adding `e-vertical` class using [`cssClass`](../api/drop-down-button#cssclass) property.

The following example illustrates how to provide vertical support in DropDownButton component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/vertical-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/vertical-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/vertical-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/vertical-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/vertical-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/vertical-cs1" %}
{% endif %}

## See Also

* [Dropdown popup with icons](./popup-items#icons)
* [Customized icon size](./how-to/customize-icon-and-width)