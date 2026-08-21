---
layout: post
title: Horizontal in ##Platform_Name## Card | Syncfusion
description: Align Syncfusion ##Platform_Name## Card elements horizontally with the e-card-horizontal class and stack columns vertically using e-card-stacked.
platform: ej2-javascript
control: Horizontal 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Horizontal in ##Platform_Name## Card

By default, all card elements are aligned vertically one after the other in the order they appear in the DOM. To align card elements horizontally, add the `e-card-horizontal` class to the root card element.

## Stacked cards

* A horizontally aligned card can push a specific column to align vertically using the `e-card-stacked` class. This aligns the stacked section vertically within the horizontal layout, differentiating it from the horizontal arrangement.

Class   | Description
------------ | -------------
`e-card-horizontal` | To align card elements horizontally.
`e-card-stacked` | To align elements vertically within the horizontal layout.

   ```
        <div tabindex="0" class="e-card e-card-horizontal">
            <img src="code1.png" alt="Sample">   --> Aligned in horizontal
            <div class="e-card-stacked">         --> Aligned in horizontal
               // Inside the element all are aligned vertical directions
            </div>
        </div>
   ```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-horizontal-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card-horizontal-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-horizontal-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/card/card-horizontal-cs1" %}
{% endif %}