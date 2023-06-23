ej.base.enableRipple(true);

var items = [
    {
        text: 'Edit'
    },
    {
        text: 'Cut'
    }];

var ddbOption = {
  iconCss: 'e-ddb-icons e-paste',
  cssClass: 'e-vertical',
  items: items,
  iconPosition: 'Top',
  beforeItemRender: itemRender
}

var drpDownBtn = new  ej.splitbuttons.DropDownButton(ddbOption, '#iconbutton');

function itemRender(args) {
    if (args.item.text === 'Edit') {
      args.element.innerHTML = '<span></span><div><b>Paste Text</b><div>Provides option to paste only the<br>selected text.</div></div>';
      args.element.style.height = '80px';
      var span = args.element.children[0];
      span.setAttribute('class','e-cm-icons e-pastetext e-align');
      var div = args.element.children[1];
      div.setAttribute('class', 'e-div-align');
    } else {
      args.element.innerHTML = '<span></span><div><b>Paste Special</b><div>Provides options to paste formulas,<br> values, comments, validations etc...</div></div>';
      args.element.style.height = '80px';
      var span = args.element.children[0];
      span.setAttribute('class','e-cm-icons e-pastespecial e-align');
      var div = args.element.children[1];
      div.setAttribute('class', 'e-div-align');
    }
}

