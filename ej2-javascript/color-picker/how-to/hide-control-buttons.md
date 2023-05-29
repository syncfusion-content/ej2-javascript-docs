---
layout: post
title: Hide control buttons in ##Platform_Name## Color picker control | Syncfusion
description: Learn here all about Hide control buttons in Syncfusion ##Platform_Name## Color picker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hide control buttons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hide control buttons in ##Platform_Name## Color picker control

ColorPicker can be rendered without control buttons (Apply/Cancel). In this case, while selecting a color, the ColorPicker pop-up is closed and selected colors can be applied directly. To hide control buttons, set the [`showButtons`](../../api/color-picker#showbuttons) property to `false`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/how-to-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/how-to-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/how-to-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/colorpicker/how-to-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/how-to-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/how-to-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs2" %}
{% endif %}