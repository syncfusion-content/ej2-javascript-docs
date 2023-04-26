---
layout: post
title: Smith chart tooltip in ##Platform_Name## Smithchart control | Syncfusion
description: Learn here all about Smith chart tooltip in Syncfusion ##Platform_Name## Smithchart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Smith chart tooltip 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Smith chart tooltip in ##Platform_Name## Smithchart control

Smithchart will display details about the points through tooltip, when the mouse is moved over the point. By default, tooltip is disabled. To enable the tooltip for smithchart, you need to import and inject TooltipRender module from chart. And also set the property visible as true, in tooltip settings. You can customize the tooltip's visibility and appearance differently each series in the smithchart.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smithchart/smithchart-tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/smithchart-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/smithchart-tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/smithchart/smithchart-tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smithchart/smithchart-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/smithchart-tooltip-cs1" %}
{% endif %}