---
layout: post
title: Localization in ##Platform_Name## Query Builder UI | Syncfusion
description: Localize the default Query Builder UI text for Add Group, Add Condition, and operator labels by setting a locale and translation object.
platform: ej2-javascript
control: Global local
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Query Builder UI

The `Localization` library localizes the default text in the Query Builder. Static text can be translated to other cultures by setting the `locale` value and applying a translation object.

The following locale keys and their default values are used in the Query Builder.

| Locale key | Text |
| --- | --- |
| AddGroup | Add Group |
| AddCondition | Add Condition |
| AddButton | Add Group/Condition |
| DeleteRule | Remove this condition |
| DeleteGroup | Delete group |
| Edit | EDIT |
| SelectField | Select a field |
| SelectOperator | Select operator |
| StartsWith | Starts With |
| EndsWith | Ends With |
| DoesNotStartWith | Does Not Start With |
| DoesNotEndWith | Does Not End With |
| IsEmpty | Is Empty |
| IsNotEmpty | Is Not Empty |
| IsNull | Is Null |
| IsNotNull | Is Not Null |
| Contains | Contains |
| DoesNotContain | Does Not Contain |
| Equal | Equal |
| NotEqual | Not Equal |
| LessThan | Less Than |
| LessThanOrEqual | Less Than Or Equal |
| GreaterThan | Greater Than |
| GreaterThanOrEqual | Greater Than Or Equal |
| Between | Between |
| NotBetween | Not Between |
| In | In |
| NotIn | Not In |
| Remove | REMOVE |
| ValidationMessage | This field is required |
| SummaryViewTitle | Summary View |
| OtherFields | Other Fields |
| AND | AND |
| OR | OR |
| SelectValue | Enter Value |
| True | True |
| False | False |

Before using a custom locale, register it and assign the `locale` property on the Query Builder instance.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/getting-started-cs7" %}
{% endif %}
