---
layout: post
title: How to detect change in ##Platform_Name## Dropdown List | Syncfusion
description: Detect whether a Syncfusion ##Platform_Name## Dropdown List value change came from user interaction or code using the change event's isInteracted arg.
platform: ej2-javascript
control: Value change 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to detect value change in ##Platform_Name## Dropdown List

You can check whether a value change occurred manually or programmatically by using the `isInteracted` argument of the [`change`](../../api/drop-down-list#change) event.

The following example demonstrates how to check whether a value change was triggered manually or programmatically.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/how-to/isinteraction-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/isinteraction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/isinteraction-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/how-to/isinteraction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/isinteraction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/isinteraction-cs1" %}
{% endif %}
