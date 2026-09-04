---
layout: post
title: Orientation in ##Platform_Name## Tab | Syncfusion
description: Learn how to set tab orientation in the Syncfusion ##Platform_Name## Tab control to fit different layouts and screens.
platform: ej2-javascript
control: Orientation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Orientation in ##Platform_Name## Tab

This section explains how to modify the position and modes of the Tab header.

The Tab component allows you to place the header section in different positions using the [`headerPlacement`](../api/tab#headerplacement) property. The available positions are as follows:

* **Top**: Tab header items are arranged horizontally, and the content is displayed below the header.
* **Bottom**: Tab header items are arranged horizontally, and the content is displayed above the header.
* **Left**: Tab header items are arranged vertically, and the content is displayed to the right of the header.
* **Right**: Tab header items are arranged vertically, and the content is displayed to the left of the header.

The Tab component is also adaptable to the available space when tab items exceed the available space. You can customize the overflow modes using the [`overflowMode`](../api/tab#overflowmode) property. The available overflow modes are:

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