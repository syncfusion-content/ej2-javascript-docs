---
layout: post
title: Grouping in ##Platform_Name## MultiColumn Combobox control | Syncfusion
description: Checkout and learn about Grouping in ##Platform_Name## MultiColumn Combobox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Grouping
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in ##Platform_Name## MultiColumn ComboBox control

The MultiColumn ComboBox supports wrapping nested elements into a group based on different categories by using the [groupBy](../api/multicolumn-combobox/fieldSettings/#groupby) property. The category of each list item can be mapped through the groupBy  field in the data table. The group header are displayed as fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

In the following sample, countries are grouped according on its category using `groupBy` field.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/groupby/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/groupby/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/groupby" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/groupby/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/groupby/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/groupby" %}
{% endif %}