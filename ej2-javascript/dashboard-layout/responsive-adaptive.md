---
layout: post
title: Responsive adaptive in ##Platform_Name## Dashboard Layout control | Syncfusion
description: Learn here all about Responsive adaptive in Syncfusion ##Platform_Name## Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Responsive adaptive
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Responsive adaptive in ##Platform_Name## Dashboard Layout control

The control is provided with built-in responsive support, allowing panels within the layout to adjust based on their parent element's dimensions to accommodate any resolution, which relieves the burden of building responsive dashboards.

The Dashboard Layout is designed to automatically adapt to lower resolutions by transforming the entire layout into a stacked configuration so that the panels are displayed in a vertical column. By default, whenever the screen resolution is 600px or lower, this layout transformation occurs. This transformation can be modified for any user-defined resolution by setting the [`mediaQuery`](../api/dashboard-layout/#mediaquery) property of the control.

The following sample demonstrates the usage of the [`mediaQuery`](../api/dashboard-layout/#mediaquery) property to convert the layout into a stacked one at a user-defined resolution. Here, whenever the window size reaches 700px or less, the layout becomes a stacked layout.

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

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to learn how to present and manipulate data.