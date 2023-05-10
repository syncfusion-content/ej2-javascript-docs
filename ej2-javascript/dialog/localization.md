---
layout: post
title: Localization in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Localization in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Dialog control

`Localization` library allows to localize the default text content of Dialog. In Dialog, The close button's tooltip text alone will be localize based on culture. By using [locale](../api/dialog/#locale) property you can the culture dynamically in dialog component.

| Locale key | en-US (default)  |
|------|------|
| close |  Close |

## Loading translations

To load translation object in an application use `load` function of `L10n` class.

In the below sample, `French` culture is set to Dialog and change the close button's tooltip text.
  
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/locale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/locale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/locale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/locale-cs1" %}
{% endif %}
