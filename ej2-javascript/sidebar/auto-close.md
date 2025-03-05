---
layout: post
title: Auto close in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Auto close in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Auto close
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Auto close in ##Platform_Name## Sidebar control

The Sidebar often behaves differently on mobile displays compared to desktop displays. It features a functionality that allows it to be opened or closed based on the specified resolution. This behavior is controlled through the [`mediaQuery`](../api/sidebar/#mediaquery) property, allowing you to keep the Sidebar in an expanded or collapsed state only in user-defined resolutions.

In the following sample, [`mediaQuery`](../api/sidebar/#mediaquery) is used to close and open the Sidebar based on a specific resolution.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/web-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/web-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/web-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/web-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

 {% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/web-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/web-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/web-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/web-cs1" %}
{% endif %}

* In the following sample, the Sidebar will be in an expanded state only in resolutions below `400px`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/mobile-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/mobile-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/mobile-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/mobile-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/mobile-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/mobile-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/mobile-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/mobile-cs1" %}
{% endif %}
