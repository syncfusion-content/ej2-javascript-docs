---
layout: post
title: Set default value for event fields in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Set default value for event fields in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set default value for event fields 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set default value for event fields in ##Platform_Name## Scheduler control

You can customize the default field names (such as Title, Location, etc.) in the event window and set default values for these fields. For example, you can set a default value for the Subject field using the `default` property, which will be automatically applied when creating an appointment with an empty subject.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/how-to-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/how-to-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/how-to-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/how-to-cs2" %}
{% endif %}