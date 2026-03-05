---
layout: post
title: Integrate avatar into badge in ##Platform_Name## Avatar | Syncfusion
description: Learn here all about Integrate avatar into badge in Syncfusion ##Platform_Name## Avatar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Integrate avatar into badge 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate the Avatar control into the Badge control.

The Badge control can be combined with the Avatar control to create notification avatars that display status indicators or notification counts. The default avatar (`.e-avatar`) and circle avatar (`.e-avatar-circle`) classes work seamlessly with notification badges (.e-badge-notification) to create visually distinct user indicators.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/badge-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/avatar/badge-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/badge-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/badge-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/avatar/badge-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/avatar/badge-cs1" %}
{% endif %}