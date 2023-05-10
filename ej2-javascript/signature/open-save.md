---
layout: post
title: Open save in ##Platform_Name## Signature control | Syncfusion
description: Learn here all about Open save in Syncfusion ##Platform_Name## Signature control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open save 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open save in ##Platform_Name## Signature control

The Signature control supports to open the signature by using hosted/online URL or base64. And it also supports various save options like image, base64, and blob.

## Open Signature

The signature control opens a pre-drawn signature as either base64 or hosted/ online URL using the [`load`](https://ej2.syncfusion.com/documentation/api/signature/#load) method. It supports the PNG, JPEG, and SVG image’s base64.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/open-save/open-base-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/open-save/open-base-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/open-save/open-base-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/open-save/open-base-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/open-save/open-base-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/open-save/open-base-cs1" %}
{% endif %}

## Save Signature

The Signature control saves the signature as base64, blob, and image like PNG, JPEG, and SVG.

### Save as Base64

The `getSignature` method is used to get the signature as base64 with the PNG, JPEG, and SVG type. This can be loaded to signature using [`load`](https://ej2.syncfusion.com/documentation/api/signature/#load) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/open-save/save-base-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/open-save/save-base-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/open-save/save-base-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/open-save/save-base-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/open-save/save-base-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/open-save/save-base-cs1" %}
{% endif %}

### Save as Blob

The [`saveAsBlob`](https://ej2.syncfusion.com/documentation/api/signature/#saveasblob) method is used to saves the signature as Blob. It is defined as the chunk of binary data stored as a single entity in a database system.

### Save as Image

The [`save`](https://ej2.syncfusion.com/documentation/api/signature/#save) method is used to saves the signature as an image. And it accepts file name and file type as parameter. The file type parameter supports PNG, JPEG, and SVG and the default file type is PNG.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/open-save/save-image-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/open-save/save-image-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/open-save/save-image-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/open-save/save-image-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/open-save/save-image-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/open-save/save-image-cs1" %}
{% endif %}

## Save with Background

The [`saveWithBackground`](https://ej2.syncfusion.com/documentation/api/signature/#savewithbackground) property is used to saves the signature with its background and its default value is true. So, by default the signature is saved with its background.

In the following sample, the background color is set as ‘rgb(103 58 183)’ and save with background as true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/open-save/save-bg-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/open-save/save-bg-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/open-save/save-bg-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/signature/open-save/save-bg-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/open-save/save-bg-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/signature/open-save/save-bg-cs1" %}
{% endif %}