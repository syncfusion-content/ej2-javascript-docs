---
layout: post
title: Show tooltip on disabled elements and disable tooltip md in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Show tooltip on disabled elements and disable tooltip md in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Show tooltip on disabled elements and disable tooltip md 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Show tooltip on disabled elements and disable tooltip md in ##Platform_Name## Tooltip control

By default, tooltips will not be displayed on disabled elements. However, you can enable this behavior by using the following steps:

1. Add a disabled element like the `button` element into a div whose display style is set to `inline-block`.
2. Set the pointer event as `none` for the disabled element (button) through CSS.
3. Initialize the tooltip for outer div element that holds the disabled button element.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/disabled-elements-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/disabled-elements-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/tooltip/disabled-elements-cs2" %}
