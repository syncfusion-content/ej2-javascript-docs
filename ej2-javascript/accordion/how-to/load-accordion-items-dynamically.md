---
layout: post
title: How to load ##Platform_Name## Accordion items dynamically | Syncfusion
description: Add Syncfusion ##Platform_Name## Accordion items dynamically from a data source using the addItem method on expand.
platform: ej2-javascript
control: Load accordion items dynamically 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to load accordion items dynamically in ##Platform_Name## Accordion

Accordion items can be added dynamically by passing the item and index value with the [`addItem`](../../api/accordion#additem) method.

In the following demo, new items are added dynamically when you expand an Accordion header using [`expanded`](../../api/accordion#expanded) event.

* Data is fetched from the data source and it is formatted as a JSON object with `header` and `content` fields.

* Here last index is calculated to append the new Accordion item at the end and the number of items are limited to 10, since the data bound have only 10 items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-items-dynamically-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-items-dynamically-cs1" %}
{% endif %}
