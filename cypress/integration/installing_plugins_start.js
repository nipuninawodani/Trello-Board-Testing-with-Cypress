/// <reference types="cypress" />

it('Installing plugins', () => {

  cy
    .visit('/');


  cy
    .get('[data-cy=board-item]')
    .realHover()
    .should('have.css', 'background-color', 'rgb(5, 90, 140)')
});