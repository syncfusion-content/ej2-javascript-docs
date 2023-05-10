---
layout: post
title: Add nested tabs in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Add nested tabs in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add nested tabs 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add nested tabs in ##Platform_Name## Tab control

Tab supports to render the nested level of Tabs by using `content` property. You can add the nested Tab element inside the parent Tab `content` property. To render the nested Tab, initialize the component using the id of Tab from a [`selected`](../../api/tab#selected) event handler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-cs1" %}
{% endif %}
