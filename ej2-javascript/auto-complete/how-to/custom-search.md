---
layout: post
title: How to custom search in ##Platform_Name## AutoComplete | Syncfusion
description: Customize the highlighted match in Syncfusion ##Platform_Name## AutoComplete filtering by using the highlight property and a custom e-highlight CSS class.
platform: ej2-javascript
control: Custom search 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to custom search highlight in ##Platform_Name## AutoComplete

The AutoComplete has built-in support to highlight the searched characters on suggested list items when enabled the [`highlight`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#highlight) property.

In the below sample, to customize the matched character in suggestion list by `e-highlight` class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/highlight-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/highlight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/highlight-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/highlight-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/highlight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/highlight-cs1" %}
{% endif %}