function mute(mute) {
  chrome.runtime.sendMessage({ mute: mute }, function (response) {
    // do nothing
  });
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function (mutations, observer) {
  var query = document.querySelector('.playControlsPanel.sc-font-body.sc-background-darkgrey.is-active.m-companionless .playControlsPanel__whyAds');
  if (query) {
    mute(true);
  } else {
    mute(false);
  }
});

observer.observe(document, {
  subtree: true,
  childList: true,
  attributes: false
});