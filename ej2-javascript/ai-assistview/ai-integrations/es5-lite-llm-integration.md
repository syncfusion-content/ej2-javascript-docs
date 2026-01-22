---
layout: post
title: Lite LLM Model in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Integration of Lite LLM Model with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate AI AssistView with LiteLLM

The **AI AssistView** control can also be integrated with [LiteLLM](https://docs.litellm.ai/docs), an open-source proxy that provides a unified, OpenAI-compatible API for multiple LLM providers such as [OpenAI](https://openai.com) and [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai).

In this setup:

* **AI AssistView** serves as the user interface for entering prompts.
* Prompts are sent to the **LiteLLM proxy**, which forwards them to the configured LLM provider.
* The LLM provider processes the prompt and returns a response through LiteLLM.
* This enables **natural language understanding** and **context-aware responses** without changing the AssistView integration logic, as LiteLLM uses the same OpenAI-style API.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version **16 or higher** with **npm** installed.

* **OpenAI Account**: Access to OpenAI services and a generated **API key**.

* **Python**: Required to run the **LiteLLM proxy**.

* **Syncfusion AI AssistView**: Install the package [@syncfusion/ej2-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-interactive-chat).

* **Marked Library**: For parsing Markdown responses

```Shell
npm install marked --save
```

## Configure AI AssistView with LiteLLM

To integrate **LiteLLM** with the **Syncfusion AI AssistView** control, update the `index.js` file in your JavaScript application. The control will send user prompts to the LiteLLM proxy, which forwards them to the configured LLM provider (e.g., **OpenAI** or **Azure OpenAI**) and returns natural language responses.

In the following example:

* The [promptRequest](https://ej2.syncfusion.com/javascript/documentation/api/ai-assistview/aiassistviewmodel#promptrequest) event sends the user prompt to the LiteLLM proxy at `/v1/chat/completions`.
* The proxy uses the **model alias** defined in `config.yaml` (e.g., `openai/gpt-4o-mini`) and routes the request to the actual LLM provider.
* The response is parsed as **Markdown** using the `marked` library and displayed in the AI AssistView control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/lite-llm/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/lite-llm/js/index.html %}
{% endhighlight %}
{% highlight yaml tabtitle="config.yaml" %}
{% include code-snippet/ai-assistview/ai-integrations/lite-llm/config.yaml %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/lite-llm" %}

## Run and test

### Start the proxy:

Navigate to your project folder and run the following command to start the proxy:

```bash
pip install "litellm[proxy]"
litellm --config "./config.yaml" --port 4000 --host 0.0.0.0
```

### Start the frontend:

In a separate terminal window, navigate to your project folder, compile the TypeScript

```bash
ng serve
```
and open `index.html` in a web browser (or use a local server like Live Server extension in VS Code).

Open your app to interact with the AI AssistView control integrated with LiteLLM.

## Troubleshooting
* `401 Unauthorized`: Verify your `API_KEY` and model deployment name.
* `Model not found`: Ensure model matches `model_name` in `config.yaml`.
* `CORS issues`: Configure `router_settings.cors_allow_origins` properly.
