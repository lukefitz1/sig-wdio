describe("Register on checkout - should complete register on checkoutBtn", function() {
    this.timeout(35000);
    
    it("should add product to cart, click checkout button", function () {
        browser.url("/windsor-hinge-finial-polished-brass.html");

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
    
    it("should select register on checkout", function() {
        //select register on checkout
        checkout.checkoutTypeForm.waitForVisible();
        checkout.registerLink.click();
    });

    it("should submit billing address form with pw", function() {
        //generate random string for email
        rand = base.generateRandomString();

        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.submitBillingForm('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 
            '145 Williman St', 'Charleston', 'South Carolina', '29403', '8779442583', 
            'register', 'pass4luke');
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
        
        // do not remove this pause
        browser.pause(1000);
        
        if (env === 'stage') {
            checkout.moneyOrderRadioBtn.click();    
        } else if (env === 'prod') {
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
        
        //only complete checkout on staging
        if (env === 'stage') {
            checkout.placeOrderButton.click();
        }
    });

    it("should review order success page", function() {
        //only complete checkout on staging
        if (env === 'stage') {
            //order success page
            checkout.orderSuccessPageHeading.waitForVisible(25000);
            console.log(checkout.orderNumText.getText());
        }
    });
});