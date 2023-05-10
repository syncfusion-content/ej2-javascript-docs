ej.base.enableRipple(true);

var items = [
    {
        text: 'New tab'
    },
    {
        text: 'New window'
    },
    {
        text: 'New incognito window'
    },
    {
        separator: true
    },
    {
        text: 'Print' 
    },
    {
        text: 'Cast'
    },
    {
        text: 'Find'
    }];
var options = {
  items: items,
  iconCss: 'e-icons e-menu',
  cssClass: 'e-caret-hide'
};
var drpDownBtn = new ej.splitbuttons.DropDownButton(options);
drpDownBtn.appendTo('#icononly');

