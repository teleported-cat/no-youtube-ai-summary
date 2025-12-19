# No YouTube AI Summary (FireFox)

[🌐Check out the Google Chrome Version](https://github.com/teleported-cat/no-youtube-ai-summary-chrome)

A very simple FireFox extension that hides all AI summaries on the YouTube watch & search pages. That's it. Nothing more, nothing less.

I really don't know what else to say here.

I made it since there didn't seem to be any public extensions that did this and I personally hate the Gemini summaries as they provide very shallow summaries that don't contain any useful information and commonly misunderstands the points of videos. If you click on a video, chances are it's because you want to watch it, not read a phoned-in summary.

[⬇️Download on FireFox Addons](https://addons.mozilla.org/en-US/firefox/addon/no-youtube-ai-summary/)

## Changelog

### 4.0

- Restructures script to be more modular. You can now simply add a selector to the 'blockedSelectors' array and all elements that match are hidden!
- Blocks summaries inside the descriptions now.

### 3.0

- Adds support for mobile. (m.youtube.com)

### 2.2

- Fixes bug where loading youtube from a page that isn't watch or search results doesn't block summaries.

### 2.1

- Updates manifest description.

### 2.0

- Now blocks AI summaries (and chapter previews by extension) on the search page.

### 1.0

- Initial Release
