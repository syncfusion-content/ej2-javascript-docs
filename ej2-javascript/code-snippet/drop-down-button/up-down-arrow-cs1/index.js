ej.base.enableRipple(true);

var items = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

var options = {
  items: items,
  beforeClose: function() {
     drpDownBtn.cssClass = '';
  },
  beforeOpen: function() {
     drpDownBtn.cssClass = 'e-caret-up';
  }
};

var drpDownBtn =  new ej.splitbuttons.DropDownButton(options);
drpDownBtn.appendTo('#arrow');

