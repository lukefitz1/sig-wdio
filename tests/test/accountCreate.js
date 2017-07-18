describe("Open account create page", function () {
    this.timeout(15000);

    it("should create B2C customer account successfully", function () {
        browser.url("/customer/account/create");

        //assert that the login form is displayed on page load
        expect(account.accountCreateForm.isVisible()).to.be.true;
        expect(account.submitBtn.isVisible()).to.be.true;

        //generate random string for email
        rand = base.generateRandomString();

        //submit create account form
        account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
        expect(account.successMessage.isVisible()).to.be.true;
    });
});