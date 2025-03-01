---
layout: post
title: Use dynamic templates in ##Platform_Name## ListView based on device | Syncfusion
description: Learn here all about Dynamic templates in listview based on device in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dynamic templates in listview based on device
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic templates in listview based on device in ##Platform_Name## Listview control

The Syncfusion Essential JS 2 controls are both desktop and mobile-friendly, allowing the use of Syncfusion controls in various environments. The control templates are flexible and can differ depending on the device being used.

## Integration

In the ListView control, [`template`](../../api/list-view/#template) support can be utilized to create responsive interfaces. While the control wrapper is responsive on all devices, sometimes template contents need to be dynamically adjusted with customizable dimensions on the sample side. To ensure the template content aligns responsively in both mobile and desktop modes, CSS customization on the sample side is essential. Two templates are provided for mobile and desktop modes, with device mode detection handled by the browser module imported from the ej2-base package.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/dynamic-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/dynamic-template-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/dynamic-template-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/dynamic-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/dynamic-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/dynamic-template-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/dynamic-template-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/dynamic-template-cs1" %}
{% endif %}