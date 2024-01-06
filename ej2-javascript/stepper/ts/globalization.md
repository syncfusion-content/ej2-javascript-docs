---
layout: post
title: Globalization in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Globalization with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## Stepper control

## Localization

The Localization library allows you to localize the default text content of the Stepper. You can change the static text content used for the `optional` property to other cultures (Arabic, Deutsch, French, etc.) by defining the `locale` value and its translation object.

| Locale key | en-US (default) |
|-----|-----|
| optional | Optional |

In this example, the `French` culture is set to Stepper and the default text is updated with the content defined by the locale key.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/localization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/localization/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/localization/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/localization" %}

## RTL

RTL provides an option to switch the text direction and layout of the Stepper control from right to left by setting the [enableRtl](https://ej2.syncfusion.com/documentation/api/stepper#enablertl) property to `true`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/rtl/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/rtl/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/rtl/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/rtl" %}