---
layout: post
title: Setting header of panels in ##Platform_Name## Dashboard Layout control | Syncfusion
description: Learn here all about Setting header of panels in Syncfusion ##Platform_Name## Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Setting header of panels
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Setting header of panels in ##Platform_Name## Dashboard Layout control

The Dashboard Layout control is mostly used to represent data for monitoring or managing a process. These data or any HTML template can be placed as the content of a panel using the `content` property. Additionally, a word or phrase summarizing the panel’s content can be added as the header on the top of each panel using the `header` property of the panel.

The following sample demonstrates how to add content for each panel using the header and content properties of the panels.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/header-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/header-cs1" %}
{% endif %}

## Placing controls as content of panels

In a dashboard, controls like charts, grids, maps, gauges, etc. can be used to present complex data. Any such controls can be placed as panel content by assigning the corresponding control element as the `content` of the panel.

The following sample demonstrates how to add EJ2 Chart controls as the `content` for each panel in the Dashboard Layout control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/content-1-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/content-1-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/content-1-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/content-1-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/content-1-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/content-1-cs1" %}
{% endif %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to know how to present and manipulate data.