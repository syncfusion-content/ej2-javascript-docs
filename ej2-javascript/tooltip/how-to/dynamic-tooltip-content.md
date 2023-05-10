---
layout: post
title: Dynamic tooltip content in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Dynamic tooltip content in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dynamic tooltip content 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic tooltip content in ##Platform_Name## Tooltip control

The tooltip content can be changed dynamically using the [AJAX](../../api/base/ajax/) request.

The AJAX request should be made within the [`beforeRender`](../../api/tooltip#beforerender) event of the tooltip. On every success, the corresponding retrieved data will be set to the [content](../../api/tooltip#content) property of the tooltip.

When you hover over the icons, its respective data will be retrieved dynamically and then assigned to the tooltip’s content.

Refer to the following code snippet to change the tooltip content dynamically.

```ts
function onBeforeRender(args: TooltipEventArgs): void {
    this.content = 'Loading...';
    this.dataBind();
    let ajax: Ajax = new Ajax('./tooltip.json', 'GET', true);
    ajax.send().then(
        (result: any) => {
            result = JSON.parse(result);
            for (let i: number = 0; i < result.length; i++) {
                if (result[i].Id == args.target.id) {
                    /* tslint:disable */
                    this.content = result[i].Sports;
                    /* tslint:enable */
                }
            }
            this.dataBind();
        },
        (reason: any) => {
            this.content = reason.message;
            this.dataBind();
        });
}
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/dynamic-content-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/dynamic-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/dynamic-content-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/dynamic-content-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/dynamic-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/dynamic-content-cs1" %}
{% endif %}