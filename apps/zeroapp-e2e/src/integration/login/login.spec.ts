
describe('/login', () => {
  beforeEach(() => {
    cy.visit('/login');
  })
  
  it ('focuses the username input', () => {
    cy.get('#username_input').should('be.focused');
    cy.debug();
  })

  it ('requires username', () => {
    cy.get('#username_input').focus().blur();
    cy.get('mat-error[data-username]').should('exist').and('have.text', 'User name is required');
    cy.get('form').contains('Log in').should('be.disabled');
  });

  it ('requires password', () => {
    cy.get('#password_input').focus().blur();
    cy.get('mat-error[data-password').should('exist').and('have.text', 'Password is required');
    cy.get('form').contains('Log in').should('be.disabled');
  })

  // it ('requires password'), () => {
    
  // }

  // it ('requires valid username and password'), () => {
    
  // }
})