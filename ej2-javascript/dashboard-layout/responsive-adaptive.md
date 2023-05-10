---
layout: post
title: Responsive adaptive in ##Platform_Name## Dashboard layout control | Syncfusion
description: Learn here all about Responsive adaptive in Syncfusion ##Platform_Name## Dashboard layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Responsive adaptive 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Responsive adaptive in ##Platform_Name## Dashboard layout control

The control is provided with built-in responsive support, where panels within the layout get adjusted based on their parent element's dimensions to accommodate any resolution which relieves the burden of building responsive dashboards.

The dashboard layout is designed to automatically adapt with lower resolutions by transforming the entire layout into a stacked one so that the panels will be displayed in a vertical column. By default, whenever the screen resolution meets 600px or lower resolutions this layout transformation occurs. This transformation can be modified for any user defined resolution by defining the for the [`mediaQuery`](../api/dashboard-layout/#mediaquery) property of the component.

The following sample demonstrates the usage of [`mediaQuery`](../api/dashboard-layout/#mediaquery) property to turn out the layout into a stacked one in user defined resolution. Here, whenever, the window size reaches 700px or lesser, the layout becomes a stacked layout.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs3" %}
{% endif %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.