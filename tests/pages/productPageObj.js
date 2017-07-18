class ProductPage {
	//get addToCart() { return $('#product_addtocart_form > div.add-to-box > div > button'); }
	get addToCart() { return $('button*=Add to Cart'); }
	get addToCartModal() { return $('body > div.fancybox-overlay.fancybox-overlay-fixed.cart-overlay > div'); }
	get addToCartModalCheckoutBtn() { return $('#modalcart > div > div.group > div.cart-totals > button.button.large.btn-proceed-checkout.btn-checkout'); }
	get addToCartModalTitle() { return $('#modalcart > div > div.modal-cart-header > h4'); }
	get addToCartModalProdName() { return $('#modalcart > div > div.group > div.added-item > div > div.product-info > h2'); }
	get prodName() { return $('#product_addtocart_form > div.product-main-info > div.product-name > h1'); }
	
	//for a specific configurable product with url key of '/kitchen-sink-drain-set-basket-strainer-and-disposer-flange-and-stopper.html'
	get finishSelect() { return $('#attribute2600'); }
	get finishDropdown() { return $('#product-options-wrapper > ul > li.last > div'); }
	get finishDropdownText() { return $('#product-options-wrapper > ul > li.last > div > div > span'); }
	get finishDropdownList() { return $('#product-options-wrapper > ul > li.last > div > div > ul'); }
	get finishDropdownFirstOpt() { return $('#product-options-wrapper > ul > li.last > div > div > ul > li:nth-child(1)'); }

	//for a specific gouped configurable product with url key of '/36-celebration-vanity-for-undermount-sink-rustic-acacia.html'
	get vanityTopOptionsDropdown() { return $('#gpchild-1 > div.product-details > ul > li:nth-child(1) > div'); }
	get vanityTopOptionsText() { return $('#gpchild-1 > div.product-details > ul > li:nth-child(1) > div > div > span'); }
	get vanityTopOptionsList() { return $('#gpchild-1 > div.product-details > ul > li:nth-child(1) > div > div > ul'); }
	get vanityTopOptionsFirstOpt() { return $('#gpchild-1 > div.product-details > ul > li:nth-child(1) > div > div > ul > li:nth-child(1)'); }
	get vanityTopThicknessSelect() { return $('#attribute2719_1'); }
	get vanityTopThicknessNotDisabled() { return $('#gpchild-1 > div.product-details > ul > li:nth-child(2) > div > div > span:not(disabled)'); }
	get vanityTopFaucetCentersSelect() { return $('#attribute2593_1'); }
	get vanityTopFaucetCentersNotDisabled() { return $('#gpchild-1 > div.product-details > ul > li.list-item.last > div.input-box > div.select-wrap > span:not(disabled)'); }	
	get sinkColorText() { return $('#gpchild-2 > div.product-details > ul > li > div > div > span'); }
	get sinkColorList() { return $('#gpchild-2 > div.product-details > ul > li > div > div > ul'); }
	get sinkColorFirstOpt() { return $('#gpchild-2 > div.product-details > ul > li > div > div > ul > li:nth-child(1)'); }
	get productFinishText() { return $('#gpchild-3 > div.product-details > ul > li > div > div > span'); }
	get productFinishList() { return $('#gpchild-3 > div.product-details > ul > li > div > div > ul'); }
	get productFinishFirstOpt() { return $('#gpchild-3 > div.product-details > ul > li > div > div > ul > li:nth-child(1)'); }

	configureVanityTopThickness(index) {
		this.vanityTopThicknessSelect.selectByIndex(index);
	}

	configureVanityTopFaucetCentersSelect(index) {
		this.vanityTopFaucetCentersSelect.selectByIndex(index);
	}
}

module.exports = new ProductPage();