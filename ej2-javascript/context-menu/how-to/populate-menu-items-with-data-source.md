---
layout: post
title: How to populate menu items with data source in ##Platform_Name## Context menu | Syncfusion
description: Bind a local data source to the Syncfusion ##Platform_Name## Context menu and add separators with the insertAfter method.
platform: ej2-javascript
control: Populate menu items with data source 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to populate menu items with data source in ##Platform_Name## Context menu

To bind local data source to the ContextMenu, menu items are populated from data source and mapped to [`items`](../../api/context-menu/menuItemModel#items) property.

The below example demonstrates how to bind local data source to the ContextMenu and separator is added using [`insertAfter`](../../api/context-menu#insertafter) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/how-to/data-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/how-to/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/how-to/data-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/how-to/data-binding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/how-to/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/how-to/data-binding-cs1" %}
{% endif %}
