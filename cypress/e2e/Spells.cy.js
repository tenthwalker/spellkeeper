describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('can save a new spell', () => {
    cy.get('.learn').first().click();
  });
  it('can delete a saved spell', () => {
    cy.get('.delete').first().click();
  });
})