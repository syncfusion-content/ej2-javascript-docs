---
layout: post
title: Toolbar in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Toolbar in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Toolbar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in ##Platform_Name## Image editor control

Toolbars are used to interact and edit images with customization. Users can define their own toolbars for an image editor by customizing the items or the entire toolbar.

## Built-in Toolbar Items

Specifies the toolbar items to perform UI interactions. Refer to the built-in toolbar items for the default value.

* Crop,
* Transform,
* Annotate,
* ZoomIn,
* ZoomOut,
* Open,
* Reset,
* Save,
* Pan

## Custom Toolbar items

Users can define their own toolbars for an image editor by customizing the items or the entire toolbar. Users can achieve this by using the [`toolbar`](../../api/image-editor/#toolbar) property.

The built-in toolbar can be customized using the [`toolbar`](../../api/image-editor/#toolbar) property, so the specified toolbar items can be enabled in the Image Editor toolbar. And the contextual toolbar which is enabled while inserting annotations can also be customized in the toolbarUpdating event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-cs1" %}
{% endif %}

## Toolbar template

Specifies template to the Image Editor Toolbar. If you want to customize the entire toolbar in your own way use this property. The property depends on the ‘toolbar’.

The toolbar of the Image Editor can be replaced with the user specific UI using the [`toolbarTemplate`](../../api/image-editor/#toolbartemplate) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/toolbar-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/toolbar-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs1" %}
{% endif %}

## Customize Contextual Toolbar

The built-in contextual toolbar can be customized using the toolbar property, so the specified toolbar items can be enabled in the Image Editor toolbar. And the contextual toolbar which is enabled while inserting annotations can  be customized in the [`toolbarUpdating`](../../api/image-editor/#toolbarupdating) event

In the following example, the contextual toolbar for rectangle will be rendered with only stroke color by excluding fill color and stroke width using toolbarUpdating event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/toolbar-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/toolbar-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/toolbar-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/toolbar-template-cs2" %}
{% endif %}
