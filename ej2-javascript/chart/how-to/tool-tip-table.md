---
layout: post
title: Tool tip table in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Tool tip table in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tool tip table 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip table in ##Platform_Name## Chart control

You can show the tooltip as table by using template property in tooltip.

Follow the given steps to show the table tooltip,

**Step 1**:

Initialize the tooltip template div as shown in the following html page,

```
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><th colspan="2" bgcolor="#00FFFF">Female</th></tr>
        <tr><td bgcolor="#00FFFF">${x}:</td><td bgcolor="#00FFFF">${y}</td></tr>
        </table>
    </div>

```

**Step 2**:

To show that tooltip template, set the element id to the `template` property in tooltip.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/table-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/table-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/table-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/table-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/table-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/table-cs4" %}
{% endif %}