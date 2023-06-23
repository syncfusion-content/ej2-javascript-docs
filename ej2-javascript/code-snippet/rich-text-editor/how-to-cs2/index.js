var defaultRTE = new ej.richtexteditor.RichTextEditor({});
defaultRTE.appendTo('#defaultRTE');

defaultRTE.contentModule.getDocument().addEventListener("keydown", function (e) {
      if (e.key === 's' && e.ctrlKey === true) {
            e.preventDefault(); // to prevent default ctrl+s action
            defaultRTE.updateValue(); // to update the value after editing
            var value = defaultRTE.value; // you can get the RTE content to save in the desired database
      }
});

