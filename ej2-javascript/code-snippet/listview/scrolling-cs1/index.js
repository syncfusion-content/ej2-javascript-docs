var data = [
  { text: "Hi Guys, Good morning! \uD83D\uDE0A, I'm very delighted to share with you the news that our team is going to launch a new mobile application", templateHeight: '90px', positionClass: 'right' },
  { text: "Oh! That's great \uD83D\uDE42", templateHeight: '70px', positionClass: 'left' },
  { text: 'That is a good news \uD83D\uDE00', templateHeight: '80px', positionClass: 'right' },
  { text: 'What kind of application we are gonna launch? \uD83E\uDD14', templateHeight: '50px', positionClass: 'left' },
  { text: 'A kind of "Emergency Broadcast App" like being able to just invite someone to teams without it impacting how many people have official access', templateHeight: '100px', positionClass: 'right' },
  { text: 'Who will be the client users for our applications? ', templateHeight: '110px', positionClass: 'left' },
  { text: 'Is currently the only way to invite someone through 0365? Just wondering down the road how organization would want to handle that with freelancers, like being able to just invite someone to teams without it impacting how many people have official access \uD83D\uDE14', positionClass: 'right' },
  { text: 'Yes, however, that feature of inviting someone from outside your organization is planned - expected closer to GA next year \uD83D\uDC4D', positionClass: 'left' },
  { text: 'I guess we should switch things over to hear for a while. How long does the trial last? \uD83E\uDD14', positionClass: 'right' },
  { text: 'I think the trial is 30 days. \uD83D\uDE03', positionClass: 'left' },
  { text: 'Only 0365 only members of your organization. They said that they are listening to customer feedback and hinted that guest users would be brought in down the road \uD83D\uDE09', positionClass: 'right' },
  { text: 'Cool thanks! \uD83D\uDC4C', positionClass: 'left' },
];
function loadTemplate(data) {
  var containerClass =
    data.positionClass === 'right' ? 'justify-content: flex-end' : '';
  return (
    '<div style="display: flex; ' +
    containerClass +
    ';" class="e-list-wrapper e-list-multi-line">' +
    '<span style="display: block; white-space: normal;max-width: 80%; padding: 10px;background-color: #e0e0e0;border-radius: 10px;word-wrap: break-word;" class="e-list-item-header">' +
    data.text +
    '</span>' +
    '</div>'
  );
}
//Initialize ListView control
var listObj_1 = new ej.lists.ListView({
  //Initialize dataSource with the DataManager instance.
  dataSource: data.slice(0, 5),
  scroll: onListScrolled,
  height: 300,
  width: 400,
  template: loadTemplate,
  cssClass: 'e-list-template',
});

//Render initialized ListView control
listObj_1.appendTo('#list-scrolling-down');
var itemsRendered = 5;
var itemsPerScroll = 5;
var result = [];

function onListScrolled(args) {
  if (args.scrollDirection === 'Bottom') {
    if (args.distanceY < 100) {
      if (itemsRendered < data.length) {
        var startIndex = itemsRendered;
        var endIndex = Math.min(itemsRendered + itemsPerScroll, data.length);
        result = data.slice(startIndex, endIndex);
        listObj_1.addItem(result);
        itemsRendered = endIndex;
      }
    }
  }
}
