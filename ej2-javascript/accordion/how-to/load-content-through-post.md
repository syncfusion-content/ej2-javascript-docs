---
layout: post
title: Load content through post in ##Platform_Name## Accordion control | Syncfusion
description: Learn here all about Load content through post in Syncfusion ##Platform_Name## Accordion control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Load content through post 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Load content through post in ##Platform_Name## Accordion control

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
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-ajax-cs1" %}
{% endif %}