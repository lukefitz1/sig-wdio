describe("Perform search", function () {    
    this.timeout(25000);

    describe("Perform add to cart action on all product types", function() {
        it("should add simple product to cart", function () {
            browser.url("/windsor-hinge-finial-polished-brass.html");

            //wait for the modal to display, and then close it, and wait for it to be closed completely
            header.waitForAndCloseModal();

            //ensure add to cart button is visible
            prod.addToCart.waitForVisible();
            expect(prod.addToCart.isVisible()).to.be.true;

            //get product name, format it
            var prodName = prod.prodName.getText();
            
            //add configurable product to cart
            prod.addToCart.click();

            //wait for cart modal to display, go to checkout
            prod.addToCartModal.waitForVisible();
            expect(prod.addToCartModal.isVisible()).to.be.true;
            expect(prod.addToCartModalTitle.getText()).to.equal("1 ITEM ADDED TO CART");
            expect(prod.addToCartModalProdName.getText()).to.equal(prodName);
        });

        it("should add configurable product to cart", function () {
            browser.url("/kitchen-sink-drain-set-basket-strainer-and-disposer-flange-and-stopper.html");

            //ensure add to cart button is visible
            prod.addToCart.waitForVisible();
            expect(prod.addToCart.isVisible()).to.be.true;

            //get product name, format it
            var prodName = prod.prodName.getText();
            var name = base.formatProdNameString(prodName);

            //configure product
            prod.finishDropdown.waitForVisible();

            //to manually configure the product, since the select is not visible, 
            //you have to click the actual page elements to make the selection
            prod.finishDropdownText.click();
            prod.finishDropdownList.waitForVisible();
            prod.finishDropdownFirstOpt.click();
            
            //add configurable product to cart
            prod.addToCart.click();

            //wait for cart modal to display, go to checkout
            prod.addToCartModal.waitForVisible();
            expect(prod.addToCartModal.isVisible()).to.be.true;
            expect(prod.addToCartModalTitle.getText()).to.equal("1 ITEM ADDED TO CART");
            expect(prod.addToCartModalProdName.getText()).to.equal(prodName);
        });

        it("should add grouped configurable product to cart", function () {
            browser.url("/36-celebration-vanity-for-undermount-sink-rustic-acacia.html");

            //ensure add to cart button is visible
            prod.addToCart.waitForVisible();
            expect(prod.addToCart.isVisible()).to.be.true;

            //get product name, format it
            var prodName = prod.prodName.getText();
            var name = base.formatProdNameString(prodName);

            //configure product
            prod.vanityTopOptionsDropdown.waitForVisible();

            //to manually configure the product, since the select is not visible, 
            //you have to click the actual page elements to make the selection - this is for the first
            //dropdown in each block only
            prod.vanityTopOptionsText.click();
            prod.vanityTopOptionsList.waitForVisible();
            prod.vanityTopOptionsFirstOpt.click();

            //configure 2nd dropdown in first block
            prod.vanityTopThicknessNotDisabled.waitForExist();
            prod.configureVanityTopThickness(1);

            //configure 3rd dropdown in first block
            prod.vanityTopFaucetCentersNotDisabled.waitForExist();
            prod.configureVanityTopFaucetCentersSelect(1);

            //configure second product in group
            prod.sinkColorText.click();
            prod.sinkColorList.waitForVisible();
            prod.sinkColorFirstOpt.click();

            //confgiure third product in group
            prod.productFinishText.click();
            prod.productFinishList.waitForVisible();
            prod.productFinishFirstOpt.click();

            //add configurable product to cart
            prod.addToCart.click();

            //wait for cart modal to display, go to checkout
            prod.addToCartModal.waitForVisible();
            expect(prod.addToCartModal.isVisible()).to.be.true;
            expect(prod.addToCartModalTitle.getText()).to.equal("1 ITEM ADDED TO CART");
            expect(prod.addToCartModalProdName.getText()).to.equal(prodName);
        });
    });
});