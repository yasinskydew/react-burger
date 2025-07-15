// Утилита для работы с CSS Modules в Cypress тестах

/**
 * Получает элемент по data-testid атрибуту
 * @param testId - значение data-testid атрибута
 * @returns Cypress элемент
 */
export const getByTestId = (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
};

/**
 * Проверяет наличие элемента по data-testid
 * @param testId - значение data-testid атрибута
 */
export const shouldExist = (testId: string) => {
  return getByTestId(testId).should('exist');
};

/**
 * Проверяет видимость элемента по data-testid
 * @param testId - значение data-testid атрибута
 */
export const shouldBeVisible = (testId: string) => {
  return getByTestId(testId).should('be.visible');
};

/**
 * Проверяет, что элемент содержит текст
 * @param testId - значение data-testid атрибута
 * @param text - ожидаемый текст
 */
export const shouldContainText = (testId: string, text: string) => {
  return getByTestId(testId).should('contain', text);
};

/**
 * Проверяет, что элемент имеет определенный CSS класс
 * @param testId - значение data-testid атрибута
 * @param className - ожидаемый CSS класс
 */
export const shouldHaveClass = (testId: string, className: string) => {
  return getByTestId(testId).should('have.class', className);
};

/**
 * Кликает по элементу по data-testid
 * @param testId - значение data-testid атрибута
 */
export const clickByTestId = (testId: string) => {
  return getByTestId(testId).click();
};

/**
 * Вводит текст в элемент по data-testid
 * @param testId - значение data-testid атрибута
 * @param text - текст для ввода
 */
export const typeByTestId = (testId: string, text: string) => {
  return getByTestId(testId).type(text);
};

/**
 * Проверяет значение элемента по data-testid
 * @param testId - значение data-testid атрибута
 * @param value - ожидаемое значение
 */
export const shouldHaveValue = (testId: string, value: string) => {
  return getByTestId(testId).should('have.value', value);
};

/**
 * Проверяет, что элемент имеет определенный атрибут
 * @param testId - значение data-testid атрибута
 * @param attr - имя атрибута
 * @param value - ожидаемое значение атрибута
 */
export const shouldHaveAttr = (testId: string, attr: string, value?: string) => {
  if (value) {
    return getByTestId(testId).should('have.attr', attr, value);
  }
  return getByTestId(testId).should('have.attr', attr);
};

/**
 * Фокусируется на элементе по data-testid
 * @param testId - значение data-testid атрибута
 */
export const focusByTestId = (testId: string) => {
  return getByTestId(testId).focus();
};

/**
 * Проверяет, что элемент находится в фокусе
 * @param testId - значение data-testid атрибута
 */
export const shouldBeFocused = (testId: string) => {
  return getByTestId(testId).should('be.focused');
}; 