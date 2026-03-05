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

This section explains how to provide plain text, HTML markup, or other JavaScript UI controls as content for the Splitter.

## HTML Markup

The Splitter is a layout-based container control. Render pane content from existing HTML markup. Converting HTML markup into splitter panes provides an easy way to add pane content dynamically.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/htmlmarkup-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/htmlmarkup-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/htmlmarkup-cs3" %}

Also, provide pane content using inner HTML.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/innerhtml-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/innerhtml-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/innerhtml-cs3" %}

## JavaScript UI controls

Render any JavaScript UI controls and their native/control events inside a splitter pane.

You can refer [Accordion within splitter](https://ej2.syncfusion.com/demos/#/fluent2/splitter/accordion-navigation-menu.html) and [Listview within splitter](https://ej2.syncfusion.com/demos/#/fluent2/splitter/details-view.html) examples.

## Plain content

Add plain text as pane content using either innerHTML or [`content`](../api/splitter/panePropertiesModel#content) API.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/plaincontent-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/plaincontent-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/plaincontent-cs3" %}

## Pane content using selector

Set an HTML element as pane [`content`](../api/splitter/panePropertiesModel#content) using query selectors such as ID or CSS class selectors.

The following code demonstrates fetching an element from the document and loading it into a pane by its ID.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/selectorcontent-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/selectorcontent-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/selectorcontent-cs3" %}