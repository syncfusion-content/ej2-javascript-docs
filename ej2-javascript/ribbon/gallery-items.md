---
layout: post
title: Ribbon Gallery Items in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Gallery Items with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Gallery Items in ##Platform_Name## Ribbon Control

The Ribbon supports Gallery view which allows users to perform specific actions by displaying a collection of related items, including icons, content, or images. You can render the gallery item by setting the [type](../api/ribbon/ribbonItemType/) property to `Gallery` and customize it by using the [RibbonGallerySettingsModel](../api/ribbon/ribbonGallerySettingsModel/), which provides options such as `groups`, `itemCount`, `popupHeight`, `popupWidth` and more.

## Groups 

You can render the groups inside the gallery items by using [groups](../api/ribbon/ribbonGallerySettingsModel/#groups) property and customize the groups using [RibbonGalleryGroupModel](../api/ribbon/ribbonGalleryGroupModel/), which provides options such as `items`, `cssClass`, `header` and more.

### Adding items

You can render the gallery items by using [items](../api/ribbon/ribbonGalleryGroupModel/#items) property and customize using the [RibbonGalleryItemModel](../api/ribbon/ribbonGalleryItemModel/), which provides options such as `content`, `iconCss`, `disabled` and more.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryItems" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryItems" %}
{% endif %}

#### Adding content

You can use the [content](../api/ribbon/ribbonGalleryItemModel/#content) property to define the text content for the gallery item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/itemContent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemContent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemContent" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/itemContent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemContent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemContent" %}
{% endif %}

#### Adding icons

You can use the [iconCss](../api/ribbon/ribbonGalleryItemModel/#iconcss) property to define the icons for the gallery item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/galleryIcon/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryIcon/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryIcon" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/galleryIcon/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryIcon/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryIcon" %}
{% endif %}

#### Adding html attributes

You can use the [htmlAttributes](../api/ribbon/ribbonGalleryItemModel/#htmlattributes) property to add HTML attributes to the Ribbon gallery item.

The following sample showcases how to add title attribute to the gallery item using `htmlAttributes` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/htmlAttributes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/htmlAttributes" %}
{% endif %}

#### Css class

You can use the [cssClass](../api/ribbon/ribbonGalleryItemModel/#cssclass) property to customize the gallery item.

The following sample showcases how to customize the appearance of each gallery item using the `cssClass` property .

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/gallery/classCustomization/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/classCustomization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/gallery/classCustomization/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/classCustomization" %}
{% endif %}

#### Disabled

You can use the [disabled](../api/ribbon/ribbonGalleryItemModel/#disabled) property to disable the Ribbon gallery item. It prevents the user interaction when set to `true`. By default, the value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/disabledItem/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/disabledItem/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/disabledItem" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/disabledItem/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/disabledItem/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/disabledItem" %}
{% endif %}

### Custom header

You can use the [header](../api/ribbon/ribbonGalleryGroupModel/#header) property to set header for the group items in the Ribbon gallery popup.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryItems" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryItems" %}
{% endif %}

### Setting item width

You can use the [itemWidth](../api/ribbon/ribbonGalleryGroupModel/#itemwidth) property to specify the width of gallery items.

### Setting item height

You can use the [itemHeight](../api/ribbon/ribbonGalleryGroupModel/#itemheight) property to set the height of the gallery items. If the `itemHeight` of the gallery item is smaller the remaining gallery items are aligned based on the [itemCount](../api/ribbon/ribbonGallerySettingsModel/#itemcount) specified.

The provided example demonstrates how to customize gallery items using the `itemWidth` and `itemHeight` properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemHeightAndWidth" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemHeightAndWidth/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemHeightAndWidth" %}
{% endif %}

### Group styling

You can use the [cssClass](../api/ribbon/ribbonGalleryGroupModel/#cssclass) property to customize the appearance of gallery groups.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/groupCustomization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/groupCustomization/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/gallery/groupCustomization/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/groupCustomization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/groupCustomization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/groupCustomization/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/gallery/groupCustomization/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/groupCustomization" %}
{% endif %}

## Setting item count

You can customize the number if items to be displayed in Ribbon gallery by using the [itemCount](../api/ribbon/ribbonGallerySettingsModel/#itemcount) property. By default the `itemCount` will be `3`.

The following example showcases the utilization of the `itemCount` property, displaying a ribbon gallery with `4` items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/itemCount/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemCount/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemCount" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/itemCount/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemCount/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemCount" %}
{% endif %}

## Setting selected item

You can use the [selectedItemIndex](../api/ribbon/ribbonGallerySettingsModel/#selecteditemindex) property to define the currently selected item in the Ribbon gallery items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/selectedItemIndex" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/selectedItemIndex" %}
{% endif %}

## Setting popup height

You can specify the height of the gallery popup by using the [popupHeight](../api/ribbon/ribbonGallerySettingsModel/#popupheight) property.

## Setting popup width

you can specify the width of the gallery popup by using the [popupWidth](../api/ribbon/ribbonGallerySettingsModel/#popupwidth) propery.

The example demonstrates the customization of popup with `popupHeight` and `popupWidth` properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/popupHeightWidth" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/popupHeightWidth" %}
{% endif %}

## Template

You can customize the default appearance and content of Ribbon gallery items by using the [template](../api/ribbon/ribbonGallerySettingsModel/#template) property.

### Popup Template

You can customize the appearance of Ribbon gallery popup by using the [popupTemplate](../api/ribbon/ribbonGallerySettingsModel/#popuptemplate) property.

The below example demonstrates the customization of both the `template` and `popupTemplate` properties:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/galleryTemplate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryTemplate/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryTemplate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/galleryTemplate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryTemplate/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryTemplate" %}
{% endif %}

> To know more about the built-in Ribbon items, please refer to the [Ribbon Items](./items) section.