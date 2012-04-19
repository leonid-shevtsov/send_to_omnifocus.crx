// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.tabId, {file: "send_to_omnifocus.js"});
  return true;
});
