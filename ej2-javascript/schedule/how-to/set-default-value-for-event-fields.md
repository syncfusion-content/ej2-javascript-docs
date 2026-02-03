---
layout: post
title: Default Event Field Values ##Platform_Name## Scheduler | Syncfusion
description: Learn here all about Set default value for event fields in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set default value for event fields in ##Platform_Name## Scheduler control

The Scheduler control allows customization of default field names (such as **Title**, **Location**, etc.) in the event window. You can also assign default values to these fields so that they are automatically applied when creating new appointments.  

For example, a default value can be set for the **Subject** field using the `default` property. This ensures that when an appointment is created without a subject, the predefined default value is automatically applied.

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