ej.base.enableRipple(true);

//Initialize Accordion component

var nestAcrdn_vid;
var nestAcrdn_mus;
var nestAcrdn_musNew;
var nestAcrdn_img;
var accordion = new ej.navigations.Accordion({
  expanding: expanding,
  items: [
      { header: 'Video', content: '<div id="nested_video"></div>' },
      { header: 'Music', content: '<div id="nested_music"></div>' },
      { header: 'Images', content: '<div id="nested_images"></div>' },
    ]
});

//Render initialized Accordion component
accordion.appendTo('#element');

function clicked(e) {
  var ele = e.originalEvent.target;
  if (ele.querySelectorAll('.e-accordion').length > 0) {
    return;
  }
  if (!document.getElementById("nested_musicNew").classList.contains("e-accordion")) {
  nestAcrdn_musNew = new ej.navigations.Accordion({
    items: [
      { header: 'New Track1' },
      { header: 'New Track2' }
    ]
  }, '#nested_musicNew');
  }
}

function expanding(e) {
  if (e.isExpanded && [].indexOf.call(this.items, e.item) === 0) {
    if (e.element.querySelectorAll('.e-accordion').length > 0) {
      return;
    }
  nestAcrdn_vid = new ej.navigations.Accordion({
    items: [
      { header: 'Video Track1' },
      { header: 'Video Track2' }
    ]
  }, '#nested_video');
  }
  if (e.isExpanded && [].indexOf.call(this.items, e.item) === 1) {
    if (e.element.querySelectorAll('.e-accordion').length > 0) {
      return;
    }
    nestAcrdn_mus = new ej.navigations.Accordion({
      clicked: clicked,
      items: [
        { header: 'Music Track1' },
        { header: 'Music Track2' },
        { header: 'Music New', content: '<div id="nested_musicNew"></div>' }
      ]
    }, '#nested_music');
  }
  if (e.isExpanded && [].indexOf.call(this.items, e.item) === 2) {
    if (e.element.querySelectorAll('.e-accordion').length > 0) {
      return;
    }
    nestAcrdn_img =new ej.navigations.Accordion({
      items: [
        { header: 'Track1' },
        { header: 'Track2' },
      ]
    }, '#nested_images');
  }
}

