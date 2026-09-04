---
layout: post
title: Localization in ##Platform_Name## Dialog | Syncfusion
description: Localize the ##Platform_Name## Dialog close button tooltip using the locale property and the L10n load function for different cultures.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Dialog

`Localization` library allows to localize the default text content of Dialog. In Dialog, The close button's tooltip text alone will be localize based on culture. By using [locale](https://ej2.syncfusion.com/documentation/api/dialog/index-default#locale) property you can the culture dynamically in dialog component.

| Locale key | en-US (default)  |
|------|------|
| close |  Close |

## Loading translations

To load a translation object in an application, use the `load` function of the `L10n` class. The locale keys for the Dialog are qualified under the `dialog` namespace, as shown in the table below.

| Locale key (under `dialog` namespace) | en-US (default) |
|------|------|
| close | Close |

In the below sample, the `French` culture (`fr-BE`) is set to the Dialog and changes the close button's tooltip text to "Fermer".
  
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
