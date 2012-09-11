SendToOmnifocus.loadTemplate(function(template) {
  var name = SendToOmnifocus.formatTemplate(template, document.title);
  var note = window.location;
  var selection = window.getSelection().toString();

  if (selection !== '') {
    note += "\n" + selection;
  }

  var url = 'omnifocus:///add?name='+encodeURIComponent(name)+'&note='+encodeURIComponent(note);

  // window.location = url does not work repetitively because of http://code.google.com/p/chromium/issues/detail?id=104853
  document.body.insertAdjacentHTML('afterEnd', '<iframe src="'+url+'" style="display:none">');
});
