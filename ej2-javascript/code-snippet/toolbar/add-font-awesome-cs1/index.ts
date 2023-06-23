


import { Toolbar } from "@syncfusion/ej2-navigations";
let toolbar: Toolbar = new Toolbar({
  items: [
    { prefixIcon: "fa fa-twitter" },
    { prefixIcon: "fa fa-facebook" },
    { prefixIcon: "fa fa-whatsapp" },
    { template: '<button class="e-btn e-tbar-btn"><span style="font-size: 3em; color: Tomato;"><i class="e-icons fa fa-twitter"></i</span></button>' }
  ]
});
toolbar.appendTo("#element");



