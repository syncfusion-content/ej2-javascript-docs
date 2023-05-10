

import {Accordion} from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
let accordion: Accordion = new Accordion({
    items: [
      { header: 'Twitter', expanded: true,  iconCss: 'fa fa-twitter', content: 'Twitter is an online social networking service that enables users to send and read short 140-character messages called "tweets".' },
      { header: 'Facebook',  iconCss: 'fa fa-facebook', content: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates.' },
      { header: 'WhatsApp', iconCss: 'fa fa-whatsapp',  content: 'WhatsApp is an American freeware, cross-platform messaging and Voice over IP (VoIP) service owned by Facebook, Inc.' }
    ]
});
accordion.appendTo('#element');


