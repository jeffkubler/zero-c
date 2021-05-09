// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import { getGreeting } from './app.po';
import { getForm, getPasswordInput, getUsernameInput } from './login.po';
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      login(email: string, password: string): Cypress.Chainable<JQuery<HTMLElement>> | void;
    }
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.intercept('POST', '/api/auth/login').as('postLogin');
  getUsernameInput().type(email).should('have.value', email);
  getPasswordInput().type(password).should('have.value', password);
  //getForm().submit( { timeout: 30000 }).should('not.exist');
  getForm().submit().wait('@postLogin');
  getGreeting().should('be.visible').and('contain.text', 'home works');
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
