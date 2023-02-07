/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/12982969707')
})

it('Chaining commands', () => {

  cy
    .contains('milk')

  cy
    .get('[data-cy=list]')
    .eq(0)
    .contains('milk')

});