class Search {
	get searchTitle() { return $('#mobile-wrap > div > div > div.content-pane.container > div.main.col2-left-layout > div.col-main > div > div.page-title > h1'); }
	get searchResultsGrid() { return $('#mobile-wrap > div > div > div.content-pane.container > div.main.col2-left-layout > div.col-main > div > div.results-view > div.category-products'); }
	get noResultsText() { return $('#mobile-wrap > div > div > div.content-pane.container > div.main.col2-left-layout > div.col-main > div > div.results-view > p'); }
}

module.exports = new Search();