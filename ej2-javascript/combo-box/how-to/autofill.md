---
layout: post
title: How to enable autofill in ##Platform_Name## ComboBox | Syncfusion
description: Enable autofill in Syncfusion ##Platform_Name## ComboBox so the typed value auto-completes by matching the first character of suggested items.
platform: ej2-javascript
control: Autofill 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to enable autofill in ##Platform_Name## ComboBox

The ComboBox supports the `autofill` behaviour with the help of [autofill](https://ej2.syncfusion.com/javascript/documentation/api/combo-box/index-default#autofill) property. Whenever you change the input value, the ComboBox will autocomplete your data by matching the typed character. Suppose, if no matches found then, comboBox doesn't suggest any item.

In the following sample, showcase that how to work autofill with ComboBox.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/getting-started-cs3" %}
{% endif %}
