describe("Perform search", function () {    
    this.timeout(25000);

    beforeEach(function() {
        browser.url("/");
    });

    describe("Perform search that will return results", function() {
        it("should verify results are displayed on search page", function () {
            var searchTerm = "table";
            
            //enter search term
            header.search.setValue(searchTerm);
            
            //wait for autocomplete dropdown to display
            header.searchDropdown.waitForVisible();
            expect(header.searchDropdown.isVisible()).to.be.true;

            //submit search
            header.searchForm.submitForm();

            //verify results page
            search.searchTitle.waitForVisible();
            expect(search.searchTitle.getText()).to.equal("SEARCH RESULTS FOR '" + searchTerm.toUpperCase() + "'"); 
            expect(search.searchResultsGrid.isVisible()).to.be.true;
        });

        it("should verify no results are displayed on search page", function () {
            var searchTerm = "asdfddf";

            //enter search term
            header.search.setValue(searchTerm);

            //submit search
            header.searchForm.submitForm();

            //verify no results page
            search.noResultsText.waitForVisible();
            expect(search.searchTitle.getText()).to.equal("SEARCH RESULTS FOR '" + searchTerm.toUpperCase() + "'"); 
            expect(search.noResultsText.getText()).to.include("Your search returns no results.");         
        });

        it("should verify results are displayed on search page", function () {
            var searchTerm = "table";
            
            //enter search term
            header.search.setValue(searchTerm);
            
            //wait for autocomplete dropdown to display
            header.searchDropdown.waitForVisible();
            expect(header.searchDropdown.isVisible()).to.be.true;

            //submit search by hitting 'Enter' key on keyboard
            browser.keys("Enter");

            //verify results page
            search.searchTitle.waitForVisible();
            expect(search.searchTitle.getText()).to.equal("SEARCH RESULTS FOR '" + searchTerm.toUpperCase() + "'"); 
            expect(search.searchResultsGrid.isVisible()).to.be.true;
        });
    });
});