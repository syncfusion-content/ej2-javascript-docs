---
layout: post
title: Create nested dialog in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Create nested dialog in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Create nested dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Create nested dialog in ##Platform_Name## Dialog control

A Dialog can be nested within another Dialog. The below sample contains parent and child Dialog (inner Dialog).

**Step 1**:

Create two div elements with id `#dialog` and `#innerDialog`.

**Step 2**:

Initialize the Dialog as mentioned in the below sample.

**Step 3**:

Set the inner Dialog target as `#dialog`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/nested-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/nested-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/nested-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/nested-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/nested-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/nested-cs1" %}
{% endif %}