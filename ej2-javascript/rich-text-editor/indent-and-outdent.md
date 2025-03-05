---
layout: post
title: Indent and Outdent in ##Platform_Name## Rich Text Editor control | Syncfusion
description: Learn here all about Indent and Outdent in Syncfusion ##Platform_Name## Rich Text Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Indent and Outdent
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Increase and Decrease Indent in Angular Rich Text Editor Component

The Rich Text Editor allows you to set indentation for text blocks such as paragraphs, headings, or lists. This feature helps you visually organize and structure your content, making it easier to read and understand.

The Rich Text Editor allows you to configure two types of indentation tools, `Indent` and `Outdent` tool  in the Rich Text Editor toolbar using the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

| Options | Description |
|----------------|---------|
| Indent | Increases the indentation |
| Outdent | Decreases the indentation |

To adjust the text indentation:

1. Select the desired text or paragraph.
2. Click the Indent or Outdent button in the toolbar.
3. The indentation of the selected text will be modified accordingly.

To configure the `Indent` and `Outdent` toolbar item, refer to the below code.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/indent-and-outdent-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/indent-and-outdent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/indent-and-outdent-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/indent-and-outdent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/indent-and-outdent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/indent-and-outdent-cs1" %}
{% endif %}