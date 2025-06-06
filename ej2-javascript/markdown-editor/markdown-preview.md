---
layout: post
title: Markdown to HTML preview in ##Platform_Name## Markdown Editor control | Syncfusion
description: Learn here all about Markdown to HTML preview in Syncfusion ##Platform_Name## Markdown Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Markdown to HTML preview
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Markdown to HTML preview in ##Platform_Name## Markdown Editor Control

The Markdown Editor provides an instant preview of Markdown changes, allowing users to see the formatted output while typing or editing text. This enhances the editing experience by enabling real-time visualization of Markdown formatting.

## Enable Markdown Preview in ##Platform_Name## Markdown Editor  

To enable the Markdown preview feature, integrate the third-party [Marked](https://marked.js.org/) library, which converts Markdown content into HTML format. The following example demonstrates how to enable Markdown to HTML preview in the Markdown Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/markdown-editor/markdown-preview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-editor/markdown-preview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/markdown-editor/markdown-preview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/markdown-editor/markdown-preview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-editor/markdown-preview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/markdown-editor/markdown-preview-cs1" %}
{% endif %}