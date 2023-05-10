---
layout: post
title: Card image in ##Platform_Name## Card control | Syncfusion
description: Learn here all about Card image in Syncfusion ##Platform_Name## Card control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Card image 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Card image in ##Platform_Name## Card control

## Images

The Card supports to include images within the elements, you can add image as direct element anywhere inside card root by adding the `e-card-image` class to `div` element. Using the class defined, you can write CSS styles to load images to that element.

> By default, card images occupies full width of its parent element.

```
    <div class = "e-card">
        <div class="e-card-image">
        </div>
    </div>
```

### Title

Card image is supported to include a title or caption for the image. By default, Title is placed over the image on left-bottom position with overlay.

```
    <div class = "e-card">
        <div class="e-card-image">
            <div class="e-card-title"></div>
        </div>
    </div>
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-img-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-img-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-img-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-img-cs1" %}
{% endif %}

## Divider

Divider used to separate the elements inside the card. You can add divider inside the card elements to separate it.

* Place the `div` element with `e-card-separator` class inside the card element for adding a divider.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-sep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-sep-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-sep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-sep-cs1" %}
{% endif %}

## See Also

* [How to customize the card image title position](./how-to/customize-the-card-image-title-position/)