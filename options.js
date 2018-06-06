window.SendToOmnifocus = (function() {
  var storage = chrome.storage.sync;
  var defaultTitleTemplate = "%title%";
  var defaultNoteTemplate = "%url%\n%selection%";

  return {
    loadTemplates: function(callback) {
      storage.get(
        {
          title_template: defaultTitleTemplate,
          note_template: defaultNoteTemplate
        },
        function(templates) {
          callback(templates);
        }
      );
    },

    saveTemplate: function(name, value) {
      var payload = {};
      payload[name] = value;
      storage.set(payload);
    },

    formatTemplate: function(template, params) {
      return template
        .replace("%title%", params.title)
        .replace("%url%", params.url)
        .replace("%selection%", params.selection);
    }
  };
})();
