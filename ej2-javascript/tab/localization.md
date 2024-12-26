---
layout: post
title: Localization in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Localization in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Tab control

The localization library allows you to localize the default text content of the Tabs to different cultures using the [`locale`](../api/tab#locale) property. In the Tab control, only the close button's tooltip text will be localized based on the culture. The close button is shown on the tab header when the [`showCloseButton`](../api/tab#showclosebutton) property is enabled.

| Locale key | en-US (default)  |
|------|------|
| closeButtonTitle |  Close |

## Loading translations

To load a translation object in an application, use the `load` function of the `L10n` class.

In the example below, the `French` culture is set for the Tab, which changes the close button's tooltip text.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/locale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/locale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/locale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/locale-cs1" %}
{% endif %}