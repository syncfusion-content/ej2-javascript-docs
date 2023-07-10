---
layout: post
title: Annotation in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Annotation in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Annotation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in ##Platform_Name## Image editor control

The Image Editor allows adding annotations to the image, including text, freehand drawings, and shapes like rectangles, ellipses, arrows, paths, and lines. This gives the flexibility to mark up the image with notes, sketches, and other visual elements as needed. These annotation tools can help to communicate and share ideas more effectively.

## Text annotation

The Text annotation feature in the Image Editor provides the capability to add and customize labels, captions, and other text elements directly onto the image. With this feature, you can easily insert text at specific locations within the image and customize various aspects of the text to meet your requirements.

You have control over the customization options including text content, font family, font style and font size for the text annotation.

### Add a text

The [`drawText`](../../api/image-editor/#drawtext) method in the Image Editor allows you to insert a text annotation into the image with specific customization options. This method accepts the following parameters:

* x - Specifies the x-coordinate of the text, determining its horizontal position within the image.

* y - Specifies the y-coordinate of the text, determining its vertical position within the image.

* text - Specifies the actual text content to be added to the image.

* fontFamily - Specifies the font family of the text, allowing you to choose a specific typeface or style for the text.

* fontSize - Specifies the font size of the text, determining its relative size within the image.

* bold - Specifies whether the text should be displayed in bold style. Set to true for bold text, and false for regular text.

* italic - Specifies whether the text should be displayed in italic style. Set to true for italic text, and false for regular text.

* color - Specifies the font color of the text, allowing you to define the desired color using appropriate color values or names.

By utilizing the [`drawText`](../../api/image-editor/#drawtext) method with these parameters, you can precisely position and customize text annotations within the image. This provides the flexibility to add labels, captions, or other text elements with specific font styles, sizes, and colors, enhancing the visual presentation and clarity of the image. 

Here is an example of adding a text in a button click using [`drawText`](../../api/image-editor/#drawtext) method. 

In the following example, you can using the drawText method in the button click event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs1" %}
{% endif %}

### Multiline text

The [`drawText`](../../api/image-editor/#drawtext) method in the Image Editor component is commonly used to insert text annotations into an image. If the provided text parameter contains a newline character (\n), the text will be automatically split into multiple lines, with each line appearing on a separate line in the annotation.

In the following example, you can using the drawText method in the button click event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs8" %}
{% endif %}

### Delete a text

The [`deleteShape`](../../api/image-editor/#deleteshape) method allows you to remove a text annotation from the image editor.To use this method, you need to pass the shapeId of the annotation as a parameter. 

In the following example, the [`deleteShape`](../../api/image-editor/#deleteshape) method is used in the button click event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs9" %}
{% endif %}

### Customize font family and text color

The [`shapeChanging`](../../api/image-editor/#shapechanging) event in the Image Editor component is triggered when a text annotation is being modified or changed through the toolbar interaction. This event provides an opportunity to make alterations to the text's color and font family by adjusting the relevant properties. 

By leveraging the [`shapeChanging`](../../api/image-editor/#shapechanging) event, you can enhance the customization options for text annotations and provide a more tailored and interactive experience within the Image Editor component. 

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs9" %}
{% endif %}

## Freehand drawing

This annotation can be customized by changing the pen color and stroke width and it can be made by either using a toolbar or the [`freeHandDraw`](../../api/image-editor/#freehanddraw) method.

The [`freeHandDraw`](../../api/image-editor/#freehanddraw) method is used to enable or disable a freehand drawing option in an Image Editor.

In the toolbar, the freehand draw annotation can be inserted by clicking the Annotation dropdown button and picking the Pen option from that popup. Once the freehand draw is enabled, the contextual toolbar will be enabled.

In the following example, the [`freeHandDraw`](../../api/image-editor/#freehanddraw) method is used to toggle the freehand drawings.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs2" %}
{% endif %}

### Adjust the stroke width and color

The [`shapeChanging`](../../api/image-editor/#shapechanging) event in the Image Editor component is triggered when a freehand annotation is being modified or changed through the toolbar interaction. This event provides an opportunity to make alterations to the freehand annotation’s color and stroke width by adjusting the relevant properties. 

By leveraging the [`shapeChanging`](../../api/image-editor/#shapechanging) event, you can enhance the customization options for freehand annotations and provide a more tailored and interactive experience within the Image Editor component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs12" %}
{% endif %}

### Delete Freehand drawing

The [`deleteShape`](../../api/image-editor/#deleteshape) method allows you to remove a freehand annotation from the image editor. To use this method, you need to pass the shapeId of the annotation as a parameter.

The [`shapeId`](../../api/image-editor/#shapeid) is a unique identifier assigned to each freehand annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired annotation. By specifying the [`shapeId`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#shapeid) associated with the freehand annotation you want to remove, you can effectively delete it from the image editor.

In the following example, the [`deleteShape`](../../api/image-editor/#deleteshape) method is used in the button click event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs11" %}
{% endif %}

## Shape annotation

The Image Editor component provides the ability to add shape annotations to an image. These shape annotations include rectangles, ellipses, arrows, paths, and lines, allowing you to highlight, emphasize, or mark specific areas or elements within the image.

### Add a rectangle

The Rectangle shape can be inserted and customized by changing its border color, fill color, and border width. The Rectangle shape can be made by either using a toolbar or the [`drawRectangle`](../../api/image-editor/#drawrectangle) method.

In the [`drawRectangle`](../../api/image-editor/#drawrectangle) method, the rectangle shape can be inserted by specifying fillcolor, stroke color and stroke width. The [`drawRectangle`](../../api/image-editor/#drawrectangle) method has the following parameters.

     *  x - Specifies the x-coordinate of the rectangle.

     *  y - Specifies the y-coordinate of the rectangle.

     *  width - Specifies the width of the rectangle.

     *  height - Specifies the height of the rectangle.

     *  strokeWidth - Specifies the stroke width of the rectangle.

     *  strokeColor - Specifies the stroke color of the rectangle.

     *  fillColor - the fill color of the rectangle.

In the toolbar, the Rectangle shape can be inserted by clicking the Annotation dropdown button and picking the Rectangle option from that popup. Once the shape is inserted, the contextual toolbar will be enabled for customizing its fill color, stroke color, and stroke width.

In the following example, the [`drawRectangle`](../../api/image-editor/#drawrectangle) method is used to draw the rectangle.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs3" %}
{% endif %}

### Add an ellipse

The Ellipse shape can be inserted and customized by changing its border color, fill color, and border width. The Ellipse shape can be made by either using a toolbar or the [`drawEllipse`](../../api/image-editor/#drawellipse) method.

In the [`drawEllipse`](../../api/image-editor/#drawellipse) method, the ellipse shape can be inserted by specifying fillcolor, stroke color and stroke width. The [`drawEllipse`](../../api/image-editor/#drawellipse) method has the following parameters.

     * x - Specifies the x-coordinate of the ellipse.

     * y - Specifies the y-coordinate of the ellipse.

     * radiusX - the radius x point for the ellipse.

     * radiusY - the radius y point for the ellipse.

     * strokeWidth - the stroke width of the ellipse.

     * strokeColor - the stroke color of the ellipse.

     * fillColor - the fill color of the ellipse.

In the toolbar, the Ellipse shape can be inserted by clicking the Annotation dropdown button and picking the Ellipse option from that popup. Once the shape is inserted, the contextual toolbar will be enabled for customizing its fill color, stroke color, and stroke width.

In the following example, the [`drawEllipse`](../../api/image-editor/#drawellipse) method is used to draw the ellipse.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs4" %}
{% endif %}

### Add a line

The line shape can be inserted and customized by changing its border color, and border width. The Line shape can be made by either using a toolbar or the [`drawLine`](../../api/image-editor/#drawline) method.

In the [`drawLine`](../../api/image-editor/#drawline) method, the line shape can be inserted by specifying, stroke color and stroke width. The [`drawLine`](../../api/image-editor/#drawline) method has the following parameters:

     *  startX – Specifies start point x-coordinate of line.

     *  startY – Specifies start point y-coordinate of line.

     *  endX - Specifies endpoint x-coordinates of line.

     *  endY - Specifies end point y-coordinates of the line.

     *  strokeWidth - Specifies the stroke width of the line.

     *  strokeColor - Specifies the stroke color of the line.

In the toolbar, the Line shape can be inserted by clicking the Annotation dropdown button and picking the Line option from that popup. Once the line shape is inserted, the contextual toolbar will be enabled for customizing its stroke color, and stroke width.

In the following example, the [`drawLine`](../../api/image-editor/#drawline) method is used to draw the line.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs5" %}
{% endif %}

## Add an arrow

The arrow shape can be inserted and customized by changing its border color, and border width. The Arrow shape can be made by either using a toolbar or the ['drawArrow'](../../api/image-editor/#drawarrow) method.

In the following example, the [`drawArrow`](../../api/image-editor/#drawarrow) method has the following parameters.

     *  startX – Specifies start point x-coordinate of line.

     *  startY – Specifies start point y-coordinate of line.

     *  endX - Specifies endpoint x-coordinates of line.

     *  endY - Specifies end point y-coordinates of the line.

     *  strokeWidth - Specifies the stroke width of the line.

     *  strokeColor - Specifies the stroke color of the line.

In the toolbar,the arrow shape can be inserted by clicking the Annotation dropdown button and picking the Arrow option from that popup. Once that arrow shape is inserted, the contextual toolbar will be enabled for customizing its stroke color, and stroke width.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs6" %}
{% endif %}

## Add a path

The path shape can be inserted and customized by changing its border color, and border width. The Path shape can be made by either using a toolbar or the ['drawPath'](../../api/image-editor/#drawpath) method.

In the [`drawPath`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawpath) method, the path shape can be inserted by specifying, stroke color and stroke width. The ['drawPath'](../../api/image-editor/#drawpath) method has the following parameters.

     *  pointColl - specifies collection of start and end x, y-coordinates of path.

     *  strokeWidth - Specifies the stroke width of the line.

     *  strokeColor - Specifies the stroke color of the line.  

In the toolbar,the path can be inserted by clicking the Annotation dropdown button and picking the Path option from that popup. Once that path shape is inserted, the contextual toolbar will be enabled for customizing its stroke color, and stroke width.

In the following example, the [`drawPath`](../../api/image-editor/#drawpath) method has the following parameters.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/annotation-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/annotation-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/annotation-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/annotation-cs7" %}
{% endif %}

## Delete a shape

The Image Editor component provides the [`deleteShape`](../../api/image-editor/#deleteShape) method, which allows you to remove a shape annotation from the image editor. To use this method, you need to pass the shapeId of the annotation as a parameter.
