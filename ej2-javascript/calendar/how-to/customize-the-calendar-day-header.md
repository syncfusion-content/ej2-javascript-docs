---
layout: post
title: Customize the calendar day header in ##Platform_Name## Calendar control | Syncfusion
description: Learn here all about Customize the calendar day header in Syncfusion ##Platform_Name## Calendar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize the calendar day header 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize the calendar day header in ##Platform_Name## Calendar control

You can change the format of the day that to be displayed in header using [`dayHeaderFormat`](../../api/calendar#dayheaderformat) property. By default, the format is `Short`.

You can find the possible formats on below.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su ) in day header. |
| `Narrow` | Sets the single character of day name (like S ) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun ) in day header. |
| `Wide` | Sets the long format of day name (like Sunday ) in day header. |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/calendar/header-format-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/header-format-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/header-format-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/calendar/header-format-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/header-format-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/header-format-cs1" %}
{% endif %}