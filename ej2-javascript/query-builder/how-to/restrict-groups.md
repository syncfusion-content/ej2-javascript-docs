---
layout: post
title: Set max group count in ##Platform_Name## Query Builder | Syncfusion
description: Limit the ##Platform_Name## Query Builder UI group nesting depth by setting the maxGroupCount property so users cannot add more nested groups than allowed.
platform: ej2-javascript
control: Restrict groups 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set maximum group count in ##Platform_Name## Query Builder UI

You can restrict the condition set by defining the [`maxGroupCount`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#maxgroupcount) property. By default, the value is 5. In the below demo, the `maxGroupCount` is set to 2 .

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs9" %}
{% endif %}

> You can use this property in the mobile mode to restrict the nested group creation.
