---
layout: post
title: Position in ##Platform_Name## Toast control | Syncfusion
description: Learn here all about Position in Syncfusion ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Position 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Position in ##Platform_Name## Toast control

The toast position can be updated based on predefined positions or customizable positions. The predefined position combinations are updated in the [X](../api/toast/toastPositionModel/#x) and [Y](../api/toast/toastPositionModel/#y) position properties.

## Predefined

`X` Positions

* Left
* Center
* Right

`Y` Positions

* Top
* Bottom

> In multiple toast display, the new toast position will not be updated on dynamic change of property values until the old toast messages removed.
> The toast occupies full width when you set the width to '100%', so the X positions will not affect the changes when the width is '100%'.

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