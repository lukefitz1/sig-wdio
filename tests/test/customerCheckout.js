describe("Customer checkout - should login, add product to cart, then complete checkout", function() {
    this.timeout(35000);
    
    it("should login to customer account", function() {
        browser.url("/customer/account/login");

        //assert that the login form is displayed on page load
        expect(account.loginForm.isVisible()).to.be.true;
        expect(account.loginBtn.isVisible()).to.be.true;

        //login
        account.login('luke.fitzgerald-test2@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
    });

    it("should add product to cart, click checkout button", function () {
        browser.url("/windsor-hinge-finial-polished-brass.html");
        //browser.url("/outdoor/mailboxes-and-slots/rectangular-locking-recessed-brushed-stainless-steel-mailbox.html");

        //wait for the modal to display, and then close it, and wait for it to be closed completely
        header.modal.waitForVisible(8000);
        header.modalCloseBtn.waitForVisible(3000);
        header.modalCloseBtn.click();
        header.modal.waitForVisible(3000, true);

        //ensure add to cart button is visible, mini cart is not visible
        prod.addToCart.waitForVisible(3000);
        expect(prod.addToCart.isVisible()).to.be.true;
        expect(header.miniCartDropdown.isVisible()).to.be.false;
        
        //add simple product to cart
        prod.addToCart.click();
        
        //wait for cart modal to display, go to checkout
        prod.addToCartModal.waitForVisible();
        prod.addToCartModalCheckoutBtn.click();
    });

    it("should click checkout button on cart page", function() {
        //wait for checkout button to display on cart page, click it
        cart.checkoutBtn.waitForVisible();
        cart.checkoutBtn.click();
    });

    it("should submit billing address form with already saved address", function() {
        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.billingAddressForm.submitForm();
    });

    it("should submit shipping method form", function() {
        //make sure all shipping method elements are displayed
        checkout.shippingMethodForm.waitForVisible();
        checkout.groundShippingLabel.waitForVisible();
        checkout.shippingMethodContinueBtn.waitForVisible();

        browser.pause(1000);

        //select shipping method, submit form            
        checkout.groundShippingLabel.click();
        checkout.submitShippingMethodForm();
    });

    it("should submit payment method form", function() {
        //select payment method (cc), submit form
        checkout.paymentMethodForm.waitForVisible();
        
        if (env === 'stage') {
            checkout.moneyOrderRadioBtn.click();    
        } else if (env === 'prod') {
            checkout.ccLabel.click();
            //checkout.ccSaveLabel.click();
            //checkout.fillCCForm('4111111111111111', '8', '2019');
            checkout.fillCCForm('', '8', '2019');
        }
        
        checkout.submitPaymentMethodForm();
    });

    it("should submit order", function() {
        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();

        browser.pause(1000);

        expect(checkout.placeOrderButton.isVisible()).to.be.true;
        checkout.placeOrderButton.click();
    });

    it("should review order success page", function() {
        //order success page
        checkout.orderSuccessPageHeading.waitForVisible(25000);
        console.log(checkout.orderNumText.getText());
    });
});