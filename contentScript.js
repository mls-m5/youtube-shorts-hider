function hideElements() {
  const elements = document.querySelectorAll("ytd-grid-video-renderer");
  elements.forEach((element) => {
    const span = element.querySelector('[aria-label="Shorts"]');
    if (span) {
      element.style.display = "none";
    }
  });
}

function observeDOM() {
  const targetNode = document.body;

  const config = {
    childList: true,
    subtree: true
  };

  const callback = function (mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        hideElements();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

// Call hideElements() in case elements are already present on the page.
hideElements();

// Start observing the DOM for changes.
observeDOM();
