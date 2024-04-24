/* eslint-disable no-undef */
/**
 *   - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('https://twix-ajengs-projects-00ea2727.vercel.app/login');
  });

  it('should display login page correctly', () => {
    cy.visit('https://twix-ajengs-projects-00ea2727.vercel.app/login');

    cy.get('form').within(() => {
      cy.get('input[placeholder="Email"]').should('be.visible');
      cy.get('input[placeholder="Password"]').should('be.visible');
      cy.get('button').contains(/^Login$/).should('be.visible');
    });
  });

  it('should display alert when email is empty', () => {
    cy.get('form').within(() => {
      cy.get('button').contains(/^Login$/).click();
    });

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('form').within(() => {
      cy.get('input[placeholder="Email"]').type('somebody@gmail.com');
      cy.get('button').contains(/^Login$/).click();
    });

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when username and password are wrong', () => {
    cy.get('form').within(() => {
      cy.get('input[placeholder="Email"]').type('somebody@gmail.com');
      cy.get('input[placeholder="Password"]').type('wrong_password');
      cy.get('button').contains(/^Login$/).click();
    });

    cy.on('window:alert', (str) => {
      expect(str).to.equal('User ID or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    cy.get('form').within(() => {
      cy.get('input[placeholder="Email"]').type('hhh@gmail.com');
      cy.get('input[placeholder="Password"]').type('hhhhhh');
      cy.get('button').contains(/^Login$/).click(); 
    });

    cy.get('h1').contains(/^TwiX$/).should('be.visible');
    cy.get('button').contains('Logout').should('be.visible');
  });
});