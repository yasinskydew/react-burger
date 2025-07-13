describe('Order Modal - Auth Redirect', () => {
  beforeEach(() => {
    cy.intercept('POST', '/api/orders', {
      statusCode: 200,
      body: {
        success: true,
        name: 'Тестовый заказ',
        order: { number: 123456 }
      }
    }).as('createOrder');

    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: {
        success: true,
        user: { name: 'Test User', email: 'test@example.com' },
        accessToken: 'Bearer mock-access-token',
        refreshToken: 'mock-refresh-token'
      }
    }).as('login');

    cy.intercept('GET', '/api/auth/user', {
      statusCode: 200,
      body: {
        success: true,
        user: { name: 'Test User', email: 'test@example.com' }
      }
    }).as('getUser');

    cy.visit('/');
  });

  it('opens order modal on "Оформить заказ" click', () => {
    cy.get('[data-testid="ingredient-bun"]').first().trigger('dragstart');
    cy.get('[data-testid="burger-constructor-drop-bun"]').trigger('drop');
    cy.get('[data-testid="ingredient-main"]').first().trigger('dragstart');
    cy.get('[data-testid="burger-constructor-drop-main"]').trigger('drop');

    cy.contains('button', 'Оформить заказ').click();

    cy.url().should('include', '/login');

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.wait('@login');
    cy.wait('@getUser');
    cy.contains('button', 'Оформить заказ').click();
    cy.get('[data-testid="modal"]').should('be.visible').should('contain.text', '123456')
  });
});
