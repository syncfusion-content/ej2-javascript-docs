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

This section explains how to provide plain text content or HTML markup or integrate other JavaScript UI controls as content of splitter.

## HTML Markup

Splitter is a layout based container control. You can render the pane contents from existing HTML markups. Converting HTML markup as splitter pane is easy way to add the panes content dynamically.

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

Also, you can provide the pane content inner HTML.

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

You can render any JavaScript UI controls along with their native and control events within splitter as pane content.

You can refer [Accordion within splitter](https://ej2.syncfusion.com/demos/#/material/splitter/accordion-navigation-menu.html) and [Listview within splitter](https://ej2.syncfusion.com/demos/#/material/splitter/details-view.html) examples.

## Plain content

You can add the plain text as a pane contents using either inner HTML or [`content`](../api/splitter/panePropertiesModel/#content) API

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

You can set HTML element as pane [`content`](../api/splitter/panePropertiesModel/#content) using the query selectors such as ID or CSS class selectors.

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