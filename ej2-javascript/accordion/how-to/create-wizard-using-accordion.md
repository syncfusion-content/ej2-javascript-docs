---
layout: post
title: How to create wizard using ##Platform_Name## Accordion | Syncfusion
description: Build a multi-step form wizard with the Syncfusion ##Platform_Name## Accordion by enabling and disabling items dynamically.
platform: ej2-javascript
control: Create wizard using accordion 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to create wizard using accordion in ##Platform_Name## Accordion

Accordion items can be disabled dynamically by passing the index and boolean value with the [`enableItem`](../../api/accordion#enableitem) method and also dynamically expand the item using [`expandItem`](../../api/accordion#expanditem) method.

The below Wizard sample is designed for Online Shopping model. In this, each Accordion item is integrated with required components to fill
the details and designed for getting user details and making payment at the end. Each field is provided with validation for all mandatory
option to enable/disable to next Accordion.  In below sample, accordion items can be disabled dynamically with [`enableItem`](../../api/accordion#enableitem) method using [`created`](../../api/accordion#created) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-disable-item-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-disable-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-disable-item-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-disable-item-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-disable-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-disable-item-cs1" %}
{% endif %}
