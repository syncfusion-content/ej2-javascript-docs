---
layout: post
title: Open and close contextmenu in ##Platform_Name## Context menu control | Syncfusion
description: Learn here all about Open and close contextmenu in Syncfusion ##Platform_Name## Context menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open and close contextmenu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open and close contextmenu in ##Platform_Name## Context menu control

ContextMenu can be opened and closed programmatically whenever required by using the open and close methods.

In the following example, the ContextMenu is opened using the [`open`](../../api/context-menu#open) method at the specified position using `top` and `left`. Also, ContextMenu is closed using [`close`](../../api/context-menu#close) method on ContextMenu item click or document click.

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
