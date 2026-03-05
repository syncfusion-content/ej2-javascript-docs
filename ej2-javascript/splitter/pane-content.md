---
layout: post
title: Pane content in ##Platform_Name## Splitter control | Syncfusion
description: Learn here all about Pane content in Syncfusion ##Platform_Name## Splitter control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Pane content 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pane content in ##Platform_Name## Splitter control

This section explains how to provide plain text content, HTML markup, or integrate other JavaScript UI controls as the content of a splitter pane.

## HTML Markup

Splitter is a layout container control. Existing HTML markup can be used directly as pane content. Converting an existing HTML element into a splitter pane is an easy way to add pane content dynamically.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/htmlmarkup-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/htmlmarkup-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/htmlmarkup-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/htmlmarkup-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/htmlmarkup-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/htmlmarkup-cs2" %}
{% endif %}

Also, pane content can be provided via the pane's inner HTML.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/innerhtml-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/innerhtml-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/innerhtml-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/innerhtml-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/innerhtml-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/innerhtml-cs2" %}
{% endif %}

## JavaScript UI controls

Any JavaScript UI controls can be rendered along with their native and control events within splitter as pane content.

{% if page.publishingplatform == "typescript" %}

Refer to the [Accordion within splitter](https://ej2.syncfusion.com/demos/#/fluent2/splitter/accordion-navigation-menu.html) and [Listview within splitter](https://ej2.syncfusion.com/demos/#/fluent2/splitter/details-view.html) examples.

{% elsif page.publishingplatform == "javascript" %}

Refer to the [Accordion within splitter](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/splitter/accordion-navigation-menu.html) and [Listview within splitter](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/splitter/details-view.html) examples.

{% endif %}


## Plain content

Plain text can be added to a pane using inner HTML or [`content`](../api/splitter/panePropertiesModel#content) API

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/plaincontent-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/plaincontent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/plaincontent-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/plaincontent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/plaincontent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/plaincontent-cs2" %}
{% endif %}

## Pane content using selector

HTML element can be set as as pane [`content`](../api/splitter/panePropertiesModel#content) using the query selectors such as ID or CSS class selectors.

The following code demonstrates how to fetch an element from the document and load it to pane using its ID.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/selectorcontent-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/selectorcontent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/selectorcontent-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/selectorcontent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/selectorcontent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/selectorcontent-cs2" %}
{% endif %}