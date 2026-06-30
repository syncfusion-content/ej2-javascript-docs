---
layout: post
title: Maximum Length in ##Platform_Name## TextBox control | Syncfusion
description: Limiting the maximum number of characters in the ##Platform_Name## TextBox control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Maximum Length
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in the ##Platform_Name## TextBox Control

You can enforce a maximum length limit for the text input in the TextBox using the `maxLength` property. This property allows to define the maximum number of characters that users can input into the TextBox.


* By setting the `maxLength` property, you can control the length of text input, preventing users from exceeding a specified character limit.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textbox/max-length-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/max-length-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/max-length-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textbox/max-length-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textbox/max-length-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/max-length-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/max-length-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textbox/max-length-cs1" %}
{% endif %}

When the user reaches the specified limit, the TextBox prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.