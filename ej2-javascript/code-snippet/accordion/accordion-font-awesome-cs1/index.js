ej.base.enableRipple(true);

//Initialize Accordion component

var accordion = new ej.navigations.Accordion({
items: [
      { header: 'Twitter', expanded: 'true',  iconCss: 'fa fa-twitter', content: 'Twitter is an online social networking service that enables users to send and read short 140-character messages called "tweets".' },
      { header: 'Facebook',  iconCss: 'fa fa-facebook', content: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates.' },
      { header: 'WhatsApp', iconCss: 'fa fa-whatsapp',  content: 'WhatsApp is an American freeware, cross-platform messaging and Voice over IP (VoIP) service owned by Facebook, Inc.' },
    ]
});

//Render initialized Accordion component
accordion.appendTo('#element');

