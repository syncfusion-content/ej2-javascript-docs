---
layout: post
title: ##Platform_Name## Grid Row Number Column | Syncfusion
description: Learn how to display row numbers in the ##Platform_Name## Data Grid using the built-in row number column feature in Syncfusion.
platform: ej2-javascript
control: Row number column
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row Number Column in ##Platform_Name## Data Grid

The ##Platform_Name## Data Grid provides built-in support for displaying row numbers through a dedicated row number column. This column displays the position of each record in the current view and is automatically maintained by the Grid.

To display row numbers, set the [columns->type](../../api/grid/column#type) property to `RowNumber`. This creates a read-only column for displaying row numbers, eliminating the need to include a separate row number field in the data source.

The Grid automatically updates row numbers when operations such as paging, sorting, filtering, and grouping are performed. This ensures that the displayed row numbers always reflect the current view and order of the records.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/rownumber/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/rownumber/ts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/rownumber" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/rownumber/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/rownumber/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/rownumber" %}
{% endif %}
