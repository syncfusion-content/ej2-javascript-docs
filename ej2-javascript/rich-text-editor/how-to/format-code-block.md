---
layout: post
title: Format code block in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Format code block in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Format code block 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Format code block in ##Platform_Name## Rich text editor control

You can configure code block formatting as a separate toolbar button by adding the **InsertCode** keyword within the [toolbarSettings](./../../api/rich-text-editor/toolbarSettings/#toolbarsettings) items property.

The InsertCode button has a toggle state to apply code block formatting to the editor and remove code block formatting from the editor.

The following sample demonstrates how to config the InsertCode button in toolbar and set the background color to “pre” tag for highlighting the code block.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/how-to-format-code-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/how-to-format-code-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-format-code-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/how-to-format-code-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/how-to-format-code-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-format-code-cs1" %}
{% endif %}