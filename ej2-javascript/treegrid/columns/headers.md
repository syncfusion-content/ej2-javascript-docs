---
layout: post
title: ##Platform_Name## TreeGrid Headers | Syncfusion
description: Learn how to configure and customize column headers in ##Platform_Name## TreeGrid, including header text and template options.
platform: ej2-javascript
control: Headers 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Headers in ##Platform_Name## TreeGrid

## Header text

By default, column header title is displayed from column [`field`](../../api/treegrid/column#field) value. To override the default header title, you have to define the [`headerText`](../../api/treegrid/column#headertext) value.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/columns-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columns-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/columns-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columns-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs17" %}
{% endif %}

> * If both the [`field`](../../api/treegrid/column#field) and [`headerText`](../../api/treegrid/column#headertext) are not defined in the column, the column renders with “empty” header text.

## Header template

You can customize the header element by using the [`headerTemplate`](../../api/treegrid/column#headerTemplate) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/header-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/header-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/header-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/header-template-cs1" %}
{% endif %}