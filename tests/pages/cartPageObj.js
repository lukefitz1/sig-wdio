class Cart {
	get checkoutBtn() { return $('#mobile-wrap > div > div > div.content-pane.container > div > div > div > div.totals > ul > li:nth-child(1) > button'); }
}

module.exports = new Cart();