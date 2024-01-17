describe('Error handling', () => {
  it('handles server errors on page load (500)', () => {
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

  it('handles server errors on page load (400)', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co' + '/api/spells', {
      statusCode: 400,
      fixture: 'spells',
    }).as('fetchSpellNames');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/acid-arrow', {
    statusCode: 400,
    fixture: 'acid-arrow',
    }).as('fetchAcidArrow');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/heroism', {
      statusCode: 400,
      fixture: 'heroism',
    }).as('fetchHeroism');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/sanctuary', {
      statusCode: 400,
      fixture: 'sanctuary',
    }).as('fetchSanctuary');
    cy.visit('http://localhost:3000/');
    cy.get('.error').should('contain', 'There was an error with the fetch');
  });

  it('handles bad routes', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co' + '/api/spells', {
      statusCode: 200,
      fixture: 'spells',
    }).as('fetchSpellNames');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/acid-arrow', {
    statusCode: 200,
    fixture: 'acid-arrow',
    }).as('fetchAcidArrow');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/heroism', {
      statusCode: 200,
      fixture: 'heroism',
    }).as('fetchHeroism');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/sanctuary', {
      statusCode: 200,
      fixture: 'sanctuary',
    }).as('fetchSanctuary');
    cy.visit('http://localhost:3000/undefined');
    cy.get('h1').should('contain', 'spellkeeper');
    cy.get('.main-component').should('be.visible');
    cy.get('h2').should('contain', 'Oops! You seem to be lost.');
    cy.get('p').should('contain', 'Return to the path of knowledge:');
    cy.get('.nav-button').should('have.length', 2);
    cy.get('a').first().should('contain', 'All Spells');
    cy.get('a').last().should('contain', 'Your Spellbook');
  });
});