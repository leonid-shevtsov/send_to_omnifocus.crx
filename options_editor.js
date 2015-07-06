(function() {
  var exampleParams = {
    title: "An important page title",
    selection: "important page fragment",
    url: "http://page-to-read-later.com"
  };

  function enableEditing(editSelector, exampleSelector, templateName) {
    var edit = document.querySelector(editSelector);
    var example = document.querySelector(exampleSelector);

    var updateExample = function() {
      example.value =
        SendToOmnifocus.formatTemplate(edit.value, exampleParams);
    };

    edit.addEventListener("keyup", function() {
      SendToOmnifocus.saveTemplate(templateName, edit.value);
      updateExample();
    });

    SendToOmnifocus.loadTemplates(function(templates) {
      edit.value = templates[templateName];
      updateExample();
    });
  }

  enableEditing("#title_template", "#title_example", "title_template");
  enableEditing("#note_template", "#note_example", "note_template");
})();
