/// <reference types="cypress" />

beforeEach(() => {

  cy
  .visit('/')

});

it('Changing the DOM', () => {

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')
    
    cy
    .get('[data-cy=star]')
    .should('be.visible')

    

})