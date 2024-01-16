describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})