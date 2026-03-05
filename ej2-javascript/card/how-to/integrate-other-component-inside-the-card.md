---
layout: post
title: Integrate component in card for ##Platform_Name## using Syncfusion
description: Learn here all about Integrate other component inside the card in Syncfusion ##Platform_Name## Card control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Integrate other component inside the card 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate component inside card in ##Platform_Name## Card control

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