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

The Ribbon control supports a gallery feature that displays a collection of related items, such as icons, content, or images, to allow users to perform specific actions. To render a gallery item by setting the [type](../api/ribbon/ribbonItemType/) property to `Gallery`

The gallery can be configured through the [RibbonGallerySettingsModel](../api/ribbon/ribbonGallerySettingsModel/), which provides options to manage `groups`, `itemCount`, `popupHeight`, `popupWidth`, and more.

## Groups 

The gallery can be organized into logical groups using the [groups](../api/ribbon/ribbonGallerySettingsModel/#groups) property. Each group can be customized using the [RibbonGalleryGroupModel](../api/ribbon/ribbonGalleryGroupModel/), which includes options for `items`, `cssClass`, `header`, and more.

### Adding Gallery Items

Gallery items are defined using the [items](../api/ribbon/ribbonGalleryGroupModel/#items) property. Each item can be configured with the [RibbonGalleryItemModel](../api/ribbon/ribbonGalleryItemModel/), which provides options like `content`, `iconCss`, and `disabled`.


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

#### Defining Item Content

The [content](../api/ribbon/ribbonGalleryItemModel/#content) property specifies the text to be displayed for a gallery item.

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

#### Defining Item Icons

To associate an icon with a gallery item, use the [iconCss](../api/ribbon/ribbonGalleryItemModel/#iconcss) property.

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

#### Adding HTML Attributes to Items

The [htmlAttributes](../api/ribbon/ribbonGalleryItemModel/#htmlattributes) property allows you to add custom HTML attributes to a gallery item's element.

The following sample shows how to add a `title` attribute to a gallery item.

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

#### Customizing Item Appearance

To apply a custom style to a gallery item, use the [cssClass](../api/ribbon/ribbonGalleryItemModel/#cssclass) property.

The following sample demonstrates how to customize the appearance of a gallery item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.html %}
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
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/classCustomization" %}
{% endif %}

#### Disabling a Gallery Item

To disable a gallery item and prevent user interaction, set its [disabled](../api/ribbon/ribbonGalleryItemModel/#disabled) property to `true`. By default, this value is `false`.

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

### Defining a Group Header

The [header](../api/ribbon/ribbonGalleryGroupModel/#header) property sets a title for a group of items within the gallery popup.

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

### Setting Item Dimensions

The size of gallery items can be controlled using the [itemWidth](../api/ribbon/ribbonGalleryGroupModel/#itemwidth) and [itemHeight](../api/ribbon/ribbonGalleryGroupModel/#itemheight) properties. When an `itemHeight` is set, items are aligned in rows according to the specified [itemCount](../api/ribbon/ribbonGallerySettingsModel/#itemcount).

The following sample demonstrates how to set custom dimensions for gallery items.

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

### Customizing Group Appearance

To apply custom styles to a gallery group container, use the group's [cssClass](../api/ribbon/ribbonGalleryGroupModel/#cssclass) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/groupCustomization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/groupCustomization/index.html %}
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
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/groupCustomization" %}
{% endif %}

## Setting the Displayed Item Count

To control the number of items displayed inline in the Ribbon gallery, use the [itemCount](../api/ribbon/ribbonGallerySettingsModel/#itemcount) property. By default, the `itemCount` is `3`.

The following example showcases a gallery with `4` items displayed.

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

## Pre-selecting an Item

The [selectedItemIndex](../api/ribbon/ribbonGallerySettingsModel/#selecteditemindex) property allows you to define the initially selected item in the gallery.

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

## Setting Popup Dimensions

The dimensions of the gallery popup can be explicitly set using the [popupHeight](../api/ribbon/ribbonGallerySettingsModel/#popupheight) and [popupWidth](../api/ribbon/ribbonGallerySettingsModel/#popupwidth) properties.

This sample demonstrates how to configure a custom size for the gallery popup.

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

You can completely redefine the appearance and content of gallery items by using the [template](../api/ribbon/ribbonGallerySettingsModel/#template) property.

### Popup Template

To customize the gallery's popup container, use the [popupTemplate](../api/ribbon/ribbonGallerySettingsModel/#popuptemplate) property.

The example below demonstrates how to implement both an `template` and a `popupTemplate`.

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

> To learn more about other built-in Ribbon item types, refer to the [Ribbon Items](./items) documentation.