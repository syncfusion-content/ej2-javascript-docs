var userData = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
  dataSource: userData,
  showMentionChar: true,
  requireLeadingSpace : false
});
mentionObj.appendTo('#mentionElement');
 

