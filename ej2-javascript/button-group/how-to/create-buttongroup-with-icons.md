---
layout: post
title: How to add icons to ButtonGroup in ##Platform_Name## | Syncfusion
description: Learn how to create a ##Platform_Name## Button Group with icons by adding e-btn-icon and e-icon-left span elements to each button.
platform: ej2-javascript
control: Create buttongroup with icons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to create ButtonGroup with icons in ##Platform_Name## Button Group

To create ButtonGroup with icons, `span` element should be added inside each button element with `e-btn-icon` and `e-icon-left` along with icon classes.

The following example illustrates how to create ButtonGroup with icons.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/icon-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button-group/icon-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/icon-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button-group/icon-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button-group/icon-cs1" %}
{% endif %}