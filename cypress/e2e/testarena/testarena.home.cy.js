/// <reference types="cypress" />

describe('TestArena home page tests', () => {
    beforeEach(() => {
        cy.visit('http://demo.testarena.pl/zaloguj')
        cy.get('#email').type('administrator@testarena.pl')
        cy.get('#password').type('sumXQQ72$L')    
        cy.get('#login').click()
        cy.get('#header_logo').should('be.visible')
    })

    it('should open add projects page', () => {
        cy.get('.icon_tools').click()
        cy.get('.button_link').contains('Dodaj projekt').click()
        
        cy.url().should('contain', '/add_project')
    })


})
