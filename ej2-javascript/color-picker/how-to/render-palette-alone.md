---
layout: post
title: Render palette alone in ##Platform_Name## Color picker control | Syncfusion
description: Learn here all about Render palette alone in Syncfusion ##Platform_Name## Color picker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Render palette alone 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Render palette alone in ##Platform_Name## Color picker control

To render the `Palette` alone in ColorPicker, specify the [`mode`](../../api/color-picker#mode) property as `Palette`, and set the [`modeSwitcher`](../../api/color-picker#modeswitcher) property to `false`.

In the following sample, the [`showButtons`](../../api/color-picker#showbuttons) property is disabled to hide the control buttons and it renders only the `Palette` area.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/palette-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/palette-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/palette-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/colorpicker/palette-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/colorpicker/palette-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/palette-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/palette-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/colorpicker/palette-cs1" %}
{% endif %}

>> To render `Picker` alone specify the [`mode`](../../api/color-picker#mode) property as 'Picker'.