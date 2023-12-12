chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "togglePiP") {
      const video = document.querySelector('video');
      if (video) {
        video.requestPictureInPicture();
      }
    }
  });
  
  console.log("Content script loaded");