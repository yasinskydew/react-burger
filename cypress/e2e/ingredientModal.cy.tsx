describe('Ingredient Modal', () => {
  const ingredientBun = '[data-testid="ingredient-bun"]'
  beforeEach(() => {
    cy.visit('/');
  })

  it('Contain ingredients', () => {
    cy.get(ingredientBun).should('have.length.at.least', 1);
  });

  it('Contain ingredients', () => {
    cy.get(ingredientBun).first().click()
    
  });

  it('Opens ingredient modal and checks content', () => {
    cy.get(ingredientBun).first().click();
    cy.get('h2').contains('Детали ингредиента').should('be.visible');
    cy.get('img').should('exist');
    cy.contains('Калории').should('be.visible');
    cy.contains('Белки').should('be.visible');
    cy.contains('Жиры').should('be.visible');
    cy.contains('Углеводы').should('be.visible');
  });

  it('close modal for close btn click', () => {
    cy.get(ingredientBun).first().click();
    cy.get('h2').contains('Детали ингредиента').should('be.visible');
    cy.get('img').should('exist');
    cy.contains('Калории').should('be.visible');
    cy.contains('Белки').should('be.visible');
    cy.contains('Жиры').should('be.visible');
    cy.contains('Углеводы').should('be.visible');
    cy.get('[data-testid="modal-close"]').click();
    cy.get('[data-testid="modal"]').should('not.exist');
  });
})