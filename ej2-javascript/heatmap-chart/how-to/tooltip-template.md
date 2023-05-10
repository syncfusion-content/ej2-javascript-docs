---
layout: post
title: Tooltip template in ##Platform_Name## Heatmap chart control | Syncfusion
description: Learn here all about Tooltip template in Syncfusion ##Platform_Name## Heatmap chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tooltip template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip template in ##Platform_Name## Heatmap chart control

You can show a tooltip as a table using the `template` property in `tooltipSettings`.

The following steps describe how to show the table tooltip.

**Step 1**:

Initialize the tooltip template div as shown in the following html page.

```
<script id="tooltipTemplate" type="text/x-template">
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><td bgcolor="#00FFFF">${xValue}:</td><td bgcolor="#00FFFF">${yValue}</td><td bgcolor="#00FFFF">${value}</td></tr>
        </table>
    </div>
</script>

```

**Step 2**:

Set the element id to the `template` property in `tooltipSettings` to show the tooltip template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/how-to-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/how-to-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/how-to-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/how-to-cs2" %}
{% endif %}
