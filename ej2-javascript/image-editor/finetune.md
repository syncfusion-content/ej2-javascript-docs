---
layout: post
title: Finetune in ##Platform_Name## Image Editor | Syncfusion
description: Adjust brightness, contrast, saturation, hue, exposure, blur, and opacity of images in the ##Platform_Name## Image Editor with the finetuneImage method.
platform: ej2-javascript
control: Finetune 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Finetune in ##Platform_Name## Image Editor

Fine-tuning involves making precise adjustments to an image's settings to achieve a desired effect. It provides control over the intensity and specific aspects of the adjustments applied to the image. For example, fine-tuning allows you to modify properties like brightness and saturation to fine-tune the level or quality of the effect. The available fine-tune options include `Brightness`, `Contrast`, `Saturation`, `Hue`, `Exposure`, `Blur`, and `Opacity`.

## Adjust the brightness, contrast, and saturation

The [`finetuneImage`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#finetuneimage) method is used to fine-tune an image. It accepts two parameters: the first parameter is an [`ImageFinetuneOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/imagefinetuneoption) value that determines the type of fine-tuning to be applied (`brightness`, `contrast`, or `saturation`), and the second parameter represents the fine-tuning value, indicating the degree or intensity of the adjustment. This method allows for convenient adjustment of brightness, contrast, and saturation by specifying the desired type and corresponding value. The method returns `void`.

* finetuneOption - Specifies the fine-tune option to apply to the image, as an [`ImageFinetuneOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/imagefinetuneoption) value.

* value - Specifies the fine-tune value (number) to apply for the selected fine-tune option.

In the following example, the `finetuneImage` method is used in the button click event.

{% if page.publishingplatform == "typescript" %}

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

## Adjust the hue, exposure, blur, and opacity

The [`finetuneImage`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#finetuneimage) method is used to fine-tune an image. It accepts two parameters: the first parameter is an [`ImageFinetuneOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/imagefinetuneoption) value that determines the type of fine-tuning to be applied (`hue`, `exposure`, `blur`, or `opacity`), and the second parameter represents the fine-tuning value, indicating the degree or intensity of the adjustment. This method allows for convenient adjustment of hue, exposure, blur, and opacity by specifying the desired type and corresponding value. The method returns `void`.

* finetuneOption - Specifies the fine-tune option to apply to the image, as an [`ImageFinetuneOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/imagefinetuneoption) value.

* value - Specifies the fine-tune value (number) to apply for the selected fine-tune option.

In the following example, the `finetuneImage` method is used in the button click event.

{% if page.publishingplatform == "typescript" %}

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

The [`finetuneValueChanging`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#finetunevaluechanging) event is triggered when performing fine-tuning on the image. The event argument provides details about the fine-tuning being applied, such as the type of fine-tuning and the value being applied.

The [`FinetuneEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#finetuneeventargs) provides the following parameters:

* FinetuneEventArgs.finetune - Specifies the type of fine-tuning to be applied, as an [`ImageFinetuneOption`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#imagefinetuneoption) value.

* FinetuneEventArgs.value - Specifies the fine-tuning value (number) to be applied to the image.

* FinetuneEventArgs.cancel - Specifies a boolean value that, when set to `true`, cancels the fine-tuning action.
