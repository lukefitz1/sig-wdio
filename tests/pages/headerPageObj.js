class Header {
	get header() { return $('#header-container'); }
	get logo() { return $('#header-container > div.container > div > div.branding > h1'); }
	get search() { return $('#search'); }
	get searchForm() { return $('#search_mini_form'); }
	get searchDropdown() { return $('#nav-wrapper > div.form-search-mini > div'); }
	get miniCartIcon() { return $('#header-container > div.container > div > div.quick-access > div > div'); }
	get miniCartDropdown() { return $('#topCartContent'); }
	get miniCartCheckoutBtn() { return $('#topCartContent > div > div.actions > button'); }
	get modal() { return $('#ltkmodal-container'); }
	get modalCloseBtn() { return $('#close-button'); }

	//logged in customer 
	waitForAndCloseModal() {
		this.modal.waitForVisible(8000);
        this.modalCloseBtn.waitForVisible(5000);
        this.modalCloseBtn.click();
        this.modal.waitForVisible(3000, true);
	}
}

module.exports = new Header();