---
layout: post
title: Navigators and indicators in ##Platform_Name## Carousel control | Syncfusion
description: Learn here all about Navigators and indicators in Syncfusion ##Platform_Name## Carousel control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Navigators and indicators 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Navigators and indicators in ##Platform_Name## Carousel control

The navigators and indicators are used to transition the slides manually.

## Navigators

### Show or hide previous and next button

In navigators, the previous and next slide transition buttons are used to perform slide transitions manually. You can show/hide the navigators using the [`buttonsVisibility`](../api/carousel/#buttonsvisibility) property. The possible property values are as follows:

* `Hidden` – the navigator’s buttons are not visible.
* `Visible` – the navigator’s buttons are visible.
* `VisibleOnHover` – the navigator’s buttons are visible only when hovering over the carousel.

The following example depicts the code to show/hide the navigators in the carousel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/default-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/default-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/default-cs8" %}
{% endif %}

### Show previous and next button on hover

In the carousel, you can show the previous and next buttons only on mouse hover using the [`buttonsVisibility`](../api/carousel/#buttonsvisibility) property. The following example depicts the code to show the navigators on mouse hover in the carousel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/default-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/default-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/default-cs9" %}
{% endif %}

### Previous and next button template

Template options are provided to customize the previous button using [`previousButtonTemplate`](../api/carousel/#previousbuttontemplate) and the next button using [`nextButtonTemplate`](../api/carousel/#nextbuttontemplate). The following example depicts the code for applying the template to previous and next buttons in the carousel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/default-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/default-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/default-cs10" %}
{% endif %}

## Indicators

### Show or hide indicators

In indicators, the total slides and current slide state have been depicted. You can show/hide the indicators using the [`showIndicators`](../api/carousel/#showindicators) property. The following example depicts the code to show/hide the indicators in the carousel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/default-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/default-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/default-cs11" %}
{% endif %}

### Indicators Template

Template option is provided to customize the indicators by using the [`indicatorTemplate`](../api/carousel/#indicatorstemplate) property. The following example depicts the code for applying a template to indicators in the carousel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/indicator-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/indicator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/indicator-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/indicator-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/indicator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/indicator-cs1" %}
{% endif %}

### Showing preview of slide in indicator

You can customize the indicators by showing the preview image of each slide using the [`indicatorTemplate`](../api/carousel/#indicatorstemplate) property. The following example depicts the code for showing the preview image using a template for indicators in the carousel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/indicator-preview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/indicator-preview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/indicator-preview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/indicator-preview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/indicator-preview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/indicator-preview-cs1" %}
{% endif %}

## Play button

### Show or hide the play button

In the carousel, [`autoPlay`](../api/carousel/#autoplay) actions have been controlled by using the [`showPlayButton`](../api/carousel/#showplaybutton) property in the user interface. When you enable this property, the slide transitions are controlled using this play and pause button. The following example depicts the code to show the play button in the carousel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/default-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/default-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/default-cs12" %}
{% endif %}

### Play button template

Template option is provided to customize the play button by using the [`playButtonTemplate`](../api/carousel/#playbuttontemplate) property. The following example depicts the code for applying a template to play button in the carousel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/play-button-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/play-button-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/play-button-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/play-button-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/play-button-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/play-button-cs1" %}
{% endif %}
