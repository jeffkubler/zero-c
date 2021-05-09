export const getUsernameInput = () => cy.get('#username_input');
export const getPasswordInput = () => cy.get('#password_input');
export const getSubmitButton = () => cy.get('button[type=submit]');
export const getForm = () => cy.get('form');
export const getUserError = () => cy.get('mat-error[data-username]');
export const getPasswordError = () => cy.get('mat-error[data-password]');