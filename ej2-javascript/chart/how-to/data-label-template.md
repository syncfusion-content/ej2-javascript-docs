---
layout: post
title: Data label template in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Data label template in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data label template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data label template in ##Platform_Name## Chart control

You can bind text and interior information for a point from dataSource other than x and y value. To change color for the background in the datalabel template, you can use `${point.text}`.

To use point.text, you have to bind the property from dataSource to name in the datalabel options.

Follow the given steps to show the table tooltip,

**Step 1**:

Initialize the datalabel template div as shown in the following html page,

```
    <script id="index" type="text/x-template">
    <div id='templateWrap' style="background-color: ${point.text}; border-radius: 3px;"><span>${point.y}</span></div>
    </script>
```

**Step 2**:

To show that datalabel template, set the element id to the `template` property in datalabel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/datalabel-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/datalabel-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/datalabel-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/datalabel-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/datalabel-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/datalabel-cs1" %}
{% endif %}