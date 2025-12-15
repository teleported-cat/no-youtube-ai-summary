/**
 * Observer function that waits until an element is loaded into the DOM, 
 * executing a callback function if it is loaded before timing out.
 * @param {string} selector 
 * @param {elementCallback} callback 
 * @param {number} timeout 
 */
function waitForElement(selector, callback, timeout = 10000) {
    const element = document.querySelector(selector);
    if (element) {
        callback(element);
        return;
    }

    const observer = new MutationObserver(() => {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
            observer.disconnect();
            clearTimeout(timer);
        }
    });

    const timer = setTimeout(() => {
        observer.disconnect();
        console.log(`[No YouTube AI Summary] The summary element couldn't be found by the script in time. (${timeout} ms)`);
    }, timeout);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

waitForElement('#expandable-metadata', (element) => {
    element.style.display = "none";
    console.log("[No YouTube AI Summary] Summary Blocked!");
})

/**
 * @callback elementCallback
 * @param {Element} element
 */