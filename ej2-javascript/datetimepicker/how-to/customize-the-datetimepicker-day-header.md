---
layout: post
title: How to set day header in ##Platform_Name## DateTime Picker | Syncfusion
description: Change the day name format in the ##Platform_Name## DateTime Picker header using the dayHeaderFormat property with Short, Narrow, Abbreviated, or Wide options.
platform: ej2-javascript
control: Customize the DateTime Picker day header 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set day header in ##Platform_Name## DateTime Picker

The format of the day displayed in the header can be changed using the [`dayHeaderFormat`](../../api/datetimepicker#dayheaderformat) property. By default, the format is `Short`.

The possible formats are listed below.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su) in day header. |
| `Narrow` | Sets the single character of day name (like S) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun) in day header. |
| `Wide` | Sets the long format of day name (like Sunday) in day header. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/header-format-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/header-format-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/header-format-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/header-format-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/header-format-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/header-format-cs1" %}
{% endif %}
