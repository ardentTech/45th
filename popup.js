chrome.storage.local.get({"swapCount": 0}, function(o) {
    document.getElementById("counter").textContent = o.swapCount;
});
