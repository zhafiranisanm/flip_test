/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://flip.id/');
    })

    it('displays button and text', () => {
        cy.get('#section1 > div.company-logo.container > div.navbar-header.pull-right').should('have.attr', ul)
        .get('.todo-list li').last().should('have.text', 'Walk the dog')
      })
})