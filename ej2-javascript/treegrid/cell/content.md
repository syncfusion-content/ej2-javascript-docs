---
layout: post
title: ##Platform_Name## TreeGrid Cell Content | Syncfusion
description: Learn how to display HTML content in ##Platform_Name## TreeGrid headers and cells using disableHtmlEncode to render formatted content and custom markup.
platform: ej2-javascript
control: Content 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# HTML Content in ##Platform_Name## TreeGrid

The HTML tags can be displayed in the TreeGrid header and content by enabling the [`disableHtmlEncode`](../../api/treegrid/column#disablehtmlencode) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/cell-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/cell-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/cell-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/cell-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/cell-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/cell-cs5" %}
{% endif %}