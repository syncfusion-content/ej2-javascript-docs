---
layout: post
title: Multiple sidebar in same position in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Multiple sidebar in same position in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Multiple sidebar in same position 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multiple sidebar in same position in ##Platform_Name## Sidebar control

You can initialize Sidebar at the left positions by using the [`position`](../../api/sidebar/#position) property. It will automatically adjust the width of the main content.

You can also initialize the another sidebar on the same position by adjusting the width of the first sidebar.

The following example demonstrate how to align the multiple sidebar on the same position.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-same-position-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-same-position-cs1" %}
{% endif %}