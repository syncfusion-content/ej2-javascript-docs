---
layout: post
title: Change header text dynamically in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Change header text dynamically in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Change header text dynamically 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Change header text dynamically in ##Platform_Name## Treegrid control

You can change the column [`headerText`](../../api/treegrid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](../../api/treegrid/#getcolumnbyfield) method. Then, change the header text value.

```ts
let column = treegrid.getColumnByField("taskName"); // Get column object.
column.headerText = 'Changed Text';

```

**Step 2**:

To reflect the changes in the treegrid header, invoke the [`refreshColumns`](../../api/treegrid/#refreshcolumns) method.

```ts

treegrid.refreshColumns();

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/headertext-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/headertext-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/headertext-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/headertext-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/headertext-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/headertext-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.