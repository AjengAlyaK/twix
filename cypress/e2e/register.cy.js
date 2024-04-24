/* eslint-disable no-undef */
/**
 *   - Register spec
 *   - should display Register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email already existed
 *   - should display homepage when username and password are correct
 */

describe('Register spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/register');
    });

    it('should display register page correctly', () => {
        cy.visit('http://localhost:5173/register');
        
        cy.get('form').within(() => {
            cy.get('input[placeholder="Name"]').should('be.visible');
            cy.get('input[placeholder="Email"]').should('be.visible');
            cy.get('input[placeholder="Password"]').should('be.visible');
            cy.get('button').contains(/^Register$/).should('be.visible');
        });
    });

    it('should display alert when name is empty', () => {
        cy.get('form').within(() => {
            cy.get('button').contains(/^Register$/).click();
        });

        cy.on('window:alert', (str) => {
            expect(str).to.equal('"name" is not allowed to be empty');
        });
    });

    it('should display alert when email is empty', () => {
        cy.get('form').within(() => {
            cy.get('input[placeholder="Name"]').type('hhh');
            cy.get('button').contains(/^Register$/).click();
        });

        cy.on('window:alert', (str) => {
            expect(str).to.equal('"email" is not allowed to be empty');
        });
    });

    it('should display alert when password is empty', () => {
        cy.get('form').within(() => {
            cy.get('input[placeholder="Name"]').type('somebody');
            cy.get('input[placeholder="Email"]').type('somebody@gmail.com');
            cy.get('button').contains(/^Register$/).click();
        });

        cy.on('window:alert', (str) => {
            expect(str).to.equal('"password" is not allowed to be empty');
        });
    });

    it('should display alert when email is existed', () => {
        cy.get('form').within(() => {
            cy.get('input[placeholder="Name"]').type('somebody');
            cy.get('input[placeholder="Email"]').type('hhh@gmail.com');
            cy.get('input[placeholder="Password"]').type('wrong_password');
            cy.get('button').contains(/^Register$/).click();
        });

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Email is existed');
        });
    });

    it('should display homepage when register is success', () => {
        cy.get('form').within(() => {
            cy.get('input[placeholder="Name"]').type('mye2etest');
            cy.get('input[placeholder="Email"]').type('mye2etest@gmail.com');
            cy.get('input[placeholder="Password"]').type('mye2etest');
            cy.get('button').contains(/^Register$/).click();
        });

        cy.get('h1').contains(/^TwiX$/).should('be.visible');
        cy.get('button').contains('Login').should('be.visible');
    });
});