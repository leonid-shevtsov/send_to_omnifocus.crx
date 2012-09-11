var SendToOmnifocus = (function() {
  var storage = chrome.storage.sync;
  var defaultTemplate = 'Read «%s»';

  return {
    loadTemplate: function(callback) {
      storage.get({'template': defaultTemplate}, function(items) {
        callback(items.template);
      });
    },

    saveTemplate: function(template) {
      storage.set({'template': template});
    },

    formatTemplate: function(template, text) {
      return template.replace('%s', text);
    }
  };
})();
