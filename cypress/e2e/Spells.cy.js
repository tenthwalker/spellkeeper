describe('Spells component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
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

    cy.wait(['@fetchSpellNames', '@fetchAcidArrow', '@fetchHeroism', '@fetchSanctuary']).spread((fetchSpellNames, fetchAcidArrow, fetchHeroism, fetchSanctuary) => {
      expect(fetchSpellNames.response.statusCode).to.equal(200);
      expect(fetchAcidArrow.response.statusCode).to.equal(200);
      expect(fetchHeroism.response.statusCode).to.equal(200);
      expect(fetchSanctuary.response.statusCode).to.equal(200);
     })
  });

})