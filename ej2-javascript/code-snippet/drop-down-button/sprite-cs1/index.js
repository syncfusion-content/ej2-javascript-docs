ej.base.enableRipple(true);

// Initialize action items.
var items = [
    {
        text: 'Display Settings'
    },
    {
        text: 'System Settings'
    },
    {
        text: 'Additional Settings'
    }];

// Initialize DropDownButton options.
var options = {
  items: items,
  cssClass: 'e-caret-hide',
  iconCss: 'e-image'
};

// To initialize the DropDownButton with sprite image.
var drpDownBtn = new ej.splitbuttons.DropDownButton(options, '#icononly');

