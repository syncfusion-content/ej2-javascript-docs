---
layout: post
title: Convert complex JSON to flat JSON and assign it to the pivot table in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about how to convert complex JSON to flat JSON and assign it to the pivot table in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Convert complex JSON to flat JSON and assign it to the pivot table 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->
# Convert complex JSON to flat JSON and assign it to the pivot table in ##Platform_Name## Pivotview control

By default, flat JSON can only bind to the pivot table. However, you can connect complex JSON to the pivot table by converting it to flat JSON via code-behind and binding it to the pivot table using the [dataSource](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#datasource) property in the [load](https://ej2.syncfusion.com/documentation/api/pivotview#load) event.

In the following example, the **complexToFlatJson()** method is used to convert complex JSON to flat JSON and bind it to the pivot table using the [dataSource](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#datasource) property, then modifying the field names in the [rows](https://helpej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel/#rows) and [columns](https://helpej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel/#columns) based on the converted flat JSON under [dataSourceSettings](https://helpej2.syncfusion.com/documentation/api/pivotview/#datasourcesettings) in the [load](https://ej2.syncfusion.com/documentation/api/pivotview#load) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs499/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs499/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs499" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs499/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs499/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs499" %}
{% endif %}