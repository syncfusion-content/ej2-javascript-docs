---
layout: post
title: Resize the panel dynamically in ##Platform_Name## Dashboard layout control | Syncfusion
description: Learn here all about Resize the panel dynamically in Syncfusion ##Platform_Name## Dashboard layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Resize the panel dynamically 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resize the panel dynamically in ##Platform_Name## Dashboard layout control

In Dashboard Layout, the height of a panel is based on its width. While resizing the panel, the height and width should be changed.

To resize the height of a panel alone, the [resizePanel]( ../../api/dashboard-layout/#resizepanel) method is used. In this case, the [cellAspectRatio](../../api/dashboard-layout/#cellaspectratio) property configures the height of the cells based on the cell width to height ratio (cell width/cell height ratio) when the height will not be completely adjusted to `sizeY` value.

Refer to the following code snippet to determine the height of a panel.

  ```ts
  let panelContent: HTMLElement = document.getElementById("panelContent");
  let panelHeight: number = panelContent.offsetHeight;
  ```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/dynamic-resize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/dynamic-resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/dynamic-resize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/dynamic-resize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/dynamic-resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/dynamic-resize-cs1" %}
{% endif %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.