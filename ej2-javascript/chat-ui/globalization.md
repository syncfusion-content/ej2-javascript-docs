---
layout: post
title: Globalization in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about Globalization with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## Chat UI control

## Localization

The Chat UI can be localized to any culture by defining the text of the Chat UI in the corresponding culture. The default locale of the Chat UI is `en` (English). The following table represents the default text of the Chat UI in `en` culture.

|KEY|Text|
|----|----|
|oneUserTyping|{0} is typing|
|twoUserTyping|{0} and {1} are typing|
|threeUserTyping|{0}, {1}, and {2} other are typing|
|multipleUsersTyping|{0}, {1}, and {2} others are typing|

The below example shows adding the German culture locale(`de-DE`)

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/globalization/localization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/localization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/globalization/localization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/localization" %}
{% endif %}

## RTL

RTL provides an option to switch the text direction and layout of the Chat UI control from right to left by setting the `enableRtl` property to `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/globalization/enableRtl/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/globalization/enableRtl/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/enableRtl" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/globalization/enableRtl/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/globalization/enableRtl/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/enableRtl" %}
{% endif %}
