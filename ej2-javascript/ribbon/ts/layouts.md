---
layout: post
title: Ribbon Layouts in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Ribbon Layouts with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Layout
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Layouts in Ribbon control

The Ribbon offers to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/documentation/api/ribbon/#activelayout) property. The Ribbon control supports the following layouts:

## Classic layout

In classic layout, the Ribbon control organize the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/documentation/api/ribbon/#activelayout) property to [Classic](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon control renders in `Classic` layout.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/classic-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/classic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/classic-cs1" %}

## Simplified layout

In simplified layout, the Ribbon control organize the items and groups into a single row by setting the [activeLayout](https://ej2.syncfusion.com/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/simplified-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/simplified-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/simplified-cs1" %}

## Minimized State

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon control expands to its normal state when click on the tab header.

Also, you can render or programmatically change the Ribbon control to minimized state by setting the [isMinimized](https://ej2.syncfusion.com/documentation/api/ribbon/#isminimized) property to `true`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/minimize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/minimize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/minimize-cs1" %}