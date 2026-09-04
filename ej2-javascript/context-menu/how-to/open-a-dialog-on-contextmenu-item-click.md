---
layout: post
title: How to open a dialog in ##Platform_Name## Context menu | Syncfusion
description: Open a Syncfusion dialog when a Syncfusion ##Platform_Name## Context menu item is clicked by handling the select event.
platform: ej2-javascript
control: Open a dialog on contextmenu item click 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to open a dialog in ##Platform_Name## Context menu

This section explains about how to open a dialog on ContextMenu item click. This can be achieved by handling dialog open in [`select`](../api/context-menu#select) event of the ContextMenu.

In the following sample, the dialog opens when the `Save As...` item is clicked.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/dialogopen-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/dialogopen-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/dialogopen-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/dialogopen-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/dialogopen-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/dialogopen-cs1" %}
{% endif %}
