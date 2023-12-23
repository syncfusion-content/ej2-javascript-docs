---
layout: post
title: Selected data grid in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Selected data grid in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Selected data grid 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Selected data grid in ##Platform_Name## Chart control

By using the [`dragComplete`](../../api/chart/chartModel/#dragcomplete), you can get the selected data values for range selection.

To display the selected data value, follow the given steps:

**Step 1**:

Get the selected data point values and display the values through grid component by using the [`dragComplete`](../../api/chart/chartModel/#dragcomplete) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/how-to-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/how-to-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/how-to-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/how-to-cs16" %}
{% endif %}