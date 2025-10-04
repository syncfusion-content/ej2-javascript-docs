---
layout: post
title: Azure Open AI in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Integration of Azure Open AI with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Azure Open AI With JavaScript AI AssistView control 

The Syncfusion AI AssistView supports integration with [Azure Open AI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai), enabling advanced conversational AI features in your applications.

## Getting Started with the JavaScript AI AssistView control

Before integrating Azure Open AI, ensure that the Syncfusion AI AssistView control is correctly rendered in your app:

[JavaScript Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* An Azure account with access to [Azure Open AI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai) services and a generated API key.

## Generate Azure API Key

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure Open AI resource. 

2. Under Resource Management, select Keys and Endpoint to retrieve your API key and endpoint URL.  

3. Copy the API key, endpoint, and deployment name (e.g., gpt-4o-mini). Ensure the API version matches your resource configuration.

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

##  Configure Open AI with JavaScript AI AssistView control

Create JavaScript application to integrate the Open AI with AI AssistView component with the respective files:

* Update the following configuration values with your Azure Open AI details:

```bash

var azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
var azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
var azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
var azureDeploymentName = 'Your_Deployment_Name';

```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/open-ai" %}


## Run and Test 

Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript AI AssistView** control.

Open the hosted link to interact with your Open AI for dynamic response.
