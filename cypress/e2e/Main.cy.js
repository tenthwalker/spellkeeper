describe('Main component', () => {
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
    });
  });

  it('returns from the saved view to main', () => {
    cy.visit('http://localhost:3000/known');
    cy.get('.nav').should('contain', "All Spells");
    cy.get('.nav').click();
    cy.get('h1').should('contain', 'spellkeeper');
    cy.get('.nav-button').should('be.visible');
    cy.get('.nav').should('contain', 'Your Spellbook');
    cy.get('.main-component').should('be.visible');
    cy.get('.spell-view').should('be.visible');
    cy.get('.spell-list')
      .children()
      .first()
      .within(() => {
        cy.contains('h2', 'Acid Arrow');
        cy.contains('p', '1 action');
        cy.contains('p', '90 feet');
        cy.contains('p', 'Instantaneous');
        cy.contains('p', 'A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.');
        cy.contains('button', 'Learn');
      });

    cy.get('.spell-list')
      .children()
      .last()
      .within(() => {
        cy.contains('h2', 'Sanctuary');
        cy.contains('p', '1 bonus action');
        cy.contains('p', '30 feet');
        cy.contains('p', 'You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn\'t protect the warded creature from area effects, such as the explosion of a fireball.', 'If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.');
        cy.contains('button', 'Learn');
      });
  });
});