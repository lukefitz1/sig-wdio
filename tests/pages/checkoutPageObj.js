class Checkout {
	get checkoutTypeForm() { return $('#login-form'); }
	get checkoutAsGuestBtn() { return $('#onepage-guest-register-button'); }
	get registerLink() { return $('#checkout-step-login > div > div.col-2 > div > a'); }
	get loginForm() { return $('#login-form'); }
	get email() { return $('#login-email'); }
	get pw() { return $('#login-password'); }
	get loginButton() { return $('#login-form > fieldset > ul > li.buttons-set > button'); }
	get billingAddressForm() { return $('#co-billing-form'); }
	get billingFName() { return $('//*[@id="billing:firstname"]'); }
	get billingLName() { return $('//*[@id="billing:lastname"]'); }
	get billingEmail() { return $('//*[@id="billing:email"]'); }
	get billingAddress() { return $('//*[@id="billing:street1"]'); }
	get billingCity() { return $('//*[@id="billing:city"]'); }
	get billingState() { return $('//*[@id="billing:region_id"]'); }
	get billingZip() { return $('//*[@id="billing:postcode"]'); }
	get billingTelephone() { return $('//*[@id="billing:telephone"]'); }
	get billingPw() { return $('//*[@id="billing:customer_password"]'); }
	get billingConfirmPw() { return $('//*[@id="billing:confirm_password"]'); }
	get billingContinueBtn() { return $('#billing-buttons-container > button'); }
	get shipToThisAddresslabel() { return $('#co-billing-form > fieldset > ul > li.control.ship-to-this-address > label'); }
	get shippingAddressForm() { return $('#co-shipping-form'); }
	get shippingMethodForm() { return $('#co-shipping-method-form'); }
	get groundShippingLabel() { return $('#checkout-shipping-method-load > dl > dd > ul > li:nth-child(1) > label'); }
	get groundShippingRadioBtn() {return $('#s_method_fedex_FEDEX_GROUND'); }
	get shippingMethodContinueBtn() { return $('#shipping-method-buttons-container > button'); }
	get paymentMethodForm() { return $('#co-payment-form'); }
	get paymentContinueBtn() { return $('#payment-buttons-container > button'); }
	get moneyOrderRadioBtn() { return $('#p_method_checkmo'); }
	get moneyOrderLabel() { return $('#checkout-payment-method-load > dl > dt:nth-child(7) > label'); }
	get ccLabel() { return $('#checkout-payment-method-load > dl > dt:nth-child(1) > label'); }
	get ccSaveLabel() { return $('#payment_form_authnetcim > li:nth-child(5) > label:nth-child(4)'); }
	get ccNum() { return $('#authnetcim_cc_number'); }
	get ccExpMon() { return $('#authnetcim_expiration'); }
	get ccExpYr() { return $('#authnetcim_expiration_yr'); }
	get orderReview() { return $('#checkout-step-review'); }
	get placeOrderButton() { return $('#review-buttons-container > button'); }

	//order success page elements
	get orderSuccessPageHeading() { return $('#mobile-wrap > div > div > div.content-pane.container > div > div > div.page-title > h1'); }
	get orderNumText() { return $('#mobile-wrap > div > div > div.content-pane.container > div > div > p:nth-child(3)'); }

	//logged in customer 
	submitBillingForm(fn, ln, em, add, city, st, zip, phone, type, pw) {
		this.billingFName.setValue(fn);
		this.billingLName.setValue(ln);
		this.billingEmail.setValue(em);
		this.billingAddress.setValue(add);
		this.billingCity.setValue(city);
		this.billingState.selectByVisibleText(st);
		this.billingZip.setValue(zip);
		this.billingTelephone.setValue(phone);

		if (type && pw) {
			this.billingPw.setValue(pw);
			this.billingConfirmPw.setValue(pw);
		}

		this.billingAddressForm.submitForm();
	}

	submitShippingMethodForm() {
		this.shippingMethodForm.submitForm();
	}

	submitPaymentMethodForm() {
		this.paymentMethodForm.submitForm();
	}

	fillCCForm(num, expmon, expyr) {
		this.ccNum.setValue(num);
		this.ccExpMon.selectByVisibleText(expmon);
		this.ccExpYr.selectByVisibleText(expyr);	
	}

	loginAtCheckout(un, pw) {
		this.email.setValue(un);
		this.pw.setValue(pw);

		this.loginForm.submitForm();
	}

}

module.exports = new Checkout();