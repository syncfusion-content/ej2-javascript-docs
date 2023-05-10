ej.base.enableRipple(true);

//Initialize Tab component
var tabObj = new ej.navigations.Tab({
    items: [
        {
            header: { 'text': 'Twitter' },
            content: 'Twitter is an online social networking service that enables users to send and read short 140-character ' +
                'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
                'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
                'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
                'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
                'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
                'search queries per day.'
        },
        {
            header: { 'text': 'Facebook' },
            content: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
                'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
                'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s ' +
                'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
                'University. It gradually added support for students at various other universities and later to high-school students.'
        },
        {
            header: { 'text': 'WhatsApp' },
            content: 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates ' +
                'under a subscription business model. It uses the Internet to send text messages, images, video, user location and ' +
                'audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user ' +
                'base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in ' +
                'Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.'
        }
    ],
    locale: 'fr-BE',
    showCloseButton: true
});
// Load French culture for tab close button tooltip text
ej.base.L10n.load({
    'fr-BE': {
        'tab': { 'closeButtonTitle': "Fermer" }
    }
});
ej.base.L10n.load({
    'ar-AR': {
       'tab': {'closeButtonTitle': "إغلاق زر العنوان"}
     }
});
ej.base.L10n.load({
    'de-DE': {
       'tab': {'closeButtonTitle': "Schließen Schaltfläche Titel"}
     }
});

//Render initialized Tab component
tabObj.appendTo('#element');

var localeData = [
    { Id: 'ar-AR', Game: 'Arabic' },
    { Id: 'fr-BE', Game: 'French' },
    { Id: 'de-DE', Game: 'German' }
];
// initialize DropDownList component
var dropDownListObject = new ej.dropdowns.DropDownList({
    width: '250px',
    //set the data to dataSource property
    dataSource: localeData,
    //set height to popup list
    fields: { text: 'Game', value: 'Id' },

    popupHeight: '200px',
    //set width to popup list
    popupWidth: '250px',
    change: change,
    value: 'fr-BE',
    // set placeholder to DropDownList input element
    placeholder: "Select a Language"
});
function change(e) {
  if(e.value == "ar-AR")
      tabObj.locale = "ar-AR"
  if (e.value == "fr-BE")
      tabObj.locale = "fr-BE"
    if (e.value == "de-DE")
      tabObj.locale = "de-DE"
}
dropDownListObject.appendTo('#ddlelement');

