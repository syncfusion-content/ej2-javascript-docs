---
layout: post
title: Localization in ##Platform_Name## Color Picker | Syncfusion
description: Learn how to localize the Syncfusion ##Platform_Name## Color Picker by translating the Apply, Cancel, and mode switcher text into cultures like Arabic and French.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Color Picker

## Localization

The [`Localization`](../api/base/l10n) library allows you to localize default text content of the ColorPicker. The ColorPicker component has static text for `control buttons (apply / cancel)` and `mode switcher` that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](../api/color-picker/index-default#locale) value and translation object.

The following list of properties and its values are used in the ColorPicker.

Locale key words |Text
-----|-----
Apply |Apply
Cancel |Cancel
ModeSwitcher |Switch Mode

### Loading translations

To load translation object in an application use [`load`](../api/base/l10n#load) function of [`L10n`](../api/base/l10n) class.

The below example demonstrates the ColorPicker in `Deutsch` culture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/how-to-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/how-to-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/how-to-cs3/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/colorpicker/how-to-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/how-to-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/how-to-cs3/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs3" %}
{% endif %}

## Right to Left - RTL

ColorPicker component has `RTL` support. It helps to render the ColorPicker from right-to-left direction. It improves the user experiences and accessibility for users who use right-to-left languages(Arabic, Farsi, Urdu, etc). This can be achieved by setting the [`enableRtl`](../api/color-picker/index-default#enablertl) property to `true`.

The following example illustrates how to enable right-to-left support in ColorPicker component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/rtl-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/rtl-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/colorpicker/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/colorpicker/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/rtl-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/rtl-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/colorpicker/rtl-cs1" %}
{% endif %}

## See Also

* [More information about localization](./../common/localization)