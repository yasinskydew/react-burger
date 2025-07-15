import React from 'react';
import BurgerPrice from '../../src/components/burgerPrice/burgerPrice';

describe('BurgerPrice Component', () => {
  const burgerPrice = '[data-testid="burger-price"]';
  const burgerPriceText = '[data-testid="burger-price-text"]';

  it('renders without errors', () => {
    cy.mount(<BurgerPrice />);
    cy.get(burgerPrice).should('exist');
  });

  it('displays default price (0)', () => {
    cy.mount(<BurgerPrice />);
    cy.get(burgerPriceText).should('contain', '0');
  });

  it('displays the passed price', () => {
    cy.mount(<BurgerPrice price={150} />);
    cy.get(burgerPriceText).should('contain', '150');
  });

  it('applies correct styles for default size', () => {
    cy.mount(<BurgerPrice />);
    cy.get(burgerPriceText).should('have.class', 'text_type_digits-default');
  });

  it('applies correct styles for large size', () => {
    cy.mount(<BurgerPrice size="large" price={200} />);
    cy.get(burgerPriceText).should('contain', '200');
  });

  it('has correct DOM structure', () => {
    cy.mount(<BurgerPrice />);
    cy.get(burgerPrice).should('exist');
    cy.get(burgerPriceText).should('exist');
  });

  it('handles negative values correctly', () => {
    cy.mount(<BurgerPrice price={-50} />);
    cy.get(burgerPriceText).should('contain', '-50');
  });

  it('handles fractional values correctly', () => {
    cy.mount(<BurgerPrice price={99.99} />);
    cy.get(burgerPriceText).should('contain', '99.99');
  });

  it('displays price as a number', () => {
    cy.mount(<BurgerPrice price={123} />);
    cy.get(burgerPriceText).invoke('text').then((text) => {
      expect(parseFloat(text)).to.be.a('number');
      expect(parseFloat(text)).to.equal(123);
    });
  });

  it('has correct CSS classes for different sizes', () => {
    // Test for default size
    cy.mount(<BurgerPrice />);
    cy.get(burgerPriceText).should('have.class', 'text_type_digits-default');
    
    // Test for large size
    cy.mount(<BurgerPrice size="large" />);
    cy.get(burgerPriceText).should('have.class', 'text_type_digits-default');
  });
}); 