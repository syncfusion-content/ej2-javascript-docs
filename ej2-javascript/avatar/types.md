---
layout: post
title: Types in ##Platform_Name## Avatar control | Syncfusion
description: Learn here all about Types in Syncfusion ##Platform_Name## Avatar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Types 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Types in ##Platform_Name## Avatar control

This section explains different types of avatar.

## Avatar size

The Essential JS 2 Avatar control has the following predefined sizes that can be used with the `.e-avatar` class to change the appearance of the avatar:

| Class Name         | Description
| :-------------     |:-------------
| e-avatar-xlarge    | Displays extra-large size avatar.
| e-avatar-large     | Displays large size avatar.
| e-avatar           | Displays default size avatar.
| e-avatar-small     | Displays small size avatar.
| e-avatar-xsmall    | Displays extra-small size avatar.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/size-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/avatar/size-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/avatar/size-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/size-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/avatar/size-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/size-cs1" %}
{% endif %}

## Avatar types

The types of Essential JS 2 Avatar controls are:

* Default
* Circle

### Default

The default style of the avatar is a rectangular shape with rounded corners. It can be applied by adding the modifier class `.e-avatar` to the target element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/default-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/avatar/default-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/default-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/default-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/avatar/default-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/avatar/default-cs1" %}
{% endif %}

### Circle

The circle avatar style can be applied by adding the modifier class `.e-avatar-circle` along with the default avatar modifier class `.e-avatar` to the target element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/circle-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/avatar/circle-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/circle-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/circle-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/avatar/circle-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/avatar/circle-cs1" %}
{% endif %}
