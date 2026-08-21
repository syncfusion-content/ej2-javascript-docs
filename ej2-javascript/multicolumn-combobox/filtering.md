---
layout: post
title: Filtering in ##Platform_Name## MultiColumn ComboBox | Syncfusion
description: Filter the Syncfusion ##Platform_Name## MultiColumn ComboBox as you type with StartsWith, EndsWith, or Contains match modes.
platform: ej2-javascript
control: Filtering
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in ##Platform_Name## MultiColumn ComboBox

The MultiColumn ComboBox has built-in support to filter the data items, which allows users to filter the list of items based on their input. The filter operation starts as soon as you start typing characters in the component. The filtering can be disabled by setting the [allowFiltering](../api/multicolumn-combobox#allowfiltering) to `false`. By default the value is `true`.

## Change the filter type

You can change the filter type by using the [filterType](../api/multicolumn-combobox#filtertype) property. The `filterType` supports filtering options such as`StartsWith`, `EndsWith` and `Contains`.

In the following example, data filtering is done with `EndsWith` type.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/filtering/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/filtering/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/filtering" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/filtering/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/filtering/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/filtering" %}
{% endif %}
