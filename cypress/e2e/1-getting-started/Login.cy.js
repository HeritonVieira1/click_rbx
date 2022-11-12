/// <reference types="cypress" />



  it('Testando o Login', () => {
    cy.visit('URL')

    cy.get('#id_sc_field_usuario').type('usuario')
    cy.get('#id_sc_field_senha').type('senha')
    cy.get('#sub_form_b').click()
    cy.get('.closed > span').click()
    cy.get('.menu').click()
    cy.get('#item_1 > span').click()
    cy.get('#item_10 > span').click()
    //cy.get('#item_13').click()
    cy.get('[id="iframe_app_menu"').click()



  
  

  })
