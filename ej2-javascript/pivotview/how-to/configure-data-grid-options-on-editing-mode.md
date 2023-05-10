---
layout: post
title: Configure data grid options on editing mode in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Configure data grid options on editing mode in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Configure data grid options on editing mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Configure data grid options on editing mode in ##Platform_Name## Pivotview control

You can access the data grid options such as sort, group, filter on editing mode using the `beginDrillThrough` event in the pivot table. The event occurs in every value cell on double click and provides the data grid information before display the drill through grid pop-up.

> Grid features are segregated into individual feature-wise modules. For example, to use sorting feature, you should inject `Sort` using the `Grid.Inject(Sort)` section.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs73/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs73/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs73" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs73/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs73/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs73" %}
{% endif %}
