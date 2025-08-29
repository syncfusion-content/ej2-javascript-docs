---
layout: post
title: Timezone Behavior in ##Platform_Name## Datepicker | Syncfusion
description: Learn here all about Timezone Behavior in Syncfusion ##Platform_Name## Datepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timezone Behavior 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Timezone Behavior in DatePicker Control

The DatePicker component displays and maintains the selected date value based on the client system’s current time zone. When a user selects a value, it is stored and rendered using the local time zone of the system at the time of selection. This ensures that the value remains consistent and predictable during user interaction.

N> if the system time zone is changed dynamically after a value is selected, the DatePicker will **not update or shift** the selected value. The component preserves the original selection, ensuring a stable and reliable user experience.

## Using `serverTimezoneOffset`

The `serverTimezoneOffset` property allows you to specify the server's time zone offset from UTC in **hours** or **fractional hours**. This is useful when binding values from the server to ensure they are interpreted correctly on the client side.

### Key Points

- The value should be a number representing the offset from UTC.
- Examples:
  - `-5` → UTC-5 (Eastern Standard Time)
  - `-4.5` → UTC-4:30 (Afghanistan Time)
  - `5.5` → UTC+5:30 (India Standard Time)

N> The `serverTimezoneOffset` property is applicable **only for pre-bound values** (i.e., values set during initialization or data binding). It does **not affect** values selected by the user during runtime.

The following example demonstrates the DatePicker in `German` culture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/timezone-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/timezone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/timezone-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/timezone-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/timezone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/timezone-cs1" %}
{% endif %}