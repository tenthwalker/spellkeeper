describe('Error handling', () => {
  it('handles server errors on page load', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co' + '/api/spells', {
      statusCode: 500,
      fixture: 'spells',
    }).as('fetchSpellNames');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/acid-arrow', {
    statusCode: 500,
    fixture: 'acid-arrow',
    }).as('fetchAcidArrow');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/heroism', {
      statusCode: 500,
      fixture: 'heroism',
    }).as('fetchHeroism');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/sanctuary', {
      statusCode: 500,
      fixture: 'sanctuary',
    }).as('fetchSanctuary');
    cy.visit('http://localhost:3000/');
    cy.get('.error').should('contain', 'There was an error with the fetch');
  });
})