chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (sender.tab) {
            chrome.tabs.query({}, function (tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    var tab = tabs[i];
                    if (tab && tab.id && tab.url.includes('soundcloud')) {
                        chrome.tabs.update(tab.id, { muted: request.mute });
                    }
                }
            });
        }
    }
);
