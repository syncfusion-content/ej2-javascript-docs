---
layout: post
title: Check list in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about Check list in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Check list
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Check list in ##Platform_Name## ListView control

The ListView control supports checkboxes in both default and group lists, allowing the selection of multiple items. The checkbox can be enabled using the [`showCheckBox`](../api/list-view/#showcheckbox) property.

The checkbox feature is useful in scenarios where multiple options need to be selected. For example, in a shopping cart, users can select or deselect desired items before checkout. It is also useful for selecting multiple items that belong to the same category when using a group list.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/todo-list-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/todo-list-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/todo-list-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/todo-list-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/todo-list-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/todo-list-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/todo-list-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/todo-list-cs1" %}
{% endif %}

## Checkbox Position

In ListView, the checkbox can be positioned on either the `Left` or `Right` side of the list-item text. This can be adjusted using the [`checkBoxPosition`](../api/list-view/#checkboxposition) property. By default, the checkbox is positioned to the `Left` of the list-item text.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/checklist-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/checklist-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/checklist-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/checklist-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/checklist-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/checklist-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/checklist-cs1" %}
{% endif %}