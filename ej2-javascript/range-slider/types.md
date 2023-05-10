---
layout: post
title: Types in ##Platform_Name## Range slider control | Syncfusion
description: Learn here all about Types in Syncfusion ##Platform_Name## Range slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Types 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Types in ##Platform_Name## Range slider control

The types of Slider are as follows:

| **Types** | **Usage** |
| --- | --- |
| Default | Shows a default Slider to select a single value. |
| MinRange | Displays the shadow from the start value to the current selected value. |
| Range | Selects a range of values. It also displays the shadow in-between the selection range. |

>Both the Default Slider and Min-Range Slider have same behavior that is used to select a single value. In Min-Range Slider, a shadow is considered from the start value to current handle position. But the Range Slider contains two handles that is used to select a range of values and a shadow is considered in between the two handles.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/types-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/types-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/types-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/types-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/types-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/types-cs2" %}
{% endif %}