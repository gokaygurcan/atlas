describe('the home page', () => {
  describe('can navigate to the map w/ layer selection opened', () => {
    it('close layer selection, then close the map and then it returns to the homepage', () => {
      cy.visit('http://localhost:8000');

      cy.get('.c-homepage').should('exist').and('be.visible');
      cy.get('.qa-layer-selection').should('not.exist');
      cy.get('.qa-map').should('not.exist');

      // Go to the map
      cy.get('.qa-map-link').click();

      cy.get('.c-homepage').should('not.be.visible');
      cy.get('.qa-layer-selection').should('exist').and('be.visible');
      cy.get('.qa-map-container').should('exist').and('be.visible');

      // Close layer selection
      cy.get('.qa-layer-selection-close').click();

      cy.get('.c-homepage').should('not.be.visible');
      cy.get('.qa-layer-selection').should('not.exist');
      cy.get('.qa-map-container').should('exist').and('be.visible');

      // Close the fullscreen map and return to the homepage
      cy.get('.c-toggle-fullscreen').click();

      cy.get('.c-homepage').should('exist').and('be.visible');
      cy.get('.qa-layer-selection').should('not.exist');
      cy.get('.qa-map').should('not.exist');
    });
  });
});
