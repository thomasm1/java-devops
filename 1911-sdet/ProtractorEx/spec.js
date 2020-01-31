/*

The syntax for a Jasmine Test is:

describe("Description of the suite", function() {
    it("What the test tests for", function() {
        add some code;
        expect(some value).toBe(expectedValue)
    });
});


*/

//This next line of code is for testing non-Angular pages
browser.ignoreSynchronization = true;

describe("Google Shopping Suite", function() {

    it("Should go to Google Shopping, display the title", function() {

        browser.get("https://shopping.google.com/");

        expect(browser.getTitle()).toBe("Google Shopping | Find the best prices and places to buy.");

    });

    it("Should search for Nintendo Switch", function() {

        element(by.name("query")).sendKeys("Nintendo Switch");

        magnifyingGlass = element(by.className("searchSubmitButton mat-button mat-icon-button mat-button-base ng-star-inserted"));
        magnifyingGlass.click();

        browser.sleep(2000);

        expect(browser.getTitle()).toBe("Nintendo Switch - Google Shopping")

    })

});