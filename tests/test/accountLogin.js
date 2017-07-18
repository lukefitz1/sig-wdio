describe("Open account login page", function () {
    this.timeout(30000);

    describe("Customer account login test - ", function() {
        it("should login to customer account successfully by submitting the form", function() {
            browser.url("/customer/account/login");

            // wait for login form is visible
            account.loginForm.waitForVisible();

            // assert that the login form is displayed on page load
            expect(account.loginForm.isVisible()).to.be.true;
            expect(account.loginBtn.isVisible()).to.be.true;

            // login
            account.login('luke.fitzgerald@blueacorn.com', 'pass4luke');

            // assert that the welcome message is displayed
            expect(account.dashboardWelcomeMessage.isVisible()).to.be.true;
        });

        it("logout", function() {
            browser.url("/customer/account/logout");
        });
    });
    
    describe("Customer account login test - ", function() {
        it("should login to customer account successfully via hitting 'Enter' key", function() {
            browser.url("/customer/account/login");

            // wait for login form is visible
            account.loginForm.waitForVisible();

            // assert that the login form is displayed on page load
            expect(account.loginForm.isVisible()).to.be.true;
            expect(account.loginBtn.isVisible()).to.be.true;

            // login
            account.loginWithEnter('luke.fitzgerald@blueacorn.com', 'pass4luke');

            // assert that the welcome message is displayed
            expect(account.dashboardWelcomeMessage.isVisible()).to.be.true;
        });

        it("logout", function() {
            browser.url("/customer/account/logout");
        });
    });
});