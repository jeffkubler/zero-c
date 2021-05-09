import { getSnackbar } from "../../support/app.po";
import { getForm, getPasswordInput, getPasswordError, getUserError, getUsernameInput } from "../../support/login.po";


describe('/login', () => {
  beforeEach(() => {
    cy.visit('/login');
  })
  
  it ('focuses the username input', () => {
    getUsernameInput().should('be.focused');
  })

  it ('requires username', () => {
    getUsernameInput().focus().blur();
    getUserError().should('be.visible').and('have.text', 'User name is required');
    getForm().contains('Log in').should('be.disabled');
  })

  it ('requires password', () => {
    getPasswordInput().focus().blur();
    getPasswordError().should('be.visible').and('have.text', 'Password is required');
    getForm().contains('Log in').should('be.disabled');
  })

  it ('should not authenticate', () => {
    const fakeUser = { username: 'not a user', pw: 'not a password'};
    cy.intercept('POST', 'api/auth/login').as('postLogin');
    getUsernameInput().type(fakeUser.username).should('have.value', fakeUser.username);
    getPasswordInput().type(fakeUser.pw).should('have.value', fakeUser.pw);
    getForm().submit().wait('@postLogin');
    getSnackbar().contains('Unable to authenticate').should('be.visible');
  })

  it ('should authenticate', () => {
    cy.fixture('user').then((userFixture) => {
    cy.login(userFixture.username, userFixture.password);
    })
  })

  // it ('requires valid username and password'), () => {
    
  // }
})