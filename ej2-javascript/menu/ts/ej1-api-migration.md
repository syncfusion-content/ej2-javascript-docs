---
layout: post
title: Ej1 api migration in ##Platform_Name## Menu control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Menu control

This article describes the API migration process of Menu component from Essential JS 1 to Essential JS 2.

## Properties

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Animation type on hover or click on the menu items | **Property:** *animationType* <br/><br/> new ej.Menu($("#menu"), { <br/>animationType: ej.AnimationType.Default <br/> }); | Not applicable |
| Context menu target  | **Property:** *contextMenuTarget* <br/><br/> new ej.Menu($("#menu"), { <br/>menuType: ej.MenuType.ContextMenu, <br/>contextMenuTarget: "#target", <br/> }); | Not applicable |
| Container element for submenu’s collision | **Property:** *container* <br/><br/> new ej.Menu($("#menu"), { <br/> container: "#target", <br/> target: "#target"<br/> }); | Not applicable |
| Menu items  | Not applicable | **Property:** *items* <br/>let menu: Menu= new Menu({ <br/>items: menuItems<br/>}); <br/>menu.appendTo("#menu"); <br/> let menuItems: MenuItemModel[] = [ <br/> &nbsp; {<br/> &nbsp; &nbsp; text: 'File'  &nbsp; <br/> &nbsp; }, <br/> &nbsp; {<br/> &nbsp; &nbsp; text: 'Edit'  &nbsp; <br/> &nbsp; }, <br/> &nbsp; {<br/> &nbsp; &nbsp; text: 'More' <br/> &nbsp; }, <br/> &nbsp; {<br/> &nbsp; &nbsp; text: 'Help'  &nbsp; <br/> &nbsp; } <br/> ] |
| Adding custom class  | **Property:** *cssClass* <br/><br/> new ej.Menu($("#menu"), { <br/>cssClass: "e-custom-class" <br/> }); | **Property:** *cssClass* <br/><br/> let menu: Menu= new Menu({ <br/>cssClass: "e-custom-class",<br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu"); |
| Enables or disables the animation on hover or click on the menu items | **Property:** *enableAnimation* <br/><br/> new ej.Menu($("#menu"), { <br/>enableAnimation: true, <br/> }); | Not applicable |
| Root menu items to be aligned center in horizontal menu | **Property:** *enableCenterAlign* <br/><br/> new ej.Menu($("#menu"), { <br/>enableCenterAlign: true, <br/> }); | Not applicable |
| Disabled state | **Property:** *enabled* <br/><br/> new ej.Menu($("#menu"), { <br/>enabled: false <br/> }); | **Property:** *disabled* <br/><br/> let menu: Menu= new Menu({ <br/>disabled: true,<br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu"); |
| RTL  | **Property:** *enableRTL* <br/><br/> new ej.Menu($("#menu"), { <br/>enableRTL: true <br/> }); | **Property:** *enableRtl* <br/><br/> let menu: Menu= new Menu({ <br/>enableRtl: true,<br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu"); |
| Enables/Disables the separator  | **Property:** *enableSeparator* <br/><br/> new ej.Menu($("#menu"), { <br/>enableSeparator: true <br/> }); | Not applicable |
| Exclude target for context menu  | **Property:** *excludeTarget* <br/><br/> new ej.Menu($("#menu"), { <br/>excludeTarget: ".exclude-target",<br/>menuType: ej.MenuType.ContextMenu, <br/> contextMenuTarget: "#target" <br/> }); | Not applicable |
| Fields | **Property:** *fields* <br/><br/> new ej.Menu($("#menu"), { <br/>fields: menuFields <br/> }); | **Property:** *fields* <br/><br/> let menu: Menu= new Menu({ <br/>fields: menuFields,<br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu"); |
| Height | **Property:** *height* <br/><br/> new ej.Menu($("#menu"), { <br/>height: "25" <br/> }); | Not applicable |
| HTML Attributes | **Property:** *htmlAttributes* <br/><br/> new ej.Menu($("#menu"), { <br/>htmlAttributes: {"aria-label":"menu"} <br/> }); | Not applicable |
| Responsive | **Property:** *isResponsive* <br/><br/> new ej.Menu($("#menu"), { <br/>isResponsive: true<br/> }); | Not applicable |
| Menu Type | **Property:** *menuType* <br/><br/> new ej.Menu($("#menu"), { <br/>menuType: ej.MenuType.ContextMenu, <br/>contextMenuTarget: "#target"<br/> }); | Not applicable |
| Show item on click  | **Property:** *openOnClick* <br/><br/> new ej.Menu($("#menu"), { <br/>openOnClick: true <br/> }); | **Property:** *showItemOnClick* <br/><br/> let menu: Menu= new Menu({ <br/>showItemOnClick: true,<br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu"); |
| Orientation  | **Property:** *orientation* <br/><br/> new ej.Menu($("#menu"), { <br/>orientation: ej.Orientation.Vertical <br/> }); | **Property:** *orientation* <br/><br/> let menu: Menu= new Menu({ <br/>orientation: "Vertical",<br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu"); |
| Show root level arrows | **Property:** *showRootLevelArrows* <br/><br/> new ej.Menu($("#menu"), { <br/>showRootLevelArrows: false<br/> }); | Not applicable |
| Show sub level arrows | **Property:** *showSubLevelArrows* <br/><br/> new ej.Menu($("#menu"), { <br/>showSubLevelArrows: false<br/> }); | Not applicable |
| Sub menu direction | **Property:** *subMenuDirection* <br/><br/> new ej.Menu($("#menu"), { <br/>subMenuDirection: "left"<br/> }); | Not applicable |
| Title | **Property:** *titleText* <br/><br/> new ej.Menu($("#menu"), { <br/>titleText: "Menu"<br/> }); | Not applicable |
| Width | **Property:** *width* <br/><br/> new ej.Menu($("#menu"), { <br/>width: "800px"<br/> }); | Not applicable |
| Animation settings  | Not applicable | **Property:** *animationSettings* <br/><br/> let animationSettings: MenuAnimationSettings = { effect: "FadeIn" }<br/>let menu: Menu= new Menu({ <br/>animationSettings: animationSettings,<br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu"); |
| Template  | Not applicable | **Property:** *template* <br/><br/> let menu: Menu= new Menu({<br/>items: [{<br/> category: 'Services', options: [{<br/> suport: [<br/> { value: 'Application Development', count: '1200+' },<br/>{ value: 'Maintenance & Support', count: '3700+' },<br/>{ value: 'Quality Assurance' }<br/>]<br/>}]<br/>}<br/>{ category: 'Careers' },<br/>{ category: 'Sign In' }<br/>],<br/>template: "#template"}); <br/>menu.appendTo("#menu"); |
| Pop up menu height | **Property:** *overflowHeight* <br/><br/> new ej.Menu($("#menu"), { <br/>overflowHeight: "200px"<br/> }); | Not applicable |

## Methods

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Disable Method | **Method:** *disable* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.disable();| Not applicable |
| Disable menu items | **Method:** *disableItem* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.disableItem("Home");| **Method:** *enableItems* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.enableItems("Home", false) |
| Disable menu items by ID | **Method:** *disableItemByID* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.disableItemByID("home_id");| **Method:** *enableItems* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.enableItems("home_id", false, true) |
| Enable Method | **Method:** *enable* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.enable();| Not applicable |
| Enable menu items | **Method:** *enableItem* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.enableItem("Home");| **Method:** *enableItems* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.enableItems("Home", true); |
| Enable menu items by ID | **Method:** *enableItemByID* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.enableItemByID("home_id");| **Method:** *enableItems* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.enableItems("home_id", true, true); |
| Hide Method | **Method:** *hide* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.hide();| Not applicable |
| Hide menu items | **Method:** *hideItems* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.hideItems(["#search","#company"]);| **Method:** *hideItems* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.hideItems(["search","company"], true); |
| Insert menu items | **Method:** *insert* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.insert([{ id: "More", text: "More" }], "#Home");| Not applicable |
| Insert menu items after the specified menu item | **Method:** *insertAfter* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.insertAfter([{ id: "More", text: "More" }], "#Home");| **Method:** *insertAfter* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.insertAfter([{ id: "More", text: "More" }], "Home"); |
| Insert menu items before the specified menu item | **Method:** *insertBefore* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.insertBefore([{ id: "More", text: "More" }], "#Home");| **Method:** *insertBefore* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.insertBefore([{ id: "More", text: "More" }], "Home"); |
| Remove menu items | **Method:** *remove* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.remove(["#Home"]);| **Method:** *removeItems* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.removeItems(["Home"]); |
| To show menu | **Method:** *show* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.show();| Not applicable |
| To show menu items | **Method:** *showItems* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.showItems(["#search", "#company"]);| **Method:** *showItems* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.showItems(["Search", "Company"]); |
| Destroy method | **Method:** *destroy* <br/><br/> var menu = new ej.Menu($("#menu"), { }); <br/> menu.destroy();| **Method:** *destroy* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems<br/>}); <br/>menu.appendTo("#menu");<br/> menu.destroy(); |

## Events

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Triggers before opening the menu | **Events:** *beforeOpen* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> beforeOpen: function(args) { /** code block */ } <br/> }); | **Events:** *beforeOpen* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems <br/> beforeOpen: (args) => { /** code block */ }<br/>}); <br/>menu.appendTo("#menu"); |
| Triggers before closing the menu | Not applicable | **Events:** *beforeClose* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems <br/> beforeClose: (args) => { /** code block */ }<br/>}); <br/>menu.appendTo("#menu"); |
| Triggers before rendering each menu item | Not applicable | **Events:** *beforeItemRender* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems <br/> beforeItemRender: (args) => { /** code block */ }<br/>}); <br/>menu.appendTo("#menu"); |
| Triggers while selecting the menu item | **Events:** *click* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> click: function(args) { /** code block */ } <br/> }); | **Events:** *select* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems <br/> select: (args) => { /** code block */ }<br/>}); <br/>menu.appendTo("#menu"); |
| Triggers after closing the menu | **Events:** *close* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> close: function(args) { /** code block */ } <br/> }); | **Events:** *onClose* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems <br/> onClose: (args) => { /** code block */ }<br/>}); <br/>menu.appendTo("#menu"); |
| Triggers after opening the menu | **Events:** *open* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> open: function(args) { /** code block */ } <br/> }); | **Events:** *onOpen* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems <br/> onOpen: (args) => { /** code block */ }<br/>}); <br/>menu.appendTo("#menu"); |
| Triggers once the component rendering is completed | **Events:** *create* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> create: function(args) { /** code block */ } <br/> }); | **Events:** *created* <br/><br/> let menu: Menu= new Menu({ <br/> items: menuItems <br/> created: () => { /** code block */ }<br/>}); <br/>menu.appendTo("#menu"); |
| Triggers once the component is destroyed | **Events:** *destroy* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> destroy: function(args) { /** code block */ } <br/> }); | Not applicable |
| Triggers when key down on menu items | **Events:** *keydown* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> keydown: function(args) { /** code block */ } <br/> }); | Not applicable |
| Triggers when mouse out from menu items | **Events:** *mouseout* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> mouseout: function(args) { /** code block */ } <br/> }); | Not applicable |
| Triggers when mouse over the Menu items | **Events:** *mouseover* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> mouseover: function(args) { /** code block */ } <br/> }); | Not applicable |
| Triggers when overflow popup menu opens | **Events:** *overflowOpen* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> overflowOpen: function(args) { /** code block */ } <br/> }); | Not applicable |
| Triggers when overflow popup menu closes | **Events:** *overflowClose* <br/><br/> var menu = new ej.Menu($("#menu"), {<br/> overflowClose: function(args) { /** code block */ } <br/> }); | Not applicable |