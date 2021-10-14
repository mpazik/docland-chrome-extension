const openInDocland = () => {
  chrome.tabs.executeScript({
    code: `window.location.replace("https://docland.app/" + window.location.href);`
  });
};

chrome.action.onClicked.addListener((tab) => {
  console.log("Hi", tab.url);
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: () => {
        window.location.replace("https://docland.app/" + window.location.href);
      }
    });
  // openInDocland()
});

chrome.commands.onCommand.addListener(command => {
  if (command === "open-in-docland") {
    openInDocland();
  }
});
