---
layout: post
title: How to add icon to the ##Platform_Name## Accordion header | Syncfusion
description: Add a custom icon CSS class to the Syncfusion ##Platform_Name## Accordion header using the iconCss property for visual cues.
platform: ej2-javascript
control: Add icon to accordion header 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add icon to accordion header in ##Platform_Name## Accordion

You can add the icon custom css class to the Accordion header using ['iconCss'](../../api/accordion/accordionItem#iconcss) property and also add css styles to the defined class.  The accordion icon element is rendered before the header text in the DOM element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-icon-cs1" %}
{% endif %}
