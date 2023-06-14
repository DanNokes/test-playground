describe('LMN to cart', () => {
  it('Creates an LMN book and adds to cart', () => {
    cy.visit('https://v2-staging.wonderbly.io/personalized-products/lost-my-name-v2-book')

    //click accept on cookie consent
    cy.get('.cky-btn-accept').click()
    cy.get('.Button.ProductHeroII__button').click()
    cy.get('.FieldTemplate.FieldTemplate--text').type('Gareth')
    cy.get('input[value="boy"]').click()
    cy.get('.ImageRadioField--3-columns label[for*="type-v"]').click()
    cy.get('.FieldTemplate--submit .Button__text').click()

    // Verify that we have been redirected to the preview page
    cy.url().should('include', '/personalized-products/lost-my-name-v2-book/preview')
    cy.get('[data-hook="canvas-drawer-cover_style-2-label"]').click()
    cy.get('label[for="cover-i"]').click()
    cy.get('[data-hook="canvas-drawer-inscription-3-label"]').click()
    cy.get('.inscription-cta-container .Button').click()
    cy.get('.canvas-drawers-button .Button').click()

    cy.url().should('include', '/personalized-products/lost-my-name-v2-book/formats')
    cy.get('.GenericFormatSelector__actions .Button').click()

    cy.url().should('include', '/personalized-products/lost-my-name-v2-book/options')
    cy.get('.addons-next').click()
    cy.get('.addons-next').click()

    cy.url().should('include', '/cart')
    //cy.contains('.line-item-ii-title').should('have.text', 'Lost My Name')
  })
})
