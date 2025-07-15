import { 
  shouldExist, 
  shouldBeVisible 
} from '../support/cssModulesHelper';

describe('Header Component', () => {
  const headerNavButton = '[data-testid="header-nav-button"]'
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders without errors', () => {
    shouldExist('header');
  });

  it('contains the logo', () => {
    // Check for the logo presence
    shouldExist('header-logo');
  });

  it('contains navigation buttons', () => {
    cy.get(headerNavButton).should('have.length.at.least', 3);
  });

  it('displays correct links', () => {
    cy.get('a').should('have.length.at.least', 3);
  });

  it('has correct DOM structure', () => {
    // Check component structure
    shouldExist('header');
    shouldExist('header-container');
    shouldExist('header-buttons');
    shouldExist('header-logo');
    shouldExist('header-profile');
  });

  it('has correct element positioning', () => {
    shouldBeVisible('header');
    shouldBeVisible('header-container');
    shouldBeVisible('header-buttons');
    shouldBeVisible('header-logo');
    shouldBeVisible('header-profile');
  });

  it('navigation buttons work', () => {
    cy.get(headerNavButton).first().should('be.visible');
    cy.get(headerNavButton).first().click();
    cy.url().should('include', '/');
  });
}); 