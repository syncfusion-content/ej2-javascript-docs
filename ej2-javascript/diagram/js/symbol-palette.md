---
layout: post
title: Symbol palette in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Symbol palette in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Symbol palette 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Symbol palette in ##Platform_Name## Diagram control

The [`symbolPalette`](../api/diagram/symbolPaletteModel/) is a gallery of reusable symbols and diagram elements that can be dragged and dropped on the diagram surface multiple times.

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD010 -->

## Create symbol palette

The [`width`](../api/diagram/symbolPaletteModel/#width) and [`height`](../api/diagram/symbolPaletteModel/#height) properties of the symbol palette allows you to define the size of the symbol palette.

```javascript

ej.diagrams.Diagram.Inject(ej.diagrams.SymbolPalette);
//Initializes the symbol palette
var palette = new ej.diagrams.SymbolPalette({
    width: '100%',
    height: '700px',
},'#element');

```

## Add nodes and palettes to SymbolPalette

The collection of predefined symbols can be added to palettes using the [`symbols`](../api/diagram/paletteModel/#symbols) property.

A palette displays a group of related symbols and textually annotates the group with its header. A [`Palettes`](../api/diagram/paletteModel/) can be added as a collection of symbol groups.

To initialize a palette, define a JSON object with the unique property [`ID`](../api/diagram/paletteModel/#id). Additionally, include the symbols property, which contains an array of different symbols.

The following code example illustrates how to define symbols in a palette and how to add them to the symbol palette:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs1" %}

## Add connectors in symbol palette

Connectors can be added to the symbol palette by defining them in the symbols array of the palette. 
The following example shows how to render connectors in the symbol palette:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-con/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-con/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-con" %}

## Add group nodes in symbol palette

The symbol palette supports adding group nodes. To add group nodes to the palette, the child nodes should be defined first, followed by the parent node. Refer to the following code to see how to render group nodes in the symbol palette:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-group/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-group/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-group" %}

## Drag and drop symbols from palette to diagram

To drag and drop symbols from the palette to the diagram canvas, mousedown on the desired symbol in the palette, drag it to the desired location on the diagram canvas, and release the mouse button to drop it.

![Drag and drop symbols](images/symbol-palette-drag-drop.gif)

## Add symbols to palette at runtime

Symbols can be added to palette at runtime by using public method, [`addPaletteItem`](../api/diagram/palette/#addPaletteItem-number). The following example shows how to add shapes to the palette at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-add/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-add/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-add" %}

## Remove symbols from palette at runtime

Symbols can be removed from palette at runtime by using public method, [`removePaletteItem`](../api/diagram/palette/#removePaletteItem-number). The following example shows how to remove shapes from the palette at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-remove/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-remove/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-remove" %}

## Symbol defaults

While adding more symbols such as nodes and connectors to the palette, you can define the default settings for these objects using the [`getNodeDefaults`](../api/diagram/symbolPaletteModel/#getnodedefaults) and the [`getConnectorDefaults`](../api/diagram/symbolPaletteModel/#getconnectordefaults) properties of the diagram. These properties allow you to specify default configurations for nodes and connectors, ensuring consistency and saving time when adding multiple symbols. By setting these properties, you can predefine attributes such as size, color, shape for nodes and line style, thickness, for connectors. 

In the following example, the fill color of node and target decorator shape of connector is defined in getNodeDefaults and getConnectorDefaults respectively.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs7" %}

## Add palettes at runtime

You can dynamically add palettes to the symbol palette at runtime to enhance flexibility and customization. This allows you to introduce new groups of symbols as needed without having to reload or reinitialize the diagram. The `addPalettes` method of the symbol palette enables you to create and configure new palettes programmatically. This method takes parameters that define the palette's properties, such as the palette `ID`, `title`, and the `symbols` it contains.

Follow the example below to see how to add a palette at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-addPalette/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-addPalette/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-addPalette" %}


## Remove palettes at runtime

You can remove palettes from the symbol palette at runtime. There are two ways to do this:

* Use the `removePalette` method to remove a single palette by its ID.
* Use the `removePalettes` method to remove multiple palettes by passing an array of palette IDs as a parameter.

Follow the example below to see how to remove palettes at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-removePalette/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-removePalette/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-removePalette" %}


## Stretch the symbols into the palette

The [`fit`](../api/diagram/symbolInfo/#fit-boolean) property defines whether the symbol has to be fit inside the size, that is defined by the symbol palette. For example, when you resize the rectangle in the symbol, ratio of the rectangle size has to be maintained rather changing into square shape. The following code example illustrates how to customize the symbol size.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/symbol-palette-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs4" %}


## Refresh symbol palette

The `refresh` method allows you to refresh the symbols dynamically in the SymbolPalette.

```ts
//To refresh the symbols in symbol palette
symbolPalette.refresh();

```

