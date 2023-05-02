---
layout: post
title: Icons in ##Platform_Name## Breadcrumb control | Syncfusion
description: Learn here all about Icons in Syncfusion ##Platform_Name## Breadcrumb control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Icons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Icons in ##Platform_Name## Breadcrumb control

The Breadcrumb component contains an icon/image to provide a visual representation of an item.

## Icon in Breadcrumb item

To load the icon/image on the breadcrumb item, set the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

### Breadcrumb with Font Icon

To place the font icon on the breadcrumb item, set the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the item.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/loading-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/loading-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/loading-icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/loading-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/loading-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/loading-icon-cs1" %}
{% endif %}

### Breadcrumb with Image

In the Breadcrumb component, images can be added for the items using the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, an image was added to the breadcrumb item by using the iconCss class `e-image-home` and specifying height and width for the css class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/loading-icon-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/loading-icon-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/loading-icon-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/loading-icon-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/loading-icon-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/loading-icon-cs2" %}
{% endif %}

### Breadcrumb with SVG Image

In the Breadcrumb component, SVG image can be added for the items using the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, SVG image was added to the breadcrumb item by using the iconCss class `e-svg-home` and specifying height and width for the css class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/loading-icon-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/loading-icon-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/loading-icon-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/loading-icon-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/loading-icon-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/loading-icon-cs3" %}
{% endif %}

## Icon Position

By default, the icon is positioned to the left side of the item in the Breadcrumb component. If you need to add the icon to right of the breadcrumb item, add the `e-icon-right` class to the required item. In the following example, the `e-icon-right` class was added to the breadcrumb items using the [`beforeItemRender`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#beforeitemrender) event. You can also add the `e-icon-right` class to the [`cssClass`](https://ej2.syncfusion.com/javascript/documentation/api/breadcrumb/#cssclass) property of the breadcrumb component to position the icons to the right of all breadcrumb items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/icon-position-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/icon-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/icon-position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/icon-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs1" %}
{% endif %}

## Icon Only

To display only icons for the items, add icons using the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, breadcrumb items were demonstrated with only icons by providing the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/icons-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/icons-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/icons-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/icons-cs1" %}
{% endif %}

## Show icon only for first item

To show icon only for the first item in the Breadcrumb component, add icons to the first item using the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, the icon was provided only for the first item by setting the [`iconCss`](https://ej2.syncfusion.com/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/loading-icon-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/loading-icon-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/loading-icon-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/loading-icon-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/loading-icon-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/loading-icon-cs4" %}
{% endif %}