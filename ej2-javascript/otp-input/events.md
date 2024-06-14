---
layout: post
title: Events in ##Platform_Name## OTP Input control | Syncfusion
description: Learn here all about Events in Syncfusion ##Platform_Name## OTP Input control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: OTP Input 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## OTP Input control

This section describes the OTP Input events that will be triggered when appropriate actions are performed. The following events are available in the OTP Input control.

## created

The OTP Input control triggers the [created](../api/otp-input#created) event when the control rendering is completed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/otp-input/events/created/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/otp-input/events/created/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## focus 

The OTP Input control triggers the [focus](../api/otp-input#focus) event when the OTP Input is focused. The [OtpFocusEventArgs](../api/otp-input/otpFocusEventArgs/) passed as an event argument provides the details of the focus event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/otp-input/events/focus/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/focus/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/otp-input/events/focus/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/focus/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## blur

The OTP Input control triggers the [blur](../api/otp-input#blur) event when the OTP Input is focused out. The [OtpFocusEventArgs](../api/otp-input/otpFocusEventArgs/) passed as an event argument provides the details of the blur event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/otp-input/events/blur/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/blur/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/otp-input/events/blur/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/blur/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## input

The OTP Input control triggers the [input](../api/otp-input#input) event when the value of each OTP Input is changed. The [OtpInputEventArgs](../api/otp-input/otpInputEventArgs/) passed as an event argument provides the details of the each value is changed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/otp-input/events/input/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/input/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/otp-input/events/input/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/input/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## valueChanged

The OTP Input control triggers the [valueChanged](../api/otp-input#valuechanged) event when the value of the OTP Input is changed and matching the OTP Input length. The [OtpChangedEventArgs](../api/otp-input/otpChangedEventArgs/) passed as an event argument provides the details when value is changed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/otp-input/events/valueChanged/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/valueChanged/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/otp-input/events/valueChanged/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/valueChanged/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

Below example demonstrates the valueChanged event of the OTP Input control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/otp-input/events/valueChangedEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/valueChangedEvent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/events/valueChangedEvent" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/otp-input/events/valueChangedEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/events/valueChangedEvent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/events/valueChangedEvent" %}
{% endif %}
