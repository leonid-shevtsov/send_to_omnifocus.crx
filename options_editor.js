(function() {
  var templateText = document.querySelector('input#template');
  var exampleElement = document.querySelector('input#example');
  var exampleTitle = 'An important page title';

  var updateExample = function() {
    exampleElement.value = 
      SendToOmnifocus.formatTemplate(templateText.value, exampleTitle);
  };

  templateText.addEventListener('keyup', function() {
    SendToOmnifocus.saveTemplate(templateText.value);
    updateExample();
  });

  SendToOmnifocus.loadTemplate(function(template) {
    templateText.value = template;
    updateExample();
  });
})();
