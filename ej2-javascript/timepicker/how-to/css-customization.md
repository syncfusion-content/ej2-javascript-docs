---
layout: post
title: Css customization in ##Platform_Name## Timepicker control | Syncfusion
description: Learn here all about Css customization in Syncfusion ##Platform_Name## Timepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Css customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Css customization in ##Platform_Name## Timepicker control

TimePicker allows you to customize the textbox and popup list appearance to suit your application by using [`cssClass`](../../api/timepicker#cssclass) property.

The below sample demonstrates customization of text appearance in a textbox, popup button, and popup list along with hover and active
state by using `e-custom-style` class. Following is the list of available classes used to customize the entire TimePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-time-wrapper | Applied to TimePicker wrapper element. |
| e-timepicker |  Applied to input element and TimePicker popup element. |
| e-time-wrapper.e-timepicker | Applied to input element only. |
| e-input-group-icon.e-time-icon | Applied to popup button. |
| e-float-text | Applied to floating label text element. |
| e-popup | Applied to popup element. |
| e-timepicker.e-popup | Applied to TimePicker popup element only. |
| e-list-parent | Applied to popup UL element. |
| e-timepicker.e-list-parent | Applied to TimePicker popup UL element only. |
| e-list-item | Applied to LI elements. |
| e-hover | Applied to LI element hovering time. |
| e-active | Applied to active LI element. |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timepicker/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timepicker/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timepicker/how-to-cs1" %}
{% endif %}
