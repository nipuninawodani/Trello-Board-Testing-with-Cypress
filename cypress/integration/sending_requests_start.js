/// <reference types="cypress" />

it('Sending requests', () => {

  cy
    .visit('/')

  cy
    .request({
      method : 'POST',
      url : 'api/boards',
      body : {
        name : 'Board created by .request() command' 
      }
    })

});