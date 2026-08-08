---
layout: post
title: ##Platform_Name## TreeGrid Detail Template | Syncfusion
description: Learn how to use detail templates in ##Platform_Name## TreeGrid to display expandable row content, nested data, and custom detail views.
platform: ej2-javascript
control: Detail template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Detail Template in ##Platform_Name## TreeGrid

The detail template provides additional information about a particular row. By expanding the parent row the child rows are expanded along with their detail template. The [`detailTemplate`](../../api/treegrid/#detailtemplate) property accepts either the template string or HTML element ID.

To use detail template, inject the DetailRow module in the TreeGrid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/detail-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/detail-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/detail-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/detail-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/detail-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/detail-template-cs1" %}
{% endif %}