---
layout: post
title: ##Platform_Name## TreeGrid Indent and Outdent | Syncfusion
description: Learn how to indent and outdent rows in ##Platform_Name## TreeGrid to modify hierarchical relationships and manage parent-child records.
platform: ej2-javascript
control: Indent 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Indent and Outdent in ##Platform_Name## TreeGrid

The Indent and Outdent feature will help to change the hierarchy level of rows in tree grid. The indent action moves the selected row as the last child of its previous row, whereas the outdent action moves the selected row as a sibling to its parent row.

To use the indent and outdent feature, inject the `RowDD` module in the Tree Grid. The tree grid toolbar has the built-in items to execute indent and outdent actions. Define this by using the toolbar property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/indent-outdent-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/indent-outdent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/indent-outdent-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/indent-outdent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/indent-outdent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/indent-outdent-cs1" %}
{% endif %}

## Indent/Outdent a row programmatically

You can change the hierarchy level of record programmatically using [indent](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/#indent) and [outdent](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/#outdent) methods.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/programmatic-indent-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/programmatic-indent-cs1" %}
{% endif %}