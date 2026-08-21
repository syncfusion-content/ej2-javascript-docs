---
layout: post
title: Show selected state initially in ##Platform_Name## | Syncfusion
description: Learn how to show a ##Platform_Name## Button Group item as selected on initial render by adding the checked attribute to the input.
platform: ej2-javascript
control: Show buttongroup selected state on initial render 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Show selected state initially in ##Platform_Name## Button Group

To show selected state on initial render, `checked` property should to added to the corresponding input element.

The following example illustrates how to show selected state on initial render.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/select-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button-group/select-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/select-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/select-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button-group/select-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button-group/select-cs1" %}
{% endif %}