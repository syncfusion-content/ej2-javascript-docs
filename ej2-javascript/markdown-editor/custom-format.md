---
layout: post
title: Customizing Markdown Syntax in ##Platform_Name## Markdown Editor control | Syncfusion
description: Learn here all about Customizing Markdown Syntax in Syncfusion ##Platform_Name## Markdown Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customizing Markdown Syntax
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customizing Markdown Syntax in ##Platform_Name## Markdown Editor Component

The Markdown Editor allows you to modify the default Markdown syntax to match your preferred formatting style. You can override the default syntax using the [formatter](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#formatter) property, enabling a customized Markdown experience.

For instance, you can define custom symbols for different formatting options:

* Use + for unordered lists instead of `-`.
* Use 1., 2., 3. for ordered lists.
* Use __text__ for bold text instead of **text**.
* Use _text_ for italic text instead of *text*.

The following example demonstrates how to customize Markdown tags in the editor:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/markdown-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/markdown-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/markdown-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs5" %}
{% endif %}