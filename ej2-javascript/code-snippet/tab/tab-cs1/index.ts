


import { Tab, SelectEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple, isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { usa_cities, france_cities, australia_cities } from './datasource.ts';

enableRipple(true);

let tabObj: Tab = new Tab({
  selected: handleSelectEvent,
  created: handleCreatedEvent,
  items:  [
    {
      header: { 'text': 'USA' },
      content: '<div id="usa_tab"></div>'
    },
    {
      header: { 'text': 'France' },
      content: '<div id="france_tab"></div>'
    },
    {
      header: { 'text': 'Australia' },
      content: '<div id="australia_tab"></div>'
    }
  ]
});
tabObj.appendTo('#element');

function handleCreatedEvent(): void {
  if (isNOU(document.querySelector('#usa_tab.e-tab'))) {
    let usa_obj: Tab = new Tab({
      items: usa_cities
    });
    usa_obj.appendTo('#usa_tab');
  }
}
function handleSelectEvent(e: SelectEventArgs): void {
  if (e.selectedIndex === 0 && isNOU(document.querySelector('#usa_tab.e-tab'))) {
    let usa_obj: Tab = new Tab({
      items: usa_cities
    });
    usa_obj.appendTo('#usa_tab');
  } else if (e.selectedIndex === 1 && isNOU(document.querySelector('#france_tab.e-tab'))) {
    let france_obj: Tab = new Tab({
      items: france_cities
    });
    france_obj.appendTo('#france_tab');
  } else if (e.selectedIndex === 2 && isNOU(document.querySelector('#australia_tab.e-tab'))) {
    let australia_obj: Tab = new Tab({
      items: australia_cities
    });
    australia_obj.appendTo('#australia_tab');
  }
}



