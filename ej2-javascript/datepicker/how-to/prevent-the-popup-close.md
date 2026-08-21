---
layout: post
title: How to prevent popup close in ##Platform_Name## DatePicker | Syncfusion
description: Keep the ##Platform_Name## DatePicker popup open across user actions by calling preventDefault on the PreventableEventArgs from popup events.
platform: ej2-javascript
control: Prevent the popup close 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent popup close in ##Platform_Name## DatePicker

To prevent the DatePicker popup from closing, use the preventDefault method from the `PreventableEventArgs`.

The following example demonstrates how to prevent the popup from closing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs7" %}
{% endif %}
