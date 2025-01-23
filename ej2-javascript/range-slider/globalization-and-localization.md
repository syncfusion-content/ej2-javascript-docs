---
layout: post
title: Globalization and localization in ##Platform_Name## Range Slider control | Syncfusion
description: Learn here all about Globalization and localization in Syncfusion ##Platform_Name## Range Slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Globalization and localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Globalization and localization in ##Platform_Name## Range Slider control

## Localization

The [`Localization`](../api/base/l10n) library allows you to localize the default text content of the Range Slider control. The Range Slider control has static text for some features (such as increase and decrease buttons) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](../api/slider/#locale) value and translation object.

The following list of properties and their values are used in the Range Slider:

Locale keywords |Text
-----|-----
Increase | Increase
Decrease | Decrease

### Loading translations

To load the translation object in an application, use the [`load`](../api/base/l10n/#load) function of the [`L10n`](../api/base/l10n) class.

The following example demonstrates the Range Slider in the `Deutsch` culture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/localization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/localization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/localization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/localization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/localization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/localization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/localization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/localization-cs1" %}
{% endif %}

## See Also

* [Internationalization](../common/internationalization/)
* [Localization](../common/localization/)