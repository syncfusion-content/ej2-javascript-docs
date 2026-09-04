---
layout: post
title: Integrate Badge into ListView in ##Platform_Name## | Syncfusion
description: Learn how to integrate ##Platform_Name## Badge into ListView to indicate new notifications with color based on priority and auto-sized badges.
platform: ej2-javascript
control: Integrate Badge into ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate ##Platform_Name## Badge into ListView 

The Badge can be integrated with the `ListView` control to indicate new notifications with color based on priority.

Before integration, refer to the [`ListView`](https://ej2.syncfusion.com/documentation/listview/getting-started) documentation for setting up that control.

In the following sample, `default` badges are used and there is no need to customize the size. The Badge will automatically adjust its dimensions based on the container element.

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