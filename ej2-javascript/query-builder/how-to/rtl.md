---
layout: post
title: How to enable RTL in ##Platform_Name## Query Builder UI | Syncfusion
description: Render the ##Platform_Name## Query Builder UI right-to-left for Arabic, Farsi, and Urdu users by setting the enableRtl property to true in your application.
platform: ej2-javascript
control: Rtl 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to enable RTL in ##Platform_Name## Query Builder UI

RTL provides an option to switch the text direction and layout of the Query Builder component from right-to-left. It improves the user experience and accessibility for right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL, set the [`enableRtl`](https://ej2.syncfusion.com/documentation/right-to-left) property to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs10" %}
{% endif %}