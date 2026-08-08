---
layout: post
title: ##Platform_Name## TreeGrid Complex Data Binding | Syncfusion
description: Learn how to use complex data binding in ##Platform_Name## TreeGrid with nested field mapping, dot notation, and hierarchical data display.
platform: ej2-javascript
control: Complex data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Complex Data Binding in ##Platform_Name## TreeGrid

You can achieve complex data binding in the treegrid by using the dot(.) operator in the [`column.field`](../../api/treegrid/column#field).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/columns-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columns-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/columns-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columns-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs16" %}
{% endif %}