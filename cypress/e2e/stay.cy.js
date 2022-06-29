describe('Stay page', () => {
  it('Stay page is displayed correctly', () => {
    cy.visit('http://localhost:3000/stay');

    cy.get('header')
      .should('be.visible');

    cy.get('main')
      .should('be.visible');

    cy.get('h1')
      .should('be.visible')
      .should('have.length', 1);
  })
})
