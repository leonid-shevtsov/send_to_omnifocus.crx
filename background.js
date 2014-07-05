// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.tabId, {file: "tab_info_collector.js"}, function(result) {
    result = result[0];
    var name = "Read - " + result.title;
    var note = result.url + "\n" + result.selection;
    var url = 'omnifocus:///add?name='+encodeURIComponent(name)+'&amp;note='+encodeURIComponent(note);

    document.body.insertAdjacentHTML('afterEnd', '<iframe src="'+url+'" style="display:none" />');
  });
  return true;
});
