/**
 * Observer function that triggers a callback for a set of elements whenever the DOM is updated.
 * @param {string} selector 
 * @param {elementCallback} callback 
 */
function waitForElements(selector, callback) {
    /**
     * Retrieves a list of elements that match the selector in waitForElements() 
     * and executes a callback function if any exists.
     */
    const hideElements = () => {
        const elementList = document.querySelectorAll(selector);
        if (elementList.length > 0) {
            callback(elementList);
        }
    };

    // Run when script is first loaded
    hideElements();

    // Create a new mutation observer to run hideElements() when triggered.
    const observer = new MutationObserver(hideElements);

    // Config observer to trigger every time the DOM is updated.
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

/* 
 * Execution starts here 
 */

waitForElements('#expandable-metadata', (elements) => {
    elements.forEach(el => {
        el.style.display = "none";
    });
    // Fair Warning: This console.log will rapidly fill your console every time the DOM is updated!
    // console.log(`[No YouTube AI Summary] Summary Blocked!`);
})

/**
 * @callback elementCallback
 * @param {NodeListOf<Element>} elements
 */