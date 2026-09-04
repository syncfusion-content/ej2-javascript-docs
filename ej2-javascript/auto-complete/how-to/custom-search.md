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

The AutoComplete has built-in support to highlight the searched characters on suggested list items when the [`highlight`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#highlight) property is enabled.

In the following sample, the matched characters in the suggestion list are customized by using the `e-highlight` class.

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