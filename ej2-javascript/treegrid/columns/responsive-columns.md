---
layout: post
title: ##Platform_Name## TreeGrid Responsive Columns | Syncfusion
description: Learn how to create responsive columns in ##Platform_Name## TreeGrid using media queries to control column visibility and optimize layouts across devices.
platform: ej2-javascript
control: Responsive columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Responsive Columns in ##Platform_Name## TreeGrid

You can toggle column visibility based on media queries which are defined
at the [`hideAtMedia`](../../api/treegrid/column#hideatmedia).
The [`hideAtMedia`](../../api/treegrid/column#hideatmedia) accepts valid
[Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/columns-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columns-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/columns-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columns-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs18" %}
{% endif %}