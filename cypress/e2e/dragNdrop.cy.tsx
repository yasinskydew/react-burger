describe('Burger Constructor Drag and Drop', () => {
  it('should drag ingredient to constructor and increase count', () => {
    cy.visit('/');
    cy.get('[data-testid="ingredient-bun"]').first().as('ingredient');
    cy.get('[data-testid="burger-constructor-drop-bun"]').as('constructor');
    cy.get('@ingredient').trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get('@constructor').should('contain.text', 'булка'); 
    cy.get('@ingredient').should('contain.text', '2'); 
  });
});
