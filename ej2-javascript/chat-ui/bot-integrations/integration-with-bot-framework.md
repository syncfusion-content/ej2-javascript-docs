---
layout: post
title: Microsoft Bot With ##Platform_Name## Chat UI component | Syncfusion
description:  Checkout and learn about Integration of Microsoft Bot Framework With ##Platform_Name## Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Microsoft Bot With ##Platform_Name## Chat UI control

The Syncfusion Chat UI supports integration with a Microsoft Bot Framework bot hosted on Azure, enabling a custom chat interface for seamless user interaction. The process involves setting up a secure backend token server, configuring the bot in Azure, and integrating the Syncfusion Chat UI in your application.

## Getting Started With the Chat UI control

Before integrating Microsoft Bot Framework, ensure that the Syncfusion Chat UI control is correctly rendered in your application:

[##Platform_Name## Getting Started Guide](../getting-started)

## Prerequisites

* `Microsoft Azure Account`: Required to create and host the bot.
* `Node.js Environment`: The backend portion requires `Node.js` and `npm`.
* `Syncfusion Chat UI`: Install @syncfusion/ej2-interactive-chat in your  project.
* `Deployed Azure Bot`: A bot should be created and published using the Bot Framework, which is accessible via an Azure App Service. Refer to Microsoft's Bot Creation Guide.

## Install Dependencies

* Install `frontend` dependencies for bot communication and the Syncfusion Chat UI:

    * Install `directline-js` package to handle communication with the Bot Framework.

    * Install `axios` for the HTTP requests.

```bash

npm install @syncfusion/ej2-interactive-chat --save
npm install directline-js axios --save

```

* Install `backend` dependencies for the token server:

```bash

npm install express axios cors dotenv

```

## Configure the Azure Bot

1. In the [Azure Portal](https://portal.azure.com/#home), navigate to your bot resource.

2. Enable the Direct Line channel:
    * Go to `Channels` > `Direct Line` > `Default-Site`.
    * Copy one of the displayed secret keys.

3. Verify the Messaging endpoint in the Configuration section (e.g., https://your-bot-service.azurewebsites.net/api/messages).

> `Security Note`: Never expose the Direct Line secret key in frontend code. Use a backend token server to handle it securely.

##  Set Up Token Server

Create a `token-server` folder with an `index.js` and a `.env` files.

{% tabs %}
{% highlight js tabtitle=".env" %}
DIRECT_LINE_SECRET=PASTE_YOUR_DIRECT_LINE_SECRET_HERE
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for your frontend

const directLineSecret = process.env.DIRECT_LINE_SECRET;
if (!directLineSecret) {
    throw new Error('Direct Line secret is not set in the .env file.');
}

app.post('/directline/token', async (req, res) => {
    try {
        const response = await axios.post(
            'https://directline.botframework.com/v3/directline/tokens/generate',
            {}, // Request body can be empty
            {
                headers: {
                    'Authorization': `Bearer ${directLineSecret}`
                }
            }
        );
        res.json({ token: response.data.token });
    } catch (err) {
        console.error('Error generating Direct Line token:', err.response ? err.response.data : err.message);
        res.status(500).json({ error: 'Failed to generate Direct Line token.' });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Token server running on http://localhost:${port}`));
{% endhighlight %}
{% endtabs %}

## Integrate ChatUI in ##Platform_Name##

Add the below files in their respective files to connect the Syncfusion Chat UI to the bot via the Direct Line API:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/bot-framework/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/bot-framework/index.html %}
{% endhighlight %}
{% endtabs %}       

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/bot-framework/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/bot-framework/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Run and Test

### Start the Token Server

Navigate to the `token-server` folder and run the following command to start the server:

```bash

node index.js

```

### Start the frontend

In a separate terminal window, navigate to your project folder and start the development server:

```bash

npm start

```
Open `http://localhost:3000` to interact with your Microsoft Bot Framework chatbot.

## Troubleshooting

* `Token Server Error (500)`: Ensure the `DIRECT_LINE_SECRET` in the `.env` file is correct and that you have restarted the token server after changes.
* `CORS Error`: Ensure the CORS configuration in `index.js` allows requests from your frontend URL (e.g., `http://localhost:3000`).
* `Bot is Not Responding`:
  - Test the bot in the Azure Portal using the `Test in Web Chat` feature to ensure it's running correctly.
  - Check the bot's `Messaging endpoint` in the Configuration section and ensure it is correct and accessible.
* `Connection Fails on Load`: Verify the token server is running and accessible from the browser. Check the console for network errors.
* `Token Expiration`: Direct Line tokens are short-lived. The `directline-js` library typically handles token refresh automatically, but if issues persist, restart the Direct Line connection.
