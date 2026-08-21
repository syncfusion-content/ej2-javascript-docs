---
layout: post
title: How to show icons in ##Platform_Name## ComboBox | Syncfusion
description: Render icons in Syncfusion ##Platform_Name## ComboBox items by mapping the iconCss field to a CSS class for each list entry.
platform: ej2-javascript
control: Icons support 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in ##Platform_Name## ComboBox

You can render **icons** to the list items by mapping the [iconCss](https://ej2.syncfusion.com/javascript/documentation/api/combo-box/index-default#fields) &nbsp;field. This `iconCss` field create a span in the list item with mapped class name to allow styling as per your need.

In the following sample, icon classes are mapped with `iconCss` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/icon-class-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/icon-class-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/icon-class-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/icon-class-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/icon-class-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/icon-class-cs1" %}
{% endif %}