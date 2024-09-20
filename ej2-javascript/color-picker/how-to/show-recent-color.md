---
layout: post
title: Show Recent color in ##Platform_Name## Color picker control | Syncfusion
description: Learn here all about Show Recent color in Syncfusion ##Platform_Name## Color picker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Show Recent color
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Show Recent color ##Platform_Name## Color picker control

The showRecentColors property enables the display of recently selected colors in the ColorPicker when in palette mode. This feature helps users quickly access their most frequently used colors.

>Note: The [`showRecentColors`](../../api/color-picker/#showRecentColors) feature displays up to 10 recent colors as tiles and is available only in `palette` mode.

In the following sample, the [`showRecentColors`](../../api/color-picker/#showRecentColors) property is enabled to display recent colors in the `palette` area.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/recent-color-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/recent-color-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/recent-color-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/colorpicker/recent-color-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/colorpicker/recent-color-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/recent-color-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/recent-color-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/colorpicker/recent-color-cs1" %}
{% endif %}