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

The Syncfusion Chat UI control is designed with globalization in mind, allowing it to serve users in various regions and languages.

## Localization

The Chat UI control can be localized for any culture. The default language is English (en). To adapt the control to another language, you can provide translations for the keys in its default culture file. The placeholders {0} and {1} represent user names, while {2} is used for a numeric count of additional users.

The following table lists the localization keys, their default English text, and an example of their usage.
 
| Key | Default Text | Example Usage |
|---|---|---|
| `oneUserTyping` | `{0} is typing` | `Suresh is typing` |
| `twoUserTyping`| `{0} and {1} are typing` | `Suresh and Gopi are typing` |
| `threeUserTyping` | `{0}, {1}, and {2} other are typing` | `Suresh, Gopi, and 1 other are typing` |
| `multipleUsersTyping` | `{0}, {1}, and {2} others are typing` | `Suresh, Gopi, and 5 others are typing` |

The following example demonstrates how to load the German (`de`) culture and apply it to the Chat UI.

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

Right-to-Left (RTL) support provides an option to render the Chat UI control with a right-to-left layout and text direction. This is essential for users of languages such as Arabic, Hebrew, and Persian. You can enable this feature by setting the [enableRtl](../api/chat-ui#enablertl) property to `true`.

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
