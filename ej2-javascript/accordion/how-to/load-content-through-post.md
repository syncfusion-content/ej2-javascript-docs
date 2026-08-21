---
layout: post
title: Load content through post in ##Platform_Name## Accordion | Syncfusion
description: Load external content into the Syncfusion ##Platform_Name## Accordion panels dynamically through AJAX POST requests.
platform: ej2-javascript
control: Load content through post 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to load content through post in ##Platform_Name## Accordion

Accordion supports to load external contents through `AJAX` library. Refer the below steps.

* Import the `Ajax` module from `ej2-base` and initialize with URL path.

* Get data from the Ajax Success event to initialize Accordion with retrieved external path data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-ajax-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-ajax-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="ajax.html" %}
{% include code-snippet/accordion/accordion-ajax-cs1/ajax.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-ajax-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-ajax-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-ajax-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="ajax.html" %}
{% include code-snippet/accordion/accordion-ajax-cs1/ajax.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-ajax-cs1" %}
{% endif %}