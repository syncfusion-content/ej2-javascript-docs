ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
width:600,
items: [
        { prefixIcon: "fa fa-twitter" },
        { prefixIcon: "fa fa-facebook" },
        { prefixIcon: "fa fa-whatsapp" },
        { template: '<button class="e-btn e-tbar-btn"><span style="font-size: 3em; color: Tomato;"><i class="e-icons fa fa-twitter"></i</span></button>' }
       ]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

