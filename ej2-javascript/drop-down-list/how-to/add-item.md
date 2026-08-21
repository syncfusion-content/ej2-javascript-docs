---
layout: post
title: How to add item in ##Platform_Name## Dropdown List | Syncfusion
description: Insert items in between or append to the end of a Syncfusion ##Platform_Name## Dropdown List by passing an index to addItem.
platform: ej2-javascript
control: Add item 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add item in ##Platform_Name## Dropdown List

You can add item in between based on item [index](../../api/drop-down-list/#index). If you add new item without item index, item will be added as last item in list.

The following example demonstrate how to add item in between in DropDownList.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/how-to/add-item-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/add-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/add-item-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/how-to/add-item-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/add-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/add-item-cs1" %}
{% endif %}