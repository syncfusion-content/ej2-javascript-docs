---
layout: post
title: Globalization in ##Platform_Name## AI Assist | Syncfusion®
description: Localize the Syncfusion® ##Platform_Name## AI Assist to any culture and enable right-to-left layout using the enableRtl property.
platform: ej2-javascript
control: Inline AI Assist 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## AI Assist

## Localization

The Inline AI Assist can be localized to any culture by defining the text of the Inline AI Assist in the corresponding culture. The default locale is `en` (English). The following table represents the default text of the Inline AI Assist in `en` culture.

|KEY|Text|
|----|----|
|send|Send|
|stopResponseText|Stop Responding|
|thinkingIndicator|Thinking|
|editingIndicator|Editing|

The below example shows adding the German culture locale(`de-DE`)

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/globalization/localization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/globalization/localization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/globalization/localization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/globalization/localization" %}
{% endif %}

## RTL

RTL provides an option to switch the text direction and layout of the Inline AI Assist control from right to left by setting the [enableRtl](../api/inline-ai-assist#enablertl) property to `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/globalization/enable-rtl/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/globalization/enable-rtl/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/globalization/enable-rtl" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/globalization/enable-rtl/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/globalization/enable-rtl/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/globalization/enable-rtl" %}
{% endif %}
