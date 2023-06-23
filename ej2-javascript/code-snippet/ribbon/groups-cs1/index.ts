

import { Ribbon } from "@syncfusion/ej2-ribbon";

let ribbon: Ribbon = new Ribbon({
    tabs: [
      {
        header: "Home",
        groups: [
            {
                header: "Clipboard"
            }
        ]
      },
      {
        header: "Insert",
        groups: [
            {
                header: "Tables"
            }
        ]
      }
    ]
  });
  ribbon.appendTo("#ribbon");


