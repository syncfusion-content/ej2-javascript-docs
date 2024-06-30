---
layout: post
title: Localization in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Localization in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Diagram control

The EJ2 Diagram component supports `localization`. In the Diagram component, the symbol palette search box and context menu items can be localized based on the selected culture. By using the locale property of the diagram, you can change the culture.

## Localize Diagram context menu

To localize the diagram context menu, we need to define the [`locale`](../api/diagram/#locale) property of the diagram with our preferred culture. In the example below, we use **'de-DE**', which is the locale code for German as used in Germany.

{% if page.publishingplatform == "typescript" %}

```javascript
//Initialize the diagram
var diagram = new Diagram({
  width: '100%',
  height: '645px',
  //Set locale
  locale: 'de-DE',
  //set context menu
  contextMenuSettings: {
    show: true,
  },
});

```
{% elsif page.publishingplatform == "javascript" %}

```javascript
//Initialize the diagram
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '645px',
  //Set locale
  locale: 'de-DE',
  //set context menu
  contextMenuSettings: {
    show: true,
  },
});

```

{% endif %}

Next, we need to call the `setCulture('de')` function, which sets the default culture for all EJ2 components. This method takes one parameter, cultureName, which specifies the culture name to be set as the default.

We also need to define the text we want to render in the context menu instead of the default English, as shown below.


{% if page.publishingplatform == "typescript" %}

```javascript

// Set the default culture to German
setCulture('de')

// Load locale text for the diagram context menu
L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});

```

{% elsif page.publishingplatform == "javascript" %}

```javascript

// Set the default culture to German
ej.base.setCulture('de')

// Load locale text for the diagram context menu
ej.base.L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});


```

{% endif %}

The following code example summarizes the locale settings for the context menu.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/locale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/locale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/locale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/locale-cs1" %}

{% endif %}

## Localize Symbol palette

You can enable the search option in the symbol palette to search for symbols by using the [`enableSearch`](../api/diagram/symbolPaletteModel/#enablesearch) option. This search box can also be localized.

To localize the symbol palette search box, we need to define the [`locale`](../api/diagram/symbolPaletteModel/#locale) property of the symbol palette with our preferred culture. In the example below, we use **'de-DE**', which is the locale code for German as used in Germany.

The following code shows how to localize symbol palette.


{% if page.publishingplatform == "typescript" %}

```javascript
// Set the default culture to German
setCulture('de')

// Load locale text for the SearchShapes
L10n.load({
        'de-DE': {
            SymbolPalette: {
                'SearchShapes':'Formen suchen',
            }
        }
    });

 // Initializes symbol palette.
    let palette: SymbolPalette = new SymbolPalette({
        expandMode: 'Multiple',
        palettes: palettes,
        width: '100%', height: '100%',
        symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 },
        symbolHeight: 48, symbolWidth: 48,
        //Sets the locale
        locale:'de-DE'
    });

```

{% elsif page.publishingplatform == "javascript" %}

```javascript
// Set the default culture to German
ej.base.setCulture('de')

// Load locale text for the SearchShapes
 ej.base.L10n.load({
        'de-DE': {
            SymbolPalette: {
                'SearchShapes':'Formen suchen',
            }
        }
    });

  //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple',
        palettes: palettes,
        width: '100%', height: '100%',
        symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 },
        symbolHeight: 48, symbolWidth: 48,
        //Sets the locale
        locale:'de-DE'
    });

```
{% endif %}

The following code example summarizes the locale settings for the symbol palette.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/locale-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/locale-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/locale-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/locale-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/locale-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/locale-cs2" %}

{% endif %}

Refer [`localization`](https://ej2.syncfusion.com/javascript/documentation/common/localization) for more information.