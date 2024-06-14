---
layout: post
title: Placeholder in ##Platform_Name## OTP Input control | Syncfusion
description:  Checkout and learn about Placeholder with ##Platform_Name## OTP Input control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: OTP Input
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Placeholder in ##Platform_Name## OTP Input control

The placeholder in OTP Input specifies the text that is shown as a hint or placeholder until the user enters a value in the input field. It acts as a guidance for the users regarding the expected input format or purpose of the input field.

You can set the placeholder text by using the [placeholder](../api/otp-input#placeholder) property. Additionally, when providing a single character as the placeholder value all input fields within the OTP Input control will display the same character.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_char" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_char" %}
{% endif %}

When a placeholder with multiple placeholder characters is provided each input field will display characters from the placeholder string in sequence based on the available OTP input length.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_string" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_string" %}
{% endif %}