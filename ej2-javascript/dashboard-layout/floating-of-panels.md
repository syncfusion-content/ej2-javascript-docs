---
layout: post
title: Floating panels in ##Platform_Name## Dashboard Layout | Syncfusion
description: Learn here all about Floating of panels in Syncfusion ##Platform_Name## Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Floating of panels
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Floating of panels in ##Platform_Name## Dashboard Layout control

The floating functionality of the control allows effective use of the entire layout for panel placement. If the floating functionality is enabled, the panels within the layout float upwards automatically to occupy the empty cells available in previous rows. This functionality can be enabled or disabled using the [`allowFloating`](../api/dashboard-layout#allowfloating) property of the control.

The following sample shows enabling or disabling panel floating in the Dashboard Layout.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/floating-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/floating-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/floating-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/floating-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/floating-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/floating-cs1" %}
{% endif %}

{% if page.publishingplatform == "typescript" %}

> Refer to the [TypeScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [TypeScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/fluent2/dashboard-layout/default.html) to knows how to present and manipulate data.

{% elsif page.publishingplatform == "javascript" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.

{% endif %}