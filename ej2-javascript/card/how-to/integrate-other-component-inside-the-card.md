---
layout: post
title: Integrate component in Card in ##Platform_Name## | Syncfusion
description: Embed any Syncfusion control inside Syncfusion ##Platform_Name## Card content to build composite layouts, like a To-Do list with ListView.
platform: ej2-javascript
control: Integrate other component inside the card 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate component in Card in ##Platform_Name## Card

Any component can be integrated inside the card element to create composite UI layouts. In this example, the ListView component is placed inside the card content area to demonstrate a To-Do list implementation.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-with-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-with-list-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-with-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-with-list-cs1" %}
{% endif %}