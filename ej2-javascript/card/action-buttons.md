---
layout: post
title: Action buttons in ##Platform_Name## Card control | Syncfusion
description: Learn here all about Action buttons in Syncfusion ##Platform_Name## Card control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Action buttons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Action buttons in ##Platform_Name## Card control

Action buttons can be included within the Card component and customize them. An action button is a `div` element with the `e-card-actions` class that contains button or anchor elements within the card root element.

* To add action buttons, create a button or anchor tag with the `e-card-btn` class within the card action element.

```
    <div class = "e-card">
        <div class="e-card-actions">
            <button class="e-card-btn"></button>
            <a href="#"></a>
        </div>
    </div>
```

## Vertical

By default, action buttons positioned in horizontal alignment , and also it can be aligned to show in vertical alignment by adding `e-card-vertical` class.

```
    <div class = "e-card">
        <div class="e-card-actions e-card-vertical">
            <button class="e-card-btn">More</button>
            <a href="#">Share</a>
        </div>
    </div>
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-action-btn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-action-btn-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-action-btn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-action-btn-cs1" %}
{% endif %}

## See Also

* [How to integrate other component inside the card](./how-to/integrate-other-component-inside-the-card)