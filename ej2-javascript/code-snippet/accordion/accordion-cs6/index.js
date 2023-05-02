ej.base.enableRipple(true);

//Initialize Accordion component

var clickEle;
var accordion = new ej.navigations.Accordion({
expandMode: 'Single',
clicked: clicked,
expanding: beforeExpand,
items: [
    { header: 'ASP.NET', expanded: 'true', content: 'Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.' },
    { header: 'ASP.NET MVC', content: 'The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.' },
    { header: 'JavaScript', content: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.' },
]
});

//Render initialized Accordion component
accordion.appendTo('#element');

function clicked (e) {
  clickEle = e.originalEvent.target.closest('.e-acrdn-header');
}

function beforeExpand (e) {
  var expandCount = this.element.querySelectorAll('.e-selected').length;
  var ele = this.element.querySelectorAll('.e-selected')[0];
  if (ele) {
    ele = ele.firstChild
  }
  if (expandCount === 1 && ele === clickEle) {
    e.cancel = true;
  }
}

