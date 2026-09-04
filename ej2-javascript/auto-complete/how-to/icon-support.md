---
layout: post
title: How to show icons in ##Platform_Name## AutoComplete | Syncfusion
description: Render icons in Syncfusion ##Platform_Name## AutoComplete items by mapping the iconCss field to a CSS class for each list entry.
platform: ej2-javascript
control: Icon support 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in ##Platform_Name## AutoComplete

You can render **icons** to the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#fields) field. This `iconCss` field creates a span in the list item with the mapped class name to allow styling as per your requirement.

In the following sample, the icon classes are mapped to the `iconCss` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/icon-class-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/icon-class-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/icon-class-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/icon-class-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/icon-class-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/icon-class-cs1" %}
{% endif %}
