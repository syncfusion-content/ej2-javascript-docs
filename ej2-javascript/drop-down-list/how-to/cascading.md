---
layout: post
title: Cascading in ##Platform_Name## Dropdown List | Syncfusion
description: Configure a cascading Syncfusion ##Platform_Name## Dropdown List where the parent's change event loads the child's data and dataBind reflects updates.
platform: ej2-javascript
control: Cascading 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to configure cascading in ##Platform_Name## Dropdown List

The cascading DropDownList is a group of DropDownLists where the value of one DropDownList depends on the value of another. This behavior can be configured by handling the [`change`](../../api/drop-down-list#change) event of the parent DropDownList. Within that event handler, data is loaded into the child DropDownList based on the selected value of the parent DropDownList.

The following example shows the cascading behavior of country, state, and city DropDownLists. Here, the [`dataBind`](../../api/drop-down-list#databind) method is used to reflect the property changes in the DropDownList immediately.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/cascading-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/cascading-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/cascading-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/cascading-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/cascading-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/cascading-cs1" %}
{% endif %}