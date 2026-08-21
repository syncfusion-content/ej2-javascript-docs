---
layout: post
title: Render in DropDownButton in ##Platform_Name## Color Picker | Syncfusion
description: Embed the Syncfusion ##Platform_Name## Color Picker inside a DropDownButton as an inline target to launch color selection from a button.
platform: ej2-javascript
control: Colorpicker in dropdownbutton 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to render in DropDownButton in ##Platform_Name## Color Picker

This section explains about how to render the ColorPicker in DropDownButton. The [`target`](./../../api/drop-down-button/index-default#target) property of the DropDownButton helps to achieve this scenario. To know about the usage of `target` property refer to [`Popup templating`](./../../drop-down-button/popup-items#popup-templating) section.

In the below sample, the color picker is rendered as inline type by setting [`inline`](../../api/color-picker/index-default#inline) property as `true` and the rendered color picker wrapper is passed as a `target` to the DropDownButton to achieve the above scenario.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/colorpicker/dropdownbtn-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/colorpicker/dropdownbtn-cs1" %}
{% endif %}