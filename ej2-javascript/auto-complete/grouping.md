---
layout: post
title: Grouping in ##Platform_Name## AutoComplete | Syncfusion
description: Group Syncfusion ##Platform_Name## AutoComplete items by category using the groupBy field, with inline and fixed group headers in the popup.
platform: ej2-javascript
control: Grouping 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in ##Platform_Name## AutoComplete

The AutoComplete supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#fields) field in the data table. The group header is displayed as both inline and fixed headers. The fixed group header content is updated dynamically on scrolling the suggestion list with its category value.

In the following sample, vegetables are grouped according to their category using the `groupBy` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/basic-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/basic-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs9" %}
{% endif %}

## Customization

The grouping header can also be customized for both inline and fixed headers using the [groupTemplate](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#grouptemplate) property.

## See Also

* [Group Template support in the AutoComplete](./templates#group-template).