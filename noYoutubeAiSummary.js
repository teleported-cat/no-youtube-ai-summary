/**
 * Observer function that triggers a callback for a set of elements whenever the DOM is updated.
 * @param {string[]} selectors
 * @param {elementCallback} callback 
 */
function waitForElements(selectors, callback) {
    /**
     * Retrieves a list of elements that match all selectors in waitForElements() 
     * and executes a callback function if any exists.
     */
    const hideElements = () => {
        // For each selector, append all matching elements into one array 
        let elementList = [];
        selectors.forEach(selector => {
            selectorElements = document.querySelectorAll(selector);
            selectorElementsArray = Array.from(selectorElements);
            elementList = elementList.concat(selectorElementsArray);
        });

        if (elementList.length > 0) {
            // console.log(`[No YouTube AI Summary] ${elementList.length} Elements to hide!`);
            callback(elementList);
            // console.log(`[No YouTube AI Summary] Callback done!`);
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
console.log("[No YouTube AI Summary] Loading...");

// These are the elements to be hidden.
// Add more or tune to your liking!
const blockedSelectors = [
    '#expandable-metadata', // Used below description (watch), beside video (results)
    '.expandableMetadataRendererHost', // Used in description (m.youtube.com/watch)
    '#video-summary' // Used in description (watch)
];

waitForElements(blockedSelectors, (elements) => {
    // console.log(`[No YouTube AI Summary] In callback! Elements are: ${elements}`);
    elements.forEach(el => {
        el.style.display = "none";
    });
    // Fair Warning: This console.log will rapidly fill your console every time the DOM is updated!
    // console.log(`[No YouTube AI Summary] Summary Blocked!`);
})

console.log("[No YouTube AI Summary] Loaded!");

/**
 * @callback elementCallback
 * @param {NodeListOf<Element>} elements
 */