---
layout: post
title: Show summary view in ##Platform_Name## Query Builder | Syncfusion
description: Show a compact preview of the built query in the ##Platform_Name## Query Builder UI by enabling the summaryView property, which displays the filtered conditions.
platform: ej2-javascript
control: Summary view 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show summary view in ##Platform_Name## Query Builder UI

The summary view shows a compact preview of the filtered query. By default, the value is false. This feature can be enabled by setting the [`summaryView`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#summaryview) property to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs13" %}
{% endif %}