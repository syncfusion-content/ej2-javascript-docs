---
layout: post
title: Customization in ##Platform_Name## DateTime Picker | Syncfusion
description: Customize ##Platform_Name## DateTime Picker day cells with the renderDayCell event to disable weekends, highlight dates, or apply custom UI styling.
platform: ej2-javascript
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customization in ##Platform_Name## DateTime Picker

The DateTime Picker is available for UI customization that can be achieved by using the available properties and events in the component.

## Day and Time Cell format

The DateTime Picker is available for UI customization based on the application requirements. It can be achieved by using the [`renderDayCell`](../api/datetimepicker/renderDayCellEventArgs#renderdaycelleventargs) event that provides an option to customize each day cell on rendering.

The following example disables the weekends of every month by using the `renderDayCell` event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs2" %}
{% endif %}

## Adding mandatory asterisk to placeholder and float label

A mandatory `asterisk(*)` can be added to the placeholder and float label using the <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> class.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/asterisk-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/asterisk-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/asterisk-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/asterisk-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/asterisk-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/asterisk-cs1" %}
{% endif %}

## See Also

* [How to disable the DateTime Picker control](./how-to/disable-the-datetimepicker-component)
* [How to customize the DateTime Picker day header](./how-to/customize-the-datetimepicker-day-header)