---
layout: post
title: Quick Info Template in ##Platform_Name## Scheduler | Syncfusion
description: Learn how to customize the Quick Info popup in the Syncfusion ##Platform_Name## Scheduler using a template to change its appearance and content.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Quick Info Template in ##Platform_Name## Scheduler

The Scheduler control displays a pop-up window (Quick Info) when users click on cells or appointments. By default, this Quick Info shows standard information. You can customize its appearance and content using templates to better suit your application requirements.

This guide demonstrates how to create custom templates for Quick Info pop-ups that appear when clicking on both empty time cells and appointments in the Scheduler control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/how-to-quick-info-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/how-to-quick-info-template-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/how-to-quick-info-template-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/how-to-quick-info-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/how-to-quick-info-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/how-to-quick-info-template-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/how-to-quick-info-template-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/how-to-quick-info-template-cs1" %}
{% endif %}