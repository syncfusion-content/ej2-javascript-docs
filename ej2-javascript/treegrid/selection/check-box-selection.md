---
layout: post
title: Check box selection in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Check box selection in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Check box selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Check box selection in ##Platform_Name## Treegrid control

Checkbox selection provides an option to select multiple treegrid records with help of checkbox in each row.

To render the checkbox in each treegrid row, you need to use checkbox column with type as `checkbox` using the  column [`type`](../../api/treegrid/column/#type) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/selection-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/selection-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs2" %}
{% endif %}

> * By default, selection is allowed by clicking a treegrid row or checkbox in that row. To allow selection only through checkbox, you can set the
[`selectionSettings.checkboxOnly`](../../api/treegrid/selectionSettingsModel/#checkboxonly) property to true.
> * Selection can be persisted in all the operations using the [`selectionSettings.persistSelection`](../../api/treegrid/selectionSettingsModel/#persistselection) property. For persisting selection on the treegrid, any one of the columns should be defined as a primary key using the [`columns.isPrimaryKey`](../../api/treegrid/column/#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, selection can also be done by clicking on rows. This selection provides two types of Checkbox Selection mode which can be set by using the following API,[`selectionSettings.checkboxMode`](../../api/treegrid/selectionSettingsModel/#checkboxmode). The modes are

* **`Default`**: This is the default value of the checkboxMode. In this mode, user can select multiple rows by clicking rows one by one.
* **`ResetOnRowClick`**: In ResetOnRowClick mode, when user clicks on a row it will reset previously selected row. Also you can perform multiple-selection in this mode by press and hold CTRL key and click the desired rows. To select range of rows, press and hold the SHIFT key and click the rows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/selection-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/selection-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/selection-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/selection-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs3" %}
{% endif %}