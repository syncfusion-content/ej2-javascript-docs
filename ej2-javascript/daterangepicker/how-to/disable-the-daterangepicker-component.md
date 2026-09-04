---
layout: post
title: How to disable it in ##Platform_Name## DateRangePicker | Syncfusion
description: Inactivate the ##Platform_Name## DateRangePicker by setting the enabled property to false to prevent all user interaction and form submission.
platform: ej2-javascript
control: Disable the daterangepicker component 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to disable it in ##Platform_Name## DateRangePicker

The DateRangePicker can be inactivated on a page by setting the [`enabled`](../../api/daterangepicker#enabled) value as false, which will disable the component completely from all interactions including in form post. The following example demonstrates the disabled component.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs6" %}
{% endif %}