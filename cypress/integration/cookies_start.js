/// <reference types="cypress" />

describe('Cookies', () => {

  beforeEach(() => {

    cy
      .visit('/')

  })

  it.only('test #1', () => {

    cy
      .get('[data-cy="login-menu"]')
      .click();

    cy
      .get('[data-cy="login-email"]')
      .type('nipuni@example.com');

    cy
      .get('[data-cy="login-password"]')
      .type('nipu.1234#');

    cy
      .get('[data-cy="login"]')
      .click();

    });

  it('test #2', () => {

  });

});