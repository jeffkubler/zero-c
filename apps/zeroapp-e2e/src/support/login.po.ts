export const getUsername = () => cy.get('#username_input');
export const getPassword = () => cy.get('#password_input');
export const getForm = () => cy.get('form');
export const getUserError = () => cy.get('mat-error[data-username]');
export const getPasswordError = () => cy.get('mat-error[data-password]');