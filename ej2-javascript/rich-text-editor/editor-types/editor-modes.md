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

# Editor Mode in ##Platform_Name## Rich Text Editor control

The Rich Text Editor component used to create, edit and return the content in valid HTML markup or markdown (MD) of the content. It supports following two editing formation.

* HTML Editor
* Markdown Editor

## HTML editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

The HTML editing mode is the default mode of Rich Text Editor. Which is used for format the content through the available toolbar items and returns the valid HTML markup. Set the [editorMode](./api/rich-text-editor/#editormode) property as `HTML`.

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

## IFrame editor

The IFrame editor mode enables content editing within an iframe, isolating styles from the main page.

For more details, refer to the [Iframe Editor](./iframe) documentation.

## Markdown editor

Set the [editorMode](../api/rich-text-editor/#editormode) property value as `Markdown` to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* The Supported Tags are  `h6`,`h5`,`h4`,`h3`,`h2`,`h1`,`blockquote`,`pre`,`p`,`ol`,`ul`.
* The Supported Selection Tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.
* The supported insert commands are `Image`, `Link` and `Table`.

> To create Rich Text Editor with Markdown editing feature, inject the [MarkdownEditor](../api/rich-text-editor/#markdowneditor) module to the Rich Text Editor using the `RichTextEditor.Inject(MarkdownEditor)` method.

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

For further details on Markdown editing, refer to the [Markdown](https://ej2.syncfusion.com/documentation/markdown-editor/getting-started)

## See also

* [Markdown Editor](https://ej2.syncfusion.com/documentation/markdown-editor/getting-started)