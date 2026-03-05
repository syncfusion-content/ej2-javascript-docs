---
layout: post
title: Set header panels in ##Platform_Name## Dashboard Layout | Syncfusion
description: Learn here all about Setting header of panels in Syncfusion ##Platform_Name## Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Setting header of panels
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Setting header of panels in ##Platform_Name## Dashboard Layout control

The Dashboard Layout control is primarily used to represent data for monitoring or managing processes. Data or any HTML template can be placed as the panel content of a panel using the [`content`](../../api/dashboard-layout/panelModel#content)  property. A word or phrase summarizing the panel’s content can be added as the header on the top of each panel using the [`header`](../../api/dashboard-layout/panelModel#header)  property of the panel.

The following sample shown how to add content for each panel using the header and content properties of the panels.

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

Controls such as charts, grids, maps, and gauges can present complex data in a dashboard. These controls can be used as panel content by assigning the corresponding control element to the [`content`](../../api/dashboard-layout/panelModel#content)property of the panel.

The following sample demonstrates how to add EJ2 Chart controls as the [`content`](../../api/dashboard-layout/panelModel#content) for panels in the Dashboard Layout control.

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

{% if page.publishingplatform == "typescript" %}

> Refer to the [TypeScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [TypeScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/fluent2/dashboard-layout/default.html) to knows how to present and manipulate data.

{% elsif page.publishingplatform == "javascript" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.

{% endif %}