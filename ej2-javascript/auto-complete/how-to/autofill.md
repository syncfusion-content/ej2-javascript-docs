---
layout: post
title: How to enable autofill in ##Platform_Name## AutoComplete | Syncfusion
description: Enable autofill in Syncfusion ##Platform_Name## AutoComplete so the typed value auto-completes by matching the first character of suggested items.
platform: ej2-javascript
control: Autofill 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to enable autofill in ##Platform_Name## AutoComplete

The AutoComplete supports the autofill behavior with the help of [`autofill`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#autofill) property. Whenever you change the input value, the AutoComplete will autocomplete your data by matching the typed character. If no matches are found, the AutoComplete does not suggest any item.

The following sample demonstrates how to use the `autofill` property with the AutoComplete.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs3" %}
{% endif %}
