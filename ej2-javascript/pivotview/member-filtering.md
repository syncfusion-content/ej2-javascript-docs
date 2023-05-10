---
layout: post
title: Member filtering in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Member filtering in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Member filtering 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Member filtering in ##Platform_Name## Pivotview control

Member filtering allows you to view pivot table with particular records based on filter criteria. You can disable the member filter by setting the [`allowMemberFilter`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#allowmemberfilter) property to **false**. By default, this property is set as **true**.

## Filtering through UI

Filtering can also be performed through UI option available in [`grouping bar`](./grouping-bar) and [`field list`](./field-list) at run time.

## Filtering through code

It can be configured using the `filterSettings` option through code-behind. The settings required to filter at initial rendering are:
* `name`: It allows to set field name.
* `type`: It allows to set filter type as either "Include" or "Exclude" to the field.
* `items`: It allows to set the filter members of the field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs270/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs270/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs270" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs270/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs270/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs270" %}
{% endif %}

## See Also

* [Label Filtering](./label-filtering)
* [Value Filtering](./value-filtering)