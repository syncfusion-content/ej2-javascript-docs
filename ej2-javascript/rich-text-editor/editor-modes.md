---
layout: post
title: Editor modes in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Editor modes in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Editor modes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Editor modes in ##Platform_Name## Rich text editor control

The Rich Text Editor component used to create and edit the content and return valid HTML markup or markdown (MD) of the content. It supports the following two editing formation.

* HTML Editor
* Markdown Editor

## HTML editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

The HTML editing mode is the default mode in Rich Text Editor to format the content through the available toolbar items to return the valid HTML markup. Set the [editorMode](../api/rich-text-editor/#editormode) property as `HTML`.

> To create Rich Text Editor with HTML editing feature, inject the [htmleditor](../api/rich-text-editor/#htmleditor) module to the Rich Text Editor using the `RichTextEditor.Inject(HtmlEditor)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs2" %}
{% endif %}

## Markdown editor

Set the [`editorMode`](../api/rich-text-editor/#editormode) property as `Markdown` to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* The Supported Tags are  `h6`,`h5`,`h4`,`h3`,`h2`,`h1`,`blockquote`,`pre`,`p`,`OL`,`UL`.
* The Supported Selection Tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs3" %}
{% endif %}

> To create Rich Text Editor with Markdown editing feature, inject the [`MarkdownEditor`](../api/rich-text-editor/#markdowneditor) module to the Rich Text Editor using the `RichTextEditor.Inject(MarkdownEditor)` method.

For further details on Markdown editing, refer to the [`Markdown`](./markdown/) section.

## See Also

* [How to integrate the third party library](./third-party-integration/)
* [How to render the iframe](./iframe/)