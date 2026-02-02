---
layout: post
title: Template in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Template in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## controls

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls are rendered with a pre-defined layout or structure that is used to define how the control should be rendered on the user interface. The user wants to customise the appearance of the control and add functionality that is specific to the needs of the application. Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls have the option to achieve this using template support. A template can contain a variety of elements, depending on the context in which it is being used.

## Types of templates

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls support the following template types:

* [String template](#String-template)
* [Script template](#Script-template)
* [Function template](#function-template)

## String template

Users can add templates to Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls by using `string literals` and JavaScript expressions. Using this approach, the template string is passed to the library's template engine, which parses the string and generates the corresponding HTML elements along with the data bindings.

Provide the template string directly to the control's `template` property. Refer to the following code snippet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/string-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/string-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/string-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/string-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/string-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/string-template-cs1" %}
{% endif %}

## Script template

A script template is a type of template that uses a scripting language, such as JavaScript, to define the structure and layout of the content that is displayed in the control. These template elements can be defined in the `script` tag along with the unique identifier. The script template's identifier needs to be mapped to the corresponding control's template property along with the fragment identifier (#). Refer to the below code sample.

Add the HTML template to the `index.html` file as shown below.

```html
<script id="customTemplate" type="text/x-template">
    <tr>
        <td class="photo">
            ${EmployeeID}
        </td>
        <td class="details">
            <table class="CardTable" cellpadding="3" cellspacing="2">
                <colgroup>
                    <col width="50%">
                    <col width="50%">
                </colgroup>
                <tbody>
                    <tr>
                        <td class="CardHeader">First Name </td>
                        <td>${FirstName} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Last Name</td>
                        <td>${LastName} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Title
                        </td>
    
                        <td>${Title}
                        </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Country
                        </td>
                        <td>${Country}
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</script>
```

Assign the script template identifier (for example, `customTemplate`) to the control's `template` property. Refer to the code snippets below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/script-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/script-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/script-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/script-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/script-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/script-template-cs1" %}
{% endif %}

## Function template

The function template approach is compatible with the strict guidelines of [Content-Security-Policy (CSP)](../common/Troubleshoot/content-security-policy). In the application, JavaScript functions with [string literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) can be used to add templates in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) controls. This approach eliminates the need for the `unsafe-eval` keyword in the meta tag of project pages. It is Essential<sup style="font-size:70%">&reg;</sup> to convert all inline string and script templates into function templates that comply with the [Content-Security-Policy (CSP)](../common/Troubleshoot/content-security-policy) guidelines in order to avoid potential security risks and enhance the overall safety of the application.

Lets discuss about converting the existing [string template](#string-template) and [script template](#script-template) into a function template approach.

### Convert the existing string template into function template

To convert the existing [string template](#string-template) into function template, create a function template and define the template using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) enclosed in backticks. Add the following function template to the `index.html` file.

```js
var customTemplate = (data) => `<div class="template">${data.ShipCountry}</div>`
```

Assign the function template identifier (for example, `customTemplate`) to the control's `template` property. Refer to the following code snippet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/function-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/function-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/function-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/function-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/function-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/function-template-cs2" %}
{% endif %}

### Convert the existing script template into function template

To convert the existing [script template](#script-template) into function template, create a function template and define the template using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) enclosed in backticks. Add the following function template to the `index.js` file.

```js
var customTemplate = (data) => `<tr>
    <td class="photo">
      ${data.EmployeeID}
    </td>
    <td class="details">
      <table class="CardTable" cellpadding="3" cellspacing="2">
        <colgroup>
          <col width="50%">
          <col width="50%">
        </colgroup>
        <tbody>
          <tr>
            <td class="CardHeader">First Name </td>
            <td>${data.FirstName} </td>
          </tr>
          <tr>
            <td class="CardHeader">Last Name</td>
            <td>${data.LastName} </td>
          </tr>
          <tr>
            <td class="CardHeader">Title</td>
            <td>${data.Title}</td>
          </tr>
          <tr>
            <td class="CardHeader">Country</td>
            <td>${data.Country}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>`
```

Assign the function template identifier (for example, `customTemplate`) to the control's `template` property. Refer to the following code snippet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/function-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/function-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/function-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/function-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/function-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/function-template-cs1" %}
{% endif %}