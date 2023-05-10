---
layout: post
title: Row height in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Row height in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row height 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row height in ##Platform_Name## Treegrid control

You can customize the row height of treegrid rows through the [`rowHeight`](../../api/treegrid/#rowheight) property. The `rowHeight` property is used to change the row height of entire treegrid rows.

In the below example, the `rowHeight` is set as '60px'.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/row-cs1" %}
{% endif %}

## Customize row height for particular row

Grid row height for particular row can be customized using the [`rowDataBound`](../../api/treegrid/#rowdatabound) event by setting the `rowHeight` in arguments for each row based on the requirement.

In the below example, the row height for the row with Task ID as '3' is set as '90px' using the `rowDataBound` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/row-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/row-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/row-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/row-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/row-cs2" %}
{% endif %}