chrome.browserAction.onClicked.addListener(function(){
	
	chrome.tabs.executeScript({
	
		file: "lightbox.js"
	
	});
	
});