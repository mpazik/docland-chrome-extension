chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "open-page-in-docland",
    title: "Open page in Docland",
    contexts: ["page", "selection"],
    parentId: undefined
  });
  chrome.contextMenus.create({
    contexts: ["link"],
    id: "open-link-in-docland",
    title: "Open link %s in Docland",
    parentId: undefined
  });
});

function openPageInDocland(url, tabId) {
  if (tabId) {
    chrome.tabs.update(tabId, { url: "https://docland.app/" + url });
  } else {
    chrome.tabs.create({ url: "https://docland.app/" + url });
  }
}

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === 'open-page-in-docland') {
    openPageInDocland(info.pageUrl, tab.id);
  } else if (info.menuItemId === 'open-link-in-docland') {
    openPageInDocland(info.linkUrl)
  }
});

chrome.action.onClicked.addListener((tab) => {
  openPageInDocland(tab.url, tab.id);
});
