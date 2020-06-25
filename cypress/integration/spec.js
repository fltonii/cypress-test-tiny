describe('test', () => {
  before(() => {
    cy.server()
  })
  it("Sample error when XHR id is not available", () => {
    cy.route("GET", "/api/myService").as("myService");
    cy.visit("https://cy-test-page.uc.r.appspot.com");
    cy.wait("@myService");
    cy.get("#response").should("equal", `{"working":true}`);
  });
})