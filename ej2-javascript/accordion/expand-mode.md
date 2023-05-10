---
layout: post
title: Expand mode in ##Platform_Name## Accordion control | Syncfusion
description: Learn here all about Expand mode in Syncfusion ##Platform_Name## Accordion control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Expand mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Expand mode in ##Platform_Name## Accordion control

 The [JavaScript Accordion](https://www.syncfusion.com/javascript-ui-controls/js-accordion) supports the two listed types of expand modes while expanding or collapsing the item.

* Single
* Multiple

## Single

The property enables to expand only one Accordion item at a time. If you expand any new item, the previously expanded one is collapsed and new item changed to expanded state.

You can also choose which accordion pane is expanded state at initial rendering by enabling the [`expanded`](../api/accordion/accordionItemModel#expanded) property on accordion items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs2" %}
{% endif %}

## Multiple

Default [`expandMode`](../api/accordion#expandmode) of the Accordion is `Multiple`. It enables you to expand more than one Accordion item at a time. Expand/collapse action can also be toggled by clicking on it again. For example, expanded item is collapsed when you click on it again.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs3" %}
{% endif %}

## See Also

* [How to keep single pane open always](./how-to/to-keep-single-pane-open-always)