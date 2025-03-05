---
layout: post
title: Read-only Mode in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Read-only Mode in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Read-only Mode
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Read-only Mode in the ##Platform_Name## Rich Text Editor control

The Rich Text Editor control offers a read-only mode that prevents you from editing the content while still allowing them to view it. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readonly](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#readonly) property to `true`. 

This will allow you to view the content without making any modifications.

Please refer to the sample and code snippets below to demonstrate how to enable the read-only mode in the Rich Text Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/read-only-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/read-only-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/read-only-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/read-only-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/read-only-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/read-only-cs1" %}
{% endif %}

## See Also

[How to Disable and Enable the Rich Text Editor](./disable-editor)