---
layout: post
title: Formats in ##Platform_Name## Numerictextbox control | Syncfusion
description: Learn here all about Formats in Syncfusion ##Platform_Name## Numerictextbox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Formats 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Formats in ##Platform_Name## Numerictextbox control

You can format the value of NumericTextBox using [`format`](../api/numerictextbox/#format) property. The value will be displayed in the specified format when the component is in focused out state. The format string supports both the [standard numeric format string](../common/internationalization#supported-format-string/) and [custom numeric format string](../common/internationalization#custom-number-formatting-and-parsing/).

## Standard formats

From the [standard numeric formats](../common/internationalization#supported-format-string/), you can use the numeric related format specifiers such as `n`,`p` and `c` in the NumericTextBox component. By using these format specifiers, you can achieve the percentage and currency textbox behavior also.

The below example demonstrates percentage and currency formats.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/numeric-textbox/standard-format-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/standard-format-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/standard-format-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/numeric-textbox/standard-format-cs1" %}

## Custom formats

From the [custom numeric format string](../common/internationalization#custom-number-formatting-and-parsing/), you can provide any custom format by combining one or more custom specifiers.

The below examples demonstrate format the value by using currency format string `#` and `0`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/numeric-textbox/custom-format-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/custom-format-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/custom-format-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/numeric-textbox/custom-format-cs1" %}
