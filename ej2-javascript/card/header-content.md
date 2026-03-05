---
layout: post
title: Header content in ##Platform_Name## Card control | Syncfusion
description: Learn here all about Header content in Syncfusion ##Platform_Name## Card control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Header content 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Header content in ##Platform_Name## Card control

## Header

The Card can be created with a header title, subtitle, and images. To add a header, create a `div` element with the class `e-card-header`.

The Card provides the following elements and corresponding class definitions to include a header.

Elements   | Description
------------ | -------------
Caption | Wrapper element to include title and subtitle.
Image | Supports including header images with specified dimensions.

Class   | Description
------------ | -------------
`e-card-header-caption` | Groups the title and subtitle within the header, acting as a wrapper.
`e-card-header-title` | Main title text within the header.
`e-card-sub-title` | Subtitle within the header.
`e-card-header-image` | Includes heading image within the header.
`e-card-corner` | Adds rounded corners to the image.

### Title and Subtitle

To add a header to the Card, create a wrapper `div` element with the `e-card-header-caption` class.

* Place a `div` element with the `e-card-header-title` class inside the header caption for adding the main title.

* Place a `div` element with the `e-card-sub-title` class inside the header caption element for adding the subtitle.

### Image

The Card header supports adding images within the header. Images are aligned either before or after the header based on the HTML element position in the header structure.

* The header image can be added by creating a `div` element with the `e-card-header-image` class, which can be placed before or after the header caption wrapper element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-header-img-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-header-img-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-header-img-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-header-img-cs1" %}
{% endif %}

## Content

Content in the Card holds text, images, links, and all possible HTML elements. It can be placed within the Card root element.

* Create a `div` element with the class `e-card-content`.
* Place the content `div` element in the Card root element or within any Card inner elements.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-content-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-content-cs1" %}
{% endif %}