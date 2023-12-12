chrome.action.onClicked.addListener((tab) => {
  console.log("Icon clicked!");
  chrome.tabs.sendMessage(tab.id, { action: "togglePiP" });
});