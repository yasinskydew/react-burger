import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ingredientsReducer from "../../src/services/reducers/ingredients";
import IngredientModal from "../../src/components/burgerIngredients/ingridientModal/ingredientModal";
import { IngredientType } from "../../src/services/types";
import "../support/component";

const mockIngredient = {
  _id: "test123",
  name: "Test Ingredient",
  calories: 100,
  proteins: 10,
  fat: 5,
  carbohydrates: 20,
  type: IngredientType.main,
  price: 50,
  image: "https://code.s3.yandex.net/react/code/meat-03.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
  __v: 0,
};

const preloadedState = {
  ingredients: {
    items: [mockIngredient],
    loading: false,
    error: null,
    isIngredientModalOpen: true,
  },
};

const store = configureStore({
  reducer: { ingredients: ingredientsReducer },
  preloadedState,
});

describe("IngredientModal", () => {
  it("displays ingredient data", () => {
    cy.mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/ingredients/test123"]}>
          <Routes>
          <Route path='/ingredients/:id' element={
              <IngredientModal />
            } />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    // cy.contains(mockIngredient.name).should("be.visible");
    cy.get('[data-testid="ingredient-name"]').should('be.visible').and('contain', mockIngredient.name);
    cy.get('[data-testid="ingredient-img"]').should("have.attr", "src", mockIngredient.image_large);
    cy.contains(/calories/i)
      .parent()
      .within(() => {
        cy.contains(mockIngredient.calories.toString()).should('exist');
      });
    cy.contains(/proteins/i)
      .parent()
      .within(() => {
        cy.contains(mockIngredient.proteins.toString()).should('exist');
      });
    cy.contains(/fat/i)
      .parent()
      .within(() => {
        cy.contains(mockIngredient.fat.toString()).should('exist');
      });
    cy.contains(/carbohydrates/i)
      .parent()
      .within(() => {
        cy.contains(mockIngredient.carbohydrates.toString()).should('exist');
      });
  });
}); 