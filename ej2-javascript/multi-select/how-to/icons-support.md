---
layout: post
title: How to show icons in ##Platform_Name## MultiSelect | Syncfusion
description: Show icon classes for each item in the Syncfusion ##Platform_Name## MultiSelect Dropdown popup by mapping the iconCss field.
platform: ej2-javascript
control: Icons support 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show icons for list items in ##Platform_Name## MultiSelect

You can render **icons** to the list items by mapping the [iconCss](../../api/multi-select/#fields) &nbsp;field. This `iconCss` field create a span in the list item with mapped class name to allow styling as per your need.

In the following sample, icon classes are mapped with `iconCss` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/icon-class-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/icon-class-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/icon-class-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/icon-class-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/icon-class-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/icon-class-cs1" %}
{% endif %}