import { getForm, getPassword, getPasswordError, getUserError, getUsername } from "../../support/login.po";


describe('/login', () => {
  beforeEach(() => {
    cy.visit('/login');
  })
  
  it ('focuses the username input', () => {
    getUsername().should('be.focused');
  })

  it ('requires username', () => {
    getUsername().focus().blur();
    getUserError().should('exist').and('have.text', 'User name is required');
    getForm().contains('Log in').should('be.disabled');
  });

  it ('requires password', () => {
    getPassword().focus().blur();
    getPasswordError().should('exist').and('have.text', 'Password is required');
    getForm().contains('Log in').should('be.disabled');
  })

  it ('should authenticate', () => {
    cy.fixture('user').then((userFixture) => {
    cy.login(userFixture.username, userFixture.password);
    })
  })

  // it ('requires valid username and password'), () => {
    
  // }
})