---
layout: post
title: Orientation in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Orientation in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Orientation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Orientation in ##Platform_Name## Tab control

This section explains how to modify the position and modes of the Tab header.

The Tab component allows placing the header section at different positions using the [`headerPlacement`](../api/tab#headerplacement) property. The available positions are as follows:

* **Top**: Tab header items are arranged horizontally, and their content is placed below the header.
* **Bottom**: Tab header items are arranged horizontally, and their content is placed above the header.
* **Left**: Tab header items are arranged vertically, and their content is placed to the right of the header.
* **Right**: Tab header items are arranged vertically, and their content is placed to the left of the header.

The Tab component is also adaptable to the available space when the tab items exceed the view space. You can customize the overflow modes using the [`overflowMode`](../api/tab#overflowmode) property. The available modes are:

* Scrollable
* Popup

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/orientation-tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/orientation-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/orientation-tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/orientation-tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/orientation-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/orientation-tab-cs1" %}
{% endif %}