---
layout: post
title: Integrate badge into ListView in ##Platform_Name## Badge | Syncfusion
description: Learn how to integrate ##Platform_Name## Badge into ListView to indicate new notifications with color based on priority and auto-sized badges.
platform: ej2-javascript
control: Integrate badge into ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate badge into ListView in ##Platform_Name## Badge

The badges can be integrated with the `ListView` control to indicate new notification with color based on priority.

In the following sample, `default` badges are used and there is no need to customize the badge size. The control will automatically adjust the size based on the container element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/badge/listview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/listview-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/listview-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/listview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/badge/listview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/listview-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/listview-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/badge/listview-cs1" %}
{% endif %}