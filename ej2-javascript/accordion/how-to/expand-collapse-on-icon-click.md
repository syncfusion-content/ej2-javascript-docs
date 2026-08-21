---
layout: post
title: How to expand/collapse on icon click in ##Platform_Name## | Syncfusion
description: Restrict Syncfusion ##Platform_Name## Accordion expand and collapse to occur only when the toggle icon is clicked.
platform: ej2-javascript
control: Customize expand collapse actions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to expand or collapse on icon click in ##Platform_Name## Accordion

You can restrict the expansion and collapse of an Accordion item to occur only when the toggle icon is clicked. This can be achieved by using the Accordion's [`expanding`](https://ej2.syncfusion.com/documentation/api/accordion#expanding) event and binding a `click` event specifically to the toggle icon.

By intercepting the [`expanding`](https://ej2.syncfusion.com/documentation/api/accordion#expanding) event, you can control when the Accordion items should expand or collapse based on user interactions. Using `args.cancel = true`, you can prevent the default behavior unless the toggle icon itself is clicked.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-actions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-actions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-actions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-actions-cs1" %}
{% endif %}