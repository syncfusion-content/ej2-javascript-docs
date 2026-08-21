---
layout: post
title: How to modify data in ##Platform_Name## Dropdown List | Syncfusion
description: Modify the result data in Syncfusion ##Platform_Name## Dropdown List before display by handling the actionComplete event when binding remote data.
platform: ej2-javascript
control: Modify data 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to modify result data in ##Platform_Name## Dropdown List

When binding the remote data source, by using the [actionComplete](../../api/drop-down-list/#actioncomplete) event, you can modify the result data before passing it to DropDownList.

The following sample demonstrate how to modify the result data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/basic-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/basic-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/basic-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/basic-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs11" %}
{% endif %}