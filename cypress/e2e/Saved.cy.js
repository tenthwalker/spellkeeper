describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.intercept('GET', 'https://www.dnd5eapi.co' + '/api/spells', {
      statusCode: 200,
      fixture: 'spells',
    }).as('fetchSpellNames');
    cy.wait('@fetchSpellNames').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/acid-arrow', {
      statusCode: 200,
      fixture: 'acid-arrow',
    }).as('fetchAcidArrow');
    cy.wait('@fetchAcidArrow').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/heroism', {
      statusCode: 200,
      fixture: 'heroism',
    }).as('fetchHeroism');
    cy.wait('@fetchHeroism').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/sanctuary', {
      statusCode: 200,
      fixture: 'sanctuary',
    }).as('fetchSanctuary');
    cy.wait('@fetchSanctuary').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.get('.spell-card').first();
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})