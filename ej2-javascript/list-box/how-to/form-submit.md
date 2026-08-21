---
layout: post
title: How to submit a form with ##Platform_Name## ListBox | Syncfusion
description: Submit the selected Syncfusion ##Platform_Name## ListBox values with an HTML form by giving the list box a name attribute.
platform: ej2-javascript
control: Form submit 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to Submit a Form with ##Platform_Name## ListBox

In the following code snippet, the value that is in selected state will be sent on form submit.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/form-submit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/form-submit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/form-submit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/form-submit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/form-submit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/form-submit-cs1" %}
{% endif %}