---
layout: post
title: Quick toolbars in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Quick toolbars in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Quick toolbars
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Quick Toolbars in ##Platform_Name## Rich Text Editor control

The Rich Text Editor has quick toolbars that act as context-menus, appearing when you click on elements like images, links, audio, video, and tables. By default, specific quick toolbar items are displayed when clicking on the corresponding element. You can customize these items using the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#quicktoolbarsettings) property.

> Rich Text Editor features are segregated into individual feature-wise modules. To use quick toolbar features, inject the quick toolbar module using the `RichTextEditor.Inject(QuickToolbar)`.

## Image quick toolbar

You can customize the quick toolbar options for images using the `image` property within the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#quicktoolbarsettings). The Rich Text Editor provides essential tools such as 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText', and 'Dimension' allowing seamless image management and editing directly within the content.

By configuring these options in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#quicktoolbarsettings) property, you can enhance the editor’s functionality, ensuring a user-friendly experience for efficiently handling image elements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/customize-image-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/customize-image-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-image-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/customize-image-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/customize-image-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-image-cs1" %}
{% endif %}

## Link quick toolbar

The link quick toolbar appears when you click on a link in the editor. You can customize its items using the `link` property in the  [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#link).

The Rich Text Editor provides essential tools in the link quick toolbar, including "Open", "Edit Link", "Remove Link", and "Custom Tool".

The following example demonstrates how to customize the link quick toolbar using the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#link) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/link-quick-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/link-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/link-quick-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/link-quick-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/link-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/link-quick-toolbar-cs1" %}
{% endif %}

## Table quick toolbar

The table quick toolbar opens when you click anywhere within a table. Customize its items using the `table` property in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#table).

The quick toolbar appears when clicking on a table, providing easy access to table-related commands. You can customize the quick toolbar by adding or removing tools using the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#table) property.

The following sample demonstrates the customiztion of table quick toolbar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/table-quick-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/table-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/table-quick-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/table-quick-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/table-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/table-quick-toolbar-cs1" %}
{% endif %}

## Audio quick toolbar

Customize the quick toolbar items for audio elements using the `audio` property in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#audio).The Rich Text Editor provides essential tools such as "AudioReplace", "Remove", and "AudioLayoutOption", allowing seamless management and editing of audio content.

By configuring these options in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#audio) property, you can enhance the editor’s capabilities, ensuring a user-friendly experience for handling audio elements efficiently.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/customize-audio-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/customize-audio-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-audio-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/customize-audio-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/customize-audio-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-audio-cs1" %}
{% endif %}

## Video quick toolbar

The video quick toolbar appears when you click on a video element. You can customize its tools using the `video` property in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#video).

The Rich Text Editor allows you to tailor the video quick toolbar with essential tools such as "VideoReplace", "VideoAlign", "VideoRemove", "VideoLayoutOption", and "VideoDimension", enabling seamless management of embedded videos.

By configuring these options in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#video) property, you enhance the editor’s capabilities, ensuring a user-friendly experience for editing and customizing video elements effortlessly.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/customize-video-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/customize-video-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-video-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/customize-video-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/customize-video-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-video-cs1" %}
{% endif %}

## Text quick toolbar

The text quick toolbar provides easy access to commonly used formatting tools, enabling users to apply styles and adjustments effortlessly. This enhances the editing experience by streamlining text formatting.

Customize the quick toolbar items using the `text` property in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quickToolbarSettingsModel/#text). Any toolbar items available in the Rich Text Editor can be configured for the text quick toolbar. The example below demonstrates its customization.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/text-quick-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/text-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/text-quick-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/text-quick-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/text-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/text-quick-toolbar-cs1" %}
{% endif %}