---
layout: post
title: Populate menu items with data source in ##Platform_Name## Context menu control | Syncfusion
description: Learn here all about Populate menu items with data source in Syncfusion ##Platform_Name## Context menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Populate menu items with data source 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Populate menu items with data source in ##Platform_Name## Context menu control

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
