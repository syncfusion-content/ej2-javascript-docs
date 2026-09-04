---
layout: post
title: Position in ##Platform_Name## Toast | Syncfusion
description: Set ##Platform_Name## Toast position with predefined combinations or custom X and Y values in pixels or percentage.
platform: ej2-javascript
control: Position
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Position in ##Platform_Name## Toast

The Toast position can be updated based on predefined positions or customizable positions. The predefined position combinations are updated in the [X](../api/toast/toastPositionModel/#x) and [Y](../api/toast/toastPositionModel/#y) position properties.

## Predefined

`X` Positions

* Left
* Center
* Right

`Y` Positions

* Top
* Bottom

> In multiple Toast display, the new Toast position will not be updated on dynamic change of property values until the old Toast messages are removed.
> The Toast occupies full width when the width is set to '100%', so the X positions will not affect the changes when the width is '100%'.

## Custom

Custom `X` and `Y` positions can be given as pixels/numbers/percentage. The number value is considered as pixels based on the top and left values updated in the toast.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/custom-pos-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/custom-pos-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/custom-pos-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/custom-pos-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/custom-pos-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/custom-pos-cs1" %}
{% endif %}

## See Also

* [Render toast with different positions](./how-to/show-multiple-toasts-in-various-positions/)