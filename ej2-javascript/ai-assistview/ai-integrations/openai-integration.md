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

# Integration of Azure Open AI With ##Platform_Name## AI AssistView control 

The Syncfusion AI AssistView supports integration with [Azure Open AI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai), enabling advanced conversational AI features in your applications.

## Getting Started with the ##Platform_Name## AI AssistView control

Before integrating Azure Open AI, ensure that the Syncfusion AI AssistView control is correctly rendered in your app:

[##Platform_Name## Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* An Azure account with access to `Azure Open AI` services and a generated API key.
* Syncfusion AI AssistView for ##Platform_Name## `@syncfusion/ej2-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion AI AssistView in your project

```bash 

npm install @syncfusion/ej2-interactive-chat --save

```

## Generate API Key

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure Open AI resource. 

2. Under Resource Management, select Keys and Endpoint to retrieve your API key and endpoint URL.  

3. Copy the API key, endpoint, and deployment name (e.g., gpt-4o-mini). Ensure the API version matches your resource configuration.

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

##  Integration Open AI with ##Platform_Name## AI AssistView control

Create ##Platform_Name## application to integrate the Open AI with AI AssistView component with the respective files:

* Update the following configuration values with your Azure Open AI details:

```bash

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';

```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/open-ai" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/open-ai" %}
{% endif %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm start

```

Open `http://localhost:3000` to interact with your Azure Open AI for dynamic response.
