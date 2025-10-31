describe("Nightwatch sample test", function () {
  it("opens Google and verifies the title", function (browser) {
    browser
      .url("https://www.google.com")
      .waitForElementVisible("body")
      .assert.titleContains("Google")
      .pause(5000)
      .end();
  });
});
