import React from "react";
import { TestWrapper } from '../support/componentTestUtils';
import Header from '../../src/components/header/header';

describe('Header Component', () => {
  it('renders without errors', () => {
    cy.mount(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    cy.get('[data-testid="header"]').should('exist');
  });

  it('contains a logo', () => {
    cy.mount(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    cy.get('[data-testid="header-logo"]').should('exist');
  });

  it('contains navigation buttons', () => {
    cy.mount(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    cy.get('[data-testid="header-nav-button"]').should('have.length.at.least', 3);
  });

  it('displays correct links', () => {
    cy.mount(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    cy.get('a').should('have.length.at.least', 3);
  });

  it('has correct DOM structure', () => {
    cy.mount(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    // Check the component structure
    cy.get('[data-testid="header"]').should('exist');
    cy.get('[data-testid="header-container"]').should('exist');
    cy.get('[data-testid="header-buttons"]').should('exist');
    cy.get('[data-testid="header-logo"]').should('exist');
    cy.get('[data-testid="header-profile"]').should('exist');
  });
});