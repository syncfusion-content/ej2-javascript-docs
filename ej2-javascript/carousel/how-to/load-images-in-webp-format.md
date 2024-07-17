---
layout: post
title: Load webp format image in ##Platform_Name## Carousel control | Syncfusion
description: Learn here all about how to load webp format image in Syncfusion ##Platform_Name## Carousel control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Load images in webp format 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Load webp format image in ##Platform_Name## Carousel control

You can load the carousel image in the webp format, which aims to create smaller, better-looking images. Choosing webp as your image format can significantly improve your website's performance without sacrificing visual quality. webp images are significantly smaller in file size compared to formats like JPEG and PNG. This results in faster load times and less data usage. To achieve this, you can convert your image format to webp and pass them to Carousel items. The following sample illustrates how to load a carousel image in the webp format component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/carousel/default-webp/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-webp/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-webp" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/carousel/default-webp/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/default-webp/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/carousel/default-webp" %}
{% endif %}