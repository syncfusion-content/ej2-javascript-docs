---
layout: post
title: Set the nested accordion in ##Platform_Name## Accordion control | Syncfusion
description: Learn here all about Set the nested accordion in Syncfusion ##Platform_Name## Accordion control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set the nested accordion 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set the nested accordion in ##Platform_Name## Accordion control

Accordion supports to render `nested` level of Accordion by using content property. You can give nested Accordion content inside the parent Accordion content property by using `id` of nested element. The nested Accordion can be rendered with the use of provided events, such as [`clicked`](../../api/accordion#clicked) and [`expanding`](../../api/accordion#expanding).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs5" %}
{% endif %}