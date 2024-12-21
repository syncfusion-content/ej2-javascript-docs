---
layout: post
title: Prevent content swipe selection in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Prevent content swipe selection in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Prevent content swipe selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Prevent content swipe selection in ##Platform_Name## Tab control

The [`swipeMode`](https://ej2.syncfusion.com/documentation/api/tab/#swipemode)  property in the Tab component allows users to navigate between tabs using swipe gestures, improving the overall navigation experience. It supports both touch and mouse inputs, enabling intuitive tab switching.

However, in certain cases, such as when a tab contains critical elements like a form, accidental swipes can disrupt the user's workflow. For example, if a user is filling out a form and mistakenly swipes, the tab might change unexpectedly, potentially leading to unsaved data or interruptions.

To address this, you can customize the [`swipeMode`](https://ej2.syncfusion.com/documentation/api/tab/#swipemode) property based on the needs of the application. By adjusting this setting, you can balance smooth, intuitive navigation with protecting the user experience and safeguarding against accidental tab switches.

The following are the available [`swipeMode`](https://ej2.syncfusion.com/documentation/api/tab/#swipemode) options for the Tab component:

* Both - By default, this option allows the user to swipe between tabs using both touch and mouse actions.
* Touch - This option allows users to swipe between tabs using touch gestures only.
* Mouse - This option allows users to swipe between tabs using mouse gestures only.
* None - This disables both touch and mouse swipe actions, preventing any unintended tab switches.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/swipemode-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/swipemode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/swipemode-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/swipemode-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/swipemode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/swipemode-cs1" %}
{% endif %}

