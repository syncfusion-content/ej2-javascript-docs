---
layout: post
title: Save restore in ##Platform_Name## Dashboard Layout control | Syncfusion
description: Learn here all about Save restore in Syncfusion ##Platform_Name## Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Save restore
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Save restore in ##Platform_Name## Dashboard Layout control

The current layout structure of the Dashboard Layout control can be obtained and saved to construct another dashboard with the same panel structure using the [`serialize`](../api/dashboard-layout/#serialize) public method of the control. This method returns the control's current panel settings, which can be used to construct a dashboard with the same layout settings.

The following sample demonstrates how to save and restore the state of the panels using the [`serialize`](../api/dashboard-layout/#serialize) method. Here, the panel's settings are stored on the save button click and restored to the previously saved panel settings on clicking the restore button.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/restore-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/restore-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/restore-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/restore-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/restore-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/restore-cs1" %}
{% endif %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to learn how to present and manipulate data.


## State Persistence in ##Platform_Name## Dashboard Layout Control

State persistence allows the Dashboard Layout Control to retain the panel positions ([`row`](../api/dashboard-layout/panelModel/#row), [`col`](../api/dashboard-layout/panelModel/#col)), width ([`sizeX`](../api/dashboard-layout/panelModel/#sizex)), and height ([`sizeY`](../api/dashboard-layout/panelModel/#sizey)) values in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp) for state maintenance, even if the browser is refreshed or if you navigate to another page within the browser. This feature is controlled through the [`enablePersistence`](../api/dashboard-layout/#enablepersistence) property, which is set to `false` by default. When set to `true`, the panel positions and sizes of the Dashboard Layout control will be retained even after refreshing the page.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/persistence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/persistence-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/persistence-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/persistence-cs1" %}
{% endif %}
