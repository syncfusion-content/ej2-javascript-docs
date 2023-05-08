---
layout: post
title: Footer in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Footer in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Footer 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Footer in ##Platform_Name## Chart control

By using `annotation`, you can place any html elements to chart in a desired view.

To create footer and watermark for chart, follow the given steps:

**Step 1**:

Initialize the custom elements by using the `annotation` property.

By using the `content` option of the annotation object, you can specify the id of the element that needs to be displayed in the chart area as follow,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/table-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/table-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/table-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/table-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/table-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/table-cs3" %}
{% endif %}