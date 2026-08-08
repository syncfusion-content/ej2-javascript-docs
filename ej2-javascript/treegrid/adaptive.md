---
layout: post
title:  ##Platform_Name## TreeGrid Adaptive UI | Syncfusion
description: Learn how to enable adaptive UI in ##Platform_Name## TreeGrid for optimized mobile, tablet, and small-screen user experiences.
platform: ej2-javascript
control: Adaptive 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adaptive UI in ##Platform_Name## TreeGrid

The Tree Grid user interface (UI) was redesigned to provide an optimal viewing experience and improve usability on small screens. This interface will render the filter, edit dialog and other features adaptively. For example, Filtering opens the UI for user in a pop-up occupying the entire screen.

To make the tree grid adaptive, set the [`enableAdaptiveUI`](../api/treegrid#enableAdaptiveUI) to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/adaptive-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/adaptive-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/adaptive-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/adaptive-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/adaptive-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/adaptive-cs1" %}
{% endif %}

> Please refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to learn how to present and manipulate data.
