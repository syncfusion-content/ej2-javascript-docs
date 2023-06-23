

import { Ribbon } from "@syncfusion/ej2-ribbon";

let ribbon: Ribbon = new Ribbon({
  tabs: [
    {
      header: "Home"
    },
    {
      header: "Insert"
    }
  ]
});
ribbon.appendTo("#ribbon");


