---
layout: post
title: Es5 pane content in ##Platform_Name## Splitter control | Syncfusion
description: Learn here all about Es5 pane content in Syncfusion ##Platform_Name## Splitter control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Es5 pane content 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 pane content in ##Platform_Name## Splitter control

Describes how to provide plain text, HTML markup, or other JavaScript UI controls as content of splitter.

## HTML Markup

Splitter is a layout container control. Existing HTML markup can be converted into splitter panes to add pane content dynamically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/htmlmarkup-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/htmlmarkup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/htmlmarkup-cs1" %}

Pane content can also be provided via inner HTML.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/innerhtml-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/innerhtml-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/innerhtml-cs1" %}

## JavaScript UI controls

Any JavaScript UI control, including its native and control-specific events, can be rendered inside a splitter pane.

Refer to the [Accordion within splitter](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/splitter/accordion-navigation-menu.html) and [Listview within splitter](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/splitter/details-view.html) examples.

## Plain content

Plain text can be added as pane content using inner HTML or the  [content](../api/splitter/panePropertiesModel#content) API.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/plaincontent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/plaincontent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/plaincontent-cs1" %}

## Pane content using selector

An HTML element can be assigned to the pane [`content`](../api/splitter/panePropertiesModel#content) property using query selectors (for example, ID or CSS class).

The following code demonstrates fetching an element by ID and assigning it to a pane.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/selectorcontent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/selectorcontent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/selectorcontent-cs1" %}