/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/12982969707')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy=task]')
    .should('have.length',1)

});