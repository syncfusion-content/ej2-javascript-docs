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

The Card supports including images within its elements. Add an image as a direct element anywhere inside the card root by adding the `e-card-image` class to a `div` element. Using the class defined, you can write CSS styles to load images to that element.

> By default, card images occupy the full width of their parent element.

```
    <div class = "e-card">
        <div class="e-card-image">
        </div>
    </div>
```

### Title

Card images support including a title or caption for the image. By default, the title is placed over the image in the left-bottom position with an overlay.

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

Dividers are used to separate elements inside the card. Add a divider inside the card elements to visually distinguish different sections or content areas.

* Place a `div` element with the `e-card-separator` class inside the card element to add a divider.

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

* [How to customize the card image title position](./how-to/customize-the-card-image-title-position)