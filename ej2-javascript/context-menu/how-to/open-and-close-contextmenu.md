---
layout: post
title: How to open and close in ##Platform_Name## Context menu | Syncfusion
description: Open and close the Syncfusion ##Platform_Name## Context menu programmatically at a specific position with the open and close methods.
platform: ej2-javascript
control: Open and close contextmenu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to open and close contextmenu in ##Platform_Name## Context menu

ContextMenu can be opened and closed programmatically whenever required by using the open and close methods.

In the following example, the ContextMenu is opened at a specified position using the [`open`](../../api/context-menu#open) method with `top` and `left` values. The ContextMenu is closed using the [`close`](../../api/context-menu#close) method when a ContextMenu item is clicked or when the document is clicked.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/how-to/open-and-close-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/how-to/open-and-close-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/how-to/open-and-close-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/how-to/open-and-close-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/how-to/open-and-close-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/how-to/open-and-close-cs1" %}
{% endif %}
