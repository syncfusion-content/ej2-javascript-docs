---
layout: post
title: Display foreign key values in treegrid in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Display foreign key values in treegrid in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display foreign key values in treegrid 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display foreign key values in treegrid in ##Platform_Name## Treegrid control

Since Tree Grid Databinding concept is of hierarchy relationship, we do not provide in-built support for foreignKey datasource.

To display the foreignKey value at initial rendering, we can use the [`queryCellInfo`](../api/treegrid/#querycellinfo) event of the Tree Grid and also by using the [`editType`](../api/treegrid/column/#edittype) and [`columns.edit`](../api/treegrid/column/#edit) properties of Tree Grid Column, we can render Dropdownlist with external or foreign dataSource.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/foreign-key-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/foreign-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/foreign-key-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/foreign-key-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/foreign-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/foreign-key-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.