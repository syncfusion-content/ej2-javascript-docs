---
layout: post
title: Section format in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Section format in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Section format 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Section format in ##Platform_Name## Document editor control

Document Editor supports various section formatting such as page size, page margins, and more.

## Page size

You can get or set the size of a section at cursor position by using the following sample code.

```ts
documenteditor.selection.sectionFormat.pageWidth = 500;
documenteditor.selection.sectionFormat.pageHeight = 600;
```

You can change the orientation of the page by swapping the values of page width and height respectively.

## Page margins

Left and right page margin defines the gap between the document content from left and right side of the page respectively. Top and bottom page margins defines the gap between the document content from header and footer of the page respectively.
Refer to the following sample code.

```ts
documenteditor.selection.sectionFormat.leftMargin = 10;
documenteditor.selection.sectionFormat.rightMargin = 10;
documenteditor.selection.sectionFormat.bottomMargin = 10;
documenteditor.selection.sectionFormat.topMargin = 10;
```

>Note: The maximum value of Margin is 1584, as per Microsoft Word application and you can set any value less than or equal to 1584 to this property. If you set any value greater than 1584, then Syncfusion Document editor will automatically reset as 1584.

## Header distance

You can define the distance of header content from the top of the page by using the following sample code.

```ts
documenteditor.selection.sectionFormat.headerDistance = 72;
```

## Footer distance

You can define the distance of footer content from the bottom of the page by using the following sample code.

```ts
documenteditor.selection.sectionFormat.footerDistance = 72;
```

## Columns

You can define the number of columns, column width, and space between columns for the pages in a section.

The following code example illustrates how to define the two columns layout for the pages in a section.

```ts
let column: SelectionColumnFormat = new SelectionColumnFormat(container.documentEditor.selection);
column.width = 216;
column.space = 36;
container.documentEditor.selection.sectionFormat.columns = [column, column];
container.documentEditor.selection.sectionFormat.lineBetweenColumns = true;
```

## Breaks

You can insert column break. The following code example illustrates how to insert a column break.

```ts
container.documentEditor.editor.insertColumnBreak();
```

You can insert next page section break to start the new section on the next page.

The following code example illustrates how to insert a next page section break.

```ts
container.documentEditor.editor.insertSectionBreak(SectionBreakType.NewPage);
```

You can insert continuous section break to start the new section on the same page.

The following code example illustrates how to insert a continuous section break.

```ts
container.documentEditor.editor.insertSectionBreak(SectionBreakType.Continuous);
```

## See Also

* [Page setup dialog](../document-editor/dialog#page-setup-dialog)
* [Column dialog](../document-editor/dialog#column-dialog)
