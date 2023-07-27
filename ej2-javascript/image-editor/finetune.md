---
layout: post
title: Finetune in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Finetune in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javaScript
control: Finetune 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Finetuning in the ##Platform_Name## Image Editor control

Fine-tuning involves making precise adjustments to the settings of an image filter in order to achieve a specific desired effect. It provides control over the intensity and specific aspects of the filter's impact on the image. For example, fine-tuning allows you to modify parameters like brightness, saturation, or other relevant properties to fine-tune the level or quality of the filter's effect. This level of control enables you to achieve the exact look or outcome you want for your image.

## Adjust the brightness, contrast, or sharpness

The [`finetuneImage`](https://ej2.syncfusion.com/documentation/api/image-editor/#finetuneImage) method is designed to facilitate fine-tuning operations on an image. It accepts two parameters: the first parameter is [`ImageFinetuneOption`](https://ej2.syncfusion.com/documentation/api/image-editor/imageFinetuneOption/) which determines the type of fine-tuning to be applied (brightness, contrast, or sharpness), and the second parameter represents the fine-tuning value, indicating the degree or intensity of the adjustment. This method allows for convenient adjustment of brightness, contrast, or sharpness by specifying the desired type and corresponding value.

The [`finetuneImage`](https://ej2.syncfusion.com/documentation/api/image-editor/#finetuneImage) method is used to perform brightness, contrast, or sharpness fine-tuning by specifying this type as a first parameter and specifying the fine-tuning value as the second parameter of the method.

Here is an example of brightness, contrast, and sharpness fine-tuning using the [`finetuneImage`](https://ej2.syncfusion.com/documentation/api/image-editor/#finetuneImage) method.

* finetuneOption - Specifies the finetune options to be performed in the image.

* value - Specifies the value for finetuning the image.

In the following example, you can using the finetuneImage method in the button click event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/finetune-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/finetune-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/finetune-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/finetune-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/finetune-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/finetune-cs1" %}
{% endif %}

## Adjust the hue, exposure, blur, or opacity 

The [`finetuneImage`](../../api/image-editor/#finetuneImage) method is designed to facilitate fine-tuning operations on an image. It accepts two parameters: the first parameter is [`ImageFinetuneOption`](../../api/image-editor/imageFinetuneOption/) which determines the type of fine-tuning to be applied (hue, exposure, or blur), and the second parameter represents the fine-tuning value, indicating the degree or intensity of the adjustment. This method allows for convenient adjustment of hue, exposure, or blur by specifying the desired type and corresponding value.

Here is an example of hue, exposure, and blur fine-tuning using the [`finetuneImage`](https://ej2.syncfusion.com/documentation/api/image-editor/#finetuneImage) method. 

* finetuneOption - Specifies the finetune options to be performed in the image.

* value - Specifies the value for finetuning the image.

In the following example, you can using the finetuneImage method in the button click event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/finetune-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/finetune-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/finetune-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/finetune-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/finetune-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/finetune-cs2" %}
{% endif %}

## Finetune value changing event

The [`finetuneValueChanging`](../../api/image-editor/#finetuneValueChanging) event is triggered when performing fine-tuning on the image. This event is passed an object that contains information about the finetuning event, such as the type of fine-tuning and the value of fine-tuning performed. 

The parameter available in the [`FinetuneEventArgs`](../../api/image-editor/#FinetuneEventArgs) event is, 

FinetuneEventArgs.finetune - The type of fine-tuning as [`ImageFinetuneOption`](../../api/image-editor/#ImageFinetuneOption) to be applied in the image editor. 

FinetuneEventArgs.value - The fine-tuning value to be applied in the image editor. 

FinetuneEventArgs.cancel – Specifies a boolean value to cancel the fine-tuning action.