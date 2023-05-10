---
layout: post
title: Appearance in ##Platform_Name## Sparkline control | Syncfusion
description: Learn here all about Appearance in Syncfusion ##Platform_Name## Sparkline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## Sparkline control

The appearance of the sparkline can be customized using margin, containerArea border, and containerArea background.

## Sparkline border

The `containerArea border` of the sparkline is used to render border to cover sparkline area.

The following code example shows the sparkline with overall border.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/appearance-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/appearance-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs1" %}
{% endif %}

## Sparkline padding

Padding is used to specify padding value between container and sparkline. By default, padding value of the sparkline is 5. Sparkline `padding` values are specified by the left, right, top, and bottom.

The following code example shows the sparkline with overall padding is set to 20.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/appearance-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/appearance-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs2" %}
{% endif %}

## Sparkline area customization

The background color of the sparkline area can be customized using the `containerArea background` color. By default, the sparkline background color is `transparent`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/appearance-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/appearance-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs3" %}
{% endif %}

## Sparkline theme

Datalabel and trackline colors of the sparkline will be changed based on theme. For example, for dark theme, the color of datalabel and trackline should be white; for light theme, their value should be black. The possible values for sparkline theme are `Material`, `Fabric`, `Bootstrap`, and `Highcontrast`.

The following code example shows the color for datalabel and trackline is set to white for dark theme.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/appearance-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/appearance-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs4" %}
{% endif %}