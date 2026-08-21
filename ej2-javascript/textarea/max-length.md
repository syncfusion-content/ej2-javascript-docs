---
layout: post
title: Max Length in ##Platform_Name## TextArea | Syncfusion
description: Limit the ##Platform_Name## TextArea to a maximum number of characters using the maxLength property to prevent user input from exceeding a target.
platform: ej2-javascript
control: Maximum Length
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Max Length in ##Platform_Name## TextArea

You can enforce a maximum length limit for the text input in the TextArea using the [maxLength](../api/textarea/#maxLength) property. This property allows to define the maximum number of characters that users can input into the TextArea.


* By setting the `maxLength` property, you can control the length of text input, preventing users from exceeding a specified character limit.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/max-length-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/max-length-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/max-length-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/max-length-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/max-length-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/max-length-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/max-length-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/max-length-cs1" %}
{% endif %}

When the user reaches the specified limit, the TextArea prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.
