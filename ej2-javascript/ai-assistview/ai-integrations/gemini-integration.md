---
layout: post
title: Gemini AI in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Integration of Gemini AI with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Gemini AI With ##Platform_Name## AI AssistView control

The Syncfusion AI AssistView supports integration with [Gemini](https://ai.google.dev/gemini-api/docs), enabling advanced conversational AI features in your applications.

## Getting Started With the ##Platform_Name## AI AssistView control

Before integrating Gemini AI, ensure that the Syncfusion Chat UI control is correctly rendered in your application:

[ ##Platform_Name## Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* Google account to generate API key on accessing `Gemini AI`
* Syncfusion AI AssistView for ##Platform_Name## `@syncfusion/ej2-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion Chat UI in your project

```bash 

npm install @syncfusion/ej2-interactive-chat --save

```

Install the Gemini AI dependencies

```bash

npm install @google/generative-ai

```

## Generate API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and sign in with your Google account. If you don’t have one, create a new account. 

2. Once logged in, click on `Get API Key` from the left-hand menu or the top-right corner of the dashboard. 

3. Click the `Create API Key` button. You’ll be prompted to either select an existing Google Cloud project or create a new one. Choose the appropriate option and proceed. 

4. After selecting or creating a project, your API key will be generated and displayed. Copy the key and store it securely, as it will only be shown once.

> `Security Note`: Never commit the API key to version control. Use environment variables or a secret manager for production.

##  Integration Gemini AI with AI AssistView

Create ##Platform_Name## application to integrate the Open AI with AI AssistView component with the respective files

> Add your generated `API Key` at the line 

```bash

const geminiApiKey = 'Place your API key here'; 

```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/gemini-ai" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/gemini-ai" %}
{% endif %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm start

```

Open `http://localhost:3000` to interact with your Gemini AI for dynamic response.
