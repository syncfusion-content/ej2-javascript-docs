---
layout: post
title: Integrate badge into listview in ##Platform_Name## Badge control | Syncfusion
description: Learn here all about Integrate badge into listview in Syncfusion ##Platform_Name## Badge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Integrate badge into listview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate badge into listview in ##Platform_Name## Badge control

The badges can be integrated with the `listview` component to indicate new notification with colour based on priority.

In the following sample, `default` badges are used and there is no need to customize the badge size. The component will automatically adjust the size based on the container element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/badge/listview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/listview-cs1/index.html %}
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
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/badge/listview-cs1" %}
{% endif %}