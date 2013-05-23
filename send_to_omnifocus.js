(function() {
  var name = 'Read «' + document.title + '»';
  var note = window.location;
  var selection = window.getSelection().toString();

  if (selection !== '') {
    note += "\n" + selection;
  }

  var url = 'omnifocus:///add?name='+encodeURIComponent(name)+'&note='+encodeURIComponent(note);

  try {
    // window.location = url does not work repetitively because of http://code.google.com/p/chromium/issues/detail?id=104853
    document.body.insertAdjacentHTML('afterEnd', '<iframe src="'+url+'" style="display:none">');
  } catch (e) {
    if (e instanceof DOMException) {
      // If the page uses a strict XHTML schema, the iframe method does not work
      // because the 'omnifocus' URL protocol does not pass validation. Fall back to location method if that is the case.
      // See http://jblevins.org/projects/deft/ for an example
      window.location = url;
    } else {
      throw e;
    }
  }
})();
